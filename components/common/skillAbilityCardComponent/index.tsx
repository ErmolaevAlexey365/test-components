import React, { FC } from 'react';
import Image from "next/image";

import deleteIcon from "../../../../public/assets/proffesional-profiling/delete.svg";
import dndIcon from "../../../../public/assets/proffesional-profiling/dnd.svg";

interface ISkillAbilityCardProps {
    removeCard: () => void
    title: string
}

const SkillAbilityCardComponent: FC<ISkillAbilityCardProps> = ({removeCard, title}) => {

    return (
        <div
            className="relative w-full flex items-center pr-[13px] mb-[16px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] min-h-[46px] lg:min-w-[300px]">
            <div className="flex gap-[8px] items-start cursor-pointer justify-center">
                <Image
                    src={deleteIcon}
                    width={18}
                    height={20}
                    alt="info"
                    className="mt-[4px]"
                    onClick={removeCard}
                />
                <p className="text-medium text-[#282421]">
                    {title}
                </p>
                <Image
                    src={dndIcon}
                    width={8}
                    height={16}
                    alt="dragndrop"
                    className="absolute left-[12px] top-[15px] cursor-grab"
                />
            </div>
        </div>
    );
};

export default SkillAbilityCardComponent;