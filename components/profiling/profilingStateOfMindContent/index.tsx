import React, { useEffect, useState } from 'react';

import QuizButton from "@/components/common/quizButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";


const quizFindData = [
    {
        id: "1",
        text: "1",
        name: "desire",
    },
    {
        id: "2",
        text: "2",
        name: "desire",
    },
    {
        id: "3",
        text: "3",
        name: "desire",
    },
    {
        id: "4",
        text: "4",
        name: "desire",
    },
    {
        id: "5",
        text: "5",
        name: "desire",
    },
]

const quizJobsData = [
    {
        id: "1",
        text: "1",
        name: "importance",
    },
    {
        id: "2",
        text: "2",
        name: "importance",
    },
    {
        id: "3",
        text: "3",
        name: "importance",
    },
    {
        id: "4",
        text: "4",
        name: "importance",
    },
    {
        id: "5",
        text: "5",
        name: "importance",
    },
]

const ProfilingStateOfMindContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [stateOfMind, setStateOfMind] = useState<Record<string, number>>({
        desire: 0,
        importance: 0
    })

    const [selectedStateOfMind, setSelectedStateOfMind] = useState<Record<string, string>>({
        desire: "",
        importance: ""
    })

    useEffect(() => {
        if (stateOfMind.desire && stateOfMind.importance) {
            setTimeout(() => {
                answerQuestion({
                    answer: {
                        type: "StateOfMind",
                        questionIdentifier: "StateOfMind",
                        desireLevel: stateOfMind.desire!,
                        importanceLevel: stateOfMind.importance!
                    }
                })
            }, 500)
        }
    }, [stateOfMind])

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex flex-col grow justify-between w-full">
            <div className="flex flex-col md:px-[120px]">
                <p className="font-medium text-semimd lg:text-md mb-[30px]">עד כמה אני רוצה להכין את עצמי כמו שצריך למציאת עבודה?</p>
                <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                    {quizFindData.map((quiz, index) => (
                        <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedStateOfMind}
                                    setSelectButton={setSelectedStateOfMind}
                                    name={quiz.name}
                                    setSelected={setStateOfMind}/>
                    ))}
                </ul>
                <div className="flex justify-between mb-[36px]">
                    <div>
                        <p>בכלל לא</p>
                    </div>
                    <div>
                        <p className="text-center max-w-[70px] lg:max-w-max">
                            במידה רבה
                            מאוד
                        </p>
                    </div>
                </div>
                <p className="font-medium text-semimd lg:text-md mb-[30px]">הדבר הכי חשוב לי הוא לחפש ולמצוא עבודה חדשה</p>
                <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                    {quizJobsData.map((quiz, index) => (
                        <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedStateOfMind}
                                    setSelectButton={setSelectedStateOfMind}
                                    name={quiz.name}
                                    setSelected={setStateOfMind}/>
                    ))}
                </ul>
                <div className="flex justify-between mb-[120px]">
                    <div>
                        <p className="md:text-semimd">בכלל לא</p>
                    </div>
                    <div>
                        <p className="text-center max-w-[70px] lg:max-w-max md:text-semimd">
                            במידה רבה
                            מאוד
                        </p>
                    </div>
                </div>
            </div>
            <RevertButton onClick={revertHandler} text="חזרה"/>

        </div>
    );
};

export default ProfilingStateOfMindContent;