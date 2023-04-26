import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";

import ExperienceCardComponent, { CardData } from '@/components/common/experienceCardComponent';
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import plus from "../../../../public/assets/proffesional-profiling/plus.svg";

const ProfilingExperienceContent: FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {
    const [cards, setCards] = useState<CardData[]>([{}])
    const [dataIsValid, setDataIsValid] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const addCard = () => {
        if (dataIsValid) {
            setError(false)
            setCards([...cards, {}]);
        } else {
            setError(true)
        }

    }

    const removeCard = (index: number) => {
        if (cards.length > 1) {
            setCards(cards.filter((_, cardIndex) => index !== cardIndex));
        }
    }

    const updateCard = (card: CardData, index: number) => {
        cards[index] = card
        setCards([...cards])
    }

    const validateData = () => {

        let isValid: boolean = true;
        isValid = isValid && cards.length > 0
        for (let card of cards) {
            isValid = isValid && Boolean(card.startDate)
            isValid = isValid && Boolean(card.endDate)
            isValid = isValid && card.occupation
            isValid = isValid && (card.startDate! <= card.endDate!)
        }
        return isValid
    }

    useEffect(() => {
        setDataIsValid(validateData())
    }, [cards])

    const submitHandler = async (e: any) => {
        e.preventDefault()
        answerQuestion({
            answer: {
                type: "PSPastExperience",
                questionIdentifier: "PSPastExperience",
                pastExperiences: cards.map((card) => {
                    return {
                        occupation: card.occupation.id,
                        endDate: card.endDate,
                        startDate: card.startDate,
                    }
                })
            }
        })
    }

    return (
        <section dir="rtl">
            <div className="container">
                <div className="flex flex-col">
                    <p className="font-medium font-bold text-[#282421] mb-[28px] mt-[20px] text-right">
                        מהו הניסיון התעסוקתי שלך?
                    </p>
                    {
                        cards.map((cardData: CardData, index: number) => <ExperienceCardComponent
                                error={error}
                                key={index}
                                removeCard={() => removeCard(index)}
                                updateCard={(cardData: CardData) => updateCard(cardData, index)}
                                cardData={cardData}
                                cardIndex={index}
                                cardsNumber={cards.length}
                            />
                        )
                    }
                    <div className="flex gap-[8px] items-start cursor-pointer" onClick={(addCard)}>
                        <Image
                            src={plus}
                            width={14}
                            height={14}
                            alt="plus"
                            className="mt-[4px]"
                        />
                        <p className="text-xsm text-[#0066FF] mb-[35px]">
                            אני רוצה להוסיף תפקיד
                        </p>
                    </div>

                    <button disabled={!dataIsValid} onClick={submitHandler}
                            className={`${!dataIsValid ? "bg-[#C2C2C2]" : "bg-[#143E29]"} w-full rounded-[8px] p-[14px] text-white font-medium lg:max-w-[140px]`}>
                        מתחילים
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfilingExperienceContent;