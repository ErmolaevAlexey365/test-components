import React, { useEffect, useState } from 'react';

import DefaultButton from "@/components/common/defaultButton";
import HelperIcon from "@/components/common/helperIcon";
import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingWantToWorkAsFreelancerContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [wantToWorkAsFreelancer, setWantToWorkAsFreelancer] = useState<string>("")
    const [wantToWorkAsFreelancerConfirm, setWantToWorkAsFreelancerConfirm] = useState<boolean | null>(null)

    const sendDataHandler = async () => {

        const answer: {
            answer: {
                type: string,
                questionIdentifier: string,
                wantToWorkAsFreelancer: string,
                continue?: boolean
            }
        } = {
            answer: {
                type: "WantToWorkAsFreelance",
                questionIdentifier: "WantToWorkAsFreelance",
                wantToWorkAsFreelancer,
            }
        }

        if (wantToWorkAsFreelancer && wantToWorkAsFreelancerConfirm !== null) {
            answer.answer.continue = Boolean(wantToWorkAsFreelancerConfirm)
        }

        answerQuestion(answer)
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (wantToWorkAsFreelancer && wantToWorkAsFreelancer !== "Yes") {
            timeout = setTimeout(sendDataHandler, 500);
        }

        if (wantToWorkAsFreelancer && wantToWorkAsFreelancerConfirm !== null) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [wantToWorkAsFreelancer, wantToWorkAsFreelancerConfirm])

    return (
        <>
            <div className="flex flex-col grow justify-between md:px-[100px]">
                <div>
                    <p className="text-semimd md:text-md font-medium mb-[16px] md:mb-[32px]">האם חשבתי על האפשרות לעבוד כעצמאי?</p>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-[14px] md:mb-[80px]">

                        <RadioButton clickHandler={() => setWantToWorkAsFreelancer("No")} selected={wantToWorkAsFreelancer} name="No"
                                     subText="אני רוצה להיות רק שכיר"/>
                        <RadioButton clickHandler={() => setWantToWorkAsFreelancer("YesButAlsoEmployee")} selected={wantToWorkAsFreelancer}
                                     name="YesButAlsoEmployee"
                                     subText="כן, אבל הייתי רוצה להיות עצמאי ולשלב עבודה כשכיר"/>
                        <RadioButton clickHandler={() => setWantToWorkAsFreelancer("Considering")} selected={wantToWorkAsFreelancer}
                                     name="Considering"
                                     subText="אני מתלבט. יש לי תחביב או תחום התמחות שאני שוקל להפוך לעסק"/>
                        <RadioButton clickHandler={() => setWantToWorkAsFreelancer("Yes")} selected={wantToWorkAsFreelancer} name="Yes"
                                     subText="אני רוצה לעבוד רק כעצמאי"/>

                    </div>
                    {wantToWorkAsFreelancer === "Yes" &&
                        <div className="flex flex-col mt-[12px] mb-[73px]">
                            <div className="flex grow gap-[11px] mb-[27px]">
                                <HelperIcon/>
                                <div className="flex w-full flex-col md:max-w-[560px]">

                                    <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] w-full mb-[24px]">
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

                                    <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] w-full mb-[24px]">
                                        <div
                                            className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                                         border-r-[1px] border-[#DADADA] rounded-[1px]">
                                        </div>
                                        <p className="font-medium text-sm md:text-semimd">
                                            שניפרד עכשיו כידידים?
                                        </p>
                                    </div>

                                    <div className="flex w-full gap-[16px] text-xsm">
                                        <DefaultButton selected={wantToWorkAsFreelancerConfirm !== null && !wantToWorkAsFreelancerConfirm}
                                                       text="כן, להתראות"
                                                       handleFunction={() => setWantToWorkAsFreelancerConfirm(false)}/>
                                        <DefaultButton selected={wantToWorkAsFreelancerConfirm!} text="לא, בואו נמשיך"
                                                       handleFunction={() => setWantToWorkAsFreelancerConfirm(true)}/>
                                    </div>
                                </div>
                            </div>
                            {
                                (!wantToWorkAsFreelancerConfirm && wantToWorkAsFreelancerConfirm !== null) &&
                                <div className="flex gap-[11px]">
                                    <HelperIcon/>
                                    <div className="flex w-full flex-col md:max-w-[560px]">

                                        <div
                                            className="relative p-[8px] border-[#DADADA] border rounded-[8px] w-full">
                                            <div
                                                className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white
                                             border-t-[1px] border-r-[1px] border-[#DADADA] rounded-[1px]">
                                            </div>
                                            <p className="text-sm md:text-semimd">
                                                בסדר גמור. אנחנו ב- DayOne זמינים עבורך כשתחליט.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {wantToWorkAsFreelancer === "YesButAlsoEmployee" &&
                        <div className="flex gap-[11px] mb-[35px] mt-[20px]">
                            <HelperIcon/>
                            <div className="flex w-full flex-col md:max-w-[560px]">
                                <div className="relative p-[8px] border-[#DADADA] border rounded-[8px] w-full">
                                    <div
                                        className="absolute w-[10px] h-[10px] rotate-45 top-[15px] right-[-5.5px] bg-white border-t-[1px]
                                     border-r-[1px] border-[#DADADA] rounded-[1px]">
                                    </div>
                                    <p className="text-sm md:text-semimd">
                                        מצוין, נציג לך תוכן רלוונטי במפת הדרך שלך.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <RevertButton text="אחורה" onClick={() => revertHandler()}/>
        </>

    );
};

export default ProfilingWantToWorkAsFreelancerContent;