import React from 'react';

import HelperIcon from "@/components/common/helperIcon";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingMotivationLevel4Content: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "MotivationLevel5",
                questionIdentifier: "MotivationLevel5",

            }
        })
    }

    return (
        <>
            <div className="flex relative flex-col grow justify-between md:text-semimd lg:px-[100px]">
                <div className="flex grow gap-[11px]">
                    <div className="flex grow items-start w-full min-h-[556px] ">
                        <div className="flex grow items-start md:items-center gap-[20px]">
                            <HelperIcon/>
                            <div className="flex flex-col w-full md:max-w-[560px]">
                                <div className="relative  md:justify-center p-[8px] border-[#DADADA] border rounded-[8px]  mb-[15px]">
                                    <div
                                        className="absolute w-[10px] h-[10px] rotate-45 top-[15px] md:top-[16px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                    </div>
                                    <p>
                                        מעולה. אני מרגישה את ההתלהבות שלך דרך המסך. בוא נמשיך.
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
            <div className="md:flex md:self-end">
                <button onClick={submitHandler} type="button"
                        className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px] py-[14px] rounded-[8px]">
                    הלאה לשלב הבא
                </button>
            </div>
        </>

    );
};

export default ProfilingMotivationLevel4Content;