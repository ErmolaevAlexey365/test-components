import React from 'react';

import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingLongJobSearchReadyToContinueContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = () => {
        answerQuestion({
            answer: {
                type: "LongJobSearchReadyToContinue",
                questionIdentifier: "LongJobSearchReadyToContinue",
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <>
            <div className="relative flex grow flex-col justify-between">
                <div className="flex flex gap-[11px] min-h-[556px]">
                    <HelperIcon/>
                    <div className="flex flex-col mb-[33px] max-w-[592px]">
                        <div className="relative p-[8px] border-[#DADADA] border rounded-[8px]  mb-[15px]">
                            <div
                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                            </div>
                            <p className="mb-[25px]">
                                תודה על הכנות, אנחנו יודעים שזה לא פשוט. עכשיו, נוכל לדעת אילו כלים לתת לך כדי לצלוח את המכשולים, בדרך
                                לעבודה
                                הבאה.
                            </p>

                        </div>

                    </div>
                </div>
                <div className="absolute opacity-10 left-[-20px] bottom-[25%] w-full flex flex-col items-end gap-[20px]">
                    <div className="w-[30%] h-[18px] bg-[#5BE45F]"></div>
                    <div className="w-[50%] h-[18px] bg-[#FF4F66]"></div>
                    <div className="w-[70%] h-[18px] bg-[#62D4FF]"></div>
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

export default ProfilingLongJobSearchReadyToContinueContent;