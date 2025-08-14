
import React, { ReactNode } from 'react';

const GlassCard: React.FC<{ children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
    <div className={`glass-panel rounded-xl p-6 md:p-8 ${className}`} {...rest}>
        {children}
    </div>
);

export default GlassCard;
