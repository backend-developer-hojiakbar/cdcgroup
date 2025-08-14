// IconType o'rniga string ishlatamiz, chunki API ikonka nomini yuboradi.
// Komponentlar bu nom asosida kerakli ikonkani constants'dan oladi.

export interface Service {
    id: number;
    icon: string; // O'zgartirildi: IconType -> string
    title: string;
    description: string;
  }
  
  export interface ProjectTag {
      name: string;
      tag_id: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    tag: ProjectTag;
    imageUrl: string;
    readMoreUrl?: string;
  }
  
  export interface SocialLink {
      icon: string; // O'zgartirildi: IconType -> string
      url: string;
  }
  
  export interface TeamMember {
      slug: string;
      name: string;
      role: string;
      imageUrl:string;
      bio: string;
      skills: string[];
      socials: SocialLink[];
  }
  
  export interface FAQItem {
      id: number;
      question: string;
      answer: string;
  }
  
  export interface Technology {
      id:number;
      name: string;
      icon: string; // O'zgartirildi: IconType -> string
      description: string;
  }
  
  export interface Stat {
      value: number;
      label: string;
      suffix?: string;
  }
  
  export interface AcademyCourseLevel {
      level_id: string;
      name: string;
  }
  
  export interface AcademyCourse {
      id: number;
      icon: string; // O'zgartirildi: IconType -> string
      title: string;
      description: string;
      level: AcademyCourseLevel;
      duration: string;
  }
  
  export interface PortalFeature {
      id: number;
      icon: string; // O'zgartirildi: IconType -> string
      title: string;
      description: string;
  }
  
  export interface PolicySection {
      title: string;
      content: string;
  }
  
  export interface Policy {
      policy_type: 'privacy' | 'terms';
      title: string;
      sections: PolicySection[];
  }
  
  // BU YERDA QOLGAN CALCULATOR TIPLARI O'ZGARISHSIZ QOLADI
  export interface CalculatorFeature {
      id: string;
      name: string;
      cost: number;
  }
  
  export interface CalculatorService {
      id: string;
      name: string;
      baseCost: number;
      features: CalculatorFeature[];
  }