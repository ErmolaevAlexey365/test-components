import React, { useState } from 'react';

import DefaultButton from "@/components/common/defaultButton";
import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingReadyToWorkAsEmployeeAnswer: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [readyToWorkAsEmployee, setReadyToWorkAsEmployee] = useState<boolean | null>(null)
    const [readyToWorkAsEmployeeConfirm, setReadyToWorkAsEmployeeConfirm] = useState<boolean | null>(null)

    const revertHandler = async () => {
        revertAnswer()
    }

    const isDisabledHandler = () => {
        return !(readyToWorkAsEmployee || readyToWorkAsEmployeeConfirm !== null);
    }

    const submitHandler = async () => {
        await answerQuestion({
            answer: {
                type: "ReadyToWorkAsEmployee",
                questionIdentifier: "ReadyToWorkAsEmployee",
                continue: Boolean(readyToWorkAsEmployeeConfirm)
            }
        })
    }

    return (
        <>
            <div className="flex flex-col min-h-[556px] grow justify-between lg:px-[100px]">
                <div className="flex flex-col">
                    <div className="flex flex-col mb-[40px] md:mb-[80px] gap-[16px] max-w-[454px]">
                        <p className="text-semimd md:text-md">יש לי כוונה למצוא עבודה כשכיר?</p>
                        <div className="flex gap-[16px] text-xsm">
                            <DefaultButton selected={readyToWorkAsEmployee!} text="כן" handleFunction={() => {
                                setReadyToWorkAsEmployee(true)
                                setReadyToWorkAsEmployeeConfirm(true)
                            }}/>
                            <DefaultButton selected={readyToWorkAsEmployee !== null && !readyToWorkAsEmployee} text="לא"
                                           handleFunction={() => {
                                               setReadyToWorkAsEmployee(false)
                                               setReadyToWorkAsEmployeeConfirm(null)
                                           }}/>
                        </div>
                    </div>
                    {readyToWorkAsEmployee &&
                        <div className="flex gap-[11px]">
                            <HelperIcon/>
                            <div className="flex flex-col mb-[58px] max-w-[592px]">
                                <div className="relative p-[8px] md:p-[12px] border border-[#DADADA] rounded-[8px] ">
                                    <div
                                        className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                                     border-r-[1px] border-[#DADADA] rounded-[1px]">
                                    </div>
                                    <p className="md:text-md">
                                        כדאי לדעת שמעבר מהלך רוח של עצמאי לשכיר אינו פשוט, וכרגע, אנחנו לא מתעסקים בו. מה שכן נוכל לעשות,
                                        הוא
                                        לשפר את המוכנות שלך ולצייר לך את מפת הדרך ל- DayOne בסטטוס של שכיר.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                    {(!readyToWorkAsEmployee && readyToWorkAsEmployee !== null) &&
                        <>
                            <div className="flex gap-[11px]">
                                <HelperIcon/>
                                <div className="flex w-full flex-col mb-[33px] max-w-[592px]">

                                    <div className="relative p-[8px] border-[#DADADA] border rounded-[8px]  mb-[15px]">
                                        <div
                                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                                         border-r-[1px] border-[#DADADA] rounded-[1px]">
                                        </div>
                                        <p className="text-sm md:text-semimd">
                                            כרגע, אנו מתרכזים בעזרה לשכירים. מה שנעשה הוא להפנות אותך להכוונה <a
                                            className="text-[#0066FF] underline">במעו"ף</a> ולאחל לך בהצלחה.
                                        </p>
                                        <p className="font-medium text-sm md:text-semimd">בהצלחה. שניפרד עכשיו כידידים?</p>
                                    </div>

                                    <div className="flex gap-[16px] text-xsm">
                                        <DefaultButton selected={readyToWorkAsEmployeeConfirm !== null && !readyToWorkAsEmployeeConfirm}
                                                       text="כן, להתראות"
                                                       handleFunction={() => setReadyToWorkAsEmployeeConfirm(false)}/>
                                        <DefaultButton selected={readyToWorkAsEmployeeConfirm!} text="לא, בעצם, תראו לי משרות"
                                                       handleFunction={() => setReadyToWorkAsEmployeeConfirm(true)}/>
                                    </div>


                                </div>
                            </div>
                            {readyToWorkAsEmployeeConfirm &&
                                <div className="flex gap-[11px]">
                                    <HelperIcon/>
                                    <div className="flex w-full flex-col mb-[58px]">
                                        <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] max-w-[258px]">
                                            <div
                                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white
                                             border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                            </div>
                                            <p className="md:text-semimd">
                                                מעולה, קדימה לעבודה.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }
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

export default ProfilingReadyToWorkAsEmployeeAnswer;