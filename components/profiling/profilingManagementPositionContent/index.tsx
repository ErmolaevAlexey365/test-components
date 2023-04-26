import React, { useEffect, useState } from 'react';
import Image from "next/image";

import DefaultButton from "@/components/common/defaultButton";
import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import lampIcon from "../../../../public/assets/profiling/lamp-icon.svg";

const profilingManagementPositionContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [hasManagementExperience, setHasManagementExperience] = useState<boolean>()
    const [openPositionList, setOpenPositionList] = useState<boolean | null>(null)
    const [position, setPosition] = useState<string>()

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "ManagementPosition",
                questionIdentifier: "ManagementPosition",
                hasManagementExperience,
                position,
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (hasManagementExperience && position || hasManagementExperience === false) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [hasManagementExperience, position])

    return (
        <div className="flex flex-col grow justify-between lg:px-[100px]">
            <div className="text-semimd md:text-md font-medium">
                <p className="mb-[16px]">
                    האם מילאתי תפקידי ניהול בשלוש
                    השנים האחרונות?
                </p>
                <div className="flex gap-[22px] mb-[40px] md:mb-[80px]">
                    <DefaultButton selected={hasManagementExperience} text="כן" handleFunction={() => {
                        setOpenPositionList(true)
                        setHasManagementExperience(true)
                    }}/>
                    <DefaultButton selected={hasManagementExperience === false} text="לא" handleFunction={() => {
                        setOpenPositionList(false)
                        setHasManagementExperience(false)
                    }}/>
                </div>
                {!openPositionList && openPositionList !== null && (
                    <div className="flex gap-[8px] md:mt-[-50px]">
                        <Image
                            src={lampIcon}
                            width={24}
                            height={18}
                            alt="arrow-icon"
                        />
                        <p className="text-sm font-normal">60% ממשתמשי המערכת הם כמוך!</p>

                    </div>

                )}
                {openPositionList &&
                    <>
                        <p className="mb-[26px]">הדרג הניהולי הבכיר ביותר שלי היה:</p>
                        <div className="flex flex-col gap-[16px] mb-[66px] md:flex-row">
                            <div className="w-full md:h-[98px] md:max-w-[455px]">
                                <RadioButton clickHandler={() => setPosition("Principal")} selected={position} name="Principal" text="ראשון"
                                             subText="הייתי ראש צוות או מנהל משמרת ו/או ניהלתי תוכן או פרויקט"/>
                            </div>
                            <div className="w-full md:h-[98px] md:max-w-[455px]">
                                <RadioButton clickHandler={() => setPosition("Medium")} selected={position} name="Medium" text="בינוני"
                                             subText="ניהלתי עובדים ו/או מנהלי דרג ראשון"/>
                            </div>
                            <div className="w-full md:h-[98px] md:max-w-[455px]">

                                <RadioButton clickHandler={() => setPosition("Senior")} selected={position} name="Senior" text="בכיר"
                                             subText="הייתי בין המנהלים הבכירים בארגון"/>
                            </div>

                        </div>
                    </>
                }
            </div>
            <RevertButton text="אחורה" onClick={() => revertHandler()}/>
        </div>
    );
};

export default profilingManagementPositionContent;