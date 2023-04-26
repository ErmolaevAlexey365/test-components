import React from 'react';

interface MultiHelperToolsProps {
    className?: string
}

const MultiHelperTools: React.FC<MultiHelperToolsProps> = ({className}) => {
    return (
        <div>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="25" fill="white" fillOpacity="0.8"/>
                <rect width="50" height="50" rx="25" fill="url(#paint0_linear_1685_42393)" fillOpacity="0.03"/>
                <rect x="16" y="12" width="18" height="13" fill="#143E29"/>
                <rect x="15.75" y="11.75" width="18.5" height="13.2092" rx="1.25" stroke="#143E29" strokeWidth="1.5"/>
                <path d="M25 25.0859V36.4294" stroke="#143E29" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M30.9473 18.1515V16.0352C30.9473 15.4829 30.4996 15.0352 29.9473 15.0352H26.9999" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <ellipse opacity="0.1" cx="24.8896" cy="37.1354" rx="6.35734" ry="1.41274" fill="#143E29"/>
                <defs>
                    <linearGradient id="paint0_linear_1685_42393" x1="55.5" y1="55.5" x2="21.5" y2="20" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default MultiHelperTools;