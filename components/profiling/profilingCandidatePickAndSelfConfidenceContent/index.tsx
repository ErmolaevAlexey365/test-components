import React, { useEffect, useState } from 'react';

import QuizButton from "@/components/common/quizButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const candidatePickUnderstandingLevelData = [
    {
        id: "1",
        text: "1",
        name: "candidatePickUnderstandingLevel",
    },
    {
        id: "2",
        text: "2",
        name: "candidatePickUnderstandingLevel",
    },
    {
        id: "3",
        text: "3",
        name: "candidatePickUnderstandingLevel",
    },
    {
        id: "4",
        text: "4",
        name: "candidatePickUnderstandingLevel",
    },
    {
        id: "5",
        text: "5",
        name: "candidatePickUnderstandingLevel",
    },
]

const selfConfidenceInWorkSearchLevelData = [
    {
        id: "1",
        text: "1",
        name: "selfConfidenceInWorkSearchLevel",
    },
    {
        id: "2",
        text: "2",
        name: "selfConfidenceInWorkSearchLevel",
    },
    {
        id: "3",
        text: "3",
        name: "selfConfidenceInWorkSearchLevel",
    },
    {
        id: "4",
        text: "4",
        name: "selfConfidenceInWorkSearchLevel",
    },
    {
        id: "5",
        text: "5",
        name: "selfConfidenceInWorkSearchLevel",
    },
]

const ProfilingCandidatePickAndSelfConfidenceContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [stateOfCandidatePickAndSelfConfidence, setStateOfCandidatePickAndSelfConfidence] = useState<Record<string, number>>({
        candidatePickUnderstandingLevel: 0,
        selfConfidenceInWorkSearchLevel: 0
    })

    const [selectedStateOfCandidatePickAndSelfConfidence, setSelectedStateOfCandidatePickAndSelfConfidence] = useState<Record<string, string>>({
        candidatePickUnderstandingLevel: "",
        selfConfidenceInWorkSearchLevel: ""
    })

    useEffect(() => {

        if (stateOfCandidatePickAndSelfConfidence.candidatePickUnderstandingLevel && stateOfCandidatePickAndSelfConfidence.selfConfidenceInWorkSearchLevel) {
            setTimeout(() => {
                answerQuestion({
                    answer: {
                        type: "CandidatePickAndSelfConfidence",
                        questionIdentifier: "CandidatePickAndSelfConfidence",
                        candidatePickUnderstandingLevel: stateOfCandidatePickAndSelfConfidence.candidatePickUnderstandingLevel!,
                        selfConfidenceInWorkSearchLevel: stateOfCandidatePickAndSelfConfidence.selfConfidenceInWorkSearchLevel!
                    }
                })
            }, 500)
        }
    }, [stateOfCandidatePickAndSelfConfidence])

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <>
            <div className="flex flex-col grow justify-between h-full lg:px-[100px]">
                <div className="flex flex-col">
                    <p className="font-medium text-semimd md:text-md mb-[30px]">מהי רמת הידע שלי לגבי האופן בו ארגונים ממיינים מועמדים
                        לעבודה כיום?</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {candidatePickUnderstandingLevelData.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id}
                                        selectButton={selectedStateOfCandidatePickAndSelfConfidence}
                                        setSelectButton={setSelectedStateOfCandidatePickAndSelfConfidence}
                                        name={quiz.name}
                                        setSelected={setStateOfCandidatePickAndSelfConfidence}/>
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
                    <p className="font-medium text-semimd md:text-md mb-[30px]">אז לסיכום, עד כמה אני בטוח בעצמי בחיפוש עבודה בעולם העבודה
                        החדש של
                        היום?</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[7px]">
                        {selfConfidenceInWorkSearchLevelData.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id}
                                        selectButton={selectedStateOfCandidatePickAndSelfConfidence}
                                        setSelectButton={setSelectedStateOfCandidatePickAndSelfConfidence}
                                        name={quiz.name}
                                        setSelected={setStateOfCandidatePickAndSelfConfidence}/>
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
            <RevertButton text="אחורה" onClick={revertHandler}/>
        </>

    );
};

export default ProfilingCandidatePickAndSelfConfidenceContent;