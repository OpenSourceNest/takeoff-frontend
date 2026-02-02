"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnalyticsService } from "@/services/analytics.service";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    useEffect(() => {
        // Generate or retrieve session ID
        let sessionId = "";
        try {
            sessionId = sessionStorage.getItem("takeoff_session_id") || "";
            if (!sessionId) {
                sessionId = crypto.randomUUID();
                sessionStorage.setItem("takeoff_session_id", sessionId);
            }
        } catch {
            // Fallback if sessionStorage is not available
            sessionId = "unknown-session";
        }

        // Track the visit
        // We defer it slightly to ensure hydration is complete and to not block main thread
        console.log(`[AnalyticsTracker] Tracking visit for ${pathname}`);
        const timeoutId = setTimeout(() => {
            AnalyticsService.trackVisit(pathname, sessionId, document.referrer);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [pathname]); // Track on path change

    return null; // This component renders nothing
}
