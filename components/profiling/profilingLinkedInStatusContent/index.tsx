import React, { useEffect, useState } from 'react';

import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const profilingLinkedInStatusContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [linkedInStatus, setLinkedInStatus] = useState<string>()

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "LinkedIn",
                questionIdentifier: "LinkedIn",
                linkedInStatus,
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (linkedInStatus) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [linkedInStatus])

    return (
        <div className="flex flex-col grow justify-between">
            <div>
                <p className="font-medium md:text-md mb-[16px] md:mb-[36px]">מה המצב שלי כרגע מבחינת פרופיל לינקדאין?</p>
                <div className="flex flex-col gap-[14px] md:flex-row md:flex-wrap">
                    <div className="w-full md:h-[76px] md:max-w-[455px]">
                        <RadioButton clickHandler={() => setLinkedInStatus("No")} selected={linkedInStatus} name="No"
                                     subText="אין לי מושג מה זה לינקדאין אז אין
לי גם פרופיל שם"/>
                    </div>
                    <div className="w-full md:h-[76px] md:max-w-[455px]">
                        <RadioButton clickHandler={() => setLinkedInStatus("Poor")} selected={linkedInStatus} name="Poor"
                                     subText="יש לי פרופיל לינקדאין, אבל הוא לא
מעודכן/דל בתוכן"/>
                    </div>
                    <div className="w-full md:h-[76px] md:max-w-[455px]">
                        <RadioButton clickHandler={() => setLinkedInStatus("Medium")} selected={linkedInStatus} name="Medium"
                                     subText="יש לי פרופיל לינקדאין מעודכן, אבל
איני בטוח עד כמה הוא טוב"/>
                    </div>
                    <div className="w-full md:h-[76px] md:max-w-[455px]">
                        <RadioButton clickHandler={() => setLinkedInStatus("Good")} selected={linkedInStatus} name="Good"
                                     subText="יש לי פרופיל לינקדאין מקצועי ומעולה"/>
                    </div>
                </div>
            </div>


            <RevertButton text="אחורה" onClick={() => revertHandler()}/>
        </div>
    );
};

export default profilingLinkedInStatusContent;