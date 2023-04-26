import React from 'react';
import { TextField } from '@mui/material';
import Image from "next/image";

import suitcase from "../../../../../public/assets/about-me/case.svg";
import location from "../../../../../public/assets/about-me/location.svg";
import person from "../../../../../public/assets/about-me/person.svg";
import star from "../../../../../public/assets/about-me/star.svg";
import task from "../../../../../public/assets/about-me/task.svg";

const AboutMePreferenceSectionContent = () => {
    return (
        <div className="p-[20px] mt-[12px] lg:flex lg:flex-col-reverse lg:p-0">
            <div className="shadow-[0px_0px_50px_rgba(40,36,33,0.12)] p-[16px] flex flex-col lg:mb-[20px]">
                <p className="text-[18px] text-[#282421] mb-[20px]">
                    ההעדפות התעסוקתיות שלי
                </p>
                <div className="flex gap-[8px]">
                    <Image
                        src={person}
                        width={17}
                        height={27}
                        alt="person" 
                    />
                    צורת עבודה מועדפת
                </div>
                <p className="font-bold text-[#282421] mb-[20px]">
                    שכיר  
                </p>
                <div className="flex gap-[8px]">
                    <Image
                        src={suitcase}
                        width={24}
                        height={27}
                        alt="suitcase" 
                    />
                    היקף המשרה המועדף  
                </div>
                <p className="font-bold text-[#282421] mb-[20px]">
                    משרה מלאה  
                </p>
                <div className="flex gap-[8px]">
                    <Image
                        src={location}
                        width={15}
                        height={27}
                        alt="location" 
                    />
                    זמן נסיעה למקום עבודה  
                </div>
                <p className="font-bold text-[#282421]">
                    30 דקות  
                </p>
            </div>
            <div className="shadow-[0px_0px_50px_rgba(40,36,33,0.12)] p-[16px] flex flex-col mt-[16px] lg:mb-[20px]">
                <div className="flex gap-[8px]">
                    <Image
                        src={star}
                        width={21}
                        height={18}
                        alt="star" 
                    />
                    <p className="text-[18px] text-[#282421] font-bold">
                        המועדפים שלי
                    </p>
                </div>
                <p>
                    פרטי תוכן והשראה שאספתי לאורך הדרך
                </p>
                <div className="mt-[16px] flex gap-[8px] p-[20px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)] rounded-[6px]">
                    <Image
                        src={task}
                        width={32}
                        height={21}
                        alt="task" 
                    />
                    <div className="">
                        <p className="font-bold text-xsm">
                            הכנה עצמית לעבודה עם המחולל
                        </p>
                        <p className="text-xsm">
                            <span className="pl-[8px] border-[#DADADA] border-l ml-[8px]">שאלון</span>
                            זמן מוערך: 8 דקות
                        </p>
                    </div>
                </div>
                <div className="mt-[16px] flex gap-[8px] p-[20px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)] rounded-[6px]">
                    <Image
                        src={task}
                        width={32}
                        height={21}
                        alt="task" 
                    />
                    <div className="">
                        <p className="font-bold text-xsm">
                            הכנה עצמית לעבודה עם המחולל
                        </p>
                        <p className="text-xsm">
                            <span className="pl-[8px] border-[#DADADA] border-l ml-[8px]">שאלון</span>
                            זמן מוערך: 8 דקות
                        </p>
                    </div>
                </div>
            </div>
            <div className="shadow-[0px_0px_50px_rgba(40,36,33,0.12)] p-[16px] flex flex-col mt-[16px]">
                <p className="text-[18px] text-[#282421] mb-[20px] font-bold">
                    המחשבות שלי
                </p>
                <p className="mb-[16px]">
                    זה המקום לכתוב לעצמך את כל המחשבות והתובנות שעלו וילוו אותך בדרך
                </p>
                <TextField
                multiline
                className="w-full"
                placeholder="כאן המקום לכתוב"
                rows={4}
                />
            </div>
        </div>
    );
};

export default AboutMePreferenceSectionContent;