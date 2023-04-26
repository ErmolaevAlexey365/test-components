import React from 'react';
import Image from "next/image";

import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import day1LogoGreen from "../../../../public/assets/day1-logo-green.png";

const
    ProfilingWelcomeRelatedContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

        const submitHandler = async (e: any) => {
            e.preventDefault()
            answerQuestion({
                answer: {
                    type: "PSOccupationsWelcome",
                    questionIdentifier: "PSOccupationsWelcome"
                }
            })
        }

        return (
            <section dir="rtl">
                <div className="container px-[12px] py-[28px]">
                    <div className="flex items-center flex-col mb-[26px]">
                        <Image
                            src={day1LogoGreen}
                            width={162}
                            height={45}
                            alt="logo"
                            className="mb-[9px]"
                        />
                    </div>
                    <div className=" shadow-[0px_0px_50px_rgba(40,36,33,0.12);] rounded-[6px] lg:shadow-none">
                        <p className="pt-[20px] pr-[20px] text-semimd">הזדמנויות שיכולות לעניין אותך</p>
                        <div className="px-[20px] pb-[24px] flex flex-col items-center">
                            <div className="h-[600px]">
                                <iframe style={{height: '100%', border: '0'}} src="https://player.vimeo.com/video/410382249?h=76a28cd8a0"
                                        allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <p className="mb-[28px]">
                                אומרים שבחיים, הזדמנויות מגלות את עצמן. אנחנו אומרים, למה לחכות, ומיד נראה לך אותן.
                            </p>
                        </div>
                        <div className="flex mt-[40px] p-[20px] lg:justify-between">
                            <RevertButton onClick={revertAnswer} text="חזרה"/>
                            <button type="button" onClick={submitHandler}
                                    className="bg-[#143E29] w-full mr-[16px] rounded-[8px] p-[14px] text-white font-medium lg:max-w-[148px]">
                                קדימה
                            </button>
                        </div>
                    </div>

                </div>

            </section>
        );
    };

export default ProfilingWelcomeRelatedContent;