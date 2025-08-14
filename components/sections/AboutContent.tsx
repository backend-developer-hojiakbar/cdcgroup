import React from 'react';
import GlassCard from '../ui/GlassCard';
import { useLanguage } from '../../contexts/LanguageProvider';
import { ICON_MAP } from '../../constants';

const AboutContent: React.FC = () => {
    const { t, team, technologies } = useLanguage();

    return (
     <div>
        <GlassCard className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">{t('about_title')}</h3>
            <p className="text-center text-gray-300 max-w-3xl mx-auto">{t('about_description')}</p>
        </GlassCard>
        <h3 className="text-2xl font-bold text-white mb-6 text-center text-glow">{t('team_title')}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {team.map((member) => (
                <div key={member.slug} className="text-center group">
                    <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-gray-600 group-hover:border-cyan-400 transition-all duration-300" />
                    <h4 className="font-bold text-white text-sm">{member.name}</h4>
                    <p className="text-gray-500 text-xs">{member.role}</p>
                </div>
            ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-6 text-center text-glow">{t('tech_stack_title')}</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 max-w-3xl mx-auto">
            {technologies.slice(0, 8).map((tech) => {
                const IconComponent = ICON_MAP[tech.icon];
                return (
                    <div key={tech.id} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer" title={tech.description}>
                        {IconComponent && <IconComponent className="text-3xl"/>}
                        <span className="text-sm">{tech.name}</span>
                    </div>
                )
            })}
        </div>
    </div>
);
};

export default AboutContent;