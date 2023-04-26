import React, { useEffect, useState } from 'react';

import QuizButton from "@/components/common/quizButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const effortData = {
    lookingForAJob: [
        {
            id: "1",
            text: "1",
            name: "lookingForAJob",
        },
        {
            id: "2",
            text: "2",
            name: "lookingForAJob",
        },
        {
            id: "3",
            text: "3",
            name: "lookingForAJob",
        },
        {
            id: "4",
            text: "4",
            name: "lookingForAJob",
        },
        {
            id: "5",
            text: "5",
            name: "lookingForAJob",
        }
    ],
    jobHunting: [
        {
            id: "1",
            text: "1",
            name: "jobHunting",
        },
        {
            id: "2",
            text: "2",
            name: "jobHunting",
        },
        {
            id: "3",
            text: "3",
            name: "jobHunting",
        },
        {
            id: "4",
            text: "4",
            name: "jobHunting",
        },
        {
            id: "5",
            text: "5",
            name: "jobHunting",
        }
    ],
    sendResume: [
        {
            id: "1",
            text: "1",
            name: "sendResume",
        },
        {
            id: "2",
            text: "2",
            name: "sendResume",
        },
        {
            id: "3",
            text: "3",
            name: "sendResume",
        },
        {
            id: "4",
            text: "4",
            name: "sendResume",
        },
        {
            id: "5",
            text: "5",
            name: "sendResume",
        }
    ],
    jobInterviews: [
        {
            id: "1",
            text: "1",
            name: "jobInterviews",
        },
        {
            id: "2",
            text: "2",
            name: "jobInterviews",
        },
        {
            id: "3",
            text: "3",
            name: "jobInterviews",
        },
        {
            id: "4",
            text: "4",
            name: "jobInterviews",
        },
        {
            id: "5",
            text: "5",
            name: "jobInterviews",
        }
    ],
    outsideHelp: [
        {
            id: "1",
            text: "1",
            name: "outsideHelp",
        },
        {
            id: "2",
            text: "2",
            name: "outsideHelp",
        },
        {
            id: "3",
            text: "3",
            name: "outsideHelp",
        },
        {
            id: "4",
            text: "4",
            name: "outsideHelp",
        },
        {
            id: "5",
            text: "5",
            name: "outsideHelp",
        }
    ],
    getAJobLearning: [
        {
            id: "1",
            text: "1",
            name: "getAJobLearning",
        },
        {
            id: "2",
            text: "2",
            name: "getAJobLearning",
        },
        {
            id: "3",
            text: "3",
            name: "getAJobLearning",
        },
        {
            id: "4",
            text: "4",
            name: "getAJobLearning",
        },
        {
            id: "5",
            text: "5",
            name: "getAJobLearning",
        }
    ],
}

const ProfilingJobSearchEffortContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [effort, setEffort] = useState<Record<string, number>>({
        lookingForAJob: 0,
        jobHunting: 0,
        sendResume: 0,
        jobInterviews: 0,
        outsideHelp: 0,
        getAJobLearning: 0,
    })

    const [selectedEffort, setSelectedEffort] = useState<Record<string, string>>({
        lookingForAJob: "",
        jobHunting: "",
        sendResume: "",
        jobInterviews: "",
        outsideHelp: "",
        getAJobLearning: "",
    })

    const [dataIsValid, setDataIsValid] = useState<boolean>(true)

    const submitHandler = () => {
        answerQuestion({
            answer: {
                type: "JobSearchEffort",
                questionIdentifier: "JobSearchEffort",
                lookingForAJob: effort.lookingForAJob,
                jobHunting: effort.jobHunting,
                sendResume: effort.sendResume,
                jobInterviews: effort.jobInterviews,
                outsideHelp: effort.outsideHelp,
                getAJobLearning: effort.getAJobLearning,
            }
        })
    }

    const validateData = () => {
        let isValid: boolean = true;
        for (let key in effort) {
            isValid = isValid && !!effort.lookingForAJob
            isValid = isValid && !!effort.jobHunting
            isValid = isValid && !!effort.sendResume
            isValid = isValid && !!effort.jobInterviews
            isValid = isValid && !!effort.outsideHelp
            isValid = isValid && !!effort.getAJobLearning
        }
        return isValid
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    useEffect(() => {
        setDataIsValid(validateData())
    }, [effort])

    return (
        <div className="md:max-h-[660px] md:overflow-y-scroll">
            <div className="flex flex-col justify-between grow">
                <div className="flex flex-col">
                    <p className="font-medium text-semimd md:text-md mb-[30px] md:mb-[40px] max-w-[281px] md:max-w-max">אם אני רוצה לתאר
                        לעצמי את המצב שלי מבחינת חיפוש עבודה אז אגיד
                        שאני…</p>
                    <p className="font-medium text-semimd md:text-md mb-[30px]">מקדיש זמן לחיפוש עבודה</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.lookingForAJob.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
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
                    <p className="font-medium text-semimd md:text-md mb-[30px] max-w-[281px] md:max-w-max">ממוקד בחיפוש עבודה</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.jobHunting.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
                        ))}
                    </ul>
                    <div className="flex justify-between mb-[30px]">
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
                    <p className="font-medium text-semimd md:text-md mb-[30px] max-w-[281px] md:max-w-max">שולח קורות חיים למשרות שנראות לי
                        מתאימות</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.sendResume.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
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
                    <p className="font-medium text-semimd md:text-md mb-[30px] max-w-[281px] md:max-w-max">הולך לראיונות עבודה אצל מעסיקים
                        שנראים לי מתאימים</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.jobInterviews.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
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
                    <p className="font-medium text-semimd md:text-md mb-[30px] max-w-[281px] md:max-w-max">משתף שמחפש עבודה (לדוגמא, פונה
                        לחברים ומכרים, מפרסם ברשתות
                        חברתיות)</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.outsideHelp.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
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
                    <p className="font-medium text-semimd md:text-md mb-[30px] max-w-[281px] md:max-w-max">לומד על דרכים להשגת עבודה
                        במאמרים/פוסטים/בלוגים/סרטונים
                        וקורסים</p>
                    <ul className="grid grid-cols-5 gap-[20px] mb-[15px] h-full px-[8px]">
                        {effortData.getAJobLearning.map((quiz, index) => (
                            <QuizButton key={index} text={quiz.text} id={quiz.id} selectButton={selectedEffort}
                                        setSelectButton={setSelectedEffort}
                                        name={quiz.name}
                                        setSelected={setEffort}/>
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
                </div>
            </div>
            <div className="flex justify-between gap-[16px]">
                <div className="max-w-[106px]">
                    <RevertButton text="אחורה" onClick={() => revertHandler()}/>
                </div>
                <div className="w-full md:max-w-[132px]">
                    <button disabled={!dataIsValid} onClick={submitHandler} type="button"
                            className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                        קדימה
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProfilingJobSearchEffortContent;