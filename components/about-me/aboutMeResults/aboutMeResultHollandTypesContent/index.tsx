import React from 'react';

import HollandTypesCard from "@/components/common/hollandTypesCard";

import AboutMeResultMatchTypes from '../aboutMeResultMatchTypes';

const AboutMeResultHollandTypesContent = () => {
    return (
        <>
            <p className="text-[18px] text-[#143E29] font-bold">
                טיפוסי הולנד 
            </p>
            <p className="text-[16px] text-[#282421] mb-[20px]">
                הטיפוסים העיקריים שלך על פי מודל הולנד
            </p>
            {/*{question?.interests?.map((elem: any, index: number) => (*/}
            {/*    <HollandTypesCard*/}
            {/*        title={elem.name_he_male_single}*/}
            {/*        textStart={elem.desc_he_male_single}*/}
            {/*        textEnd={elem.typical_occupations}*/}
            {/*    />*/}
            {/*))}*/}
            <HollandTypesCard
                title="אומנותי"
                textStart="אוהב פעילות מעורפלת, לא שיטתית. יצירתי ומקורי בחשיבה ובקשר עם העולם. אוהב עיסוק בחומרים ובמלל. מבטא את עצמו דרך יצירה ואומנות. אינו אוהב כללים ונורמות. אוהב חופש פעולה. יש לו ראייה סובייקטיבית, מורכבת ומקורית של תופעות. מתחבר לאנשים דרך רגש, דימיון, אומנות ואסתטיקה. אינו אוהב סטנדרטיזציה."
                textEnd="מקצועות אפשריים: אומנות, עיצוב, מוזיקה, משחק, צילום, יחסי ציבור, כתיבה"
            />
            <HollandTypesCard
                title="אומנותי"
                textStart="אוהב פעילות מעורפלת, לא שיטתית. יצירתי ומקורי בחשיבה ובקשר עם העולם. אוהב עיסוק בחומרים ובמלל. מבטא את עצמו דרך יצירה ואומנות. אינו אוהב כללים ונורמות. אוהב חופש פעולה. יש לו ראייה סובייקטיבית, מורכבת ומקורית של תופעות. מתחבר לאנשים דרך רגש, דימיון, אומנות ואסתטיקה. אינו אוהב סטנדרטיזציה."
                textEnd="מקצועות אפשריים: אומנות, עיצוב, מוזיקה, משחק, צילום, יחסי ציבור, כתיבה"
            />
            <p className="text-xsm text-[#0066FF] mt-[16px]">
                לצפייה בכל הטיפוסים 
            </p>
            <p className="text-[18px] mt-[20px] font-bold">
                ההתאמה שלך לכל טיפוס  
            </p>
            <AboutMeResultMatchTypes type="אומנותי" percentMatch="35%" />
            <AboutMeResultMatchTypes type="חברתי" percentMatch="78%" />
            <AboutMeResultMatchTypes type="חקרני" percentMatch="52%" />
            <AboutMeResultMatchTypes type="יזמי" percentMatch="42%" />
            <AboutMeResultMatchTypes type="מנהלי" percentMatch="42%" />
            <AboutMeResultMatchTypes type="ביצועי" percentMatch="36%" />
        </>
    );
};

export default AboutMeResultHollandTypesContent;