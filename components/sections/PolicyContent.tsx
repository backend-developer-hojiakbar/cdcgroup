import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageProvider';
import { Policy, PolicySection } from '../../types';

// Bu alohida komponent, chunki u o'z ma'lumotini o'zi yuklaydi
const PolicyContentComponent: React.FC<{ policyType: 'privacy' | 'terms' }> = ({ policyType }) => {
    const { fetchPolicy } = useLanguage();
    const [policyData, setPolicyData] = useState<Policy | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPolicy = async () => {
            setIsLoading(true);
            const data = await fetchPolicy(policyType);
            setPolicyData(data);
            setIsLoading(false);
        };
        loadPolicy();
    }, [fetchPolicy, policyType]);

    if (isLoading) {
        return <div className="text-center text-gray-400">Yuklanmoqda...</div>;
    }

    if (!policyData) {
        return <div className="text-center text-red-400">Ma'lumot topilmadi.</div>;
    }

    return (
        <div className="text-gray-300">
            {policyData.sections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2">{section.title}</h4>
                    <p className="whitespace-pre-wrap leading-relaxed">{section.content}</p>
                </div>
            ))}
        </div>
    );
};


export const PrivacyPolicyContent: React.FC = () => {
    return <PolicyContentComponent policyType="privacy" />;
};

export const TermsOfUseContent: React.FC = () => {
    return <PolicyContentComponent policyType="terms" />;
};