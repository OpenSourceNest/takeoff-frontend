import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    email: string;
    role: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    setUser: (user: User, token: string) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null, // Token is now stored in cookie, but we keep this for type consistency/legacy or client logic if needed
            isAuthenticated: false,

            login: async (email: string, password: string) => {
                try {
                    // Call our Next.js API route
                    const response = await fetch('/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Login failed');
                    }

                    set({
                        user: data.data.user,
                        // We act as if we have a token for state consistency, 
                        // even though the real token is in the HTTP-only cookie
                        isAuthenticated: true,
                        token: "cookie-handled"
                    });

                    return data;
                } catch (error) {
                    console.error('Login error:', error);
                    throw error;
                }
            },

            logout: async () => {
                try {
                    await fetch('/api/auth/logout', { method: 'POST' });
                } catch (error) {
                    console.error('Logout error:', error);
                }

                set({ user: null, isAuthenticated: false, token: null });
            },

            setUser: (user: User, token: string) => {
                set({
                    user,
                    token,
                    isAuthenticated: true,
                });
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
                // We don't need to persist 'token' anymore as it's a cookie
            }),
        }
    )
);
