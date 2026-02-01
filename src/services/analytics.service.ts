export class AnalyticsService {
    /**
     * Track a page visit (conversion funnel)
     */
    static async trackVisit(page: string, sessionId: string, referrer?: string): Promise<void> {
        try {
            await fetch('/api/analytics/track-visit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    page,
                    sessionId,
                    referrer,
                    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server'
                })
            });
        } catch (error) {
            console.error('[AnalyticsService] tracking failed', error);
        }
    }
}
