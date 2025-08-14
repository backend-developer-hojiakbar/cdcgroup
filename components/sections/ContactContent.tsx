
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const ContactContent: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="max-w-xl mx-auto text-center flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold text-white mb-4">{t('contact_title')}</h3>
            <p className="text-gray-400 mb-8">
                {t('contact_description')}
            </p>
            <div className="space-y-4">
                <a href="https://t.me/Xazrat_bro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full text-center p-4 glass-panel rounded-lg text-white font-semibold hover:bg-white/10 transition-colors">
                    <FaTelegramPlane />
                    {t('contact_telegram')}
                </a>
                <a href="tel:+998947430912" className="block w-full text-center p-4 glass-panel rounded-lg text-white font-semibold hover:bg-white/10 transition-colors">
                    +998 94 743 09 12
                </a>
            </div>
        </div>
    );
};

export default ContactContent;
