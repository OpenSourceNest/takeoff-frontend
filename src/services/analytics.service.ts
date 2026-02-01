import { apiClient } from "@/lib/apiClient";

export class AnalyticsService {
    /**
     * Track a page visit (conversion funnel)
     */
    static async trackVisit(page: string, sessionId: string, referrer?: string): Promise<void> {
        try {
            await apiClient.post('/api/analytics/track-visit', {
                page,
                sessionId,
                referrer,
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server'
            });
        } catch (error) {
            console.error('[AnalyticsService] tracking failed', error);
        }
    }
}
