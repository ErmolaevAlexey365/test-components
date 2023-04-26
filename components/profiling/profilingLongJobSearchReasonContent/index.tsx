import React, { useState } from 'react';

import CheckboxButton from "@/components/common/checkboxButton";
import HelperIcon from "@/components/common/helperIcon";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingLongJobSearchReasonContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [selectedLongJobSearchReason, setSelectedLongJobSearchReason] = useState<string[]>([]);


    const selectToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let jobSearchReason = [...selectedLongJobSearchReason]

        if (jobSearchReason.includes(value)) {
            setSelectedLongJobSearchReason(jobSearchReason.filter((item) => item !== value));
            return;
        }

        jobSearchReason.push(value)

        setSelectedLongJobSearchReason(jobSearchReason);
    };

    const revertHandler = async () => {
        revertAnswer()
    }

    const isDisabledHandler = () => {
        return !(selectedLongJobSearchReason);
    }

    const submitHandler = () => {
        answerQuestion({
            answer: {
                type: "LongJobSearchReason",
                questionIdentifier: "LongJobSearchReason",
                longJobSearchReason: selectedLongJobSearchReason,
            }
        })
    }

    return (
        <>
            <div className="flex flex-col grow justify-between">
                <div className="flex flex gap-[11px]">
                    <HelperIcon/>
                    <div className="flex flex-col mb-[58px]  max-w-[592px]">
                        <div className="relative p-[8px] mb-[16px] border-[#DADADA] border rounded-[8px] ">
                            <div
                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                            </div>
                            <p className="md:text-semimd">
                                אנחנו מבינים שלא קל ואף מייאש לחפש עבודה זמן רב ללא הצלחה אבל היי, הגעת למקום הנכון כדי לעבור את ההר הזה.

                            </p>
                            <p className="font-medium md:text-semimd">
                                אפשר לסמן יותר מסיבה אחת כמובן.
                            </p>
                            <p className="font-medium md:text-semimd">
                                איך אתה מסביר את זה לעצמך?
                            </p>
                        </div>
                        <div className="flex flex-col gap-[16px] ">
                            <CheckboxButton
                                value="NoResumeFeedback"
                                text="שלחתי הרבה קורות חיים ולא חזרו אליי"
                                id="1"
                                selected={selectedLongJobSearchReason.includes("NoResumeFeedback")}
                                selectToggle={selectToggle}
                            />
                            <CheckboxButton
                                value="BadInterviewExperience"
                                text="התראיינתי לא מעט, וקיבלתי תשובות שליליות"
                                id="2"
                                selected={selectedLongJobSearchReason.includes("BadInterviewExperience")}
                                selectToggle={selectToggle}
                            />
                            <CheckboxButton
                                value="LackDigitalSkills"
                                text="חסרות לי מיומנויות דיגיטליות"
                                id="3"
                                selected={selectedLongJobSearchReason.includes("LackDigitalSkills")}
                                selectToggle={selectToggle}
                            />
                            <CheckboxButton
                                value="AgeIssues"
                                text="לא התקבלתי בגלל הגיל"
                                id="4"
                                selected={selectedLongJobSearchReason.includes("AgeIssues")}
                                selectToggle={selectToggle}
                            />
                            <CheckboxButton
                                value="NoJobForMySkills"
                                text="לא מצאתי משרות שמתאימות לכישורים שלי"
                                id="5"
                                selected={selectedLongJobSearchReason.includes("NoJobForMySkills")}
                                selectToggle={selectToggle}
                            />
                            <CheckboxButton
                                value="DoNotKnow"
                                text="אני לא יודע"
                                id="6"
                                selected={selectedLongJobSearchReason.includes("DoNotKnow")}
                                selectToggle={selectToggle}
                            />
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

export default ProfilingLongJobSearchReasonContent;