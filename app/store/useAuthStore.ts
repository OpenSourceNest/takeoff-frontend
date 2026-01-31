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
    login: (email: string, password: string) => Promise<unknown>;
    register: (email: string, password: string) => Promise<unknown>;
    logout: () => void;
    setUser: (user: User, token: string) => void;
    checkSession: () => Promise<void>;
    hydrated: boolean;
    setHydrated: () => void;
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

                    // Check if response is JSON before parsing
                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        // Server returned non-JSON (likely an error page)
                        throw new Error('Unable to connect to the server. Please try again later.');
                    }

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Invalid email or password');
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
                    // Re-throw with user-friendly message
                    if (error instanceof Error) {
                        throw error;
                    }
                    throw new Error('Login failed. Please check your internet connection and try again.');
                }
            },

            register: async (email: string, password: string) => {
                try {
                    const response = await fetch('/api/auth/signup', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
                    });

                    // Check if response is JSON before parsing
                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        // Server returned non-JSON (likely an error page)
                        throw new Error('Unable to connect to the server. Please try again later.');
                    }

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Registration failed. Please try again.');
                    }

                    set({
                        user: data.data.user,
                        isAuthenticated: true,
                        token: "cookie-handled"
                    });

                    return data;
                } catch (error) {
                    console.error('Registration error:', error);
                    // Re-throw with user-friendly message
                    if (error instanceof Error) {
                        throw error;
                    }
                    throw new Error('Registration failed. Please check your internet connection and try again.');
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
                    token, // Legacy/State only
                    isAuthenticated: true,
                });
            },

            checkSession: async () => {
                try {
                    const res = await fetch('/api/auth/me');
                    if (res.ok) {
                        const data = await res.json();
                        set({
                            user: data.data.user,
                            isAuthenticated: true,
                            token: "cookie-handled"
                        });
                    } else {
                        // If check fails (401), clear state
                        set({ user: null, isAuthenticated: false, token: null });
                    }
                } catch {
                    set({ user: null, isAuthenticated: false, token: null });
                }
            },

            // Hydration logic
            hydrated: false,
            setHydrated: () => set({ hydrated: true }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            }
        }
    )
);
