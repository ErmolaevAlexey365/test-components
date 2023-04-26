import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import back from "../../../../public/assets/proffesional-profiling/back.svg";
import trash from "../../../../public/assets/proffesional-profiling/trash.svg";

const ProfSurveyEndOccupationsSelectionContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [occupationsList, setOccupationsList] = useState<any[]>([])

    const getOccupationsIds = () => occupationsList.map(elem => elem.id)

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "PSEndOccupationsSelection",
                questionIdentifier: "PSEndOccupationsSelection",
                occupationIds: getOccupationsIds()
            }
        })
    }

    const onTrash = (index: number) => {
        setOccupationsList([...occupationsList.slice(0, index), ...occupationsList.slice(index + 1)]);
    };

    useEffect(() => {
        userProfProfilingService.getCurrentQuestion().then(res => {
            setOccupationsList(res.question?.occupations)
        })

    }, [])


    return (
        <>
            <section id="main-section" dir="rtl">
                <div className="container">
                    <div className="flex flex-col">
                        <p className="font-bold text-[#282421] mb-[28px] mt-[20px]">
                            תודה. הנה רשימת התפקידים שלך
                        </p>
                        <p>
                            כאן ריכזנו עבורך את כל התפקידים שעסקת בהם בעבר, את המקצועות שהמלצנו עבורך ומיינת ותפקידים נוספים שהוספת לאחר
                            מכן. ניתן כעת להסיר את אלו שלא נראים לך רלוונטים ולאשר.
                            חשוב לזכור כי בהמשך תקבל משרות רלוונטיות בהתאם לבחירה שלך.
                        </p>

                        {
                            occupationsList.map((el: any, index: number) =>
                                <div key={index}
                                     className="flex justify-between p-[12px] mb-[16px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full">
                                    {el.name_he_female}
                                    <Image
                                        src={trash}
                                        width={14}
                                        height={14}
                                        alt="info"
                                        className="mt-[4px] cursor-pointer"
                                        onClick={() => onTrash(index)}
                                    />
                                </div>
                            )
                        }

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
        </>
    );
};

export default ProfSurveyEndOccupationsSelectionContent;