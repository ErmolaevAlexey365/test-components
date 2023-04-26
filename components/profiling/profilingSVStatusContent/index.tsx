import React, { useEffect, useState } from 'react';

import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingSVStatusContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [cvStatus, setCVStatus] = useState<string>()

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "CVStatus",
                questionIdentifier: "CVStatus",
                cvStatus,
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (cvStatus) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [cvStatus])

    return (
        <>
            <div className="flex flex-col grow justify-between md:px-[100px]">
                <div>
                    <p className="font-medium md:text-md mb-[16px] md:mb-[36px]">מה המצב שלי כרגע מבחינת קורות חיים?</p>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-[14px]">
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setCVStatus("No")} selected={cvStatus} name="No"
                                         subText="אין לי קורות חיים בכלל"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setCVStatus("Poor")} selected={cvStatus} name="Poor"
                                         subText="יש לי קורות חיים, אבל הם לא מעודכנים"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setCVStatus("Medium")} selected={cvStatus} name="Medium"
                                         subText="יש לי קורות חיים מעודכנים, אבל לא
בטוח האם הם כתובים באופן מקצועי"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setCVStatus("Good")} selected={cvStatus} name="Good"
                                         subText="יש לי קורות חיים שכתובים מעולה"/>
                        </div>
                    </div>

                </div>


            </div>
            <RevertButton text="אחורה" onClick={() => revertHandler()}/>
        </>

    );
};

export default ProfilingSVStatusContent;