import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import CardSmileButton from '@/components/common/cardSmileButton';
import ModalLayout from '@/components/common/ModalLayout';
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import back from "../../../../public/assets/proffesional-profiling/back.svg";
import info from "../../../../public/assets/proffesional-profiling/info.svg";
import awesomeSmile from "../../../../public/assets/proffesional-profiling/stepper/awesome-smile.svg";
import badSmile from "../../../../public/assets/proffesional-profiling/stepper/bad-smile.svg";
import goodSmile from "../../../../public/assets/proffesional-profiling/stepper/good-smile.svg";
import normalSmile from "../../../../public/assets/proffesional-profiling/stepper/normal-smile.svg";

const ProfilingSkillsContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer, currentQuestion}) => {
    const [modal, setModal] = useState<boolean>(false)
    const [evaluationValue, setEvaluationValue] = useState<number | null>(null)
    const sendDataHandler = async () => {
        await answerQuestion({
            answer: {
                type: "PSEvaluateSkill",
                questionIdentifier: "PSEvaluateSkill",
                skill: {
                    skillId: currentQuestion.skill.id,
                    evaluation: evaluationValue
                }
            }
        })
        setEvaluationValue(null)
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (evaluationValue) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [evaluationValue])

    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <section id="main-section" dir="rtl">
                <div className="container">
                    <div className="flex flex-col text-center lg:justify-between min-h-[536px]">
                        <div className="hidden lg:flex justify-between mt-[80px]">
                            <div className="flex">
                                <p className="font-medium font-semibold text-[#282421] ml-[16px]">
                                    {currentQuestion.skill?.original_name_he}
                                </p>
                                <div className="flex gap-[8px] items-start cursor-pointer justify-center" onClick={openModal}>
                                    <Image
                                        src={info}
                                        width={12}
                                        height={12}
                                        alt="info"
                                        className="mt-[4px]"
                                    />
                                    <p className="text-xsm text-[#0066FF]">
                                        מה זה אומר?
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium text-[#282421] mb-[20px]">
                                {currentQuestion.skillPosition}/{currentQuestion.skillsCount}
                            </p>
                        </div>
                        <div className="lg:hidden">
                            <p className="font-medium font-semibold text-[#282421] mb-[8px] mt-[20px]">
                                {currentQuestion.skill?.original_name_he}
                            </p>
                            <p className="font-medium text-[#282421] mb-[20px]">
                                {currentQuestion.skillPosition}/{currentQuestion.skillsCount}
                            </p>
                            <div className="flex gap-[8px] items-start cursor-pointer justify-center" onClick={openModal}>
                                <Image
                                    src={info}
                                    width={12}
                                    height={12}
                                    alt="info"
                                    className="mt-[4px]"
                                />
                                <p className="text-xsm text-[#0066FF] mb-[35px]">
                                    מה זה אומר?
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap lg:justify-evenly">
                            <CardSmileButton
                                selected={evaluationValue === 4}
                                text="אני מעולה בזה!"
                                img={awesomeSmile}
                                id="4"
                                onChoose={() => setEvaluationValue(4)}
                            />
                            <CardSmileButton
                                selected={evaluationValue === 3}
                                text="זה ממש אני"
                                img={goodSmile}
                                id="3"
                                onChoose={() => setEvaluationValue(3)}
                            />
                            <CardSmileButton
                                selected={evaluationValue === 2}
                                text="אני בסדר כזה"
                                img={normalSmile}
                                id="2"
                                onChoose={() => setEvaluationValue(2)}
                            />
                            <CardSmileButton
                                selected={evaluationValue === 1}
                                text="זה ממש לא אני"
                                img={badSmile}
                                id="1"
                                onChoose={() => setEvaluationValue(1)}
                            />
                        </div>
                        <button type="button" onClick={revertAnswer}
                                className="w-full rounded-[8px] p-[14px] text-[#143E29] border border-[#143E29] font-medium lg:max-w-[150px]">
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
                    </div>
                </div>
            </section>
            <ModalLayout open={modal} setClose={() => setModal(false)}>
                <div dir="rtl" className="flex flex-col justify-center items-center ">
                    <p className="lg:top-[26px] lg:right-[26px] text-lg text-[#143E29] mb-[8px]">
                        {currentQuestion?.skill && currentQuestion?.skill.original_name_he}
                    </p>
                    <p className="text-semimd font-normal mb-[28px]">
                        מה זה אומר?
                    </p>
                    <p className="text-semimd font-normal text-right mb-[28px]">
                        {currentQuestion?.skill && currentQuestion?.skill.original_desc_he}
                    </p>
                    <button onClick={() => setModal(false)}
                            className="w-full rounded-[8px] p-[14px] text-[#143E29] border border-[#143E29] font-medium">
                        אוקיי
                    </button>
                </div>
            </ModalLayout>
        </>
    );
};

export default ProfilingSkillsContent;