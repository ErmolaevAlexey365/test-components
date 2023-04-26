import React from 'react';
import Image from "next/image";

import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import lines from "../../../../public/assets/proffesional-profiling/lines.svg";

const
    ProfilingWelcomeAbilitiesContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

        const submitHandler = async (e: any) => {
            e.preventDefault()
            answerQuestion({
                answer: {
                    type: "PSAbilitiesWelcome",
                    questionIdentifier: "PSAbilitiesWelcome"
                }
            })
        }

        return (
            <section dir="rtl">
                <div className="container relative px-[12px] py-[20px] shadow-[0px_0px_50px_rgba(40,36,33,0.12);] lg:shadow-none">
                    <div className="flex flex-col items-center justify-between min-h-[536px]">
                        <div className="text-semimd">
                            <p>
                                עכשיו, על סמך התפקידים שמילאת, נציג לך רשימת יכולות אפשריות. נבקש ממך לעבור עליהן, לחשוב "עד כמה אני חזק
                                בזה" ואז לדרג בהתאם.
                            </p>
                        </div>
                        <Image
                            src={lines}
                            width={229}
                            height={94}
                            alt="graphic lines"
                            className="absolute left-0 bottom-[30%] lg:hidden"
                        />
                        <div className="w-full">
                            <ul className="list-disc text-[14px] mr-[16px] mb-[28px]">
                                <li>
                                    מבוסס על מסד הנתונים <a className="text-[#0066FF]" href="https://services.onetcenter.org/"
                                                            target="_blank">O*NET Web Services site</a>
                                </li>
                                <li>
                                    התרגום באדיבות <a className="text-[#0066FF]" href="https://avodata.labor.gov.il/"
                                                      target="_blank">עבודאטה</a>
                                </li>
                            </ul>
                            <button onClick={submitHandler} className="w-full rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium lg:max-w-[150px]">
                                קדימה
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        );
    };

export default ProfilingWelcomeAbilitiesContent;