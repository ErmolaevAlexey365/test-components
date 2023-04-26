import React from 'react';

import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingMotivationLevel2Content: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async (continueAnswer: boolean) => {
        answerQuestion({
            answer: {
                type: "MotivationLevel2",
                questionIdentifier: "MotivationLevel2",
                continue: continueAnswer
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex flex-col grow justify-between md:text-semimd">
            <div className="flex gap-[11px] min-h-[556px]">
                <HelperIcon/>
                <div className="flex flex-col mb-[51px] max-w-[258px] md:max-w-[592px]">
                    <div className="relative p-[8px] md:p-[16px] border-[#DADADA] border rounded-[8px] mb-[15px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] md:top-[16px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                        </div>
                        <p className="mb-[10px]">
                            אני מבינה שהמוטיבציה שלך למצוא עבודה חדשה אינה בשמיים. זה קורה גם לטובים ביותר. מחקרים רבים מראים שמוטיבציה היא
                            גורם משמעותי בהצלחה במציאת עבודה חדשה.
                        </p>
                        <p className="font-medium">
                            יש לי תרגיל נחמד להרמת המוטיבציה שעובד די טוב. מתאים לך לנסות?
                        </p>

                    </div>
                    <div className="flex gap-[16px] text-xsm  md:text-semimd">
                        <button type="button" onClick={() => submitHandler(true)}
                                className="w-full rounded-[8px] px-[12px] py-[21px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);]">כן, אשמח
                            לתרגיל
                        </button>
                        <button type="button" onClick={() => submitHandler(false)}
                                className="w-full rounded-[8px] py-[12px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);]">לא, רוצה
                            להמשיך בתהליך
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:flex md:self-start">
                <RevertButton onClick={revertHandler} text="חזרה"/>
            </div>

        </div>
    );
};

export default ProfilingMotivationLevel2Content;