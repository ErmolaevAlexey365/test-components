import React from 'react';
import Image from "next/image";

const SmileComponent: React.FC<{ src: string, selected?: boolean }> = ({src, selected}) => {

    return (
        <div
            className={`${selected ? ` border-[#62D4FF]` : `border-transparent`} border-[4px] rounded-[55px] p-[7px] lg:p-[14px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);]`}>
            <Image
                src={src}
                width={28}
                height={28}
                className="lg:w-[50px] lg:h-[50px]"
                alt="smile"
            />
        </div>
    );
};

export default SmileComponent;