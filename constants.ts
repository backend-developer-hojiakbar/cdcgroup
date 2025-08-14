import { IconType } from 'react-icons';
import {
    FaBrain, FaShieldAlt, FaCode, FaMobileAlt, FaCogs, FaChartLine, FaLinkedin, FaGithub, FaTwitter, FaReact, FaPython, FaAws, FaDocker, FaNodeJs, FaDatabase, FaUsers, FaHandshake, FaCloud, FaPalette, FaShoppingCart, FaLink, FaMicrochip, FaVial, FaBook, FaTelegramPlane, FaLayerGroup, FaInfoCircle, FaCalculator, FaQuestionCircle, FaChalkboardTeacher, FaChartPie, FaGlobe, FaEnvelope, FaBlog, FaBriefcase, FaFileAlt, FaFileCode, FaServer, FaVideo, FaUserCog, FaUserGraduate, FaGraduationCap, FaCalendarAlt, FaMapSigns, FaTrophy, FaEnvelopeOpenText, FaUserFriends
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql, SiKubernetes, SiTerraform, SiPostgresql } from 'react-icons/si';

// API dan keladigan 'icon' stringlarini haqiqiy React komponentlariga bog'laymiz
export const ICON_MAP: { [key: string]: IconType } = {
    // Services
    FaBrain, FaCode, FaShieldAlt, FaMobileAlt, FaChartLine, FaCogs, FaCloud, FaPalette, FaShoppingCart, FaLink, FaMicrochip, FaVial,
    // Team Socials
    FaLinkedin, FaGithub, FaTwitter,
    // Technologies
    FaPython, FaReact, FaNodeJs, SiTypescript, SiNextdotjs, SiPostgresql, FaAws, FaDocker, SiKubernetes, SiTerraform, SiGraphql, FaDatabase,
    // Academy
    FaBook,
    // Portal
    FaBlog, FaBriefcase, FaFileAlt, FaFileCode, FaServer, FaVideo, FaUserCog, FaUserGraduate, FaGraduationCap, FaCalendarAlt, FaMapSigns, FaTrophy, FaEnvelopeOpenText, FaUsers, FaUserFriends,
    // Umumiylar
    FaTelegramPlane,
    // Boshqa ikonkalarni shu yerga qo'shish mumkin...
};

// NAV ikonkalari alohida, chunki u `translations`dan keladi
export const NAV_ICON_MAP: { [key: string]: React.ElementType } = {
    services: FaLayerGroup,
    about: FaInfoCircle,
    cases: FaGlobe,
    calculator: FaCalculator,
    tech: FaCode,
    team: FaUsers,
    faq: FaQuestionCircle,
    academy: FaChalkboardTeacher,
    investors: FaChartPie,
    partners: FaHandshake,
    contact: FaEnvelope,
};

// Bu statik qoladi, chunki bu kompaniyaning o'zgarmas linklari
// sfdhjfsdhjfsdhbjsdfhjbsdfhjbsd
export const SOCIAL_LINKS_DATA = [
    { name: 'Telegram', icon: FaTelegramPlane, url: 'https://t.me/Xazrat_bro' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
    { name: 'GitHub', icon: FaGithub, url: '#' }
];