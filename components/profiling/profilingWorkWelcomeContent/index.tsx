import React from 'react';

import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingWorkWelcomeContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "WorkWelcome",
                questionIdentifier: "WorkWelcome",
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }


    return (
        <>
            <div className="relative min-h-[556px] flex grow flex-col justify-between lg:px-[100px]">
                <div className="flex grow gap-[11px]">
                    <div className="flex items-start w-full ">
                        <div className="flex items-start md:items-center justify-center gap-[20px]">
                            <HelperIcon/>
                            <div className="flex self-center relative p-[8px] border-[#DADADA] border rounded-[8px] md:max-w-[592px]">
                                <div
                                    className="absolute w-[10px] h-[10px] rotate-45 top-[15px] md:top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <p>
                                        הגענו לחלק התכל'ס - כל מה שצריך לעשות כדי למצוא עבודה. הוא אולי יהיה קצת ארוך, אבל שווה כל רגע, כי
                                        בסוף תהיה לך ולנו מפה של הדרך ליעד.
                                    </p>
                                    <p>
                                        עצירה להתרעננות? אין בעיה. אפשר לשמור ולחזור בכוחות מחודשים.
                                        המערכת תשמור את המיקום שלך.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute opacity-10 left-[-20px] bottom-[25%] w-full flex flex-col items-end gap-[20px] md:gap-[35px]">
                    <div className="w-[30%] h-[18px] md:h-[35px] bg-[#5BE45F]"></div>
                    <div className="w-[50%] h-[18px] md:h-[35px] bg-[#FF4F66]"></div>
                    <div className="w-[70%] h-[18px] md:h-[35px] bg-[#62D4FF]"></div>
                </div>
            </div>
            <div className="flex justify-between gap-[16px]">
                <div className="max-w-[106px]">
                    <RevertButton text="אחורה" onClick={() => revertHandler()}/>
                </div>
                <div className="w-full md:max-w-[132px]">
                    <button onClick={submitHandler} type="button"
                            className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                        קדימה
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfilingWorkWelcomeContent;