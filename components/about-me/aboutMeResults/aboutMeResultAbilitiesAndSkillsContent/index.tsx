import React, { FC, useState } from 'react';
import Image from "next/image";

import abilities from "../../../../../public/assets/about-me/abilities.svg";
import skills from "../../../../../public/assets/about-me/skills.svg";

const AboutMeResultAbilitiesAndSkillsContent: FC = () => {
    const [skillsAbilities, setSkillsAbilities] = useState<number>(1)
    
    return (
        <>
            <div className="lg:hidden">
                <p className="text-[18px] text-[#143E29]">
                    יכולות וכישורים
                </p>
                <p className="text-[16px] text-[#282421]">
                    ריכזנו עבורך את כלל היכולות שהצפת לאורך התהליך כדי שתוכל ללמוד קצת יותר על עצמך- במה אתה טוב ובמה אתה פחות ותרצה להשתפר
                </p>
                <div
                    className="px-[16px] py-[12px] mt-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full">
                    <p className="font-bold">
                        יכולות
                    </p>
                    <ul className="list-disc mr-[16px]">
                        {/*{question?.abilities?.map((elem: any, index: number) => (*/}
                        {/*    <li>*/}
                        {/*        {elem.original_name_he}*/}
                        {/*    </li>*/}
                        {/*))}*/}
                        <li>
                            אמפתיה עמידה מול קהל
                        </li>
                        <li>
                            אמפתיה עמידה מול קהל
                        </li>
                        <li>
                            אמפתיה עמידה מול קהל
                        </li>
                        <li>
                            אמפתיה עמידה מול קהל
                        </li>
                    </ul>
                </div>
                <p className="text-xsm text-[#0066FF] mt-[16px]">
                    למידע המלא
                </p>
            </div>
            <div className="hidden lg:flex flex-col w-full">
                <div className="flex text-center justify-between mb-[20px] border-b items-center">
                    <div onClick={() => setSkillsAbilities(1)}
                            className={`${skillsAbilities === 1 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[21px] cursor-pointer w-[50%] flex gap-[8px] justify-center self-end items-center`}>
                        <Image
                            src={abilities}
                            width={18}
                            height={23}
                            alt="abilities" 
                        />
                        יכולות
                    </div>
                    <div onClick={() => setSkillsAbilities(2)}
                            className={`${skillsAbilities === 2 ? "border-b border-[#62D4FF] border-b-[3px] font-bold" : ""} p-[19px] cursor-pointer w-[50%] flex gap-[8px] justify-center self-end items-center`}>
                        <Image
                            src={skills}
                            width={30}
                            height={30}
                            alt="skills" 
                        />        
                        כישורים
                    </div>
                </div>
                <p className="text-[16px] text-[#282421]">
                    ריכזנו עבורך את כלל היכולות שהצפת לאורך התהליך כדי שתוכל ללמוד קצת יותר על עצמך - במה אתה טוב ובמה אתה פחות ותרצה להשתפר.
                </p>
                <div className="flex flex-wrap justify-between">
                    <div className="px-[16px] py-[12px] mt-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] max-w-[265px]">
                        <p className="font-bold">
                            תשומת לב לפרטים קטנים
                        </p>
                        <p>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור   
                        </p>
                    </div>

                    <div className="px-[16px] py-[12px] mt-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] max-w-[265px]">
                        <p className="font-bold">
                            תשומת לב לפרטים קטנים
                        </p>
                        <p>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור   
                        </p>
                    </div>

                    <div className="px-[16px] py-[12px] mt-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] max-w-[265px]">
                        <p className="font-bold">
                            תשומת לב לפרטים קטנים
                        </p>
                        <p>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור   
                        </p>
                    </div>

                    <div className="px-[16px] py-[12px] mt-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] max-w-[265px]">
                        <p className="font-bold">
                            תשומת לב לפרטים קטנים
                        </p>
                        <p>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור   
                        </p>
                    </div>
                </div>
                <p className="text-xsm text-[#0066FF] my-[20px]">
                    לכל היכולות שלי  
                </p>
            </div>
        </>
    );
};

export default AboutMeResultAbilitiesAndSkillsContent;