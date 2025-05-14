
import { UserRole } from "./auth";

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

/**
 * Get all users
 */
export const getAllUsers = async () => {
  try {
    const { data, error } = {data: [], error: null};

    if (error) throw error;

    // Transform the data to match the frontend model
    const users: User[] = data.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at,
      is_active: user.is_active,
    }));

    return { users };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get users by role
 */
export const getUsersByRole = async (role: UserRole) => {
  try {
    const { data, error } = {data: [], error: null};

    if (error) throw error;

    const users: User[] = data.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at,
      is_active: user.is_active,
    }));

    return { users };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get user by ID
 */
export const getUserById = async (id: string) => {
  try {
    const { data, error } = {data: <User>{}, error: null};

    if (error) throw error;

    const user: User = {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
      created_at: data.created_at,
      updated_at: data.updated_at,
      is_active: data.is_active,
    };

    return { user };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Update a user
 */
export const updateUser = async (
  id: string,
  updates: {
    fullName?: string;
    avatarUrl?: string;
    role?: UserRole;
  },
) => {
  try {
    const updateData: any = {};
    if (updates.fullName !== undefined) updateData.full_name = updates.fullName;
    if (updates.avatarUrl !== undefined)
      updateData.avatar_url = updates.avatarUrl;
    if (updates.role !== undefined) updateData.role = updates.role;

    const { data, error } = {data: updateData, error: null};

    if (error) throw error;

    return {
      user: {
        id: data.id,
        email: data.email,
        fullName: data.full_name,
        avatarUrl: data.avatar_url,
        role: data.role as UserRole,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Delete a user
 */
export const deleteUser = async (id: string) => {
  try {
    // Delete the user from the users table
    const { error: userError } = {error: null};

    if (userError) throw userError;

    // Delete the user from auth.users (requires admin privileges)
    const { error: authError } = {error: null};
    if (authError) throw authError;

    return { success: true };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};
