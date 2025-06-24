import { db, storage } from "@/lib/firebase";
import {
  ref,
  query,
  limitToLast,
  get,
  DataSnapshot,
  push,
  set,
  update,
} from "firebase/database";

export interface Message {
  id: string;
  driverId: string;
  message: string;
  seen: boolean;
  timestamp: number;
}

interface SendMessagePayload {
  conversationId: string; // format: "dispatcherId_driverId"
  message: string;
}

// export interface Conversation {
//   id: string;
//   name?: string;
//   createdBy?: string;
//   isGroup: boolean;
//   participants: {
//     id: string;
//     name: string;
//     avatar?: string;
//   }[];
//   lastMessage?: {
//     content: string;
//     createdAt: string;
//     senderId: string;
//   };
//   createdAt: string;
//   updatedAt: string;
// }

/**
 * Get all conversations for a user
 */
export const getUserConversations = async (userId: string) => {
  try {
    const chatsRef = ref(db, "chats");
    const snapshot = await get(chatsRef);

    if (!snapshot.exists()) return [];

    const allChats: Object[] = snapshot.val();
    const userChats = [];

    Object.entries(allChats).forEach(([roomId, chatData]) => {
      const dispatcherId = roomId.split("_")[0];
      if (dispatcherId === userId) {
        userChats.push({
          roomId,
          ...chatData,
        });
      }
    });

    return userChats.sort((a, b) => b.timestamp - a.timestamp);
  } catch (err) {
    console.error("Error fetching dispatcher chats:", err);
    return [];
  }
  // try {

  //   return {
  //     conversations: [
  //       {
  //         id: 1,
  //         name: "Kibrom",
  //         createdBy: "Kibrom",
  //         participants: [
  //           {
  //             id: 1,
  //             name: "Kibrom",
  //           },
  //         ],
  //         lastMessage: {
  //           content: "Hello",
  //           senderId: 1,
  //           createdAt: "2025-05-04",
  //         },
  //         // createdAt: "2025-05-04",
  //         // updatedAt: "2025-06-23",
  //       },
  //     ],
  //   };
  // } catch (error) {
  //   // return handleSupabaseError(error);
  //   console.error(error);
  // }
};

/**
 * Get direct messages between two users or create a new conversation
 */
// export const getOrCreateDirectConversation = async (
//   userId1: string,
//   userId2: string
// ) => {
//   try {
//     // Create a consistent ID for the conversation between these two users
//     const userIds = [userId1, userId2].sort();
//     const conversationId = `${userIds[0]}_${userIds[1]}`;

//     // Check if the conversation already exists
//     const { data: existingConversation, error: fetchError } = {
//       data: {},
//       error: null,
//     };

//     // If it doesn't exist, create it
//     if (fetchError && fetchError.code === "PGRST116") {
//       const { data: newConversation, error: createError } = {
//         data: {},
//         error: null,
//       };

//       if (createError) throw createError;

//       // Add both users as participants
//       const { error: participantsError } = { error: null };

//       if (participantsError) throw participantsError;

//       return { conversation: { ...newConversation, participants: [] } };
//     } else if (fetchError) {
//       throw fetchError;
//     }

//     // Get participants
//     const { data: participants, error: participantsError } = {
//       data: [],
//       error: null,
//     };

//     if (participantsError) throw participantsError;

//     const formattedParticipants = participants.map((p) => ({
//       id: p.user_id,
//       name: p.users?.full_name || "Unknown User",
//       avatar: p.users?.avatar_url,
//     }));

//     return {
//       conversation: {
//         ...existingConversation,
//         participants: formattedParticipants,
//       },
//     };
//   } catch (error) {
//     // return handleSupabaseError(error);
//     console.error(error);
//   }
// };

/**
 * Get messages for a conversation
 */
export const getConversationMessages = async (
  conversationId: string,
  limit: number = 50,
  before?: string
): Promise<Message[]> => {
  try {
    const messagesRef = ref(db, `messages/${conversationId}`);
    const messagesQuery = query(messagesRef, limitToLast(limit));
    const snapshot: DataSnapshot = await get(messagesQuery);

    if (!snapshot.exists()) return [];

    const rawData = snapshot.val();

    // Validate and type the data
    if (typeof rawData !== "object" || rawData === null) return [];

    const messagesArray: Message[] = Object.entries(rawData).flatMap(
      ([id, data]) => {
        if (
          typeof data === "object" &&
          data !== null &&
          typeof (data as any).driverId === "string" &&
          typeof (data as any).message === "string" &&
          typeof (data as any).seen === "boolean" &&
          typeof (data as any).timestamp === "number"
        ) {
          return [
            {
              id,
              driverId: (data as any).driverId,
              message: (data as any).message,
              seen: (data as any).seen,
              timestamp: (data as any).timestamp,
            },
          ];
        } else {
          return [];
        }
      }
    );

    // Sort by timestamp ascending
    return messagesArray.sort((a, b) => a.timestamp - b.timestamp);
  } catch (err) {
    console.error("Error fetching messages:", err);
    return [];
  }
  // try {
  //   // let query = supabase
  //   //   .from("messages")
  //   //   .select(
  //   //     `
  //   //     *,
  //   //     sender:sender_id(id, full_name, avatar_url)
  //   //   `,
  //   //   )
  //   //   .eq("conversation_id", conversationId)
  //   //   .order("created_at", { ascending: false })
  //   //   .limit(limit);

  //   // if (before) {
  //   //   query = query.lt("created_at", before);
  //   // }

  //   // const { data, error } = await query;

  //   // if (error) throw error;
  //   let data = [];

  //   // Transform the data to match the frontend model
  //   const messages: Message[] = data.map((message) => ({
  //     id: message.id,
  //     senderId: message.sender_id,
  //     senderName: message.sender?.full_name,
  //     senderAvatar: message.sender?.avatar_url,
  //     recipientId: message.recipient_id,
  //     conversationId: message.conversation_id,
  //     content: message.content,
  //     read: message.read,
  //     createdAt: message.created_at,
  //     updatedAt: message.updated_at,
  //   }));

  //   return { messages };
  // } catch (error) {
  //   // return handleSupabaseError(error);
  //   console.error(error);
  // }
};

export const sendMessage = async ({
  conversationId,
  message,
}: SendMessagePayload) => {
  try {
    const roomParts = conversationId.split("_");
    if (roomParts.length !== 2)
      throw new Error("Invalid conversationId format");

    const dispatcherId = roomParts[0];
    const driverId = roomParts[1];

    const newMsgRef = push(ref(db, `messages/${conversationId}`));

    const msgData = {
      driverId, // identifies the receiver
      message,
      seen: false,
      timestamp: Date.now(),
    };

    await set(newMsgRef, msgData);

    // Update chat metadata
    await update(ref(db, `chats/${conversationId}`), {
      dispatcherId,
      lastMessage: message,
      timestamp: Date.now(),
    });

    return { message: msgData };
  } catch (err) {
    console.error("Error sending message:", err);
  }
};

/**
 * Send a message
 */
// export const sendMessage = async (
//   senderId: string,
//   content: string,
//   conversationId: string,
//   recipientId?: string
// ) => {
//   try {
//     const data = { id: 1, senderId, content, conversationId, recipientId };

//     return {
//       message: {
//         id: data.id,
//         senderId: data.senderId,
//         recipientId: data.recipientId,
//         conversationId: data.conversationId,
//         content: data.content,
//         // read: data.read,
//         // createdAt: data.created_at,
//         // updatedAt: data.updated_at,
//       },
//     };
//   } catch (error) {
//     // return handleSupabaseError(error);
//     console.error(error);
//   }
// };

/**
 * Mark messages as read
 */
export const markMessagesAsRead = async (
  conversationId: string,
  userId: string
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
