import { create } from 'zustand';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    description: string[];
    source: string;
    pipeline: string;
    updates: string;
    topics: string;
    knowledge: string;
    community: string;
}

interface RegisterState {
    formData: FormData;
    status: 'idle' | 'loading' | 'success' | 'error';
    errorMessage: string;
    setFormData: (id: keyof FormData, value: string | string[]) => void;
    setStatus: (status: 'idle' | 'loading' | 'success' | 'error') => void;
    setErrorMessage: (message: string) => void;
    reset: () => void;
}

const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    description: [],
    source: '',
    pipeline: '',
    updates: '',
    topics: '',
    knowledge: '',
    community: ''
};

export const useRegisterStore = create<RegisterState>((set) => ({
    formData: initialFormData,
    status: 'idle',
    errorMessage: '',
    setFormData: (id, value) => set((state) => ({
        formData: { ...state.formData, [id]: value }
    })),
    setStatus: (status) => set({ status }),
    setErrorMessage: (errorMessage) => set({ errorMessage }),
    reset: () => set({ formData: initialFormData, status: 'idle', errorMessage: '' }),
}));
