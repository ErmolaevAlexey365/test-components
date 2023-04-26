import React from 'react';
import Image from "next/image";

import markChecked from "../../../../public/assets/profiling/stepper/mark-checked.png";

interface IRadioButtonProps {
    text?: string,
    subText?: string,
    name: string,
    selected?: boolean | string,
    clickHandler: (value: string) => void,
}

const RadioButtonFullWidth: React.FC<IRadioButtonProps> = ({text, name, subText, selected, clickHandler}) => {
    return (
        <div onClick={() => clickHandler(name)}
             className={`${selected === name ? "border-[#62D4FF] bg-[#F7FDFF]" : "border-transparent"} border-[4px] flex rounded-[8px] gap-[8px] items-center shadow-[0px_0px_16px_rgba(20,62,41,0.2);] p-[12px] w-full mb-[16px] cursor-pointer`}>
            <div>
                {selected === name ?
                    <div className="w-[16px] h-[16px]">
                        <Image
                            src={markChecked}
                            width={16}
                            height={16}
                            alt="support-logo"
                            className="w-full"
                        />
                    </div>
                    :
                    <div className="w-[16px] h-[16px] border-[#C2C2C2] border-[2px] rounded-full">
                    </div>
                }
            </div>
            <div className="text-sm">
                <p>{text}
                </p>
                <p className="font-semibold text-[#143E29]">{subText}</p>
            </div>
        </div>
    );
};

export default RadioButtonFullWidth;