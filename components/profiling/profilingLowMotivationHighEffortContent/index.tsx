import React, { useEffect } from 'react';

import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingLowMotivationHighEffortContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = () => {
        answerQuestion({
            answer: {
                type: "LowMotivationHighEffort",
                questionIdentifier: "LowMotivationHighEffort",
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        timeout = setTimeout(sendDataHandler, 500);

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <div className="relative min-h-[556px] flex grow flex-col justify-between">
            <div className="flex gap-[11px]">
                <HelperIcon/>
                <div className="flex flex-col mb-[51px] max-w-[592px]">
                    <div className="relative p-[8px] border-[#DADADA] border rounded-[8px]  mb-[15px]">
                        <div
                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                        </div>
                        <p className="mb-[10px] md:text-semimd">
                            זה מוזר באופן חיובי ביותר - אולי המוטיבציה שלך נמוכה אבל באמת של החיים, אתה על זה לחלוטין ומחפש עבודה כאילו אין
                            מחר!
                        </p>
                        <p className="md:text-semimd">אנחנו לא יכולים לחכות לראות לאן תגיע אם המוטיבציה שלך תעלה, מה שאנחנו מקווים שיקרה
                            עכשיו איתנו.</p>
                    </div>
                </div>
            </div>
            <div className="absolute opacity-10 left-[-20px] bottom-[25%] w-full flex flex-col items-end gap-[20px] md:gap-[35px]">
                <div className="w-[30%] h-[18px] md:h-[35px] bg-[#5BE45F]"></div>
                <div className="w-[50%] h-[18px] md:h-[35px] bg-[#FF4F66]"></div>
                <div className="w-[70%] h-[18px] md:h-[35px] bg-[#62D4FF]"></div>
            </div>
            <RevertButton onClick={() => revertHandler()} text="חזרה"/>
        </div>
    );
};

export default ProfilingLowMotivationHighEffortContent;