import React, { FC, useEffect, useRef, useState } from 'react';
import Image from "next/image";

import arrow from "../../../../public/assets/arrow.svg";

const values = ["1", "2", "3", "4", "5", "6"]

type ICardWorkValue = {
    desc: string,
    id: number,
    nameField: string,
    selectedValuesHandler: (value: string, id: number) => void,
    workValues: [],
    errorIndexes: any[],
}

const CardWorkValue: FC<ICardWorkValue> = ({desc, id, selectedValuesHandler, errorIndexes, nameField, workValues}) => {
    const [selectValue, setSelectValue] = useState<string>("")
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuShowRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuRef]);

    useEffect(() => {
        if (isMenuOpen && menuShowRef.current !== null) {

            const {bottom} = menuShowRef.current
                ? menuShowRef.current.getBoundingClientRect()
                : {bottom: 0};

            const showAbove = bottom > 800;

            if (showAbove) {
                menuShowRef.current.style.bottom = `44px`;
            } else {
                menuShowRef.current.style.top = `44px`;
            }
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (errorIndexes.length >= 1 && errorIndexes.filter(e => e.valueId === id).length > 0) {
            setError(true)
        } else {
            setError(false)
        }
    }, [workValues, errorIndexes])

    return (
        <div dir="rtl" className="py-[16px] border-b">
            <div className="flex items-center justify-between">
                <p className="text-[#282421]">{desc}</p>

                <div ref={menuRef} className="flex relative mr-[12px] cursor-pointer">
                    <div className="flex flex-col items-baseline max-w-[115px]">
                        <div onClick={toggleMenu}
                             className={`${error ? "border-[#FF4F66] text-[#FF4F66]" : ""} relative items-center flex gap-[12px] w-[115px]
                              h-[40px] border-solid border-[1px] border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px]`}>

                            <Image className={`absolute top-[44%] left-[12px] self-center ${isMenuOpen && "rotate-180"}`} src={arrow}
                                   width={12}
                                   alt="arrow"/>

                            <p className={`${selectValue ? "text-[#282421]" : "text-[#707070]"} max-w-[65%] font-normal mr-[12px]`}>{workValues.some((el: any) => el.valueId === id) ? workValues.filter((el: any) => el.valueId === id).map((obj: any) => obj.value) : nameField}</p>
                        </div>
                        {
                            error ?
                                <p className="text-[14px] text-[#FF4F66]">נתת כבר את הדירוג הזה לתשובה אחרת</p> :
                                ""
                        }
                    </div>

                    {isMenuOpen &&
                        <div ref={menuShowRef}
                             className="flex absolute left-0 z-50 min-w-[115px] py-[10px] bg-white flex-col rounded-[4px]
                              shadow-[0px_5px_20px_rgba(0,0,0,0.15);]">
                            {values.map((value, index) => (
                                <div key={index} onClick={() => {
                                    selectedValuesHandler(value, id)
                                    setIsMenuOpen(false)
                                }
                                }
                                     className="cursor-pointer flex hover:bg-slate-200 mb-1 rounded">
                                    <div className="w-full px-[13px] py-[13px] text-center">
                                        <p>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>


            </div>
        </div>
    );
};

export default CardWorkValue;