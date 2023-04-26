import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import MobileInput from "@/components/common/mobileInput";
import TelInput from "@/components/common/telInput";
import { ICountry } from "@/shared/interfaces/signup/ICountry";
import { ISignUpStep } from "@/shared/interfaces/signup/ISignUpStep";
import { schemaContactsSignUp } from "@/shared/yup-shema/signup-schema";

const SignupContacts: React.FC<ISignUpStep> = ({nextRegisterStep, signUpData, setSignUpData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemaContactsSignUp, {abortEarly: false}),
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
    const [selectCountry, setSelectCountry] = useState<ICountry>({
        iso: "IL",
        flag: "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
        code: "+972"
    })

    const onSubmit = (data: any) => {
        let parsedData = {
            ...data,
            phoneNumber: selectCountry.code + data.phoneNumber,
        }

        if (setSignUpData) {
            setSignUpData({...signUpData, ...parsedData})
        }

        nextRegisterStep()
    }

    return (
        <>
            <div>
                <p className="text-center text-lg font-medium">עם מי יש לנו הכבוד?</p>
                <p className="text-center text-md font-normal mb-[28px]">כמה פרטים לפני שנצא לדרך</p>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <p className="mb-[8px]">שם פרטי</p>
                    <div className="relative mb-[40px]">
                        <MobileInput
                            placeholder="השם שלי הוא..."
                            register={register}
                            label="firstName"
                        />
                        {errors.firstName &&
                            <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">
                                נבקש את שם המשפחה המלא
                            </div>}
                    </div>
                    <p className="mb-[8px]">שם משפחה</p>
                    <div className="relative mb-[40px]">
                        <MobileInput
                            placeholder="שם המשפחה שלי הוא..."
                            register={register}
                            label="lastName"
                        />
                        {errors.lastName &&
                            <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">
                                נבקש את שם המשפחה המלא
                            </div>}
                    </div>
                    <p className="mb-[8px]">מספר טלפון</p>
                    <div className="relative mb-[60px]">
                        <TelInput setSelectCountry={setSelectCountry} selectCountry={selectCountry} register={register}
                                  label="phoneNumber"/>
                        {errors.phoneNumber &&
                            <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">
                                נבקש את שם המשפחה המלא
                            </div>}
                    </div>
                    <button disabled={Boolean(errors.firstname) || Boolean(errors.lastname) || Boolean(errors.phoneNumber)} type="submit"
                            className="w-[311px] text-white text-sm leading-[20px] font-medium rounded-[8px] bg-[#143E29] disabled:bg-[#C2C2C2] flex justify-center px-[43px] py-[14px]">
                        קדימה
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignupContacts;
