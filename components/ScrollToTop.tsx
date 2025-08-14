
import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageProvider';

const ScrollToTop: React.FC<{ scrollableRef: React.RefObject<HTMLElement> }> = ({ scrollableRef }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const toggleVisibility = useCallback(() => {
        if (scrollableRef.current) {
            setIsVisible(scrollableRef.current.scrollTop > 300);
        }
    }, [scrollableRef]);

    const scrollToTop = () => {
        scrollableRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollableElement = scrollableRef.current;
        if (scrollableElement) {
            scrollableElement.addEventListener('scroll', toggleVisibility);
            // Initial check in case the modal opens already scrolled
            toggleVisibility(); 
            return () => {
                scrollableElement.removeEventListener('scroll', toggleVisibility);
            };
        }
    }, [scrollableRef, toggleVisibility]);

    return (
        <div className="absolute bottom-6 right-6 z-10">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label={t('scroll_to_top_aria')}
                    className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
