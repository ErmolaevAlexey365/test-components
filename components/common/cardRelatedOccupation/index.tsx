import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import badge from "../../../../public/assets/proffesional-profiling/badge.svg";
import chevron from "../../../../public/assets/proffesional-profiling/chevron-down.svg";
import metric from "../../../../public/assets/proffesional-profiling/metric.svg";

type ICardWorkValue = {
    title: string
    setInfo: (data: any) => void
    percent: number
    keyValue: string
    submittedOccupations: number[]
    mapIndex: number
}

const CardRelatedOccupation: FC<ICardWorkValue> = ({title, setInfo, percent, keyValue, submittedOccupations, mapIndex}) => {

    const [choosen, setChoosen] = useState<boolean>(false)

    const getMathPercentInString = (percent: number) => {
        return String(Math.round(percent * 100) + "%")
    }


    useEffect(() => {
        submittedOccupations.includes(Number(keyValue)) ?
            setChoosen(true) : ""
    }, [submittedOccupations])

    return (
        <div onClick={() => setInfo({value: true, id: mapIndex})}
             className="flex lg:flex-col items-center justify-between max-h-[88px] min-h-[88px] px-[8px] mb-[16px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] cursor-pointer relative lg:max-w-[250px] lg:min-w-[250px] lg:text-center lg:min-h-[140px] lg:max-h-[140px] lg:justify-center">
            {
                choosen ?
                    <Image
                        src={badge}
                        width={67}
                        height={20}
                        alt="badge"
                        className="absolute left-[-8px] top-[8px]"
                    /> : ""
            }
            <p className="font-bold max-w-[123px] w-[123px]">
                {title}
            </p>
            <div className="flex flex-col items-center text-[14px] relative">
                <Image
                    src={metric}
                    width={53}
                    height={26.5}
                    alt="metric"
                    className="mb-[10px]"
                />
                <p className="absolute top-[18px]">{getMathPercentInString(percent)}</p>
                התאמה לנתונים שלך
            </div>
            <Image
                src={chevron}
                width={13}
                height={14}
                alt="arrow"
                className="mt-[4px] max-h-[14px] lg:hidden"
            />
        </div>
    );
};

export default CardRelatedOccupation;