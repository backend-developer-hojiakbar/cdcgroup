import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { useLanguage } from '../../contexts/LanguageProvider';

const CasesContent: React.FC = () => {
    const { projects, project_tags } = useLanguage();
    // project_tags.legacy -> CraDev Legacy
    const legacyTagName = project_tags.legacy; 
    const [filter, setFilter] = useState(project_tags.all);

    const tags = [project_tags.all, project_tags.legacy, project_tags.innovation];
    
    const filteredProjects = projects.filter(p => {
        if (filter === project_tags.all) return true;
        return p.tag.name === filter;
    });

    return (
        <div>
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {tags.map(tag => (
                    <button 
                        key={tag} 
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${filter === tag ? 'bg-cyan-400 text-gray-900' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <GlassCard key={project.id} className="flex flex-col">
                        <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full h-48 object-cover mb-4"/>
                        <div className="flex-grow">
                            <span className={`inline-block px-3 py-1 text-xs rounded-full mb-2 ${project.tag.name === legacyTagName ? 'bg-gray-700 text-gray-300' : 'bg-white/20 text-white'}`}>
                                {project.tag.name}
                            </span>
                            <h3 className="text-lg font-bold font-poppins text-white">{project.title}</h3>
                            <p className="mt-1 text-gray-400 text-sm">{project.description}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default CasesContent;