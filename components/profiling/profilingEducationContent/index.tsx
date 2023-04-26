import React, { useState } from 'react';

import CardImageButton from "@/components/common/cardImageButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import baImage from "../../../../public/assets/profiling/stepper/second-step/ba-image.png";
import diplomaImage from "../../../../public/assets/profiling/stepper/second-step/diploma-image.png";
import highSchoolImage from "../../../../public/assets/profiling/stepper/second-step/high-scool-image.png";
import masterDegreeImage from "../../../../public/assets/profiling/stepper/second-step/master-degree-image.png";
import practicalEngineerImage from "../../../../public/assets/profiling/stepper/second-step/practical-engineer-image.png";
import technicianImage from "../../../../public/assets/profiling/stepper/second-step/technician-image.png";

const ProfilingEducationContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [selectedEducation, setSelectedEducation] = useState<string[]>([]);

    const selectToggle = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        let educations = [...selectedEducation]

        if (educations.includes(value)) {
            setSelectedEducation(educations.filter((item) => item !== value));
            return;
        }

        educations.push(value)

        if (educations.length === 2) {
            if ((educations.includes('PracticalEngineer') && educations.includes('BA'))) {
                setSelectedEducation(educations);
                return;
            }
        }

        setSelectedEducation(educations.filter((item) => item === value));

    };

    const isDisabledHandler = () => {
        return !(selectedEducation[0]);
    }


    const onSubmit = async () => {
        answerQuestion({
            answer: {
                type: "Education",
                questionIdentifier: "Education",
                education: selectedEducation
            }
        })
    }

    return (
        <>
            <div className="flex flex-col grow justify-between lg:px-[80px]">
                <div>
                    <div className="mx-[-11px] md:mx-0 mb-[15px] md:mb-[30px]">
                        <p className="font-medium md:text-md">
                            מה ההשכלה שלי?
                        </p>
                        <div className="text-xsm md:text-sm">
                            <p>
                                יש לסמן רק תשובה אחת.<br className="md:hidden"/>
                                (אם אתה טכנאי/הנדסאי עם תואר אקדמי - יש לסמן גם וגם)
                            </p>

                        </div>
                    </div>
                    <div
                        className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[17px] justify-center md:gap-[20px] mb-[28px]">
                        <CardImageButton
                            imageSize="md:w-[59px]"
                            value="Diploma"
                            text="תיכונית ומטה"
                            img={diplomaImage}
                            id="1"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("Diploma")}
                        />
                        <CardImageButton
                            imageSize="md:w-[48px]"
                            value="HighSchool"
                            text="על תיכונית - לימודי תעודה"
                            img={highSchoolImage}
                            id="2"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("HighSchool")}
                        />
                        <CardImageButton
                            imageSize="md:w-[48px]"
                            value="Technician"
                            text="טכנאי"
                            img={technicianImage}
                            id="3"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("Technician")}
                        />
                        <CardImageButton
                            imageSize="md:w-[48px]"
                            value="PracticalEngineer"
                            text="הנדסאי"
                            img={practicalEngineerImage}
                            id="4"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("PracticalEngineer")}
                        />
                        <CardImageButton
                            imageSize="md:w-[68px]"
                            value="BA"
                            text="תואר ראשון"
                            img={baImage}
                            id="5"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("BA")}
                        />
                        <CardImageButton
                            imageSize="md:w-[68px]"
                            value="MasterDegree"
                            text="תואר שני ומעלה"
                            img={masterDegreeImage}
                            id="6"
                            selectToggle={selectToggle}
                            selected={selectedEducation.includes("MasterDegree")}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full ">
                <button disabled={isDisabledHandler()} onClick={onSubmit} type="button"
                        className="flex gap-[8px] bg-[#143E29] md:max-w-[132px] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                    קדימה
                </button>
            </div>
        </>
    );
};

export default ProfilingEducationContent;