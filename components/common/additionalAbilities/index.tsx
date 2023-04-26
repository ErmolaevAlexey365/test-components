import React, { useState } from 'react';
import Image from "next/image";

import arrow from "../../../../public/assets/proffesional-profiling/arrow.svg";
import CheckboxSkillsAbilities from '../checkboxSkillsAbilities';

interface ICardImageButtonProps {
    data: any
    setAdditionalAbilities: (data: any) => void
    evaluation: number
}

const AdditionalAbilities: React.FC<ICardImageButtonProps> = ({data, setAdditionalAbilities, evaluation}) => {
    const [toggleCategory, setToggleCategory] = useState<boolean>(false)
    const [selectedJobSearchPlaces, setSelectedJobSearchPlaces] = useState<string[]>([]);

    const selectToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let jobSearchPlaces = [...selectedJobSearchPlaces]

        if (jobSearchPlaces.includes(value)) {
            setSelectedJobSearchPlaces(jobSearchPlaces.filter((item) => item !== value));
            return;
        }

        jobSearchPlaces.push(value)
        let updateEvaluation = (data.abilities.filter((el: any) => el.id == value)).map((el: any) => (
            {...el, evaluation: evaluation}
        ));

        setAdditionalAbilities(updateEvaluation[0])

        setSelectedJobSearchPlaces(jobSearchPlaces);
    };

    return (
        <>

            <div className="flex justify-between pt-[12px] pb-[12px] border-b" onClick={() => setToggleCategory(!toggleCategory)}>
                <p className="font-bold text-[#143E29]">
                    {data.original_name_he}
                </p>
                <Image
                    src={arrow}
                    width={13}
                    height={14}
                    alt="arrow"
                    className={`${toggleCategory ? "" : "rotate-180"}`}
                    onClick={() => setToggleCategory(!toggleCategory)}
                />
            </div>
            {
                toggleCategory ?
                    data.abilities.map((el: any, index: any) =>
                        <CheckboxSkillsAbilities
                            key={index}
                            value={el.id}
                            text={el.original_name_he}
                            id={el.id}
                            selected={selectedJobSearchPlaces.includes(String(el.id))}
                            selectToggle={selectToggle}
                        />
                    ) : ""
            }
        </>
    );
};

export default AdditionalAbilities;