import React, { FC, useEffect, useRef, useState } from 'react';
import Image from "next/image";

import CardWorkValue from '@/components/common/cardWorkValue';
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import back from "../../../../public/assets/proffesional-profiling/back.svg";


const ProfilingWorkValuesContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [workValues, setWorkValues] = useState<any>([])
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuShowRef = useRef<HTMLDivElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true)
    const [questionsWorkValues, setQuestionsWorkValues] = useState<[]>([])
    const [errorIndexes, setErrorIndexes] = useState([]);


    const checkForDuplicates = () => {
        const valuesArray = [...workValues];
        
        const duplicates: any = [];
        for (let i = 0; i < valuesArray.length; i++) {
            if (
                valuesArray.filter((value) => value.value === valuesArray[i].value).length > 1 &&
                !duplicates.includes(workValues[i].value)
            ) {
                duplicates.push(workValues[i]);
            }
        }
        return duplicates
    };

    useEffect(() => {
        setErrorIndexes(checkForDuplicates())
    }, [workValues])


    const selectedValuesHandler = (value: string, id: number) => {
        setWorkValues((prevWorkValues: any) => {
            const workValuesArr = [...prevWorkValues]
            if (workValuesArr.some((obj => obj.valueId === id))) {
                let objIndex = workValuesArr.findIndex((obj => obj.valueId === id))
                workValuesArr[objIndex].value = value
            } else {
                workValuesArr.push({valueId: id, value: value});
            }
            return workValuesArr
        });
    };


    useEffect(() => {
        (workValues.length === 6 && errorIndexes.length === 0) ?
            setDisabled(false) :
            setDisabled(true)
    }, [workValues, errorIndexes])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuRef]);

    useEffect(() => {
        userProfProfilingService.getCurrentQuestion().then(res => {
            setQuestionsWorkValues(res.question.workValues)
        })

    }, [])

    useEffect(() => {
        if (isMenuOpen && menuShowRef.current !== null) {

            const {bottom, height} = menuShowRef.current
                ? menuShowRef.current.getBoundingClientRect()
                : {bottom: 0, height: 0};
            const showAbove = bottom + height > window.innerHeight;

            const menuTop = menuShowRef.current.offsetTop;

            if (showAbove) {
                menuShowRef.current.style.bottom = `${menuTop}px`;
            } else {
                menuShowRef.current.style.top = `${menuTop}px`;
            }
        }
    }, [isMenuOpen]);

    const submitHandler = async () => {        
        answerQuestion({
            answer: {
                type: "PSWorkValues",
                questionIdentifier: "PSWorkValues",
                workValueItems: workValues
            }
        })
    }

    return (
        <section id="main-section" dir="rtl">
            <div className="container">
                <div className="flex flex-col">
                    <p className="font-medium text-[18px] text-[#282421] mt-[20px]">חשוב לי למצוא עבודה כי...</p>
                    <p className="text-[#282421]">בחרנו 6 סיבות טובות. נבקש ממך לדרג אותן מהחשובה ביותר עבורך (1) ועד לפחות חשובה (6).
                        חשוב
                        לדעת: אין אפשרות לתת את אותו הדירוג לשתי סיבות.</p>

                    {
                        questionsWorkValues.map((elem: { id: number, desc_he: string, name_he: string }, index) => (
                                <CardWorkValue errorIndexes={errorIndexes} workValues={workValues} id={elem.id} nameField="הדירוג שלי"
                                               key={index} desc={elem.desc_he}
                                               selectedValuesHandler={selectedValuesHandler}
                                />
                            )
                        )
                    }


                    <div className="flex mt-[40px] mb-[20px] lg:justify-between 2lg:max-w-[1168px] lg:w-full lg:self-center lg:m-0 lg:py-[28px]">
                        <button onClick={revertAnswer}
                                className="rounded-[8px] p-[14px] max-w-[106px] min-w-[106px] text-[#143E29] border border-[#143E29] lg:min-w-[148px] font-medium">
                            <div className="flex gap-[8px] cursor-pointer justify-center">
                                <Image
                                    src={back}
                                    width={14}
                                    height={14}
                                    alt="info"
                                    className="mt-[4px]"
                                />
                                חזרה
                            </div>
                        </button>
                        <button type="button" onClick={submitHandler} disabled={disabled}
                                className={`${disabled ? "bg-[#C2C2C2]" : "bg-[#143E29]"} w-full mr-[16px] rounded-[8px] p-[14px] text-white font-medium lg:max-w-[148px] lg:mr-0`}>
                            קדימה
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilingWorkValuesContent;