import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import HollandTypesCard from '@/components/common/hollandTypesCard';
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import graphicDesktop from "../../../../public/assets/proffesional-profiling/graphic-desktop.svg";
import graphic from "../../../../public/assets/proffesional-profiling/metric-columns.svg";

const ProfilingResultsContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [checked, setChecked] = useState<number>(1)
    const [question, setQuestion] = useState<any>()
    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "PSSummary",
                questionIdentifier: "PSSummary"
            }
        })
    }

    useEffect(() => {
        userProfProfilingService.getCurrentQuestion().then(res => {
            setQuestion(res.question)
        })
    }, [])

    return (
        <section id="main-section" dir="rtl">
            <div className="container lg:max-w-[65vw]">
                <div className="flex flex-col">
                    <p className="font-bold text-[#282421] text-[18px] mt-[20px]">
                        כל הכבוד! צלחת את התהליך
                    </p>
                    <p className="mb-[28px]">
                        תראה כמה דברים חדשים למדת על עצמך! <br/>
                        את כל המידע הזה שצברנו ביחד תוכל לראות תמיד באזור האישי שלך, בעמוד “על עצמי”.
                    </p>
                    <div className="flex text-center justify-between mb-[20px] border-b items-center">
                        <div onClick={() => setChecked(1)}
                             className={`${checked === 1 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[8px] cursor-pointer lg:w-[25%]`}>
                             יכולות&#32;<br className="lg:hidden" />
                             וכישורים
                        </div>
                        <div onClick={() => setChecked(2)}
                             className={`${checked === 2 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[8px] cursor-pointer lg:w-[25%]`}>
                            טיפוסי&#32;<br className="lg:hidden" />
                            הולנד
                        </div>
                        <div onClick={() => setChecked(3)}
                             className={`${checked === 3 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[8px] cursor-pointer lg:w-[25%]`}>
                            מוטיבציות
                        </div>
                        <div>

                        </div>
                        <div onClick={() => setChecked(4)}
                             className={`${checked === 4 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[8px] cursor-pointer lg:w-[25%]`}>
                            מקצועות
                        </div>

                    </div>
                    {
                        checked === 1 ? <div className="lg:flex lg:justify-between">
                                <div
                                    className="px-[16px] py-[12px] mb-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full lg:max-w-[460px]">
                                    <p className="font-bold">
                                        יכולות
                                    </p>
                                    <ul className="list-disc mr-[16px]">
                                        {question?.abilities?.map((elem: any, index: number) => (
                                            <li key={index}>
                                                {elem.original_name_he}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className="px-[16px] py-[12px] mb-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full lg:max-w-[460px]">
                                    <p className="font-bold">
                                        כישורים
                                    </p>
                                    <ul className="list-disc mr-[16px]">
                                        {question?.skills?.map((elem: any, index: number) => (
                                            <li>
                                                {elem.original_name_he}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            :
                            checked === 2 ?
                                <>
                                    <p className="mb-[20px]">
                                        הטיפוסים העיקריים שלך על פי מודל הולנד.
                                    </p>
                                    {question?.interests?.map((elem: any, index: number) => (
                                        <HollandTypesCard
                                            title={elem.name_he_male_single}
                                            textStart={elem.desc_he_male_single}
                                            textEnd={elem.typical_occupations}
                                        />
                                    ))}


                                </> :
                                checked === 3 ?
                                    <>
                                        <div className="relative justify-between flex full-w min-h-[300px] lg:hidden">
                                            <Image
                                                src={graphic}
                                                width={90}
                                                height={277}
                                                alt="graphics"
                                                className="absolute bottom-0 right-0"
                                            />

                                            <div className="flex grow flex-col gap-[15px]">
                                                <div
                                                    className="mr-[44px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#00A5E3] rounded-[2px] bg-white">
                                                    {question?.workValues[0].workValue.desc_he}
                                                </div>
                                                <div
                                                    className="mr-[74px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#62D4FF] rounded-[2px] bg-white">
                                                    {question?.workValues[1].workValue.desc_he}
                                                </div>
                                                <div
                                                    className="mr-[104px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#C3EFFF] rounded-[2px] bg-white">
                                                    {question?.workValues[2].workValue.desc_he}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative justify-between hidden full-w min-h-[300px] lg:flex lg:justify-center">
                                            <Image
                                                src={graphicDesktop}
                                                width={181}
                                                height={328}
                                                alt="graphics"
                                            />

                                            <div className="flex flex-col">
                                                <div
                                                    className="mr-[-108px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] w-fit p-[8px] border border-[#00A5E3] rounded-[2px] bg-white">
                                                    {question?.workValues[0].workValue.desc_he}
                                                </div>
                                                <div
                                                    className="mt-[76px] mr-[-50px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] w-fit p-[8px] border border-[#62D4FF] rounded-[2px] bg-white">
                                                    {question?.workValues[1].workValue.desc_he}
                                                </div>
                                                <div
                                                    className="mt-[48px] mr-[10px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] w-fit p-[8px] border border-[#C3EFFF] rounded-[2px] bg-white">
                                                    {question?.workValues[2].workValue.desc_he}
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                    checked === 4 ?
                                        <div className="lg:flex lg:justify-start lg:flex-wrap">
                                            {question?.occupations?.map((elem: any, index: number) => (
                                                <div
                                                    key={index}
                                                    className="mb-[16px] p-[12px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full lg:max-w-[298px] lg:ml-[20px]">
                                                    {elem.name_he_male}
                                                </div>
                                            ))}

                                        </div> : ""
                    }

                    <button type="button" onClick={submitHandler}
                            className=" mt-[20px] w-full rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium lg:max-w-[286px] lg:flex lg:justify-center lg:self-center">
                        תודה, החכמתי, לעמוד הבית
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfilingResultsContent;