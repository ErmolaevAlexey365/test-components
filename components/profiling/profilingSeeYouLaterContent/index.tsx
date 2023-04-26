import React from 'react';

import HelperIcon from "@/components/common/helperIcon";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingSeeYouLaterContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "SeeYouLater",
                questionIdentifier: "SeeYouLater",
            }
        })
    }

    return (
        <div className="relative min-h-[556px] flex flex-col grow justify-between">
            <div className="flex grow gap-[11px]">
                <div className="flex grow items-start w-full min-h-[556px] lg:px-[100px]">
                    <div className="flex grow items-start md:items-center gap-[20px]">
                        <HelperIcon/>
                        <div className="flex self-center relative p-[8px] border-[#DADADA] border rounded-[8px] w-full md:max-w-[592px]">
                            <div
                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] md:top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                            </div>
                            <p>
                                בסדר גמור. אנחנו ב- DayOne זמינים עבורך כשתחליט.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-center gap-[16px] text-xsm">
                <button onClick={submitHandler}
                        className="w-full md:max-w-[266px] rounded-[8px] px-[12px] py-[21px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] md:shadow-none md:border md:border-[#143E29]">
                    תודה על ההבנה, נתראה
                </button>
            </div>
            <div className="absolute opacity-10 left-[-20px] bottom-[25%] w-full flex flex-col items-end gap-[20px] md:gap-[35px]">
                <div className="w-[30%] h-[18px] md:h-[35px] bg-[#5BE45F]"></div>
                <div className="w-[50%] h-[18px] md:h-[35px] bg-[#FF4F66]"></div>
                <div className="w-[70%] h-[18px] md:h-[35px] bg-[#62D4FF]"></div>
            </div>
        </div>
    );
};

export default ProfilingSeeYouLaterContent;