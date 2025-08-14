import React, { useState, useMemo } from 'react';
// GoogleGenAI importi kerak emas, chunki u Chatbot'da
import GlassCard from '../ui/GlassCard';
import { FaMagic, FaBrain } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

// Bu komponentda Google GenAI ishlatilmaydi, uni Chatbot'ga qoldiramiz.
// Agar shu yerda ham AI kerak bo'lsa, API_KEY'ni env'dan olish kerak.

const ProjectCalculatorContent: React.FC = () => {
    const { t, calculatorServices } = useLanguage();
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [complexity, setComplexity] = useState<number>(1.2);
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState<{ min: number; max: number } | null>(null);
    const [aiAnalysis, setAiAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleServiceToggle = (serviceId: string) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
        setSelectedFeatures([]);
    };
    
    const handleFeatureToggle = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const calculateCost = () => {
        let base = 0;
        selectedServices.forEach(sId => {
            const service = calculatorServices.find(s => s.id === sId);
            base += service?.baseCost || 0;
        });

        let featuresCost = 0;
        selectedFeatures.forEach(fId => {
            calculatorServices.forEach(s => {
                const feature = s.features.find((f:any) => f.id === fId);
                featuresCost += feature?.cost || 0;
            });
        });

        const totalMin = (base + featuresCost) * complexity;
        const totalMax = totalMin * 1.5;
        
        setCost({ min: Math.round(totalMin), max: Math.round(totalMax) });
    };

    const getAiAnalysis = async () => {
        // AI funksionalligi hozircha o'chirilgan, chunki u Chatbot'da ishlatiladi
        // Agar kerak bo'lsa, keyinchalik qo'shish mumkin
        if (!cost) return;
        setIsLoading(true);
        setAiAnalysis('Bu boʻlim hozirda ishlab chiqilmoqda. AI tahlili tez orada qoʻshiladi.');
        setTimeout(() => setIsLoading(false), 1000);
    };
    
    const availableFeatures = useMemo(() => {
        // Xatolikni oldini olish uchun tekshiruv
        if (!calculatorServices) return [];
        return calculatorServices
            .filter(s => selectedServices.includes(s.id))
            .flatMap(s => s.features);
    }, [selectedServices, calculatorServices]);


    // Agar kalkulyator ma'lumotlari topilmasa, xabar ko'rsatamiz
    if (!calculatorServices || calculatorServices.length === 0) {
        return (
            <div className="text-center text-gray-400">
                Kalkulyator ma'lumotlari topilmadi. Iltimos, sozlamalarni tekshiring.
            </div>
        );
    }


    if (cost) {
        return (
            <div className="text-center animate-fade-in flex flex-col justify-center items-center h-full">
                <GlassCard className="w-full max-w-2xl">
                    <h3 className="text-lg text-gray-400">Taxminiy narx diapazoni:</h3>
                    <p className="text-4xl md:text-6xl font-bold text-white text-glow my-4">
                        ${cost.min.toLocaleString()} - ${cost.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">*Bu dastlabki hisob-kitob. Aniq narx TТdan so'ng belgilanadi.</p>
                    <div className="my-8 h-px bg-white/10"></div>
                     {!aiAnalysis && (
                        <button onClick={getAiAnalysis} disabled={isLoading} className="flex items-center justify-center gap-3 mx-auto px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 font-semibold transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-2xl disabled:opacity-50">
                            <FaMagic />
                            {isLoading ? "Tahlil qilinmoqda..." : "AI-yordamida tahlil olish"}
                        </button>
                    )}
                    {isLoading && <div className="mt-6 p-4 text-gray-400">{t('chatbot_thinking')}</div>}
                    {aiAnalysis && (
                        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700 animate-fade-in text-left">
                            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><FaBrain /> Sun'iy Intellekt Tahlili</h4>
                            <p className="text-gray-300">{aiAnalysis}</p>
                        </div>
                    )}
                </GlassCard>
                <button onClick={() => setCost(null)} className="mt-8 font-semibold text-white hover:text-gray-300 transition-colors">
                    &larr; Qayta hisoblash
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">1. Xizmat turini tanlang</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {calculatorServices.map((service: any) => (
                    <button key={service.id} onClick={() => handleServiceToggle(service.id)} className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${selectedServices.includes(service.id) ? 'bg-white/20 border-cyan-400' : 'bg-gray-800/50 border-gray-600 hover:border-gray-500'}`}>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                    </button>
                ))}
            </div>
            {selectedServices.length > 0 && availableFeatures.length > 0 && (
                <>
                    <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Qo'shimcha funksiyalar</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {availableFeatures.map((feature: any) => (
                            <label key={feature.id} className="flex items-center space-x-3 p-3 bg-gray-800/50 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700/50">
                                <input type="checkbox" checked={selectedFeatures.includes(feature.id)} onChange={() => handleFeatureToggle(feature.id)} className="w-5 h-5 accent-cyan-400 bg-gray-700 rounded border-gray-500 focus:ring-cyan-500"/>
                                <span className="text-gray-300 text-sm">{feature.name}</span>
                            </label>
                        ))}
                    </div>
                </>
            )}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Murakkablik darajasi</h3>
            <div className="flex gap-4">
                {[{label: 'Oddiy', value: 1.0}, {label: 'O\'rtacha', value: 1.2}, {label: 'Murakkab', value: 1.8}].map(c => (
                    <button key={c.value} onClick={() => setComplexity(c.value)} className={`px-6 py-2 rounded-lg font-semibold transition-colors border-2 ${complexity === c.value ? 'bg-white/20 border-cyan-400' : 'bg-gray-800/50 border-gray-600'}`}>{c.label}</button>
                ))}
            </div>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Loyiha haqida qisqacha</h3>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} placeholder="G'oyangizni qisqacha tasvirlab bering..." className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"></textarea>
            <div className="text-center mt-8">
                <button onClick={calculateCost} disabled={selectedServices.length === 0} className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-2xl disabled:opacity-50">
                    Narxni Hisoblash
                </button>
            </div>
        </div>
    );
};

export default ProjectCalculatorContent;