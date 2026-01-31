export interface RegistrationStats {
    totalRegistrations: number;
    targetCapacity: number;
    percentageFilled: number;
    recentRegistrations: number;
    remainingSpots: number;
    conversionRate: number;
    totalVisits: number;
    uniqueVisits: number;
}

export interface VelocityData {
    date: string;
    count: number;
}

export interface DemographicsData {
    professions: { name: string; value: number }[];
    genders: { name: string; value: number }[];
    locations: { name: string; value: number }[];
    referrals: { name: string; value: number }[];
    statuses: { name: string; value: number }[];
    checkins: { name: string; value: number }[];
    openSource: {
        average: string;
        distribution: { name: string; value: number }[];
    };
}

export const getRegistrationStats = async (): Promise<RegistrationStats> => {
    const response = await fetch('/api/analytics/overview', {
        credentials: 'include'
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`Stats fetch failed: ${response.status} ${response.statusText}`, errorData);
        throw new Error(errorData.message || 'Failed to fetch stats');
    }
    const data = await response.json();
    return data.data;
};

export const getRegistrationVelocity = async (days = 30): Promise<VelocityData[]> => {
    const response = await fetch(`/api/analytics/velocity?days=${days}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        console.error(`Velocity fetch failed: ${response.status} ${response.statusText}`);
        throw new Error('Failed to fetch velocity data');
    }
    const data = await response.json();
    return data.data;
};

export const getDemographics = async (): Promise<DemographicsData> => {
    const response = await fetch('/api/analytics/demographics', {
        credentials: 'include'
    });
    if (!response.ok) {
        console.error(`Demographics fetch failed: ${response.status} ${response.statusText}`);
        throw new Error('Failed to fetch demographics');
    }
    const data = await response.json();
    return data.data;
};

export const trackPageVisit = async (page: string, sessionId: string, referrer?: string): Promise<void> => {
    try {
        await fetch('/api/analytics/track-visit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page,
                sessionId,
                referrer,
                userAgent: navigator.userAgent
            })
        });
    } catch (error) {
        // Silent fail for analytics to not disrupt user experience
        console.error('Analytics tracking failed', error);
    }
};

export interface FilteredRegistrationData {
    totalCount: number;
    registrations: any[];
    breakdowns: {
        gender: { name: string; count: number }[];
        checkedIn: { name: string; count: number }[];
        newsletterSub: { name: string; count: number }[];
        profession: { name: string; count: number }[];
    };
}

export const getFilteredRegistrations = async (filters: {
    gender?: string;
    profession?: string[];
    checkedIn?: boolean;
    newsletterSub?: boolean;
}): Promise<FilteredRegistrationData> => {
    const params = new URLSearchParams();

    if (filters.gender && filters.gender !== 'all') {
        params.append('gender', filters.gender);
    }

    if (filters.profession && filters.profession.length > 0) {
        params.append('profession', filters.profession.join(','));
    }

    if (filters.checkedIn !== undefined) {
        params.append('checkedIn', String(filters.checkedIn));
    }

    if (filters.newsletterSub !== undefined) {
        params.append('newsletterSub', String(filters.newsletterSub));
    }

    const url = `/api/analytics/filtered?${params.toString()}`;

    const response = await fetch(url, {
        credentials: 'include'
    });

    if (!response.ok) {
        console.error(`Filtered registrations fetch failed: ${response.status} ${response.statusText}`);
        throw new Error('Failed to fetch filtered registrations');
    }

    const data = await response.json();
    return data.data;
};
