import React from 'react';

interface HelpingToolsProps {
  className?: string
}

const HelpingTools: React.FC<HelpingToolsProps> = ({className}) => {
    return (
        <div className={className}>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="18" height="13" fill="#143E29"/>
                <rect x="0.75" y="0.75" width="18.5" height="13.2092" rx="1.25" stroke="#143E29" strokeWidth="1.5"/>
                <path d="M10 14.0859V25.4294" stroke="#143E29" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15.9473 7.1515V5.03516C15.9473 4.48287 15.4996 4.03516 14.9473 4.03516H11.9999" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <ellipse opacity="0.1" cx="9.88957" cy="26.1354" rx="6.35734" ry="1.41274" fill="#143E29"/>
            </svg>
        </div>
    );
};

export default HelpingTools;