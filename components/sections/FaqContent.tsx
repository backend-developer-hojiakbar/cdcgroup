
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const FaqContent: React.FC = () => {
    const { t, faqs } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">{t('faq_title')}</h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <GlassCard key={faq.id} className="overflow-hidden !p-0">
                        <button
                            className="w-full flex justify-between items-center text-left p-6"
                            onClick={() => toggleFaq(index)}
                        >
                            <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaChevronDown className="text-gray-400" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0">
                                        <p className="text-gray-300">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default FaqContent;
