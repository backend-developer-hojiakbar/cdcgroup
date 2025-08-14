
import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

// Section Components
import ServicesContent from './components/sections/ServicesContent';
import AboutContent from './components/sections/AboutContent';
import CasesContent from './components/sections/CasesContent';
import ProjectCalculatorContent from './components/sections/ProjectCalculatorContent';
import TechnologiesContent from './components/sections/TechnologiesContent';
import FaqContent from './components/sections/FaqContent';
import ContactContent from './components/sections/ContactContent';
import AcademyContent from './components/sections/AcademyContent';
import InvestorsContent from './components/sections/InvestorsContent';
import PartnersContent from './components/sections/PartnersContent';
import { PrivacyPolicyContent, TermsOfUseContent } from './components/sections/PolicyContent';

import { 
    FaLayerGroup, FaInfoCircle, FaCalculator, FaEnvelope, FaTimes, FaGlobe, FaCode,
    FaQuestionCircle, FaChalkboardTeacher, FaChartPie, FaHandshake, FaUsers,
} from 'react-icons/fa';

import { NAV_ICON_MAP, SOCIAL_LINKS_DATA } from './constants';
import { useLanguage } from './contexts/LanguageProvider';


// --- Sound Effects ---
const sounds = {
    click: `data:audio/mpeg;base64,UklGRkIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA//8CAP3/AP8A//8A/wD//gD//gD/AAD+AP/+/wD//wD//wD/AP8A/wD//gD9//4A/f/9AP3//gD//gD9AP4A//4A//8A/AD//gD/APgA/QD6APwA//4A//4AAAAA//8A/f8A//4A//8A//8A/wD/AP8A/wD//v8A/f/9AP4A/gD+AP/+/gD9AP4A/AD/APkA/QD5APwA/gD9AP4AAAAA//wA//8A/wD//wD/AP8A/wD//wD+AP/+/wD/AP8A/AD+APwA//7+APwA+gD6APgA+QD5APkA+AD3APgA+QAAAAA=`,
    open: `data:audio/mpeg;base64,UklGRsQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YbAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKDAwSEhQUFBYWFhgYGBoaHBwcHh4gICEiJCQkJiYoKCkqLCwsLi4wMTIyNDQ2Njg4Ojo8PD4+QUJDREVGR0hJSktMTU5PUFFSU1VXV1haW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tbZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==`,
    close: `data:audio/mpeg;base64,UklGRsQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YbAAAAD/AP3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+fHx+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+fn5+vr7+/v8/Pz9/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7/AH9/f319fXt7e3p6eno6Ojk5OTg4ODc3NzY2NjU1N`,
    hover: `data:audio/mpeg;base64,UklGRkIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAIA/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD+AP4A/gD9AP0A/QD9AP0A/QD9AP0A/QD9AP0A/f8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/P8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A`,
};

const playSound = (sound: keyof typeof sounds, volume: number = 0.2) => {
    try {
        const audio = new Audio(sounds[sound]);
        audio.volume = volume;
        audio.play().catch(() => {}); // Suppress errors for autoplay policy
    } catch (e) {
        // console.error("Audio error:", e);
    }
};

type ModalContentMap = {
    [key: string]: React.ReactNode;
};

const contentMap: ModalContentMap = {
    services: <ServicesContent />,
    about: <AboutContent />,
    cases: <CasesContent />,
    calculator: <ProjectCalculatorContent />,
    tech: <TechnologiesContent />,
    team: <AboutContent />, // Re-uses AboutContent which includes team
    faq: <FaqContent />,
    academy: <AcademyContent />,
    investors: <InvestorsContent />,
    partners: <PartnersContent />,
    contact: <ContactContent />,
};

// --- Modal Component ---

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, backdropFilter: 'blur(0px)' },
    visible: { 
        opacity: 1, 
        scale: 1,
        backdropFilter: 'blur(10px)',
        transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: { 
        opacity: 0, 
        scale: 0.9,
        backdropFilter: 'blur(0px)',
        transition: { duration: 0.3, ease: "easeIn" } 
    },
};

const ContentModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: ReactNode }> = ({ isOpen, onClose, title, children }) => {
    const { t } = useLanguage();
    const scrollableContentRef = useRef<HTMLDivElement>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60"
                    onClick={onClose}
                >
                    <motion.div 
                        className="glass-panel relative rounded-2xl w-[95vw] h-[90vh] max-w-6xl flex flex-col border-2 border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    >
                        <header className="flex justify-between items-center p-4 border-b border-white/20 flex-shrink-0">
                            <h2 className="text-xl font-bold text-white text-glow">{title}</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10" aria-label={t('close_button_aria')}>
                                <FaTimes size={20} />
                            </button>
                        </header>
                        <main ref={scrollableContentRef} className="flex-grow p-6 overflow-y-auto">
                            {children}
                        </main>
                        <ScrollToTop scrollableRef={scrollableContentRef} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// --- Main App Component ---

type NavItem = {
    id: string;
    icon: React.ElementType;
    label: string;
    content: React.ReactNode;
};

const App: React.FC = () => {
    const { language, setLanguage, t, navItems: translatedNavItems } = useLanguage();
    const [introStage, setIntroStage] = useState('craDev'); // 'craDev', 'cdcGroup', 'done'
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');
    const [navRadius, setNavRadius] = useState(280);
    const [itemSize, setItemSize] = useState(64);

    useEffect(() => {
        if (introStage === 'craDev') {
            const timer = setTimeout(() => setIntroStage('cdcGroup'), 5000);
            return () => clearTimeout(timer);
        }
        if (introStage === 'cdcGroup') {
            const timer = setTimeout(() => setIntroStage('done'), 5000);
            return () => clearTimeout(timer);
        }
    }, [introStage]);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setNavRadius(isMobile ? window.innerWidth * 0.4 : 280);
            setItemSize(isMobile ? 48 : 64);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems: NavItem[] = translatedNavItems.map(item => ({
        ...item,
        icon: NAV_ICON_MAP[item.id] || FaCode,
        content: contentMap[item.id] || <div>Not Found</div>
    }));
    
    const handleMenuClick = (item: NavItem) => {
        playSound('click');
        setModalTitle(item.label);
        setModalContent(item.content);
        setIsModalOpen(true);
        setIsNavOpen(false);
    };

    const openCustomModal = (titleKey: string, content: React.ReactNode) => {
        playSound('click');
        setModalTitle(t(titleKey));
        setModalContent(content);
        setIsModalOpen(true);
    };

    const toggleNav = () => {
        if (introStage !== 'done') return;
        playSound(isNavOpen ? 'close' : 'open');
        setIsNavOpen(!isNavOpen);
    };

    const closeModal = () => {
        playSound('close', 0.1);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 font-poppins text-gray-300 overflow-hidden">
            <ParticleBackground />
            
            <AnimatePresence>
                {introStage === 'done' && (
                    <motion.header 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute top-0 left-0 right-0 p-4 md:p-6 z-20 flex justify-end">
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="flex items-center gap-1 bg-gray-800/60 border border-white/10 rounded-full px-1 py-1 backdrop-blur-sm">
                                {['UZ', 'RU', 'EN'].map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-200 ${language === lang ? 'bg-cyan-400/20 text-cyan-300' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                            <div className="hidden md:flex items-center gap-4">
                                {SOCIAL_LINKS_DATA.map(social => (
                                    <a 
                                        key={social.name} 
                                        href={social.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                <div className="relative flex flex-col items-center justify-center">
                    <div 
                        onClick={toggleNav}
                        className="text-center cursor-pointer relative z-20 h-20"
                        aria-label={t(isNavOpen ? 'close_menu_aria' : 'open_menu_aria')}
                        aria-expanded={isNavOpen}
                    >
                        <AnimatePresence mode="wait">
                            {isNavOpen ? (
                                 <motion.h1
                                    key="CraDevTitle"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-5xl md:text-7xl font-extrabold text-white text-glow transition-transform duration-300 hover:scale-105 active:scale-100"
                                >
                                    CraDev
                                </motion.h1>
                            ) : (
                                <motion.h1
                                    key="CDCGROUPTitle"
                                    layoutId="main-title"
                                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1]}}
                                    className="text-5xl md:text-7xl font-extrabold text-white text-glow transition-transform duration-300 hover:scale-105 active:scale-100"
                                >
                                    CDCGROUP
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </div>

                    <AnimatePresence>
                        {!isNavOpen && introStage === 'done' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                                exit={{ opacity: 0, y: -5 }}
                                className="mt-2 text-lg md:text-xl text-cyan-300 font-medium"
                            >
                                {t('subtitle')}
                            </motion.p>
                        )}
                    </AnimatePresence>


                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <motion.div
                            animate={isNavOpen ? { rotate: -360 } : { rotate: 0 }}
                            transition={isNavOpen ? { duration: 60, repeat: Infinity, ease: 'linear' } : {}}
                            className="relative"
                        >
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                    width: `${navRadius * 2}px`,
                                    height: `${navRadius * 2}px`,
                                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, rgba(34, 211, 238, 0) 60%)',
                                    opacity: isNavOpen ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            />
                        </motion.div>

                        <AnimatePresence>
                            {isNavOpen && introStage === 'done' && navItems.map((item, index) => {
                                const angle = (index / navItems.length) * 360;
                                const x = navRadius * Math.cos((angle - 90) * (Math.PI / 180));
                                const y = navRadius * Math.sin((angle - 90) * (Math.PI / 180));

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                        animate={{ 
                                            x, y, opacity: 1, scale: 1,
                                            transition: { type: 'spring', stiffness: 100, damping: 15, delay: index * 0.03 }
                                        }}
                                        exit={{ 
                                            x: 0, y: 0, opacity: 0, scale: 0,
                                            transition: { duration: 0.3, delay: (navItems.length - index) * 0.02 }
                                        }}
                                        className="absolute top-1/2 left-1/2 group"
                                        style={{
                                            width: `${itemSize}px`,
                                            height: `${itemSize}px`,
                                            marginLeft: `-${itemSize/2}px`,
                                            marginTop: `-${itemSize/2}px`,
                                            pointerEvents: 'auto',
                                        }}
                                    >
                                        <button
                                            onClick={() => handleMenuClick(item)}
                                            onMouseEnter={() => playSound('hover', 0.1)}
                                            aria-label={item.label}
                                            className="w-full h-full rounded-full bg-gray-800/60 border border-white/20 flex items-center justify-center text-gray-300 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-white hover:scale-110 glow-effect relative"
                                        >
                                            <item.icon size={itemSize * 0.4} />
                                        </button>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-center text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                            {item.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
                
                 <AnimatePresence>
                    {introStage === 'done' && (
                        <motion.footer 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute bottom-4 text-center text-xs text-gray-500 w-full px-4">
                            <button onClick={() => openCustomModal("privacy_policy_title", <PrivacyPolicyContent />)} className="hover:text-gray-300 transition-colors">{t('privacy_policy_title')}</button>
                            <span className="mx-2">|</span>
                            <button onClick={() => openCustomModal("terms_of_use_title", <TermsOfUseContent />)} className="hover:text-gray-300 transition-colors">{t('terms_of_use_title')}</button>
                            <p className="mt-1">{t('footer_copyright', { year: new Date().getFullYear() })}</p>
                        </motion.footer>
                    )}
                 </AnimatePresence>
            </main>

            <ContentModal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </ContentModal>

            <AnimatePresence>
                {introStage === 'done' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
                        <Chatbot />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- INTRO OVERLAY --- */}
            <AnimatePresence>
                {introStage !== 'done' && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-gray-900 flex items-center justify-center"
                        exit={{ opacity: 0, transition: { duration: 1.0, delay: 0.5 } }}
                    >
                        <AnimatePresence mode="wait">
                            {introStage === 'craDev' && (
                                <motion.h1
                                    key="craDev"
                                    className="text-5xl md:text-7xl font-extrabold text-white text-glow"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1, transition: { duration: 2.0, ease: 'easeOut' } }}
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 1.5, ease: 'easeIn' } }}
                                >
                                    CraDev Company
                                </motion.h1>
                            )}

                            {introStage === 'cdcGroup' && (
                                <motion.h1
                                    key="cdcGroup"
                                    layoutId="main-title"
                                    className="text-5xl md:text-7xl font-extrabold text-white text-glow"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1, transition: { duration: 2.0, ease: 'easeOut' } }}
                                >
                                    CDCGROUP
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
