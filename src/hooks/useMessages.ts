import { useState, useEffect, useCallback } from "react";
import {
  getUserConversations,
  getConversationMessages,
  sendMessage as apiSendMessage,
} from "@/api/messages";
import { db } from "@/lib/firebase";
import { ref, onChildAdded, off } from "firebase/database";

interface Message {
  id: string;
  driverId: string;
  message: string;
  seen: boolean;
  timestamp: number;
}

interface Conversation {
  roomId: string;
  chatId: string;
  dispatcherId: string;
  lastMessage: string;
  timestamp: number;
}

export function useMessages(userId: string) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] =
    useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load conversations
  const loadConversations = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    try {
      const result = await getUserConversations(userId);
      setConversations(result);
    } catch (err: any) {
      console.error("Error loading conversations:", err);
      setError(err.message || "Failed to load conversations");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  // Load messages for a conversation
  const loadMessages = useCallback(async (conversationId: string) => {
    setLoading(true);
    setError(null);
    try {
      const msgs = await getConversationMessages(conversationId, 50);
      setMessages(msgs);
    } catch (err: any) {
      console.error("Error loading messages:", err);
      setError(err.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  }, []);

  // Real-time listener for new messages
  useEffect(() => {
    if (!currentConversation) return;

    const msgRef = ref(db, `messages/${currentConversation.roomId}`);

    const unsubscribe = onChildAdded(msgRef, (snapshot) => {
      const msgData = snapshot.val();
      const newMsg: Message = {
        id: snapshot.key || "",
        driverId: msgData.driverId,
        message: msgData.message,
        seen: msgData.seen,
        timestamp: msgData.timestamp,
      };

      setMessages((prev) => {
        const exists = prev.some((m) => m.id === newMsg.id);
        if (exists) return prev;
        return [...prev, newMsg].sort((a, b) => a.timestamp - b.timestamp);
      });
    });

    return () => {
      off(msgRef);
    };
  }, [currentConversation]);

  // Start or open a direct conversation
  const startDirectConversation = useCallback(
    async (driverId: string) => {
      const conversationId = `${userId}_${driverId}`;
      const existing = conversations.find((c) => c.roomId === conversationId);

      if (existing) {
        setCurrentConversation(existing);
        await loadMessages(existing.roomId);
      } else {
        // In your structure, conversations auto-create when sending first message
        const newConv: Conversation = {
          roomId: conversationId,
          chatId: conversationId,
          dispatcherId: userId,
          lastMessage: "",
          timestamp: Date.now(),
        };
        setCurrentConversation(newConv);
        setMessages([]);
      }
    },
    [userId, conversations, loadMessages]
  );

  // Send a message
  const sendMessage = useCallback(
    async (content: string) => {
      if (!currentConversation) return;

      try {
        await apiSendMessage({
          conversationId: currentConversation.roomId,
          message: content,
        });
      } catch (err: any) {
        console.error("Error sending message:", err);
        setError(err.message || "Failed to send message");
      }
    },
    [currentConversation]
  );

  // Select a conversation
  const selectConversation = useCallback(
    async (conversation: Conversation) => {
      setCurrentConversation(conversation);
      await loadMessages(conversation.roomId);
    },
    [loadMessages]
  );

  useEffect(() => {
    if (userId) {
      loadConversations();
    }
  }, [userId, loadConversations]);

  return {
    conversations,
    currentConversation,
    messages,
    loading,
    error,
    loadConversations,
    loadMessages,
    startDirectConversation,
    sendMessage,
    selectConversation,
  };
}
