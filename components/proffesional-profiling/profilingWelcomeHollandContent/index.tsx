import React from 'react';

import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const
    ProfilingWelcomeHollandContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

        const submitHandler = async (e: any) => {
            e.preventDefault()
            answerQuestion({
                answer: {
                    type: "PSHollandTestWelcome",
                    questionIdentifier: "PSHollandTestWelcome"
                }
            })
        }

        return (
            <section dir="rtl">
                <div className="container relative px-[12px] py-[20px] shadow-[0px_0px_50px_rgba(40,36,33,0.12);]">
                    <div className="flex flex-col items-center justify-between min-h-[536px]">
                        <div className="text-semimd">
                            <p>
                                Holland Test Welcome screen
                            </p>
                        </div>

                        <button onClick={submitHandler} className="w-full rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium">
                            קדימה
                        </button>

                    </div>
                </div>
            </section>
        );
    };

export default ProfilingWelcomeHollandContent;