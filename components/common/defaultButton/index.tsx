import React from 'react';

interface IDefaultButtonProps {
    className?: string;
    styles?: object;
    text: string,
    handleFunction?: () => void;
    selected?: boolean | string | null;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({className, styles, text, handleFunction, selected}) => {
    return (
        <button onClick={handleFunction}
                style={styles}
                type="button"
                className={` ${selected ? "border-[#62D4FF] bg-[#F7FDFF] md:font-medium" :
                    "border-transparent md:font-normal"} text-xsm md:text-semimd w-full md:h-[70px] border-[4px] md:border-[5px] w-full rounded-[8px] px-[8px]
                      min-h-[60px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] ${className}`}>{text}
        </button>
    );
};

export default DefaultButton;