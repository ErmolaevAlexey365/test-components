import React, { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { debounce } from "lodash";
import Image from "next/image";

import ModalLayoutFullScreen from '@/components/common/ModalLayoutFullScreen';
import userProfProfilingService from "@/services/prof-profiling/prof-profiling.service";

import trash from "../../../../public/assets/proffesional-profiling/trash.svg";
import CheckboxRelatedOccupations from '../checkboxRelatedOccupations';

interface IExpCardProps {
    removeCard?: () => void
    length: number,
    index?: number
    selectedJobSearchPlaces: string[],
    setSelectedJobSearchPlaces: any,
    occupationsList: any,
    occupationsIds: any,
    setOccupationsIds: any,
    setOccupationsList: any

}

const OccupationAddCardComponent: FC<IExpCardProps> = ({
                                                           setOccupationsList,
                                                           selectedJobSearchPlaces,
                                                           occupationsIds,
                                                           setOccupationsIds,
                                                           setSelectedJobSearchPlaces,
                                                           occupationsList
                                                       }) => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [hiddenSelected, setHiddenSelected] = useState<any>([])
    const togglePopup = () => {
        setToggle(true);
    };

    const onTrash = (index: number) => {
        setOccupationsIds([...occupationsIds.slice(0, index), ...occupationsIds.slice(index + 1)]);
        setSelectedJobSearchPlaces([...selectedJobSearchPlaces.slice(0, index), ...selectedJobSearchPlaces.slice(index + 1)]);

    };

    const selectToggle = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const value = e.target.value;
     
        let jobSearchPlaces = [...selectedJobSearchPlaces]
        let occupationsIdsList = [...occupationsIds]

        if (jobSearchPlaces.includes(value)) {
            setOccupationsIds(occupationsIdsList.filter((item) => item !== id));
            setSelectedJobSearchPlaces(jobSearchPlaces.filter((item) => item !== value));
            return;
        }

        occupationsIdsList.push(id)

        jobSearchPlaces.push(value)

        setSelectedJobSearchPlaces(jobSearchPlaces);
        setOccupationsIds(occupationsIdsList);
    };

    const searchOccupation = async (e: any) => {
        userProfProfilingService.searchOccupations(e.target.value).then((res) => {
            setOccupationsList(res?.items)
        })
    }

    const debouncedSearchOccupation = debounce(searchOccupation, 500);

    useEffect(() => {
        if(!toggle) {
            setHiddenSelected(selectedJobSearchPlaces)
            userProfProfilingService.searchOccupations("").then((res) => {
                setOccupationsList(res?.items)
            })
        } 
    }, [toggle])

    return (
        <>
            <TextField
                value=""
                onClick={togglePopup}
                className="w-min-[295px] !mb-[28px]"
                placeholder="חיפוש תפקיד"
                size="small"
            />

            {
                selectedJobSearchPlaces.map((el: any, index: number) =>
                    <div key={index}
                         className="flex justify-between p-[12px] mb-[16px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full">
                        {el}
                        <Image
                            src={trash}
                            width={14}
                            height={14}
                            alt="info"
                            className="mt-[4px] cursor-pointer"
                            onClick={() => onTrash(index)}
                        />
                    </div>
                )
            }

            <ModalLayoutFullScreen open={toggle} setClose={() => setToggle(false)} title="בחירת תפקיד">
                <div dir="rtl" className="flex flex-col justify-center items-center w-full pt-[44px]">
                    <div className="w-full mb-[24px] pb-[28px] border-b">
                        <TextField onChange={debouncedSearchOccupation} size="small" className="w-full" placeholder="חיפוש תפקיד"/>
                    </div>
                    <div className="w-full">
                        {occupationsList.map((elem: any, index: number) => (
                                <CheckboxRelatedOccupations
                                    key={index}
                                    value={elem.name_he_male}
                                    text={elem.name_he_male}
                                    id={elem.id}
                                    selected={selectedJobSearchPlaces.includes(elem.name_he_male)}
                                    selectToggle={selectToggle}
                                    hiddenSelected={hiddenSelected.includes(elem.name_he_male)}
                                />
                            )
                        )}

                    </div>

                </div>
            </ModalLayoutFullScreen>
        </>
    );
};

export default OccupationAddCardComponent;