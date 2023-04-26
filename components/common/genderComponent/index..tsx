import React from 'react';
import Image, { StaticImageData } from "next/image";

interface IGenderProps {
    image: StaticImageData,
    genderText: string,
    selected: boolean
}

const GenderComponent: React.FC<IGenderProps> = ({image, genderText, selected}) => {
    return (
        <div
            className={`${selected && "border-[#62D4FF] "} border-[4px] flex items-center justify-center flex-col rounded-[8px] bg-white  h-[94px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);]  w-full`}>
            <Image
                className="mb-[6px]"
                src={image}
                alt="gender-img"
            />
            <p className="text-semimd font-medium text-[#143E29]">{genderText}</p>
        </div>
    );
};

export default GenderComponent;