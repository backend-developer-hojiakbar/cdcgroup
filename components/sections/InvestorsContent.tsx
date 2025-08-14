
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { FaFileDownload } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const InvestorsContent: React.FC = () => {
    const { t, stats } = useLanguage();

    // The content for this section can be further moved to translations.ts for full internationalization
    const whyInvestItems = [
        "Tez o'sayotgan bozor va yuqori talab.",
        "AI va avtomatlashtirish kabi yuqori texnologiyali sohalarga e'tibor.",
        "Tajribali va xalqaro miqyosdagi boshqaruv jamoasi.",
        "Kuchli va diversifikatsiyalangan loyihalar portfeli."
    ];
    const investorPresentation = "Investor Taqdimoti";
    const presentationDescription = "Biznesimiz, strategiyamiz va moliyaviy ko'rsatkichlarimiz haqida to'liq ma'lumot oling.";
    const downloadButton = "Yuklab olish (PDF)";
    const whyInvestTitle = "Nima uchun bizga sarmoya kiritish kerak?";

    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">{t('investors_title')}</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">{t('investors_description')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
                {stats.map(stat => (
                    <GlassCard key={stat.label}>
                        <p className="text-4xl font-bold text-cyan-400 text-glow">{stat.value}{stat.suffix}</p>
                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                    </GlassCard>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <GlassCard>
                    <h4 className="text-xl font-bold text-white mb-4">{whyInvestTitle}</h4>
                    <ul className="space-y-3 list-disc list-inside text-gray-300">
                        {whyInvestItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </GlassCard>
                <GlassCard className="text-center">
                    <FaFileDownload className="text-5xl text-cyan-400 mx-auto mb-4"/>
                    <h4 className="text-xl font-bold text-white mb-2">{investorPresentation}</h4>
                    <p className="text-sm text-gray-400 mb-4">{presentationDescription}</p>
                    <a href="#" className="inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-200 font-semibold transition-all hover:bg-cyan-500/30">{downloadButton}</a>
                </GlassCard>
            </div>
        </div>
    );
};

export default InvestorsContent;
