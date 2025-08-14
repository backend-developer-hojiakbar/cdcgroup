
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { FaLevelUpAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const AcademyContent: React.FC = () => {
    const { t, academyCourses } = useLanguage();

    return (
        <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h3 className="text-3xl font-bold text-white mb-4 text-glow">{t('academy_title')}</h3>
                <p className="text-gray-300">{t('academy_description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academyCourses.map(course => (
                    <GlassCard key={course.id} className="flex flex-col transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex-grow">
                            <course.icon className="text-4xl text-cyan-400 mb-4"/>
                            <h4 className="text-xl font-bold text-white mb-2">{course.title}</h4>
                            <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                        </div>
                        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-2"><FaLevelUpAlt/><p>{course.level}</p></div>
                            <div className="flex items-center gap-2"><FaClock/><p>{course.duration}</p></div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default AcademyContent;
