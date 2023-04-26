import React, { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { debounce } from "lodash";
import Image from "next/image";

import ModalLayoutFullScreen from '@/components/common/ModalLayoutFullScreen';
import YearPicker from '@/components/common/yearPickerComponent';
import { Occupation } from "@/models/occupation";
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";

import arrow from "../../../../public/assets/proffesional-profiling/arrow.svg";
import editBlue from "../../../../public/assets/proffesional-profiling/edit-blue.svg";
import trash from "../../../../public/assets/proffesional-profiling/trash.svg";
import trashBlue from "../../../../public/assets/proffesional-profiling/trash-blue.svg";
import RadioButtonFullWidth from '../radioButtonFullWidth';

export interface CardData {
    occupation?: Occupation
    startDate?: Date
    endDate?: Date
}

interface IExpCardProps {
    error: boolean;
    removeCard: () => void
    updateCard: (cardData: CardData) => void
    cardData: CardData
    cardsNumber: number
    cardIndex: number;
}

const ExperienceCardComponent: FC<IExpCardProps> = ({
                                                        removeCard,
                                                        updateCard,
                                                        cardData,
                                                        cardsNumber,
                                                        cardIndex,
                                                        error
                                                    }) => {
    const [occupationsList, setOccupationsList] = useState<Occupation[]>([])
    const [showOccupationSelector, setShowOccupationSelector] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(false)


    const searchOccupation = async (e: any) => {
        userProfProfilingService.searchOccupations(e.target.value).then((res) => {
            setOccupationsList(res?.items)
        })
    }

    const debouncedSearchOccupation = debounce(searchOccupation, 500);

    const updateStartDate = (startDate: Date | undefined) => {
        updatePeriod(startDate, cardData.endDate)
    }

    const updateEndDate = (endDate: Date | undefined) => {
        updatePeriod(cardData.startDate, endDate)
    }

    const updatePeriod = (startDate: Date | undefined, endDate: Date | undefined) => {
        if ((startDate && endDate) && startDate > endDate) {
            const tmp = startDate
            startDate = endDate
            endDate = tmp
        }

        updateCard({
            ...cardData,
            startDate: startDate,
            endDate: endDate
        })
    }

    const updateOccupation = (occupation: Occupation | undefined) => {
        updateCard({
            ...cardData,
            occupation: occupation
        })
    }

    const toggleShowOccupationSelector = () => {
        setShowOccupationSelector(true);
    };

    const openCard = () => {
        setCollapsed(false);
    };

    const closeCard = () => {
        setCollapsed(true);
    };

    const handleSelectOccupation = (occupation: Occupation) => {
        setShowOccupationSelector(false)
        updateOccupation(occupation)
    };

    useEffect(() => {
        setCollapsed(true)
        if (cardsNumber === 1) {
            setCollapsed(false)
        } else if (cardIndex === cardsNumber - 1) {
            setCollapsed(false)
        }

    }, [cardsNumber])

    useEffect(() => {
        userProfProfilingService.suggestOccupations().then(res => {
            setOccupationsList(res)
        })
    }, [])

    return (
        <>
            <div className={`relative flex flex-col mb-[28px] p-[12px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] lg:p-0 lg:flex-row ${collapsed ? "lg:h-[54px]" : "lg:shadow-none"} lg:flex-row lg:items-center`}>
                {
                    collapsed ?
                        <>
                            <div className="hidden lg:flex absolute left-[12px] cursor-pointer">
                                <div className="text-[#0066FF] flex" onClick={openCard}>
                                    <Image
                                        src={editBlue}
                                        width={16}
                                        height={22}
                                        alt="edit icon"
                                        className="ml-[6px]"
                                    />
                                    ערוך
                                </div>
                                <div className="text-[#0066FF] flex mr-[24px] cursor-pointer" onClick={removeCard}>
                                    <Image
                                        src={trashBlue}
                                        width={14}
                                        height={22}
                                        alt="trash"
                                        className="ml-[6px]"
                                    />
                                    מחק
                                </div>
                            </div>
                            <div className="lg:hidden" onClick={openCard}>
                                <Image
                                    src={arrow}
                                    width={13}
                                    height={14}
                                    alt="arrow"
                                    className="absolute left-[12px] cursor-pointer"
                                />
                            </div>
                            <p className="lg:mx-[8px]">{cardData.occupation?.name_he_male}</p>
                            {
                                cardData.startDate && cardData.endDate ?
                                    <p>{cardData.startDate.getFullYear()} - {cardData.endDate.getFullYear()}</p>
                                    : ''
                            }
                        </>
                        :
                        <>
                            {
                                cardsNumber > 1 ?
                                    <Image
                                        src={arrow}
                                        width={13}
                                        height={14}
                                        onClick={closeCard}
                                        alt="arrow"
                                        className="absolute left-[12px] rotate-180 cursor-pointer lg:top-[47px]"
                                    /> : ""
                            }
                            <div className="lg:flex lg:flex-col">
                                <p>מילאתי תפקיד של</p>
                                <TextField
                                    error={error && !cardData.occupation?.name_he_male}
                                    value={cardData.occupation?.name_he_male}
                                    onClick={toggleShowOccupationSelector}
                                    className="w-min-[295px] lg:max-h-[50px]"
                                    placeholder="בחירת תפקיד מהרשימה"
                                />
                            </div>
                           
                            <div className="flex flex-row justify-between mt-[28px] lg:mt-0">
                                <YearPicker
                                    error={error && !cardData.startDate}
                                    value={cardData.startDate || null}
                                    setValue={updateStartDate}
                                    label="משנה"
                                    text="השנה בה התחלתי"/>
                                <YearPicker
                                    error={error && !cardData.endDate}
                                    disabled={!Boolean(cardData.startDate)}
                                    value={cardData.endDate || null}
                                    setValue={updateEndDate}
                                    minYear={cardData.startDate || null}
                                    label="עד שנה"
                                    text="השנה בה סיימתי"/>

                            </div>
                            <div
                                className={`${cardsNumber === 1 ? 'hidden' : ''} flex gap-[8px] items-center justify-center mt-[40px] pt-[14px] h-[38px] border-t border-[#DADADA] cursor-pointer lg:hidden`}
                                onClick={removeCard}>
                                <Image
                                    src={trash}
                                    width={14}
                                    height={22}
                                    alt="trash"
                                />
                                <p className="text-xsm text-[#143E29]">
                                    הסרה
                                </p>
                            </div>
                        </>
                }
            </div>

            <ModalLayoutFullScreen open={showOccupationSelector} setClose={() => setShowOccupationSelector(false)} title="בחירת תפקיד">
                <div dir="rtl" className="flex flex-col justify-center items-center w-full pt-[44px]">
                    <div className="w-full mb-[24px] pb-[28px] border-b">
                        <TextField onChange={debouncedSearchOccupation} size="small" className="w-full" placeholder="חיפוש תפקיד"/>
                    </div>
                    {
                        occupationsList.map((occupation: Occupation, index: number) => <RadioButtonFullWidth key={index}
                                                                                                             clickHandler={() => handleSelectOccupation(occupation)}
                                                                                                             selected={cardData.occupation?.name_he_male}
                                                                                                             name={occupation.name_he_male}
                                                                                                             subText={occupation.name_he_male}/>)
                    }
                </div>
            </ModalLayoutFullScreen>
        </>
    );
};

export default ExperienceCardComponent;