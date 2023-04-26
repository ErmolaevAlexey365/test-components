import React from 'react';

import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

const ProfilingConclusionContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const submitHandler = async () => {
        answerQuestion({
            answer: {
                type: "ProfilingConclusion",
                questionIdentifier: "ProfilingConclusion"
            }
        })
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    return (
        <div className="flex grow flex-col min-h-[553px] h-full justify-between pt-[10px]">
            <div>
                <div className="flex h-[503px] mb-[20px]">
                    <iframe style={{height: '100%', width: '100%', border: '0'}} src="https://player.vimeo.com/video/410382249?h=76a28cd8a0"
                            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p className="text-semimd mb-[30px] md:text-center md:text-md">היה מעט ארוך אבל שווה והנה היא מגיעה - מפת הדרך לעבודה הבאה
                    שלך.</p>
            </div>

            <div className="flex justify-between gap-[16px]">
                <div className="max-w-[106px]">
                    <RevertButton text="אחורה" onClick={() => revertHandler()}/>
                </div>
                <div className="w-full md:max-w-[179px]">
                    <button onClick={submitHandler} type="button"
                            className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                        קדימה למפה
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilingConclusionContent;