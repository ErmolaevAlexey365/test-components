import React from 'react';

interface MultiWorkingToolsProps {
    className?: string
}

const MultiWorkingTools: React.FC<MultiWorkingToolsProps> = ({className}) => {
    return (
        <div>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="25" fill="white" fillOpacity="0.8"/>
                <rect width="50" height="50" rx="25" fill="url(#paint0_linear_967_26108)" fillOpacity="0.03"/>
                <circle cx="25.5" cy="18.5" r="6.5" fill="#143E29"/>
                <ellipse opacity="0.1" cx="25.623" cy="36.5" rx="6" ry="1.5" fill="#143E29"/>
                <path d="M32.6095 18.3125C32.6095 22.1211 29.7688 25.2188 26.1164 25.625V36.1875C26.1164 36.6445 25.7106 37 25.3048 37C24.8482 37 24.4931 36.6445 24.4931 36.1875V25.625C20.8407 25.2188 18 22.1211 18 18.3125C18 14.3008 21.2466 11 25.3048 11C29.3122 11 32.6095 14.3008 32.6095 18.3125ZM25.3048 24C28.3991 24 30.9862 21.4609 30.9862 18.3125C30.9862 15.2148 28.3991 12.625 25.3048 12.625C22.1597 12.625 19.6233 15.2148 19.6233 18.3125C19.6233 21.4609 22.1597 24 25.3048 24Z" fill="#143E29"/>
                <path d="M29.0575 19.125C29.514 19.125 29.8691 18.7695 29.8691 18.3125C29.8691 16.0781 28.0937 14.25 25.8109 14.25C25.4051 14.25 24.9993 14.6562 24.9993 15.0625C24.9993 15.5195 25.4051 15.875 25.8109 15.875C27.1806 15.875 28.2459 16.9922 28.2459 18.3125C28.2459 18.7695 28.6517 19.125 29.0575 19.125Z" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_967_26108" x1="55.5" y1="55.5" x2="21.5" y2="20" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default MultiWorkingTools;