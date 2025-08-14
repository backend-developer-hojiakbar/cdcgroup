
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { useLanguage } from '../../contexts/LanguageProvider';

interface PlaceholderContentProps {
    title: string;
    description: string;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({ title, description }) => {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
            <GlassCard>
                <h3 className="text-3xl font-bold text-white text-glow mb-4">{title}</h3>
                <p className="text-gray-300 mb-6">{description}</p>
                <p className="text-cyan-400 font-semibold">{t('portal_placeholder_title')}</p>
                <p className="text-gray-500 mt-2">{t('portal_placeholder_description')}</p>
            </GlassCard>
        </div>
    );
};

export default PlaceholderContent;
