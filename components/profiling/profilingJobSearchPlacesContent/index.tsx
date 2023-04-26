import React, { useState } from 'react';

import CheckboxButton from "@/components/common/checkboxButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingJobSearchPlacesContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [selectedJobSearchPlaces, setSelectedJobSearchPlaces] = useState<string[]>([]);
    const [otherPlace, setOtherPlace] = useState<string>("");

    const selectToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let jobSearchPlaces = [...selectedJobSearchPlaces]

        if (jobSearchPlaces.includes(value)) {
            setSelectedJobSearchPlaces(jobSearchPlaces.filter((item) => item !== value));
            return;
        }

        jobSearchPlaces.push(value)

        setSelectedJobSearchPlaces(jobSearchPlaces);
    };

    const revertHandler = async () => {
        revertAnswer()
    }

    const isDisabledHandler = () => {
        return !(selectedJobSearchPlaces[0]);
    }

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "JobSearchPlaces",
                questionIdentifier: "JobSearchPlaces",
                jobSearchPlaces: selectedJobSearchPlaces,
                otherPlace
            }
        })
    }


    return (
        <>
            <div className="flex grow justify-between flex-col lg:px-[100px]">

                <div>
                    <div>
                        <p className="font-medium text-semimd">
                            איפה אני מחפש את העבודה הבאה שלי?
                        </p>
                        <p className="xsm mb-[20px] md:mb-[32px]">
                            אפשר לסמן יותר מתשובה אחת
                        </p>
                    </div>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-[14px]">

                        <CheckboxButton
                            value="JobSites"
                            text="אתרי דרושים"
                            id="1"
                            selected={selectedJobSearchPlaces.includes("JobSites")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="Companies"
                            text="חברות כוח אדם"
                            id="2"
                            selected={selectedJobSearchPlaces.includes("Companies")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="Press"
                            text="עיתונות כתובה"
                            id="3"
                            selected={selectedJobSearchPlaces.includes("Press")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="EmploymentServices"
                            text="שירות התעסוקה"
                            id="4"
                            selected={selectedJobSearchPlaces.includes("EmploymentServices")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="SocialNetworks"
                            text="רשתות חברתיות (פייסבוק, לינקדאין)"
                            id="5"
                            selected={selectedJobSearchPlaces.includes("SocialNetworks")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="Internet"
                            text="חיפוש באינטרנט"
                            id="6"
                            selected={selectedJobSearchPlaces.includes("Internet")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="GuidanceCenters"
                            text="מרכזי הכוון תעסוקתיים"
                            id="7"
                            selected={selectedJobSearchPlaces.includes("GuidanceCenters")}
                            selectToggle={selectToggle}
                        />
                        <CheckboxButton
                            value="ConsultantOrCoach"
                            text="יועץ/קואוצ'ר (מאמן)"
                            id="8"
                            selected={selectedJobSearchPlaces.includes("ConsultantOrCoach")}
                            selectToggle={selectToggle}
                        />
                        <label
                            className="flex"
                            htmlFor="9">
                            <div
                                className={`${(selectedJobSearchPlaces.includes("Other")) ? `border-[#62D4FF] bg-[#F7FDFF]` : `border-transparent`} border-[4px] md:border-[5px] flex w-full flex-col px-[12px]
                 py-[8px] md:p-[9px] mb-[28px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}>
                                <div className="flex gap-[16px]">
                                    <input
                                        checked={(selectedJobSearchPlaces.includes("Other"))}
                                        className="accent-[#143E29]"
                                        id="9"
                                        value="Other"
                                        onChange={(e) => {
                                            selectToggle(e)
                                        }}
                                        type="checkbox"/>
                                    <p>
                                        אני מחפש בצורה אחרת:
                                    </p>
                                </div>
                                {selectedJobSearchPlaces.includes("Other") &&
                                    <div className="flex flex-col pr-[34px]">
                                        <input
                                            value={otherPlace}
                                            onChange={(e) => setOtherPlace(e.target.value)}
                                            placeholder="כאן המקום לכתוב..."
                                            className="py-[9px] px-[12px] h-[40px] border-solid border border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px] w-full lg:hover:border-[#62D4FF]"
                                            type="text"
                                        />
                                    </div>
                                }
                            </div>
                        </label>
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

export default ProfilingJobSearchPlacesContent;