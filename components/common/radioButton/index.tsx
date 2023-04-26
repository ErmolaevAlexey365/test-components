import React from 'react';
import Image from "next/image";

import markChecked from "../../../../public/assets/profiling/stepper/mark-checked.png";

interface IRadioButtonProps {
    text?: string,
    subText?: string,
    name: string,
    selected?: boolean | string,
    clickHandler: (value: any) => void,
}

const RadioButton: React.FC<IRadioButtonProps> = ({text, name, subText, selected, clickHandler}) => {
    return (
        <div onClick={() => clickHandler(name)}
             className={`${selected === name ? "border-[#62D4FF] bg-[#F7FDFF] " : "border-transparent "} w-full h-full 
              border-[4px] md:border-[5px] leading-[22px] flex rounded-[8px] gap-[16px] items-center shadow-[0px_0px_16px_rgba(20,62,41,0.2);] p-[8px] md:p-[12px]`}>
            <div className={`${text && 'md:self-start'}`}>
                {selected === name ?
                    <div className="w-[16px] h-[16px]">
                        <Image
                            src={markChecked}
                            width={16}
                            height={16}
                            alt="mark-logo"
                            className="w-full"
                        />
                    </div>
                    :
                    <div className="w-[16px] h-[16px]  border-#C2C2C2] border-[2px] rounded-full">
                    </div>
                }
            </div>
            <div className="text-sm md:text-semimd md:flex md:flex-col ">
                <p>{text}
                </p>
                <p className={`${selected === name ? "font-medium md:font-normal" : "font-normal"}`}>{subText}</p>
            </div>
        </div>
    );
};

export default RadioButton;