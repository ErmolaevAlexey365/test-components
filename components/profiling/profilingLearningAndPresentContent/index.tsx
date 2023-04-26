import React, { useEffect, useState } from 'react';

import QuizButton from "@/components/common/quizButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const onlineLearningLevelFindData = [
    {
        id: "1",
        text: "1",
        name: "onlineLearningLevel",
    },
    {
        id: "2",
        text: "2",
        name: "onlineLearningLevel",
    },
    {
        id: "3",
        text: "3",
        name: "onlineLearningLevel",
    },
    {
        id: "4",
        text: "4",
        name: "onlineLearningLevel",
    },
    {
        id: "5",
        text: "5",
        name: "onlineLearningLevel",
    },
]

const selfPresentationLevelData = [
    {
        id: "1",
        text: "1",
        name: "selfPresentationLevel",
    },
    {
        id: "2",
        text: "2",
        name: "selfPresentationLevel",
    },
    {
        id: "3",
        text: "3",
        name: "selfPresentationLevel",
    },
    {
        id: "4",
        text: "4",
        name: "selfPresentationLevel",
    },
    {
        id: "5",
        text: "5",
        name: "selfPresentationLevel",
    },
]

const ProfilingLearningAndPresentContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [stateOfLearningAndPresent, setStateOfLearningAndPresent] = useState<Record<string, number>>({
        onlineLearningLevel: 0,
        selfPresentationLevel: 0
    })

    const [selectedStateOfLearningAndPresent, setSelectedStateOfLearningAndPresent] = useState<Record<string, string>>({
        onlineLearningLevel: "",
        selfPresentationLevel: ""
    })

    useEffect(() => {

        if (stateOfLearningAndPresent.onlineLearningLevel && stateOfLearningAndPresent.selfPresentationLevel) {
            setTimeout(() => {
                answerQuestion({
                    answer: {
                        type: "LearningAndPresent",
                        questionIdentifier: "LearningAndPresent",
                        onlineLearningLevel: stateOfLearningAndPresent.onlineLearningLevel!,
                        selfPresentationLevel: stateOfLearningAndPresent.selfPresentationLevel!
                    }
                })
            }, 500)
        }
    }, [stateOfLearningAndPresent])

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <>
            <div className="flex flex-col grow justify-between lg:px-[100px]">
                <div className="flex flex-col">
                    <p className="font-medium text-semimd md:text-md mb-[30px]">עד כמה אני מתורגל ומרגיש בנוח בלמידה אונליין?</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[9px]">
                        {onlineLearningLevelFindData.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedStateOfLearningAndPresent}
                                        setSelectButton={setSelectedStateOfLearningAndPresent}
                                        name={quiz.name}
                                        setSelected={setStateOfLearningAndPresent}/>
                        ))}
                    </ul>
                    <div className="flex justify-between mb-[36px]">
                        <div>
                            <p>בכלל לא</p>
                        </div>
                        <div>
                            <p className="text-center">
                                במידה רבה<br/>
                                מאוד
                            </p>
                        </div>
                    </div>
                    <p className="font-medium text-semimd md:text-md mb-[30px]">עד כמה אני יודע להציג את עצמי בעולם העבודה באופן אופטימלי
                        ואפקטיבי?</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {selfPresentationLevelData.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedStateOfLearningAndPresent}
                                        setSelectButton={setSelectedStateOfLearningAndPresent}
                                        name={quiz.name}
                                        setSelected={setStateOfLearningAndPresent}/>
                        ))}
                    </ul>
                    <div className="flex justify-between mb-[120px]">
                        <div>
                            <p>בכלל לא</p>
                        </div>
                        <div>
                            <p className="text-center">
                                במידה רבה<br/>
                                מאוד
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:max-w-[106px]">
                <RevertButton text="אחורה" onClick={() => revertHandler()}/>
            </div>
        </>

    );
};

export default ProfilingLearningAndPresentContent;