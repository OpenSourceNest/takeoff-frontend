"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackPageVisit } from "../lib/analytics";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialized = useRef(false);

    useEffect(() => {
        // Generate or retrieve session ID
        let sessionId = "";
        try {
            sessionId = sessionStorage.getItem("takeoff_session_id") || "";
            if (!sessionId) {
                sessionId = crypto.randomUUID();
                sessionStorage.setItem("takeoff_session_id", sessionId);
            }
        } catch (e) {
            // Fallback if sessionStorage is not available
            sessionId = "unknown-session";
        }

        // Track the visit
        // We defer it slightly to ensure hydration is complete and to not block main thread
        const timeoutId = setTimeout(() => {
            trackPageVisit(pathname, sessionId, document.referrer);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [pathname, searchParams]); // Track on path or query param change

    return null; // This component renders nothing
}
