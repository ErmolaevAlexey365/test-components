import React from 'react';
import Image, { StaticImageData } from "next/image";

interface ICardSmileButtonProps {
    selected: boolean,
    id: string,
    img: StaticImageData,
    text: string,
    onChoose: () => void;
}

const CardSmileButton: React.FC<ICardSmileButtonProps> = ({id, img, text, onChoose, selected}) => {

    return (
        <label
            htmlFor={id}>
            <div
                className={`${selected ? "border-[#62D4FF] bg-[#F7FDFF]" :
                    "border-transparent"} border-[4px] relative flex flex-col justify-center items-center min-h-[122px] max-h-[122px] w-[147px] }
                p-[8px] text-center py-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}>
                <input
                    checked={selected}
                    className="absolute top-2 flex self-start  accent-[#143E29]"
                    id={id}
                    onChange={onChoose}
                    type="checkbox"/>
                <div className="flex flex-col p-[5px] pt-[0] justify-between items-center">
                    <Image
                        src={img}
                        alt="logo"
                        className="mb-[6px]"
                    />
                    <p className="font-bold text-center max-w-[107px] text-[#143E29]">
                        {text}
                    </p>
                </div>
            </div>
        </label>
    );
};

export default CardSmileButton;