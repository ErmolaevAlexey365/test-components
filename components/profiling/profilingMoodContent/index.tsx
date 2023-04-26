import React, { useState } from 'react';
import Image from "next/image";

import SmileComponent from "@/components/common/smileComponent";
import AnswerButton from "@/components/profiling/profilingMoodContent/answerButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import rightArrowIcon from "../../../../public/assets/profiling/right-arrow-icon.svg";
import smileLogo1 from "../../../../public/assets/profiling/stepper/first-step/smile-logo-1.svg";
import smileLogo2 from "../../../../public/assets/profiling/stepper/first-step/smile-logo-2.svg";
import smileLogo3 from "../../../../public/assets/profiling/stepper/first-step/smile-logo-3.svg";
import smileLogo4 from "../../../../public/assets/profiling/stepper/first-step/smile-logo-4.svg";
import smileLogo5 from "../../../../public/assets/profiling/stepper/first-step/smile-logo-5.svg";

const moodList = [
    {
        moodIndex: 5,
        moodSmileIcon: smileLogo5,
    },
    {
        moodIndex: 4,
        moodSmileIcon: smileLogo4,
    },
    {
        moodIndex: 3,
        moodSmileIcon: smileLogo3,
    },
    {
        moodIndex: 2,
        moodSmileIcon: smileLogo2,
    },
    {
        moodIndex: 1,
        moodSmileIcon: smileLogo1,
    },
]

const answerList = [
    {
        answerIndex: 0,
        answerText: "עצבנות"
    },
    {
        answerIndex: 1,
        answerText: "התרגשות"
    },
    {
        answerIndex: 2,
        answerText: "שמחה"
    },
    {
        answerIndex: 3,
        answerText: "עצב"
    },
    {
        answerIndex: 4,
        answerText: "תקווה"
    },
    {
        answerIndex: 5,
        answerText: "עגמומיות"
    },
    {
        answerIndex: 6,
        answerText: "שעמום"
    },
    {
        answerIndex: 7,
        answerText: "עייפות"
    },
    {
        answerIndex: 8,
        answerText: "טרדה"
    },
    {
        answerIndex: 9,
        answerText: "רוגע"
    },
    {
        answerIndex: 10,
        answerText: "כעס"
    },
    {
        answerIndex: 11,
        answerText: "הכרת תודה"
    },
    {
        answerIndex: 12,
        answerText: "סיפוק"
    },
    {
        answerIndex: 13,
        answerText: "בדידות"
    },
    {
        answerIndex: 14,
        answerText: "לחץ"
    },
]

const ProfilingMoodContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [currentMood, setCurrentMood] = useState<number>(0);

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "Mood",
                questionIdentifier: "Mood",
                moodValue: currentMood,
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex flex-col grow justify-between w-full">

            <div className="lg:mr-[120px]">
                <div className="mb-[20px] ">
                    <p className="text-semimd lg:text-md font-medium mb-[24px]">
                        אומרים שחיפוש עבודה מתחיל בראש. אז מצב הרוח שלי כרגע הוא כזה:
                    </p>
                    <div className="block md:flex">
                        <div className="flex justify-between md:gap-[38px] lg:mb-[80px]">
                            {moodList.map((mood, index) => (
                                <div key={index} onClick={() => setCurrentMood(mood.moodIndex)}>
                                    <SmileComponent
                                        src={mood.moodSmileIcon}
                                        selected={currentMood === mood.moodIndex}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-[28px]">
                    <div className={`${!currentMood && 'hidden'}`}>
                        <p className="mb-[20px] lg:text-md">לפעמים מילים עוזרות לי לנסח את זה יותר טוב:</p>
                        <div className="flex flex-wrap gap-[20px] lg:max-w-[820px]">
                            {answerList.map((mood, index) => (
                                <div key={index} className="flex">
                                    <AnswerButton text={mood.answerText}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-[15px] lg:justify-between">
                <button onClick={revertHandler} type="button"
                        className="flex gap-[8px] items-center flex-2 px-[36px] border border-[#143E29] py-[14px] rounded-[8px]">
                    <Image
                        src={rightArrowIcon}
                        width={14}
                        height={14}
                        alt="arrow-logo"
                    />
                    חזרה
                </button>
                <button disabled={!Boolean(currentMood)} onClick={submitHandler} type="button"
                        className="lg:max-w-[132px] bg-[#143E29] text-white rounded-[8px] text-center flex-1 px-[36px] py-[14px] disabled:bg-[#C2C2C2]">
                    קדימה
                </button>
            </div>
        </div>
    );
};

export default ProfilingMoodContent;