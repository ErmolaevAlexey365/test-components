import React from 'react';
import Image from "next/image";

import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import day1LogoGreen from "../../../../public/assets/day1-logo-green.png";
import bagWelcomeLogo from "../../../../public/assets/profiling/stepper/bag-welcome-logo.svg";
import motivationWelcomeLogo from "../../../../public/assets/profiling/stepper/motivation-welcome-logo.svg";
import tabletWelcomeLogo from "../../../../public/assets/profiling/stepper/tablet-welcome-logo.svg";
import timeLogo from "../../../../public/assets/profiling/stepper/time-logo.svg";

const ProfilingWelcomeContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "Welcome",
                questionIdentifier: "Welcome"
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <section dir="rtl">
            <div className="container flex flex-col px-[12px] py-[28px] leading-[24px]">
                <div className="lg:hidden flex items-center flex-col mb-[26px]">
                    <Image
                        src={day1LogoGreen}
                        width={162}
                        height={45}
                        alt="day1-logo"
                        className="mb-[9px]"
                    />
                    <p className="font-medium text-[#143E29]">
                        מי אמר שאי אפשר למצוא עבודה בגיל 45+
                    </p>
                </div>
                <div className="flex justify-center py-[54px] hidden lg:flex text-xlg font-medium">
                    <p className="text-[#143E29]">בניית המפה שתיקח אותי לעבודה</p>
                </div>
                <div className="flex flex-col justify-between md:min-h-[746px] shadow-[0px_0px_50px_rgba(40,36,33,0.12);] rounded-[6px]">
                    <p className="lg:hidden px-[13px] pt-[24px] font-medium text-lg text-[#143E29]">בניית המפה שתיקח אותי לעבודה</p>
                    <div
                        className="px-[20px] py-[24px] lg:pt-[15px] flex flex-col lg:justify-center lg:gap-[67px] lg:flex-row items-center">
                        <div className="h-[600px] lg:h-[555px]">
                            <iframe style={{height: '100%', border: '0'}}
                                    src="https://player.vimeo.com/video/410382249?h=76a28cd8a0"
                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:pl-[15%] lg:pt-[55px]">
                                <div className="text-semimd lg:text-md mb-[28px] md:mb-[24px]">
                                    <p className="mb-[28px] md:mb-[24px]">
                                        עוד לפני שמגיעים לראיון העבודה האמיתי, כולנו עורכים לעצמינו "ראיון עבודה עצמי" כדי להתכונן. אז הנה
                                        זה
                                        בא,
                                        "ראיון
                                        העבודה" שלך עם עצמך. נעים להכיר :)
                                    </p>
                                    <p className="font-medium md-[4px]">
                                        מה הלו״ז?
                                    </p>
                                    <p>
                                        נתחיל במצב הרוח שלך, נעבור על נתוני הפתיחה וקדימה, לכל מה שצריך לעשות כדי למצוא עבודה. </p>
                                </div>
                                <div className="flex w-full gap-[17px] border border-[#DADADA] rounded-[8px] p-[16px] mb-[24px]">
                                    <Image
                                        src={motivationWelcomeLogo}
                                        width={31}
                                        height={41}
                                        alt="motivation"
                                    />
                                    <div>
                                        <p>שלב א׳</p>
                                        <p className="font-medium">המוטיבציה שלי</p>
                                        <div className="flex gap-[8px]">
                                            <Image
                                                src={timeLogo}
                                                width={14}
                                                height={12}
                                                alt="motivation"
                                            />
                                            <p className="text-xsm">
                                                זמן משוער: דקה
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex w-full gap-[17px] border border-[#DADADA] rounded-[8px] p-[16px] mb-[24px]">
                                    <Image
                                        src={tabletWelcomeLogo}
                                        width={31}
                                        height={41}
                                        alt="motivation"
                                    />
                                    <div>
                                        <p>שלב ב׳</p>
                                        <p className="font-medium">נתוני פתיחה</p>
                                        <div className="flex gap-[8px]">
                                            <Image
                                                src={timeLogo}
                                                width={14}
                                                height={12}
                                                alt="motivation"
                                            />
                                            <p className="text-xsm">
                                                זמן משוער: 5 דקות
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full gap-[17px] border border-[#DADADA] rounded-[8px] p-[16px] mb-[24px] lg:mb-0">
                                    <Image
                                        src={bagWelcomeLogo}
                                        width={40}
                                        height={38}
                                        alt="motivation"
                                    />
                                    <div>
                                        <p>שלב ג׳</p>
                                        <p className="font-medium">קדימה לעבודה</p>
                                        <div className="flex gap-[8px]">
                                            <Image
                                                src={timeLogo}
                                                width={14}
                                                height={12}
                                                alt="motivation"
                                            />
                                            <p className="text-xsm">
                                                זמן משוער: 7 דקות
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="container flex lg:justify-end p-[20px] md:p-[0px_28px_28px_28px]">
                        <button onClick={submitHandler}
                                className="w-full lg:max-w-[172px] lg:self-end rounded-[8px]  p-[14px] bg-[#143E29] text-white font-medium">
                            יוצאים לדרך
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProfilingWelcomeContent;