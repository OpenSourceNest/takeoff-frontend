import { useEffect } from 'react';

const SESSION_ID_KEY = 'page-visit-session-id';

/**
 * Generate or retrieve session ID for tracking unique visitors
 */
const getSessionId = (): string => {
    if (typeof window === 'undefined') return '';

    let sessionId = localStorage.getItem(SESSION_ID_KEY);
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(SESSION_ID_KEY, sessionId);
    }
    return sessionId;
};

/**
 * Track page visit for conversion rate calculation
 */
export const usePageTracking = (pageName: string) => {
    useEffect(() => {
        const trackVisit = async () => {
            try {
                const sessionId = getSessionId();
                const hasTracked = sessionStorage.getItem(`tracked_${pageName}`);

                // Only track once per session
                if (hasTracked) return;

                await fetch('/api/analytics/track-visit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        page: pageName,
                        sessionId,
                        userAgent: navigator.userAgent,
                        referrer: document.referrer || undefined,
                    }),
                });

                // Mark as tracked for this session
                sessionStorage.setItem(`tracked_${pageName}`, 'true');
            } catch (error) {
                console.error('Failed to track page visit:', error);
            }
        };

        trackVisit();
    }, [pageName]);
};
