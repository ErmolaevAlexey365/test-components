import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import CardRelatedOccupation from '@/components/common/cardRelatedOccupation';
import RevertButton from "@/components/common/revertButton";
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import chevron from "../../../../public/assets/proffesional-profiling/chevron-right.svg";
import infoIcon from "../../../../public/assets/proffesional-profiling/info-icon.svg";
import suitcase from "../../../../public/assets/proffesional-profiling/suitcase.svg";

let submittedOccupations: number[] = []


const ProfilingRelatedContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [infoOccupation, setInfoOccupation] = useState<any>({value: false, id: ""});
    const [occupationList, setOccupationList] = useState<any>([])
    const submitOccupation = async (id: string) => {        
        submittedOccupations.push(+id)
        setInfoOccupation({value: false, id: id})
    }

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "PSSuggestedOccupations",
                questionIdentifier: "PSSuggestedOccupations",
                occupationIds: submittedOccupations

            }
        })
    }

    useEffect(() => {
        userProfProfilingService.getCurrentQuestion().then(res => {
            setOccupationList((res?.question as any)?.occupations)
        })
    }, [])

    return (
        <section id="main-section" dir="rtl">
            <div className="container lg:max-w-[90vw]">
                {
                    infoOccupation.value ?
                        <>
                            <div className="flex flex-col relative items-center border-b">
                                <Image
                                    src={chevron}
                                    width={16}
                                    height={18}
                                    alt="arrow right"
                                    className="absolute max-h-[18px] top-[30px] right-0 cursor-pointer"
                                    onClick={() => setInfoOccupation({value: false, id: ""})}
                                />
                                <p className="font-medium text-[24px] text-[#282421] mt-[20px]">{occupationList[infoOccupation.id].occupation.name_he_male}</p>
                                <div className="flex gap-[8px] items-start cursor-pointer">
                                    <Image
                                        src={suitcase}
                                        width={14}
                                        height={14}
                                        alt="suitcase"
                                        className="mt-[4px]"
                                    />
                                    <p className="text-xsm pb-[20px]">
                                        124 משרות פתוחות אצלנו במערכת
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="mt-[20px] mb-[28px]">
                                    {occupationList[infoOccupation.id].occupation.desc_he}
                                </p>
                                {
                                    occupationList[infoOccupation.id].occupation.license_needed &&
                                    <div className="flex items-center gap-[8px] bg-[#143e2914] rounded-[8px] p-[12px] mb-[28px]">
                                        <Image
                                            src={infoIcon}
                                            width={23}
                                            height={23}
                                            alt="info icon"
                                        />
                                        <p className="text-xsm text-[#143E29]">
                                            במקצוע זה נדרש רישיון <span className="font-bold">נדרש רישיון.</span>
                                        </p>
                                    </div>
                                }
                                {
                                   occupationList[infoOccupation.id].similarOccupations !== "" ?
                                   <>
                                        <p className="font-bold">
                                            מקצועות דומים
                                        </p>
                                        <p className="mb-[28px]">
                                            {occupationList[infoOccupation.id].similarOccupations}
                                        </p>
                                   </> : ""
                                }
                                
                                <div className="flex flex-col border border-[#216B46] border-1 rounded-[8px] p-[12px]">
                                    <p className="text-[#143E29] mb-[16px] text-xsm">רוצה לדעת עוד? הקישור הבא יקפיץ אותך לאתר "עבודאטא" שם
                                        ניתן לקבל פרטים בהרחבה. לאחר מכן, נשמח לראותך איתנו שוב.</p>
                                    <a href={occupationList[infoOccupation.id].occupation.avodata_link} target="_blank" className="text-[#0066FF] cursor-pointer text-center">כן, אשמח לדעת עוד</a>
                                </div>
                            </div>
                            <div className="flex mt-[40px] pb-[20px]">
                                <button onClick={submitHandler}
                                        className="rounded-[8px] p-[14px] max-w-[106px] min-w-[106px] text-[#143E29] border border-[#143E29] text-white font-medium">
                                    לא, תודה
                                </button>
                                <button onClick={() => submitOccupation(occupationList[infoOccupation.id].occupation.id)}
                                        className="bg-[#143E29] w-full mr-[16px] rounded-[8px] p-[14px] text-white font-medium">
                                    המקצוע הזה מתאים לי
                                </button>
                            </div>
                        </> :
                        <div className="flex flex-col">
                            <p className="font-medium text-[18px] text-[#282421] mt-[20px] font-bold">הזדמנויות שיכולות לעניין אותך</p>
                            <p className="text-[#282421] mb-[28px]">נזכיר, שמגוון המקצועות שנציע מבוסס על הפרטים שמסרת עד כה. יש מצב שחלקם
                                לא רלוונטי, מכיוון שהמערכת שלנו מכירה אותך באופן חלקי. בחירה במקצועות המתאימים, תצרף אותם לרשימה שלך ותאפשר
                                לך לראות בהמשך את המשרות המוצעות בהם.</p>
                            <div className="lg:flex lg:flex-wrap lg:justify-between">
                                {occupationList.map((elem: any, index: number) => (
                                    <CardRelatedOccupation title={elem.occupation?.name_he_male} percent={elem.score}
                                                           setInfo={setInfoOccupation}
                                                           keyValue={elem.occupation?.id}
                                                           submittedOccupations={submittedOccupations}
                                                           key={index} mapIndex={index}/>
                                ))}
                            </div>


                            <div className="flex mt-[40px] mb-[20px]">
                                <div className="max-w-[106px] lg:max-w-[148px] lg:min-w-[148px]">
                                    <RevertButton onClick={revertAnswer} text="חזרה"/>
                                </div>

                                <button type="button" onClick={submitHandler}
                                        className="bg-[#143E29] w-full mr-[16px] rounded-[8px] p-[14px] text-white font-medium lg:max-w-[148px]">
                                    קדימה
                                </button>
                            </div>

                        </div>
                }
            </div>
        </section>
    );
};

export default ProfilingRelatedContent;