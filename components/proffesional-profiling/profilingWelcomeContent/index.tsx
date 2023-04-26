import React from 'react';
import Image from "next/image";

import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import day1LogoGreen from "../../../../public/assets/day1-logo-green.png";
import experinceLogo from "../../../../public/assets/proffesional-profiling/experience-logo.svg";
import hollandLogo from "../../../../public/assets/proffesional-profiling/holland-logo.svg";
import relatedLogo from "../../../../public/assets/proffesional-profiling/related-oc-logo.svg";
import skillsLogo from "../../../../public/assets/proffesional-profiling/skills-logo.svg";
import motivationWelcomeLogo from "../../../../public/assets/profiling/stepper/motivation-welcome-logo.svg";
import timeLogo from "../../../../public/assets/profiling/stepper/time-logo.svg";

const ProfilingWelcomeContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "ProfSurveyWelcome",
                questionIdentifier: "ProfSurveyWelcome"
            }
        })
    }

    return (
        <section dir="rtl">
            <div className="container px-[12px] py-[28px] lg:min-w-[90vw]">
                <div className="flex items-center flex-col mb-[26px]">
                    <Image
                        src={day1LogoGreen}
                        width={162}
                        height={45}
                        alt="logo"
                        className="mb-[9px]"
                    />
                </div>
                <div className=" shadow-[0px_0px_50px_rgba(40,36,33,0.12);] rounded-[6px]">
                    <div className="px-[20px] py-[24px] flex flex-col items-center lg:flex-row lg:relative lg:justify-evenly">
                        <div className="h-[600px]">
                            <iframe style={{height: '100%', border: '0'}} src="https://player.vimeo.com/video/410382249?h=76a28cd8a0"
                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="lg:max-w-[475px]">
                            <div className="text-semimd mb-[28px]">
                                <p className="font-medium font-bold text-[#282421]">
                                    הגענו לחלק הכי מעניין
                                </p>
                                <p>
                                    עכשיו נראה אילו אפשרויות יפתחו בפניך בעזרת החוזקות שיש לך. אלה שמוכרות לך ואלה שיפתיעו אותך.
                                </p>
                            </div>
                            <div className="flex items-start w-full gap-[17px] border-[1px] border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:max-w-[380px]">
                                <Image
                                    src={experinceLogo}
                                    width={40}
                                    height={38}
                                    alt="experience"
                                />
                                <div>
                                    <p>שלב א׳</p>
                                    <p className="font-medium font-bold">ניסיון העבר</p>
                                    <p className="font-medium lg:hidden">כאן המקום לפרט את כל התפקידים שמילאת אי פעם. כדאי לקחת דקה מחשבה ולהיזכר, כי כל
                                        פרט חשוב</p>
                                    <div className="flex gap-[8px]">
                                        <Image
                                            src={timeLogo}
                                            width={14}
                                            height={12}
                                            alt="time"
                                        />
                                        <p className="text-xsm">
                                            זמן משוער: 4 דקות
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start w-full gap-[17px] border-[1px] border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:max-w-[380px]">
                                <Image
                                    src={skillsLogo}
                                    width={40}
                                    height={38}
                                    alt="skills"
                                />
                                <div>
                                    <p>שלב ב׳</p>
                                    <p className="font-medium font-bold">היכולות והכישורים</p>
                                    <p className="font-medium lg:hidden">זו הבמה לכל החוזקות שלך, כולל כאלה שלא ידעת שיש לך</p>
                                    <div className="flex gap-[8px]">
                                        <Image
                                            src={timeLogo}
                                            width={14}
                                            height={12}
                                            alt="time"
                                        />
                                        <p className="text-xsm">
                                            זמן משוער: 10 דקות
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start w-full gap-[17px] border-[1px] border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:max-w-[380px]">
                                <Image
                                    src={hollandLogo}
                                    width={40}
                                    height={38}
                                    alt="holland"
                                />
                                <div>
                                    <p>שלב ג׳</p>
                                    <p className="font-medium font-bold">הנטיות המקצועיות</p>
                                    <p className="font-medium lg:hidden">פה נבקש ממך למלא כמה וכמה שאלות על בסיס המודל האישיותי לבחירת מקצוע שפיתח ג'ון
                                        הולנד</p>
                                    <div className="flex gap-[8px]">
                                        <Image
                                            src={timeLogo}
                                            width={14}
                                            height={12}
                                            alt="time"
                                        />
                                        <p className="text-xsm">
                                            זמן משוער: 8 דקות
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start w-full gap-[17px] border-[1px] border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:max-w-[380px]">
                                <Image
                                    src={motivationWelcomeLogo}
                                    width={31}
                                    height={41}
                                    alt="values"
                                />
                                <div>
                                    <p>שלב ד׳</p>
                                    <p className="font-medium font-bold">המוטיבציה</p>
                                    <p className="font-medium lg:hidden">מה מניע אותך בתהליך מציאת העבודה זו השאלה. התשובות שלך יעזרו לנו להציע לך
                                        הזדמנויות</p>
                                    <div className="flex gap-[8px]">
                                        <Image
                                            src={timeLogo}
                                            width={14}
                                            height={12}
                                            alt="time"
                                        />
                                        <p className="text-xsm">
                                            זמן משוער: 2 דקות
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-start w-full gap-[17px] border-[1px] border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:max-w-[380px] lg:mb-[74px]">
                                <Image
                                    src={relatedLogo}
                                    width={31}
                                    height={41}
                                    alt="related"
                                />
                                <div>
                                    <p>שלב ה׳</p>
                                    <p className="font-medium font-bold">ההזדמנויות</p>
                                    <p className="font-medium lg:hidden">כאן נציג מקצועות שעשויים להתאים לך. ברשימה יהיו גם כאלה שיפתיעו אותך</p>
                                    <div className="flex gap-[8px]">
                                        <Image
                                            src={timeLogo}
                                            width={14}
                                            height={12}
                                            alt="time"
                                        />
                                        <p className="text-xsm">
                                            זמן משוער: 8 דקות
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={submitHandler} className="w-full rounded-[8px] p-[14px] bg-[#143E29] text-white font-medium lg:absolute lg:max-w-[140px] lg:left-[28px] lg:bottom-[28px]">
                            מתחילים
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilingWelcomeContent;