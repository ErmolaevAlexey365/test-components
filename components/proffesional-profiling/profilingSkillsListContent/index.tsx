import React, { FC, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "next/image";

import AdditionalSkills from '@/components/common/additionalSkills';
import ModalLayout from '@/components/common/ModalLayout';
import ModalLayoutFullScreen from '@/components/common/ModalLayoutFullScreen';
import SkillAbilityCardComponent from '@/components/common/skillAbilityCardComponent';
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import back from "../../../../public/assets/proffesional-profiling/back.svg";
import plus from "../../../../public/assets/proffesional-profiling/plus.svg";
import awesomeSmile from "../../../../public/assets/proffesional-profiling/stepper/awesome-smile.svg";
import goodSmile from "../../../../public/assets/proffesional-profiling/stepper/good-smile.svg";

const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

const ProfilingSkillsListContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [currQuest, setCurrQuest] = useState<any>()
    const [modal, setModal] = useState<boolean>(false)
    const [modalAwesome, setModalAwesome] = useState<boolean>(false)
    const [modalGood, setModalGood] = useState<boolean>(false)
    const [selectedJobSearchPlaces, setSelectedJobSearchPlaces] = useState<string[]>([]);
    const [elements, setElements] = useState<any>([]);
    const [additionalSkills, setAdditionalSkills] = useState<any>()
    const [toggleCategory, setToggleCategory] = useState<boolean>(false)

    const [elementsConverted, setElementsConverted] = useState<any>({
        "4": [],
        "3": []
    });

    useEffect(() => {
        setElementsConverted({
            "4":
                elements.filter((el: any) => el.evaluation == 4)
            ,
            "3":
                elements.filter((el: any) => el.evaluation == 3)
            ,
        })
    }, [elements])


    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const listCopy: any = {...elementsConverted};

        const sourceList = listCopy[result.source.droppableId];
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
        listCopy[result.source.droppableId] = newSourceList;
        const destinationList = listCopy[result.destination.droppableId];
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );

        let updateEvaluationToAwesome = listCopy["4"].map((el: any) => (
            el.evaluation === 3
                ? {...el, evaluation: 4}
                : el
        ));

        let updateEvaluationToGood = listCopy["3"].map((el: any) => (
            el.evaluation === 4
                ? {...el, evaluation: 3}
                : el
        ));

        setElements([...updateEvaluationToAwesome.concat(...updateEvaluationToGood)]);
    };

    const removeCard = (index: number, group: string) => {
        if (elementsConverted[group].length !== 1) {
            group === "4" ?
                setElements([...elementsConverted[group].slice(0, index), ...elementsConverted[group].slice(index + 1).concat(...elementsConverted["3"])]) :
                setElements([...elementsConverted[group].slice(0, index), ...elementsConverted[group].slice(index + 1).concat(...elementsConverted["4"])])
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        let resultSkills: any = []
        elements.forEach((el: any) => {
            let objSkill: any = {};
            objSkill["skillId"] = el.skill.id
            objSkill["evaluation"] = el.evaluation
            resultSkills.push(objSkill)
        })

        answerQuestion({
            answer: {
                type: "PSSkillsConfirm",
                questionIdentifier: "PSSkillsConfirm",
                resultSkills: resultSkills
            }
        })
    }

    const revertHandler = async (e: any) => {
        e.preventDefault()

        revertAnswer()
    }

    useEffect(() => {
        userProfProfilingService.getCurrentQuestion().then(res => {
            setCurrQuest(res.question)
            let newArray = (res.question as any).skills.filter((el: any) => el.evaluation >= 3)
            setElements(newArray)
        })
    }, [])

    useEffect(() => {
        additionalSkills &&
        setElements([
            ...elements,
            {
                skill: additionalSkills,
                evaluation: additionalSkills.evaluation
            }
        ])

    }, [additionalSkills])

    return (
        <>
            <section id="main-section" dir="rtl">
                <div className="container">
                    <div className="flex flex-col">
                        <p className="font-medium text-[#282421] mb-[8px] mt-[20px]">
                            אוקיי, והנה רשימת הכישורים החזקים שלך
                        </p>
                        <p className="font-normal text-[#282421] mb-[20px]">
                            על בסיס ההגדרות שלך, הכנו את רשימת היכולות שבהן אתה ממש טוב. שים לב <span
                            className="text-semimd">&#x2665;</span> שווה לקחת רגע כדי
                            לדייק את הרשימה. למה? כי
                            היא תשמש לזיהוי ההזדמנויות שנציג לך בסוף התהליך. אפשר להסיר ולהוסיף כישורים.
                        </p>

                        <DragDropContext onDragEnd={onDragEnd}>
                        <div className="lg:flex lg:justify-between">
                            <div className="lg:flex lg:flex-col lg:items-center w-full">
                                <div className="flex justify-between">
                                    <div className="flex gap-[8px] mb-[16px] items-center cursor-pointer">
                                        <Image
                                            src={awesomeSmile}
                                            width={28}
                                            height={28}
                                            alt="awesome smile"
                                        />
                                        <p className="text-xsm text-[#143E29]">
                                            אני מעולה בזה!
                                        </p>
                                    </div>
                                    <div className="flex gap-[8px] mb-[16px] items-center cursor-pointer lg:hidden"
                                         onClick={() => setModalAwesome(true)}>
                                        <Image
                                            src={plus}
                                            width={14}
                                            height={14}
                                            alt="plus"
                                        />
                                        <p className="text-xsm text-[#0066FF]">
                                            עוד כישורים
                                        </p>
                                    </div>
                                </div>
                                <Droppable droppableId="4" key="4">
                                    {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {elementsConverted["4"]?.map((item: any, index: any) => (
                                                <Draggable key={item.skill.original_name_he} draggableId={item.skill.original_name_he}
                                                           index={index}>
                                                    {(provided) => {
                                                        return (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >

                                                                <SkillAbilityCardComponent key={index}
                                                                                           removeCard={() => removeCard(index, "4")}
                                                                                           title={item.skill.original_name_he}/>
                                                            </div>
                                                        );
                                                    }}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                                <div className="hidden lg:flex gap-[8px] mb-[16px] items-center cursor-pointer" onClick={() => setModalAwesome(true)}>
                                    <Image
                                        src={plus}
                                        width={14}
                                        height={14}
                                        alt="plus"
                                    />
                                    <p className="text-xsm text-[#0066FF]">
                                        עוד יכולות
                                    </p>
                                </div>
                            </div>

                            <div className="lg:flex lg:flex-col lg:items-center w-full">
                                <div className="flex justify-between">
                                    <div className="flex gap-[8px] mb-[16px] items-center cursor-pointer">
                                        <Image
                                            src={goodSmile}
                                            width={28}
                                            height={28}
                                            alt="good smile"
                                        />
                                        <p className="text-xsm text-[#143E29]">
                                            זה ממש אני
                                        </p>
                                    </div>
                                    <div className="flex gap-[8px] mb-[16px] items-center cursor-pointer lg:hidden"
                                         onClick={() => setModalGood(true)}>
                                        <Image
                                            src={plus}
                                            width={14}
                                            height={14}
                                            alt="good smile"
                                        />
                                        <p className="text-xsm text-[#0066FF]">
                                            עוד כישורים
                                        </p>
                                    </div>
                                </div>
                                <Droppable droppableId="3" key="3">
                                    {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {elementsConverted["3"]?.map((item: any, index: any) => (
                                                <Draggable key={item.skill.original_name_he} draggableId={item.skill.original_name_he}
                                                           index={index}>
                                                    {(provided) => {
                                                        return (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <SkillAbilityCardComponent key={index}
                                                                                           removeCard={() => removeCard(index, "3")}
                                                                                           title={item.skill.original_name_he}/>
                                                            </div>
                                                        );
                                                    }}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                                <div className="hidden lg:flex gap-[8px] mb-[16px] items-center cursor-pointer" onClick={() => setModalGood(true)}>
                                    <Image
                                        src={plus}
                                        width={14}
                                        height={14}
                                        alt="good smile"
                                    />
                                    <p className="text-xsm text-[#0066FF]">
                                        עוד יכולות
                                    </p>
                                </div>
                            </div>
                        </div>
                        </DragDropContext>

                        <div className="flex lg:justify-between">
                            <button onClick={revertHandler}
                                    className="rounded-[8px] p-[14px] max-w-[106px] min-w-[106px] text-[#143E29] border border-[#143E29] font-medium lg:min-w-[148px]">
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
                            <button onClick={submitHandler}
                                    className="w-full mr-[16px] rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium lg:max-w-[148px]">
                                קדימה
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ModalLayout open={modal} setClose={() => setModal(false)}>
                <div dir="rtl" className="flex flex-col justify-center items-center ">
                    <p className="lg:top-[26px] lg:right-[26px] text-lg text-[#143E29] mb-[8px]">
                        עמידה מול קהל
                    </p>
                    <p className="text-semimd font-normal mb-[28px]">
                        מה זה אומר?
                    </p>
                    <p className="text-semimd font-normal text-right mb-[28px]">
                        טקסט הסבר על עמידה מול קהל כדי לתת קצת מושג מה זה אומר ומה זה כולל בתוכו.
                        כולל גם דוגמא לטקסט כזה, לסיטוצאיות שבהם הוא היה שהוא היה צריך לדבר מול קהל וכו’.
                    </p>
                    <button onClick={() => setModal(false)}
                            className="w-full rounded-[8px] p-[14px] text-[#143E29] border border-[#143E29] text-white font-medium">
                        אוקיי
                    </button>
                </div>
            </ModalLayout>
            <ModalLayoutFullScreen open={modalAwesome} setClose={() => setModalAwesome(false)} title="">
                <div dir='rtl' className="flex flex-col w-full">
                    <div className="flex gap-[8px] mb-[16px] items-start">
                        <Image
                            src={awesomeSmile}
                            width={28}
                            height={28}
                            alt="awesome smile"
                        />
                        <div className="flex flex-col items-start">
                            <p className=" text-medium font-medium text-[#143E29]">
                                אני מעולה בזה!
                            </p>
                            <p className="text-xsm text-[#282421]">
                                ניתן לסמן
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            currQuest?.additionalSkills?.map((el: any, index: number) =>
                                <AdditionalSkills key={index} data={el} setAdditionalSkills={setAdditionalSkills} evaluation={4}/>
                            )
                        }
                    </div>
                </div>
            </ModalLayoutFullScreen>

            <ModalLayoutFullScreen open={modalGood} setClose={() => setModalGood(false)} title="">
                <div dir='rtl' className="flex flex-col w-full">
                    <div className="flex gap-[8px] mb-[16px] items-start">
                        <Image
                            src={goodSmile}
                            width={28}
                            height={28}
                            alt="good smile"
                        />
                        <div className="flex flex-col items-start">
                            <p className=" text-medium font-medium text-[#143E29]">
                                זה ממש אני
                            </p>
                            <p className="text-xsm text-[#282421]">
                                ניתן לסמן
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            currQuest?.additionalSkills?.map((el: any, index: number) =>
                                <AdditionalSkills key={index} data={el} setAdditionalSkills={setAdditionalSkills} evaluation={3}/>
                            )
                        }
                    </div>
                </div>

            </ModalLayoutFullScreen>
        </>
    );
};

export default ProfilingSkillsListContent;