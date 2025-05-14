import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

export interface Message {
  id: string;
  senderId: string;
  senderName?: string;
  senderAvatar?: string;
  recipientId?: string;
  conversationId?: string;
  content: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Conversation {
  id: string;
  name?: string;
  createdBy?: string;
  isGroup: boolean;
  participants: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  lastMessage?: {
    content: string;
    createdAt: string;
    senderId: string;
  };
  createdAt: string;
  updatedAt: string;
}

/**
 * Get all conversations for a user
 */
export const getUserConversations = async (userId: string) => {
  try {
    // First get all conversations the user is part of
    

    return { conversations: [] };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get direct messages between two users or create a new conversation
 */
export const getOrCreateDirectConversation = async (
  userId1: string,
  userId2: string,
) => {
  try {
    // Create a consistent ID for the conversation between these two users
    const userIds = [userId1, userId2].sort();
    const conversationId = `direct_${userIds[0]}_${userIds[1]}`;

    // Check if the conversation already exists
    const { data: existingConversation, error: fetchError } = {data: {}, error: null};

    // If it doesn't exist, create it
    if (fetchError && fetchError.code === "PGRST116") {
      const { data: newConversation, error: createError } = {data: {}, error: null};

      if (createError) throw createError;

      // Add both users as participants
      const { error: participantsError } = {error: null};

      if (participantsError) throw participantsError;

      return { conversation: { ...newConversation, participants: [] } };
    } else if (fetchError) {
      throw fetchError;
    }

    // Get participants
    const { data: participants, error: participantsError } = {data: [], error: null};

    if (participantsError) throw participantsError;

    const formattedParticipants = participants.map((p) => ({
      id: p.user_id,
      name: p.users?.full_name || "Unknown User",
      avatar: p.users?.avatar_url,
    }));

    return {
      conversation: {
        ...existingConversation,
        participants: formattedParticipants,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Create a new group conversation
 */
export const createGroupConversation = async (
  name: string,
  createdBy: string,
  participantIds: string[],
) => {
  try {
    const conversationId = `group_${Date.now()}`;

    const { data, error } = {
      data: {
        id: conversationId,
        name,
        created_by: createdBy,
        is_group: true,
      },
      error: null,
    }

    if (error) throw error;

    // Add participants
    const participants = participantIds.map((userId) => ({
      conversation_id: conversationId,
      user_id: userId,
    }));

    const { error: participantsError } = {error: null};

    if (participantsError) throw participantsError;

    return { conversation: data };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get messages for a conversation
 */
export const getConversationMessages = async (
  conversationId: string,
  limit = 50,
  before?: string,
) => {
  try {
    // let query = supabase
    //   .from("messages")
    //   .select(
    //     `
    //     *,
    //     sender:sender_id(id, full_name, avatar_url)
    //   `,
    //   )
    //   .eq("conversation_id", conversationId)
    //   .order("created_at", { ascending: false })
    //   .limit(limit);

    // if (before) {
    //   query = query.lt("created_at", before);
    // }

    // const { data, error } = await query;

    // if (error) throw error;
    let data = [];

    // Transform the data to match the frontend model
    const messages: Message[] = data.map((message) => ({
      id: message.id,
      senderId: message.sender_id,
      senderName: message.sender?.full_name,
      senderAvatar: message.sender?.avatar_url,
      recipientId: message.recipient_id,
      conversationId: message.conversation_id,
      content: message.content,
      read: message.read,
      createdAt: message.created_at,
      updatedAt: message.updated_at,
    }));

    return { messages };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Send a message
 */
export const sendMessage = async (
  senderId: string,
  content: string,
  conversationId: string,
  recipientId?: string,
) => {
  try {
    const data = {id: 1, senderId, content, conversationId, recipientId};

    return {
      message: {
        id: data.id,
        senderId: data.senderId,
        recipientId: data.recipientId,
        conversationId: data.conversationId,
        content: data.content,
        // read: data.read,
        // createdAt: data.created_at,
        // updatedAt: data.updated_at,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Mark messages as read
 */
export const markMessagesAsRead = async (
  conversationId: string,
  userId: string,
) => {
  try {
    

    return { success: true };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get unread message count for a user
 */
export const getUnreadMessageCount = async (userId: number) => {
  try {
    // Get all conversations the user is part of
    let count = 0;

    return { count: count || 0 };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};
