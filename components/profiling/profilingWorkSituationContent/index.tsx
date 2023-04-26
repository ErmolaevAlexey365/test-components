import React, { useState } from 'react';
import { Slider, SliderProps } from "@mui/material";
import { styled } from '@mui/material/styles';

import RadioButton from "@/components/common/radioButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const marks = [
    {
        value: 0,
        label: '24',
        position: 'reverse'
    },
    {
        value: 24,
        label: '0',
        position: 'reverse'
    },
];

interface StyledSliderProps extends SliderProps {
    labelPosition?: {
        label: string,
        before: string
    };
}

const StyledSlider = styled(Slider, {
    shouldForwardProp: (prop) => prop !== 'labelPosition',
})<StyledSliderProps>(({labelPosition, theme}) => ({
    ...((labelPosition || labelPosition === 0) && {
        height: "12px",
        color: "red",
        ".MuiSlider-track": {
            backgroundColor: "#DADADA",
            border: "none",
            left: "-2px!important"
        },
        ".MuiSlider-thumb": {
            backgroundColor: "#143E29",
            border: "4px solid white",
            width: "26px",
            height: "26px"
        },
        ".MuiSlider-rail": {
            backgroundColor: "#143E29!important",
        },
        ".MuiSlider-mark": {
            backgroundColor: "transparent",
        },
        ".MuiSlider-valueLabelOpen": {
            position: "relative",
            left: labelPosition?.label || "-47px",
            backgroundColor: "white",
            padding: 0,
            opacity: 100,
            boxShadow: "0px 0px 16px rgba(20,62,41,0.2);"
        },
        ".MuiSlider-valueLabelOpen::before": {
            position: "absolute",
            left: labelPosition?.before,
        },
        ".MuiSlider-valueLabel": {
            backgroundColor: "white",
            transition: "none"
        }
    }),
}));


const profilingWorkSituationContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [workSituation, setWorkSituation] = useState<string>()
    const [sliderValue, setSliderValue] = useState<number | number[]>(24)
    const [labelPosition, setLabelPosition] = useState<{
        label: string,
        before: string
    }>({
        label: "-40px",
        before: "90px"
    })

    const sliderLabelPositionHandler = (value: number | number[]) => {
        if (value === 24) {
            setLabelPosition({...labelPosition, label: "-40px", before: "90px"})
        }
        if (value > 0 && value < 24) {
            setLabelPosition({...labelPosition, label: "0", before: "50%"})
        }
        if (value === 0) {
            setLabelPosition({...labelPosition, label: "40px", before: "10px"})
        }
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    const isDisabledHandler = () => {
        return !(workSituation);
    }

    function valueLabelFormat(value: number) {
        let valueMessage = "חודשים"
        let scaledValue = 24 - value;

        if (value === 24) {
            valueMessage = "אני רק מתחיל"
        }

        if (value === 0) {
            valueMessage = "מעל שנה"
        }

        return <div
            className="flex justify-center items-center p-[8px] bottom-[0px] left-[-50px] w-[100px]  text-black h-[38px]">
            {`${valueMessage} ${value !== 24 && value !== 0 ? scaledValue : ""}`}
        </div>;
    }

    const submitHandler = () => {
        let answer: {
            answer: {
                type: string,
                questionIdentifier: string,
                workSituation?: string,
                jobSearchDuration?: number
            }
        } = {
            answer: {
                type: "WorkSituation",
                questionIdentifier: "WorkSituation",
                workSituation,
                jobSearchDuration: 24 - +sliderValue
            }
        }

        if (!(24 - +sliderValue) && workSituation !== "BetweenJobs") {
            delete answer?.answer.jobSearchDuration
        }

        answerQuestion(answer)
    }

    return (
        <>
            <div className="flex flex-col grow justify-between lg:px-[100px]">
                <div>
                    <p className="text-semimd font-medium mb-[15px]">
                        איפה אני כרגע מבחינת עבודה?
                    </p>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-[16px] mb-[44px]">
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setWorkSituation("BetweenJobs")} selected={workSituation} name="BetweenJobs"
                                         subText="אני בין עבודות"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setWorkSituation("PartTimeEmployee")} selected={workSituation}
                                         name="PartTimeEmployee"
                                         subText="עובד כשכיר במשרה חלקית"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setWorkSituation("FullTimeEmployee")} selected={workSituation}
                                         name="FullTimeEmployee"
                                         subText="עובד כשכיר במשרה מלאה"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setWorkSituation("Freelancer")} selected={workSituation} name="Freelancer"
                                         subText="אני עצמאי"/>
                        </div>
                        <div className="w-full md:h-[76px] md:max-w-[455px]">
                            <RadioButton clickHandler={() => setWorkSituation("EmployeeAndFreelancer")} selected={workSituation}
                                         name="EmployeeAndFreelancer"
                                         subText="גם שכיר וגם עצמאי"/>
                        </div>
                    </div>
                    {workSituation === "BetweenJobs" &&
                        <StyledSlider labelPosition={labelPosition}
                                      defaultValue={24}
                                      max={24}
                                      step={1}
                                      value={sliderValue}
                                      onChange={(e, v) => {
                                          setSliderValue(v)
                                          sliderLabelPositionHandler(v)
                                      }}
                                      valueLabelFormat={valueLabelFormat}
                                      marks={marks}
                                      track="inverted"
                                      valueLabelDisplay="on"
                                      className="container"
                        />
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

export default profilingWorkSituationContent;