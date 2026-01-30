export interface RegistrationStats {
    totalRegistrations: number;
    targetCapacity: number;
    percentageFilled: number;
    recentRegistrations: number;
    remainingSpots: number;
}

export interface VelocityData {
    date: string;
    count: number;
}

export interface DemographicsData {
    professions: { name: string; value: number }[];
    genders: { name: string; value: number }[];
}

export const getRegistrationStats = async (): Promise<RegistrationStats> => {
    const response = await fetch('/api/analytics/overview'); // Using proxy path
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`Stats fetch failed: ${response.status} ${response.statusText}`, errorData);
        throw new Error(errorData.message || 'Failed to fetch stats');
    }
    const data = await response.json();
    return data.data;
};

export const getRegistrationVelocity = async (days = 30): Promise<VelocityData[]> => {
    const response = await fetch(`/api/analytics/velocity?days=${days}`);
    if (!response.ok) {
        console.error(`Velocity fetch failed: ${response.status} ${response.statusText}`);
        throw new Error('Failed to fetch velocity data');
    }
    const data = await response.json();
    return data.data;
};

export const getDemographics = async (): Promise<DemographicsData> => {
    const response = await fetch('/api/analytics/demographics');
    if (!response.ok) {
        console.error(`Demographics fetch failed: ${response.status} ${response.statusText}`);
        throw new Error('Failed to fetch demographics');
    }
    const data = await response.json();
    return data.data;
};
