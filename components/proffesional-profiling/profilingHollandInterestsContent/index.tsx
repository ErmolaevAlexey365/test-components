import React, { useEffect, useState } from 'react';

import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const
    ProfilingHollandInterestsContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
        const [currQuest, setCurrQuest] = useState<any>()

        useEffect(() => {
            userProfProfilingService.getCurrentQuestion().then(res => {
                setCurrQuest((res.question as any).hollandInterests)
            })
        }, [])

        const submitHandler = async (e: any) => {
            e.preventDefault()
            answerQuestion({
                answer: {
                    type: "HollandInterests",
                    questionIdentifier: "HollandInterests"
                }
            })
        }

        return (
            <section dir="rtl">
                <div className="container relative px-[12px] py-[20px] shadow-[0px_0px_50px_rgba(40,36,33,0.12);]">
                    <div className="flex flex-col items-center justify-between min-h-[536px]">
                        {
                            currQuest?.map((el: any, index: number) =>
                                <div
                                    className="flex flex-col px-[16px] py-[12px] mb-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full"
                                    key={index}>
                                    <p className="font-bold">{el.interest.name_he_male_single}</p>
                                    <p className="text-[14px]">{el.interest.desc_he_male_single}</p>
                                </div>
                            )
                        }

                        <button onClick={submitHandler} className="w-full rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium">
                            קדימה
                        </button>

                    </div>
                </div>
            </section>
        );
    };

export default ProfilingHollandInterestsContent;