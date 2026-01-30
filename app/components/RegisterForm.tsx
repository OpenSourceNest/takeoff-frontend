"use client";

import React from 'react';
import Button from './ui/Button';
import CustomSelect from './ui/CustomSelect';
import { useRegisterStore, RegisterFormData } from '../store/useRegisterStore';
import SectionBackground from './ui/SectionBackground';

export default function RegisterForm() {
    const {
        formData,
        status,
        errorMessage,
        setFormData,
        setStatus,
        setErrorMessage,
        reset
    } = useRegisterStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(id as keyof RegisterFormData, value);
    };

    const handleSelectChange = (id: string, value: string | string[]) => {
        setFormData(id as keyof RegisterFormData, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.gender || !formData.email.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields (First Name, Last Name, Gender, Email).');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            // Map frontend data to backend schema
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                gender: formData.gender,
                email: formData.email,
                location: formData.location || 'Unknown',
                // Use description array directly, or default to ['OTHER'] if empty
                profession: formData.description.length > 0 ? formData.description : ['OTHER'],
                professionOther: formData.description.includes('OTHER') ? formData.professionOther : null,
                referralSource: formData.source || 'OTHER',
                referralSourceOther: formData.source === 'OTHER' ? formData.sourceOther : null,
                pipelineInterest: formData.pipeline || 'NOT_SURE',
                newsletterSub: formData.updates === 'YES', // Note: Check this mapping, previous was 'yes' string check
                openSourceKnowledge: Number(formData.knowledge) || 1,
                isCommunityMember: !!formData.community,
                communityDetails: formData.community || null,
                interests: formData.topics || null
            };

            // Use relative path - Next.js rewrite will handle the proxy to backend
            const res = await fetch('/api/events/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            let data;
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await res.json();
            } else {
                // Handle non-JSON response (likely 500 text/plain)
                const text = await res.text();
                console.error("Non-JSON Response:", text);
                throw new Error("Unable to connect to the server. Please try again later.");
            }

            if (!res.ok) {
                console.error('Backend error response:', data);
                throw new Error(data.message || 'Registration failed. Please check your details.');
            }

            setStatus('success');
        } catch (error: unknown) {
            console.error('Registration error:', error);
            setStatus('error');
            // Show user-friendly message if it's a parsing/network error
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
            setErrorMessage(message);
        }
    };

    if (status === 'success') {
        return (
            <SectionBackground className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
                    <p className="text-white/80">Thank you for registering. Please check your email for confirmation.</p>
                    <Button
                        variant="accent"
                        className="mt-8 px-8 py-3 rounded-full"
                        onClick={() => {
                            reset();
                        }}
                    >
                        Register Another
                    </Button>
                </div>
            </SectionBackground>
        );
    }

    return (
        <SectionBackground className="py-20 md:py-32 px-6 relative z-10">
            <section className="relative w-full max-w-3xl mx-auto px-6 py-12 md:py-20">

                {/* Form Fields */}
                <form className="space-y-12" onSubmit={handleSubmit}>
                    {/* 1. First Name */}
                    <div className="space-y-4">
                        <label htmlFor="firstName" className="block text-base font-medium text-white/90">What&apos;s your first name?</label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Your first name"
                            required
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 2. Last Name */}
                    <div className="space-y-4">
                        <label htmlFor="lastName" className="block text-base font-medium text-white/90">What&apos;s your last name?</label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Your last name"
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 3. Gender */}
                    <div className="space-y-4">
                        <label htmlFor="gender" className="block text-base font-medium text-white/90">What's your gender? *</label>
                        <CustomSelect
                            id="gender"
                            options={[
                                { value: 'MALE', label: 'Male' },
                                { value: 'FEMALE', label: 'Female' }
                            ]}
                            value={formData.gender}
                            onChange={(val) => handleSelectChange('gender', val)}
                            placeholder="Select gender"
                        />
                    </div>

                    {/* 4. Email */}
                    <div className="space-y-4">
                        <label htmlFor="email" className="block text-base font-medium text-white/90">What&apos;s your email address?</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your email address"
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 5. Location */}
                    <div className="space-y-4">
                        <label htmlFor="location" className="block text-base font-medium text-white/90">Where are you located (city, state, country)?</label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Your location"
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 6. Describe You */}
                    <div className="space-y-4">
                        <label htmlFor="description" className="block text-base font-medium text-white">Which of the following best describes you? (Select all that apply)</label>
                        <CustomSelect
                            id="description"
                            multiple={true}
                            options={[
                                { value: 'STUDENT', label: 'Student' },
                                { value: 'PROFESSIONAL_DEVELOPER', label: 'Professional Developer' },
                                { value: 'HOBBYIST', label: 'Hobbyist' },
                                { value: 'FRONTEND_DEVELOPER', label: 'Frontend Developer' },
                                { value: 'BACKEND_DEVELOPER', label: 'Backend Developer' },
                                { value: 'FULLSTACK_DEVELOPER', label: 'Fullstack Developer' },
                                { value: 'UI_UX_DESIGNER', label: 'UI/UX Designer' },
                                { value: 'DEVOPS_ENGINEER', label: 'DevOps Engineer' },
                                { value: 'QA_ENGINEER', label: 'QA Engineer' },
                                { value: 'SECURITY_ENGINEER', label: 'Security Engineer' },
                                { value: 'DATA_SCIENTIST', label: 'Data Scientist' },
                                { value: 'AI_ML_ENGINEER', label: 'AI/ML Engineer' },
                                { value: 'PRODUCT_MANAGER', label: 'Product Manager' },
                                { value: 'PROJECT_MANAGER', label: 'Project Manager' },
                                { value: 'TECHNICAL_WRITER', label: 'Technical Writer' },
                                { value: 'CONTENT_CREATOR', label: 'Content Creator' },
                                { value: 'COMMUNITY_MANAGER', label: 'Community Manager' },
                                { value: 'EDUCATOR', label: 'Educator' },
                                { value: 'FOUNDER', label: 'Founder' },
                                { value: 'IT_SUPPORT', label: 'IT Support' },
                                { value: 'BUSINESS_ANALYST', label: 'Business Analyst' },
                                { value: 'SMART_CONTRACT_DEVELOPER', label: 'Smart Contract Developer' },
                                { value: 'BLOCKCHAIN_DEVELOPER', label: 'Blockchain Developer' },
                                { value: 'WEB3_DEVELOPER', label: 'Web3 Developer' },
                                { value: 'SOLIDITY_DEVELOPER', label: 'Solidity Developer' },
                                { value: 'DAPP_DEVELOPER', label: 'DApp Developer' },
                                { value: 'TOKENOMICS_SPECIALIST', label: 'Tokenomics Specialist' },
                                { value: 'NFT_DEVELOPER', label: 'NFT Developer' },
                                { value: 'DEFI_DEVELOPER', label: 'DeFi Developer' },
                                { value: 'WEB3_SECURITY_AUDITOR', label: 'Web3 Security Auditor' },
                                { value: 'BLOCKCHAIN_ARCHITECT', label: 'Blockchain Architect' },
                                { value: 'OTHER', label: 'Other' }
                            ]}
                            value={formData.description}
                            onChange={(val) => handleSelectChange('description', val)}
                            placeholder="Select options"
                        />
                        {formData.description.includes('OTHER') && (
                            <input
                                type="text"
                                id="professionOther"
                                value={formData.professionOther}
                                onChange={handleChange}
                                placeholder="Please specify"
                                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none mt-2"
                            />
                        )}
                    </div>

                    {/* 7. Hear About Us */}
                    <div className="space-y-4">
                        <label htmlFor="source" className="block text-base font-medium text-white">How did you hear about this event?</label>
                        <CustomSelect
                            id="source"
                            options={[
                                { value: 'SOCIAL_MEDIA', label: 'Social Media' },
                                { value: 'FRIEND_COLLEAGUE', label: 'Friend/Colleague' },
                                { value: 'ONLINE_SEARCH', label: 'Online Search' },
                                { value: 'OTHER', label: 'Other' }
                            ]}
                            value={formData.source}
                            onChange={(val) => handleSelectChange('source', val)}
                            placeholder="Select"
                        />
                        {formData.source === 'OTHER' && (
                            <input
                                type="text"
                                id="sourceOther"
                                value={formData.sourceOther}
                                onChange={handleChange}
                                placeholder="Please specify"
                                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none mt-2"
                            />
                        )}
                    </div>

                    {/* 8. Participate Pipeline */}
                    <div className="space-y-4">
                        <label htmlFor="pipeline" className="block text-base font-medium text-white">Do you want to participate in our pipeline of open source projects?</label>
                        <CustomSelect
                            id="pipeline"
                            options={[
                                { value: 'YES', label: 'Yes' },
                                { value: 'NO', label: 'No' },
                                { value: 'NOT_SURE', label: 'Not Sure' }
                            ]}
                            value={formData.pipeline}
                            onChange={(val) => handleSelectChange('pipeline', val)}
                            placeholder="Select"
                        />
                    </div>

                    {/* 9. Receive Updates */}
                    <div className="space-y-4">
                        <label htmlFor="updates" className="block text-base font-medium text-white/90">Are you interested in receiving updates about Open Source Nest?</label>
                        <CustomSelect
                            id="updates"
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' }
                            ]}
                            value={formData.updates}
                            onChange={(val) => handleSelectChange('updates', val)}
                            placeholder="Select"
                        />
                    </div>

                    {/* 10. Specific Topics */}
                    <div className="space-y-4">
                        <label htmlFor="topics" className="block text-base font-medium text-white/90">Any specific topics or technologies you&apos;re interested in for future events?</label>
                        <input
                            type="text"
                            id="topics"
                            value={formData.topics}
                            onChange={handleChange}
                            placeholder="Answer"
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 11. OS Knowledge */}
                    <div className="space-y-4">
                        <label htmlFor="knowledge" className="block text-base font-medium text-white">How well do you understand open source technology? (1-10 scale)</label>
                        <input
                            type="text"
                            id="knowledge"
                            value={formData.knowledge}
                            onChange={handleChange}
                            placeholder="1-10"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={2}
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* 12. Community Member */}
                    <div className="space-y-4">
                        <label htmlFor="community" className="block text-base font-medium text-white">Are you a community member of any open source projects? If yes, please specify.</label>
                        <input
                            type="text"
                            id="community"
                            value={formData.community}
                            onChange={handleChange}
                            placeholder="Answer"
                            className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange transition-colors rounded-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8 pb-4 flex flex-col items-center">
                        {status === 'error' && (
                            <div
                                className="w-full mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200"
                                role="alert"
                                aria-live="polite"
                            >
                                {errorMessage}
                            </div>
                        )}
                        <Button
                            variant="accent"
                            rounded="20px"
                            className="w-[60%] font-semibold py-3 text-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={status === 'loading'}
                            type="submit"
                        >
                            {status === 'loading' ? '...' : 'Register'}
                        </Button>
                    </div>

                </form>
            </section>
        </SectionBackground>
    );
}