import React from 'react';
import Image from "next/image";

import DefaultButton from "@/components/common/defaultButton";
import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import day1LogoGreen from "../../../../public/assets/profiling/stepper/first-step/help-logo.svg";

const ProfilingMotivationLevel3Content: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async (continueProfiling: boolean) => {
        answerQuestion({
            answer: {
                type: "MotivationLevel3",
                questionIdentifier: "MotivationLevel3",
                continue: continueProfiling
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex flex-col grow justify-between md:text-semimd">
            <div className="flex gap-[11px]">
                <HelperIcon/>
                <div className="flex flex-col mb-[51px] max-w-[258px] md:max-w-[592px]">
                    <div className="relative p-[8px] md:p-[16px] border-[#DADADA] border rounded-[8px] mb-[15px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] md:top-[16px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                        </div>
                        <p className="mb-[10px]">
                            אני מבינה שהתקופה הזו ממש לא פשוטה עבורך.
                            חיפוש עבודה מייצר עומס נפשי וברגעים האלה הכי חשוב לטפל בעצמנו כדי שנרגיש טוב יותר.
                        </p>
                        <div className="w-full h-[1px] border-[#DADADA] border-b-[1px]"></div>
                        <div className="flex gap-[11px] md:pt-[10px]">
                            <p>הנה
                                <a className="underline text-[#0066FF]" target="_blank" href="https://www.eran.org.il/"> קישור לעמותת</a>
                                ער״ן המעניקה עזרה ראשונה נפשית מרחוק.
                            </p>
                            <Image
                                src={day1LogoGreen}
                                width={83}
                                height={28}
                                alt="day1-logo"
                                className="mb-[9px] self-center"
                            />
                        </div>
                    </div>
                    <div className="relative p-[8px] md:p-[16px] border-[#DADADA] border rounded-[8px] mb-[24px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">

                        </div>
                        <p className="font-medium">
                            האם אתה רוצה להמשיך בדרך למציאת עבודה חדשה עכשיו או
                            מאוחר יותר?
                        </p>
                    </div>
                    <div className="flex gap-[16px] text-xsm md:text-semimd">
                        <DefaultButton text="בטח להמשיך" handleFunction={() => submitHandler(true)}/>
                        <DefaultButton text="מאוחר יותר" handleFunction={() => submitHandler(false)}/>
                    </div>
                </div>
            </div>
            <div className="md:flex md:self-start">
                <RevertButton onClick={revertHandler} text="חזרה"/>
            </div>
        </div>
    );
};

export default ProfilingMotivationLevel3Content;