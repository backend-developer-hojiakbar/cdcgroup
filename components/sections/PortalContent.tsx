
import React, { useState } from 'react';
import { PortalFeature } from '../../types';
import GlassCard from '../ui/GlassCard';
import PlaceholderContent from './PlaceholderContent';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const PortalContent: React.FC = () => {
    const { t, portalFeatures } = useLanguage();
    const [activeFeature, setActiveFeature] = useState<PortalFeature | null>(null);

    const handleSelectFeature = (feature: PortalFeature) => {
        setActiveFeature(feature);
    };

    const handleBack = () => {
        setActiveFeature(null);
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {!activeFeature ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-8 text-center text-glow">{t('portal_title')}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {portalFeatures.map((feature) => (
                                <motion.div
                                    key={feature.id}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <GlassCard
                                        onClick={() => handleSelectFeature(feature)}
                                        className="h-full flex flex-col cursor-pointer transition-all duration-300 hover:border-cyan-400/50"
                                    >
                                        <feature.icon className="text-4xl text-cyan-400 mb-4" />
                                        <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-sm text-gray-400 flex-grow">{feature.description}</p>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <button
                            onClick={handleBack}
                            className="absolute top-0 left-0 -mt-2 -ml-2 flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        >
                            <FaArrowLeft />
                            {t('portal_back_button')}
                        </button>
                        <PlaceholderContent title={activeFeature.title} description={activeFeature.description} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortalContent;
