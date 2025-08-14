import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { FaCogs, FaShareAlt, FaLink } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageProvider';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PartnersContent: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        company_name: '',
        email: '',
        partnership_type: '',
        idea: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const response = await fetch(`${API_BASE_URL}/partners/apply/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Serverda xatolik yuz berdi');
            }
            
            setStatus('success');
            setFormData({ company_name: '', email: '', partnership_type: '', idea: '' }); // Formani tozalash
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    // Bu qismni ham kelajakda API'dan olish mumkin
    const partnerTypes = [
        { key: 'tech', title: "Texnologik Hamkorlik" },
        { key: 'referral', title: "Referral Dasturi" },
        { key: 'integration', title: "Integratsiya Hamkorligi" }
    ];

    return (
        <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('partners_title')}</h3>
             {/* Bu qismni ham API'dan keladigan qilsa bo'ladi */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
                <GlassCard><FaCogs className="text-4xl text-cyan-400 mx-auto mb-3"/> <h4 className="font-bold text-white mb-1">Texnologik Hamkorlik</h4> <p className="text-sm text-gray-400">Mahsulotlarimizni birgalikda rivojlantirish va integratsiya qilish.</p></GlassCard>
                <GlassCard><FaShareAlt className="text-4xl text-cyan-400 mx-auto mb-3"/> <h4 className="font-bold text-white mb-1">Referral Dasturi</h4> <p className="text-sm text-gray-400">Mijozlarni jalb qiling va har bir muvaffaqiyatli loyiha uchun bonus oling.</p></GlassCard>
                <GlassCard><FaLink className="text-4xl text-cyan-400 mx-auto mb-3"/> <h4 className="font-bold text-white mb-1">Integratsiya Hamkorligi</h4> <p className="text-sm text-gray-400">O'z yechimlaringizni bizning platformalarimiz bilan integratsiya qiling.</p></GlassCard>
            </div>
            <GlassCard className="max-w-2xl mx-auto">
                 <h4 className="text-xl font-bold text-white mb-4 text-center">Hamkor bo'lish uchun ariza</h4>
                 {status === 'success' ? (
                     <div className="text-center p-4 bg-green-500/20 text-green-300 rounded-lg">
                         Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
                     </div>
                 ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder="Kompaniya nomi" required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"/>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ish elektron pochtasi" required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"/>
                        <select name="partnership_type" value={formData.partnership_type} onChange={handleInputChange} required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                            <option value="">Hamkorlik turini tanlang</option>
                            {partnerTypes.map(pt => <option key={pt.key} value={pt.title}>{pt.title}</option>)}
                        </select>
                        <textarea rows={3} name="idea" value={formData.idea} onChange={handleInputChange} placeholder="Hamkorlik haqidagi g'oyangizni qisqacha yozing..." required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>
                        <button type="submit" disabled={status === 'submitting'} className="w-full py-2.5 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-200 font-semibold transition-all hover:bg-cyan-500/30 disabled:opacity-50">
                            {status === 'submitting' ? 'Yuborilmoqda...' : 'Yuborish'}
                        </button>
                        {status === 'error' && <p className="text-red-400 text-sm text-center mt-2">Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.</p>}
                    </form>
                 )}
            </GlassCard>
        </div>
    );
};

export default PartnersContent;