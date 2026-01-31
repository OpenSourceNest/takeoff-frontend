"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/useAuthStore';
import Button from '../components/ui/Button';
import SectionBackground from '../components/ui/SectionBackground';

export default function SignupPage() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const setUser = useAuthStore((state) => state.setUser);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            const text = await res.text();
            let data;

            try {
                // Try to parse JSON response
                data = text ? JSON.parse(text) : {};
            } catch (err) {
                console.error('Failed to parse response:', text.slice(0, 200));
                // Throw user-friendly error for HTML/non-JSON responses
                throw new Error('Server error: Unable to process response. Please try again.');
            }

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            // Show success logic (could be a toast, but for now just console or specific UI state if requested)
            // The user asked: "if signup successful add a created successful"
            // We can set a success message via error/status or just rely on redirect.
            // But since redirect is fast, maybe we delay it slightly?
            // Actually, let's just use the setUser and redirect.
            // Ideally we'd have a toast system. I'll rely on the redirect for now 
            // but ensuring NO ERROR is shown is key.

            // Auto login after signup (update state directly, don't call API again)
            setUser(data.data.user, data.data.token);

            alert("Registration successful! Redirecting to dashboard...");
            router.push('/admin/dashboard');

        } catch (err: any) {
            // Improved error parsing
            let message = 'Registration failed. Please try again.';
            if (err instanceof Error) {
                message = err.message;
            } else if (typeof err === 'string') {
                message = err;
            } else if (err.message) {
                message = err.message;
            }

            // Filter out technical "Unexpected token" messages if they slip through
            if (message.includes('Unexpected token') || message.includes('JSON')) {
                message = 'Server error. Please try again later.';
            }

            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col min-h-[calc(100vh-theme(spacing.32))]">
            <SectionBackground className="flex-1 flex flex-col justify-center items-center pt-40 pb-20 px-6">
                <div className="w-full max-w-md mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                            Join Takeoff
                        </h1>
                        <p className="text-white/60">Create an admin account to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-white/90 mb-4">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-base font-medium text-white/90 mb-4">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-base font-medium text-white/90 mb-4">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm flex items-center gap-2">
                                <span className="text-lg">⚠️</span>
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="accent"
                            className="w-full py-3 rounded-full font-semibold mt-8"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-white/60">
                            Already have an account?{" "}
                            <Link href="/login" className="text-orange hover:text-white transition-colors font-medium">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </SectionBackground>
        </div>
    );
}
