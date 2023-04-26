import React from 'react';
import Image, { StaticImageData } from "next/image";

import markChecked from "../../../../public/assets/profiling/stepper/mark-checked.png";

interface ICardImageButtonProps {
    id: string,
    selected: boolean,
    selectToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    img?: StaticImageData,
    value: string,
    text: string,
}

const CardImageButtonWithRadio: React.FC<ICardImageButtonProps> = ({
                                                                       selected,
                                                                       selectToggle,
                                                                       id,
                                                                       img,
                                                                       value,
                                                                       text
                                                                   }) => {

    return (
        <label
            className="flex"
            htmlFor={id}>
            <div
                className={`relative flex flex-col h-[102px] md:h-[155px] justify-center items-center w-full ${selected ? `border-[#62D4FF]
                 bg-[#F7FDFF]` : ` border-transparent`} border-[4px] md:border-[5px]  text-center
                 shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}>
                <div className="absolute top-2 md:right-2 flex self-start accent-[#143E29]">
                    {selected &&
                        <div className="w-[16px] h-[16px]">
                            <Image
                                src={markChecked}
                                width={16}
                                height={16}
                                alt="mark"
                                className="w-full"
                            />
                        </div>
                    }
                </div>
                <input
                    checked={selected}
                    className="hidden"
                    id={id}
                    value={value}
                    onChange={(e) => selectToggle(e)}
                    type="checkbox"/>
                <div className="flex flex-col p-[5px] pt-[0]  items-center">
                    {img &&
                        <Image
                            src={img!}
                            alt="radio-img"
                            className="mb-[6px]"
                        />
                    }
                    <p className="font-medium text-center max-w-[107px]">
                        {text}
                    </p>
                </div>
            </div>
        </label>
    );
};

export default CardImageButtonWithRadio;