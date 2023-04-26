import React, { useEffect, useState } from 'react';

import DefaultButton from "@/components/common/defaultButton";
import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingHighMotivationLowEffortContinueContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {


    const [readyToWork, setReadyToWork] = useState<boolean | null>(null)
    const [readyToWorkConfirm, setReadyToWorkConfirm] = useState<boolean | null>(null)

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "HighMotivationLowEffortContinue",
                questionIdentifier: "HighMotivationLowEffortContinue",
                continue: Boolean(readyToWorkConfirm),
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (readyToWorkConfirm !== null) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [readyToWorkConfirm])

    return (
        <div className="flex flex-col grow justify-between lg:px-[100px]">
            <div className="flex flex-col">
                <div className="flex flex-col mb-[33px] gap-[16px]">
                    <div className="flex gap-[11px]">
                        <HelperIcon/>
                        <div className="flex flex-col max-w-[592px]">
                            <div className="relative mb-[24px] p-[8px] border-[#DADADA] border rounded-[8px] ">
                                <div
                                    className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                </div>
                                <p className="mb-[25px] md:text-semimd">
                                    חיפוש עבודה הוא תהליך שדורש מאמץ והשקעה. עם זאת, ברור, שככל שמשקיעים יותר בתהליך ומשפרים את כלי החיפוש,
                                    גדל הסיכוי למצוא עבודה.
                                </p>
                                <p className="font-medium md:text-semimd">
                                    האם מתאים לך עכשיו לתת כתף לעצמך ולהשקיע מאמץ?
                                </p>
                            </div>
                            <div className="flex gap-[16px] ">
                                <DefaultButton selected={readyToWork!} text="ברור! בגלל זה אני פה" handleFunction={() => {
                                    setReadyToWork(true)
                                    setReadyToWorkConfirm(true)
                                }}/>
                                <DefaultButton selected={readyToWork !== null && !readyToWork} text="לא כרגע"
                                               handleFunction={() => {
                                                   setReadyToWork(false)
                                                   setReadyToWorkConfirm(null)
                                               }}/>
                            </div>
                        </div>
                    </div>

                </div>

                {(!readyToWork && readyToWork !== null) &&
                    <>
                        <div className="flex gap-[11px]">
                            <HelperIcon/>
                            <div className="flex w-full flex-col mb-[33px] max-w-[592px]">

                                <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] mb-[24px]">
                                    <div
                                        className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                    </div>
                                    <p className="font-medium md:text-semimd">
                                        שניפרד עכשיו כידידים?
                                    </p>
                                </div>

                                <div className="flex gap-[16px] text-xsm">
                                    <DefaultButton selected={readyToWorkConfirm !== null && !readyToWorkConfirm}
                                                   text="כן, להתראות"
                                                   handleFunction={() => setReadyToWorkConfirm(false)}/>
                                    <DefaultButton selected={readyToWorkConfirm!} text="לא, בואו נמשיך"
                                                   handleFunction={() => setReadyToWorkConfirm(true)}/>
                                </div>


                            </div>
                        </div>
                        {(!readyToWorkConfirm && readyToWorkConfirm !== null) &&
                            <div className="flex gap-[11px]">
                                <HelperIcon/>
                                <div className="flex w-full flex-col mb-[33px] md:max-w-[592px]">

                                    <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] mb-[15px]">
                                        <div
                                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                        </div>
                                        <p className="md:text-semimd">
                                            בסדר גמור. אנחנו ב- Day One תמיד פה בשבילך אם תשנה את דעתך.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>

            <RevertButton text="אחורה" onClick={() => revertHandler()}/>

        </div>
    );
};

export default ProfilingHighMotivationLowEffortContinueContent;