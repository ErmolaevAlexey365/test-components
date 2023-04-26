import React, { FC } from 'react';

interface IHollandTypes {
    image?: string
    alt?: string
    title: string
    textStart: string
    textEnd: string
    link?: string
    sizes?: number[]
}

const HollandTypesCard: FC<IHollandTypes> = ({image, alt, title, textStart, textEnd, link, sizes}) => {

    return (
        <div className="px-[16px] py-[12px] mb-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full">
            <div className="flex gap-[8px] items-center font-bold">
                {/*<Image*/}
                {/*    src={image!}*/}
                {/*    width={sizes[0]}*/}
                {/*    height={sizes[1]}*/}
                {/*    alt={alt}*/}
                {/*/>*/}
                {title}
            </div>
            <p className="text-[14px] border-b pb-[12px]">
                {textStart}
            </p>
            <p className="text-[14px] mt-[12px]">
                {textEnd}
            </p>
            {
                link ?
                <a href={link} className="text-[14px] mt-[12px] text-[#0066FF]">
                    קרא בהרחבה
                </a> : ""
            }
            
        </div>
    );
};

export default HollandTypesCard;