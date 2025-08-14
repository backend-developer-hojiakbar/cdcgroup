import React from 'react';
import GlassCard from '../ui/GlassCard';
import { useLanguage } from '../../contexts/LanguageProvider';
import { ICON_MAP } from '../../constants';

const ServicesContent: React.FC = () => {
    const { services } = useLanguage();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
                const IconComponent = ICON_MAP[service.icon];
                return (
                    <GlassCard key={service.id} className="text-center transition-transform duration-300 hover:-translate-y-1">
                        {IconComponent && <IconComponent className="text-4xl text-cyan-400 mx-auto mb-4" />}
                        <h3 className="text-xl font-bold font-poppins text-white">{service.title}</h3>
                        <p className="mt-2 text-gray-400 text-sm">{service.description}</p>
                    </GlassCard>
                )
            })}
        </div>
    );
};

export default ServicesContent;