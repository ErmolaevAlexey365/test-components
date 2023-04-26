import React, { useEffect, useRef, useState } from 'react';
import { FieldValues, UseFormRegister } from "react-hook-form";
import Image from "next/image";

import { ICountry } from "@/shared/interfaces/signup/ICountry";

import arrow from "../../../../public/assets/arrow.svg";
import countriesCodes from '../../../shared/county-codes/countyCodes.json'

interface ITelInputProps {
    register?: UseFormRegister<FieldValues>,
    label?: string,
    setSelectCountry?: (data: object) => void
    selectCountry: ICountry
}

const TelInput: React.FC<ITelInputProps> = ({register, label, selectCountry, setSelectCountry}) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuShowRef = useRef<HTMLDivElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //outside click function for close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuRef]);
    //get spaces under input for show him upper select
    useEffect(() => {
        if (isMenuOpen && menuShowRef.current !== null) {

            const {bottom, height} = menuShowRef.current
                ? menuShowRef.current.getBoundingClientRect()
                : {bottom: 0, height: 0};
            const showAbove = bottom + height > window.innerHeight;

            const menuTop = menuShowRef.current.offsetTop;

            if (showAbove) {
                menuShowRef.current.style.bottom = `${menuTop}px`;
            } else {
                menuShowRef.current.style.top = `${menuTop}px`;
            }
        }
    }, [isMenuOpen]);


    return (
        <div dir="ltr">
            <div ref={menuRef} className="flex relative gap-[12px] md:justify-end cursor-pointer">
                <div onClick={toggleMenu}
                     className="relative items-center flex gap-[12px] min-w-[100px] py-[9px] px-[12px] h-[40px] border-solid border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px]">
                    <p className="text-semimd font-normal">{selectCountry.iso}</p>
                    <img src={selectCountry.flag} width={17} alt="flag"/>

                    <Image className={`absolute top-[44%] right-[12px] self-center ${isMenuOpen && "rotate-180"}`} src={arrow} width={12}
                           alt="arrow"/>
                </div>
                <div className="relative">
                    <input
                        {...register ? register(label!) : ''}
                        className="h-full text-right w-full px-[12px] py-[6px] border rounded border-[#DADADA] py-[9px] px-[12px] h-[40px] border-solid border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px]"
                        type="tel"/>
                    <p className="absolute top-[23%] left-2">{selectCountry.code}</p>
                </div>
            </div>

            {isMenuOpen &&
                <div ref={menuShowRef} className="flex absolute min-w-[150px] py-[10px] bg-white flex-col max-h-[400px] overflow-y-scroll ">
                    {countriesCodes.map((country) => (
                        <div onClick={() => {
                            if (setSelectCountry) {
                                setSelectCountry({
                                    iso: country.iso,
                                    flag: country.flag,
                                    code: country.code
                                })
                            }
                        }
                        } className="cursor-pointer flex hover:bg-slate-200 mb-1 border rounded">
                            <div className="flex px-[12px] py-[9px]">
                                <p>{country.iso}</p>
                                <img className="mx-[12px]" src={country.flag} width={17} alt="flag"/>
                                <p>{country.code}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>

    );
};

export default TelInput;