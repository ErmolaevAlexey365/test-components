import React from 'react';
import Image, { StaticImageData } from "next/image";

interface ICardImageButtonProps {
    id: string,
    selected: boolean,
    selectToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    img: StaticImageData,
    value: string,
    text: string,
    imageSize: string
}

const CardImageButton: React.FC<ICardImageButtonProps> = ({
                                                              imageSize,
                                                              selected,
                                                              selectToggle,
                                                              id,
                                                              img,
                                                              value,
                                                              text
                                                          }) => {

    return (
        <label
            className="flex min-h-[122px] max-h-[122px] md:text-semimd md:max-h-[164px]"
            htmlFor={id}>
            <div
                className={`relative flex flex-col justify-center items-center w-full ${selected ? ` border-[#62D4FF]
                 bg-[#F7FDFF]` : `border-transparent`} border-[4px] p-[8px]  text-center
                 py-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}>
                <input
                    checked={selected}
                    className="absolute top-2 flex self-start  accent-[#143E29]"
                    id={id}
                    value={value}
                    onChange={(e) => selectToggle(e)}
                    type="checkbox"/>
                <div className="flex flex-col p-[5px] pt-[0] md:p-[30px] md:gap-[12px] justify-between items-center">
                    <Image
                        src={img}
                        alt="card-img"
                        className={`mb-[6px] ${imageSize}`}
                    />
                    <p className={`font-medium  ${selected ? 'md:font-medium' : 'md:font-normal'} text-center max-w-[107px] md:max-w-max`}>
                        {text}
                    </p>
                </div>
            </div>
        </label>
    );
};

export default CardImageButton;