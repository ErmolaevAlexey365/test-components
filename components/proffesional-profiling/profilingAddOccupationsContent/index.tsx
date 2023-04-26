import React, { FC, useState } from 'react';
import Image from "next/image";

import OccupationAddCardComponent from '@/components/common/occupationAddCardComponent';
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import back from "../../../../public/assets/proffesional-profiling/back.svg";

const ProfilingAddOccupationsContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [occupationsList, setOccupationsList] = useState<any[]>([])
    const [selectedJobSearchPlaces, setSelectedJobSearchPlaces] = useState<string[]>([]);
    const [occupationsIds, setOccupationsIds] = useState<number[]>([]);


    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "PSAdditionalOccupations",
                questionIdentifier: "PSAdditionalOccupations",
                occupationIds: occupationsIds
            }
        })
    }

    return (
        <section id="main-section" dir="rtl">
            <div className="container">
                <div className="flex flex-col">
                    <p className="font-bold text-[#282421] mb-[28px] mt-[20px]">
                        האם עולים בדעתך עוד תפקידים שהיית רוצה שנציע לך, על סמך החוזקות שלך, פעילות התנדבותית, תעודות מקצועיות וכדומה?
                    </p>

                    <OccupationAddCardComponent setOccupationsList={setOccupationsList} occupationsIds={occupationsIds}
                                                setOccupationsIds={setOccupationsIds}
                                                occupationsList={occupationsList} selectedJobSearchPlaces={selectedJobSearchPlaces}
                                                setSelectedJobSearchPlaces={setSelectedJobSearchPlaces} length={2}/>

                    <div className="flex mt-[40px] lg:justify-between">
                        <button onClick={revertAnswer}
                                className="rounded-[8px] p-[14px] max-w-[106px] min-w-[106px] text-[#143E29] border border-[#143E29] lg:max-w-[148px] font-medium">
                            <div className="flex gap-[8px] cursor-pointer justify-center">
                                <Image
                                    src={back}
                                    width={14}
                                    height={14}
                                    alt="info"
                                    className="mt-[4px]"
                                />
                                חזרה
                            </div>
                        </button>
                        <button type="button" onClick={submitHandler}
                                className="w-full mr-[16px] rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium lg:max-w-[148px]">
                            קדימה
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilingAddOccupationsContent;