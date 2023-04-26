import React from 'react';
import Image from "next/image";

import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import day1LogoGreen from "../../../../public/assets/profiling/stepper/first-step/help-logo.svg";

const ProfilingMotivationLevel1Content: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async (continueProfiling: boolean) => {
        answerQuestion({
            answer: {
                type: "MotivationLevel1",
                questionIdentifier: "MotivationLevel1",
                continue: continueProfiling
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex flex-col grow justify-between">
            <div className="flex gap-[11px]">
                <HelperIcon/>
                <div className="flex grow flex-col mb-[51px]  max-w-[258px] md:max-w-[592px]">
                    <div className="relative p-[8px] md:text-semimd md:p-[16px] border-[#DADADA] border rounded-[8px] mb-[15px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                             border-r-[1px] border-[#DADADA] rounded-[1px]">
                        </div>
                        <p className="mb-[10px]">
                            אני מבינה שהתקופה הזו ממש לא פשוטה עבורך.
                            חיפוש עבודה מייצר עומס נפשי וברגעים האלה הכי חשוב לטפל בעצמנו כדי שנרגיש טוב יותר.
                        </p>
                        <div className="w-full h-[1px] border-[#DADADA] border-b-[1px]"></div>
                        <div className="flex gap-[11px] md:pt-[10px]">
                            <p>הנה קישור לעמותת ער״ן המעניקה עזרה ראשונה נפשית מרחוק.
                            </p>
                            <Image
                                src={day1LogoGreen}
                                width={83}
                                height={28}
                                alt="day1-logo"
                                className="mb-[9px]"
                            />
                        </div>
                    </div>
                    <div className="relative p-[8px] md:p-[16px] md:text-semimd border-[#DADADA] border rounded-[8px] mb-[24px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                            border-r-[1px] border-[#DADADA] rounded-[1px]">
                        </div>
                        <p>
                            עם זאת, אני רואה שחשוב לך מאוד למצוא את העבודה הבאה.
                            האם אתה מרגיש שאתה מוכן להמשיך איתי בשאלות?
                        </p>
                    </div>
                    <div className="flex gap-[16px] text-xsm md:text-semimd">
                        <button onClick={() => submitHandler(true)}
                                className="w-full rounded-[8px] px-[12px] md:p-[26px] py-[21px]
                                shadow-[0px_0px_16px_rgba(20,62,41,0.2);]">בטח
                            להמשיך
                        </button>
                        <button onClick={() => submitHandler(false)}
                                className="w-full rounded-[8px] px-[12px] md:p-[26px] py-[21px]
                                 shadow-[0px_0px_16px_rgba(20,62,41,0.2);]">מאוחר
                            יותר
                        </button>
                    </div>
                </div>
            </div>

            <RevertButton onClick={revertHandler} text="חזרה"/>


        </div>

    );
};

export default ProfilingMotivationLevel1Content;