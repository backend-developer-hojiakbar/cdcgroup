import React from 'react';
import GlassCard from '../ui/GlassCard';
import { useLanguage } from '../../contexts/LanguageProvider';
import { ICON_MAP } from '../../constants';

const TechnologiesContent: React.FC = () => {
    const { t, technologies } = useLanguage();

    return (
        <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('technologies_title')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.map(tech => {
                    // 1. API'dan kelgan string ("FaPython") yordamida ICON_MAP'dan haqiqiy komponentni olamiz
                    const IconComponent = ICON_MAP[tech.icon];
                    
                    return (
                        <GlassCard key={tech.id} className="flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:-translate-y-1">
                            {/* 2. Komponent mavjud bo'lsa, uni bosh harfli o'zgaruvchi orqali chaqiramiz */}
                            {IconComponent && <IconComponent className="text-5xl text-cyan-400 mb-4"/>}
                            
                            <h4 className="font-bold text-white mb-2">{tech.name}</h4>
                            <p className="text-sm text-gray-400">{tech.description}</p>
                        </GlassCard>
                    )
                })}
            </div>
        </div>
    );
};

export default TechnologiesContent;