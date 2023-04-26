import React, { useEffect, useState } from 'react';

import RevertButton from "@/components/common/revertButton";
import CardImageButtonWithRadio from "@/components/common/сardImageButtonWithRadio";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import tenPerson from "../../../../public/assets/profiling/stepper/third-step/1-10_person-img.png";
import tenMorePerson from "../../../../public/assets/profiling/stepper/third-step/11-30_person-img.png";
import thirtyMorePerson from "../../../../public/assets/profiling/stepper/third-step/31-50_person-img.png";
import fiftyMorePerson from "../../../../public/assets/profiling/stepper/third-step/50_person-img.png";


const ProfilingExternalSupportCapacityContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [externalSupportCapacity, setExternalSupportCapacity] = useState<string>();

    const selectToggle = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setExternalSupportCapacity(value);

    }

    const revertHandler = async () => {
        revertAnswer()
    }

    const sendDataHandler = async () => {
        answerQuestion({
            answer: {
                type: "ExternalSupportCapacity",
                questionIdentifier: "ExternalSupportCapacity",
                externalSupportCapacity: externalSupportCapacity
            }
        })
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (externalSupportCapacity) {
            timeout = setTimeout(sendDataHandler, 500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [externalSupportCapacity])

    return (
        <>
            <div className="flex flex-col justify-between grow lg:px-[100px]">
                <div>
                    <div className="mx-[-11px] mb-[15px] md:mb-[32px]">
                        <p className="font-medium text-semimd md:text-md max-w-[297px] md:max-w-max">
                            לכמה חברים או מכרים שלי יש לי אפשרות לפנות לעזרה בהשגת עבודה?
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[17px] mb-[28px]">
                        <CardImageButtonWithRadio
                            value="No"
                            text="אף אחד"
                            id="1"
                            selectToggle={selectToggle}
                            selected={externalSupportCapacity === "No"}
                        />
                        <CardImageButtonWithRadio
                            value="LessThanTen"
                            text="1-10"
                            img={tenPerson}
                            id="2"
                            selectToggle={selectToggle}
                            selected={externalSupportCapacity === "LessThanTen"}
                        />
                        <CardImageButtonWithRadio
                            value="LessThanThirty"
                            text="11-30"
                            img={tenMorePerson}
                            id="3"
                            selectToggle={selectToggle}
                            selected={externalSupportCapacity === "LessThanThirty"}
                        />
                        <CardImageButtonWithRadio
                            value="LessThanFifty"
                            text="31-50"
                            img={thirtyMorePerson}
                            id="4"
                            selectToggle={selectToggle}
                            selected={externalSupportCapacity === "LessThanFifty"}
                        />
                        <CardImageButtonWithRadio
                            value="MoreThanFifty"
                            text="מעל ל-50"
                            img={fiftyMorePerson}
                            id="5"
                            selectToggle={selectToggle}
                            selected={externalSupportCapacity === "MoreThanFifty"}
                        />

                    </div>
                </div>
            </div>
            <RevertButton text="אחורה" onClick={revertHandler}/>
        </>

    );
};

export default ProfilingExternalSupportCapacityContent;