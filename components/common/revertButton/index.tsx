import React from 'react';
import Image from "next/image";

import rightArrowIcon from "../../../../public/assets/profiling/right-arrow-icon.svg";

const RevertButton: React.FC<{ onClick: () => void, text?: string }> = ({onClick, text}) => {
    return (
        <button onClick={onClick} type="button"
                className="flex gap-[8px] w-full  md:max-w-[133px] h-[50px] justify-center items-center flex-2 px-[36px]
                 border border-[#143E29] py-[12px] rounded-[8px]">
            <Image
                src={rightArrowIcon}
                width={14}
                height={14}
                alt="arrow-icon"
            />
            {text}
        </button>
    );
};

export default RevertButton;