import React from 'react';
import Image from "next/image";

import graphic from "../../../../../public/assets/proffesional-profiling/metric-about.svg";

const AboutMeResultMotivationContent = () => {
    return (
        <>
            <p className="text-[18px] text-[#143E29] font-bold">
                המוטיבציה שלי
            </p>
            <p className="text-[16px] text-[#282421] my-[20px] lg:mt-0 lg:mb-[15px]">
                מה חשוב לי בעבודה
            </p>
            <div className="relative justify-between flex w-full min-h-[462px] lg:min-h-[270px]">
                <Image
                    src={graphic}
                    width={90}
                    height={405}
                    alt="graphics"
                    className="absolute bottom-0 right-0 lg:hidden"
                />
                <Image
                    src={graphic}
                    width={60}
                    height={213}
                    alt="graphics"
                    className="absolute bottom-0 right-0 hidden lg:block"
                />
                <div className="flex grow flex-col gap-[15px] absolute bottom-0 min-h-[405px] lg:min-h-fit justify-between lg:justify-end lg:text-xsm">
                    <div
                        className="mr-[44px] lg:mr-[34px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#00A5E3] rounded-[2px] bg-white">
                        תחושת הישג והשגת תוצאות
                        לאחר שהשקעתי מאמץ       
                    </div>
                    <div
                        className="mr-[74px] mb-[-37px] lg:mr-[54px] lg:mb-0 shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#62D4FF] rounded-[2px] bg-white">
                        מערכות יחסים חברתיות עם עמיתים לעבודה ועם לקוחות
                    </div>
                    <div
                        className="mr-[104px] mb-[80px] lg:mr-[74px] lg:mb-[20px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] max-w-[210px] p-[8px] border border-[#C3EFFF] rounded-[2px] bg-white">
                        מערכות יחסים חברתיות עם עמיתים לעבודה ועם לקוחות
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMeResultMotivationContent;