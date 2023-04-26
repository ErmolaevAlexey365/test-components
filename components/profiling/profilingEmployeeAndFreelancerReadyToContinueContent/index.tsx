import React, { useState } from 'react';

import DefaultButton from "@/components/common/defaultButton";
import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingEmployeeAndFreelancerReadyToContinueContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [continueAnswer, setContinueAnswer] = useState<boolean | null>(null)

    const submitHandler = async () => {
        await answerQuestion({
            answer: {
                type: "ReadyToContinue",
                questionIdentifier: "ReadyToContinue",
                continue: continueAnswer
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    const isDisabledHandler = () => {
        return !(continueAnswer !== null);
    }

    return (
        <>
            <div className="flex flex-col grow justify-between lg:px-[100px]">
                <div className="flex gap-[11px] min-h-[556px]">
                    <HelperIcon/>
                    <div className="flex flex-col mb-[51px] max-w-[592px]">
                        <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] mb-[15px]">
                            <div
                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                            </div>
                            <p className="md:text-semimd">
                                חיפוש עבודה זו עבודה. ככל שמשקיעים יותר ומשפרים את כלי החיפוש, גדל הסיכוי למצוא עבודה.
                            </p>
                            <p className="font-medium md:text-semimd">
                                האם אתה מוכן להשקיע את הזמן והאנרגיה הנדרשים בכדי למצוא עבודה?
                            </p>

                        </div>
                        <div className="flex gap-[16px] text-xsm">
                            <DefaultButton selected={continueAnswer}
                                           text="ברור! בגלל זה אני פה"
                                           handleFunction={() => setContinueAnswer(true)}/>
                            <DefaultButton selected={!continueAnswer && continueAnswer !== null}
                                           text="כן, להתראות"
                                           handleFunction={() => setContinueAnswer(false)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-[16px]">
                <div className="max-w-[106px]">
                    <RevertButton text="אחורה" onClick={() => revertHandler()}/>
                </div>
                <div className="w-full md:max-w-[132px]">
                    <button disabled={isDisabledHandler()} onClick={submitHandler} type="button"
                            className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                        קדימה
                    </button>
                </div>
            </div>
        </>

    );
};

export default ProfilingEmployeeAndFreelancerReadyToContinueContent;