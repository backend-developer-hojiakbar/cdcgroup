import React, { createContext, useState, useContext, useMemo, ReactNode, useEffect } from 'react';
import { translations } from '../translations';
import { Service, Project, TeamMember, Technology, AcademyCourse, FAQItem, PortalFeature, Stat, Policy, CalculatorService } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Language = 'UZ' | 'RU' | 'EN';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: string) => void;
    t: (key: string, options?: { [key:string]: string | number }) => string;
    navItems: { id: string; label: string }[];
    services: Service[];
    projects: Project[];
    team: TeamMember[];
    faqs: FAQItem[];
    technologies: Technology[];
    stats: Stat[];
    academyCourses: AcademyCourse[];
    portalFeatures: PortalFeature[];
    fetchPolicy: (type: 'privacy' | 'terms') => Promise<Policy | null>;
    calculatorServices: CalculatorService[];
    project_tags: { [key: string]: string };
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('UZ');
    const [isLoading, setIsLoading] = useState(true);

    const [services, setServices] = useState<Service[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stats, setStats] = useState<Stat[]>([]);
    const [academyCourses, setAcademyCourses] = useState<AcademyCourse[]>([]);
    const [portalFeatures, setPortalFeatures] = useState<PortalFeature[]>([]);

    const setLanguage = (lang: string) => {
        if (['UZ', 'RU', 'EN'].includes(lang)) {
            setLanguageState(lang as Language);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const langCode = language.toLowerCase();
            const headers = { 'Accept-Language': langCode };

            try {
                const endpoints = [
                    'services', 'projects', 'team', 'faqs', 'technologies',
                    'stats', 'academy-courses', 'portal-features'
                ];
                
                const requests = endpoints.map(endpoint => 
                    fetch(`${API_BASE_URL}/${endpoint}/`, { headers })
                );
                
                const responses = await Promise.all(requests);
                const data = await Promise.all(responses.map(res => {
                    if (!res.ok) {
                        console.error(`Error fetching ${res.url}: ${res.statusText}`);
                        return [];
                    }
                    return res.json();
                }));

                setServices(data[0] || []);
                setProjects(data[1] || []);
                setTeam(data[2] || []);
                setFaqs(data[3] || []);
                setTechnologies(data[4] || []);
                setStats(data[5] || []);
                setAcademyCourses(data[6] || []);
                setPortalFeatures(data[7] || []);

            } catch (error) {
                console.error("Failed to fetch data from API:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [language]);

    const fetchPolicy = async (type: 'privacy' | 'terms'): Promise<Policy | null> => {
        try {
            const langCode = language.toLowerCase();
            const headers = { 'Accept-Language': langCode };
            const response = await fetch(`${API_BASE_URL}/policies/${type}/`, { headers });
            if (!response.ok) throw new Error('Policy not found');
            return await response.json();
        } catch (error) {
            console.error(`Failed to fetch ${type} policy:`, error);
            return null;
        }
    };


    const value = useMemo(() => {
        const langKey = language.toLowerCase() as 'uz' | 'ru' | 'en';
        const currentTranslations = translations[langKey];

        const t = (key: string, options?: { [key: string]: string | number }): string => {
            let translation = getNestedValue(currentTranslations, key);
            if (options) {
                Object.keys(options).forEach(optKey => {
                    translation = translation.replace(`{${optKey}}`, String(options[optKey]));
                });
            }
            return translation;
        };

        return {
            language,
            setLanguage,
            t,
            navItems: currentTranslations.nav_items,
            project_tags: currentTranslations.project_tags,
            calculatorServices: currentTranslations.calculator_services || [],
            isLoading,
            services,
            projects,
            team,
            faqs,
            technologies,
            stats,
            academyCourses,
            portalFeatures,
            fetchPolicy,
        };
    }, [language, isLoading, services, projects, team, faqs, technologies, stats, academyCourses, portalFeatures]);
    
    if (value.isLoading && !services.length) { 
        return (
            <div className="fixed inset-0 bg-gray-900 flex items-center justify-center text-white text-xl">
                Ma'lumotlar yuklanmoqda...
            </div>
        );
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};