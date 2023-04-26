import React from 'react';
import Image from "next/image";

import info from "../../../../public/assets/proffesional-profiling/info-skill.svg";

interface ICardImageButtonProps {
    id: string,
    selected: boolean,
    selectToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string,
    text: string,
}

const CheckboxSkillsAbilities: React.FC<ICardImageButtonProps> = ({id, selected, selectToggle, value, text,}) => {

    return (
        <label
            className="flex"
            htmlFor={id}>
            <div
                className={`${selected ? `border-[4px] border-[#62D4FF] bg-[#F7FDFF]` :
                    `border-[4px] border-transparent`} flex w-full items-center py-[8px]
                     px-[12px] text-center mb-[16px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] cursor-pointer`}>
                <div className="flex w-full justify-between items-center">
                    <input
                        checked={selected}
                        className="accent-[#143E29] hidden"
                        id={id}
                        value={value}
                        onChange={(e) => selectToggle(e)}
                        type="checkbox"/>
                    <p className="text-center text-[#143E29]">
                        {text}
                    </p>
                    <Image
                        src={info}
                        width={18}
                        height={20}
                        alt="info"
                    />
                </div>
            </div>
        </label>
    );
};

export default CheckboxSkillsAbilities;