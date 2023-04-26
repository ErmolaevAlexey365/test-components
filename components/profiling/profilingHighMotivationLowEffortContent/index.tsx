import React, { useEffect, useState } from 'react';

import HelperIcon from "@/components/common/helperIcon";
import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingHighMotivationLowEffortContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [lowEffortReason, setLowEffortReason] = useState<string>()

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "HighMotivationLowEffort",
                questionIdentifier: "HighMotivationLowEffort",
                lowEffortReason,
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (lowEffortReason) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [lowEffortReason])

    return (
        <div className="flex flex-col grow justify-between lg:px-[100px]">
            <div className="flex flex-col">
                <div className="flex flex gap-[11px]">
                    <HelperIcon/>

                    <div className="flex flex-col max-w-[592px]">
                        <div className="relative mb-[15px] p-[8px] border-[#DADADA] border rounded-[8px] ">
                            <div
                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                            </div>
                            <p className="mb-[25px] md:text-semimd">
                                אנחנו רואים הבדל משמעותי בין המוטיבציה הגבוהה שעליה סיפרת מקודם, לבין המאמץ שהשקעת עד עכשיו בחיפוש העבודה.
                            </p>
                            <p className="font-medium md:text-semimd">
                                מהי לדעתך הסיבה?
                            </p>
                        </div>


                        <div className="flex flex-col gap-[16px] mb-[28px]">
                            <RadioButton clickHandler={() => setLowEffortReason("UnemploymentBenefit")} selected={lowEffortReason}
                                         name="UnemploymentBenefit"
                                         subText="יש לי דמי אבטלה אז אני רגוע ברמה הכספית"/>
                            <RadioButton clickHandler={() => setLowEffortReason("DoNotKnowHowToImprove")} selected={lowEffortReason}
                                         name="DoNotKnowHowToImprove"
                                         subText="אני לא יודע איך לעשות את זה טוב יותר"/>
                            <RadioButton clickHandler={() => setLowEffortReason("DidNotThinkAboutIt")} selected={lowEffortReason}
                                         name="DidNotThinkAboutIt"
                                         subText="האמת, לא חשבתי על זה אבל אני יכול לעשות הרבה יותר"/>
                            <RadioButton clickHandler={() => setLowEffortReason("DoNotKnow")} selected={lowEffortReason} name="DoNotKnow"
                                         subText="אני לא יודע להסביר את ההבדל"/>
                        </div>
                    </div>

                </div>
                {lowEffortReason === "DoNotKnowHowToImprove" &&
                    <div className="flex flex gap-[11px]">
                        <HelperIcon/>
                        <div className="w-full mb-[28px] md:mb-[95px]  max-w-[592px]">
                            <div className="relative p-[8px] w-full border-[#DADADA] border rounded-[8px]  mb-[15px]">
                                <div
                                    className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                </div>
                                <p className="font-normal">
                                    בדיוק בשביל זה אנחנו כאן, כדי לעזור לך להגיע ליום הראשון בעבודה הבאה.
                                </p>
                            </div>
                        </div>

                    </div>

                }

            </div>


            <RevertButton onClick={() => revertHandler()} text="חזרה"/>
        </div>
    );
};

export default ProfilingHighMotivationLowEffortContent;