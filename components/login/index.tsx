import React, { useState } from 'react';
import { FieldValues, useForm } from "react-hook-form";
import FacebookLogin from "@greatsumini/react-facebook-login/dist";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileInput from "@/components/common/mobileInput";
import { AppRoutes } from "@/routes/app-routes";
import authService from "@/services/auth/auth-service";
import { AuthSession } from "@/services/auth/auth-session";
import { ILogin } from '@/shared/interfaces/signup/ILogin';
import { schemaSignup } from "@/shared/yup-shema/signup-schema";
import { handleError } from "@/utils/error-handler/error-handler";

import eyeHide from "../../../public/assets/signup/eye-hide.svg";
import eyeHideFocus from "../../../public/assets/signup/eye-hide-focus.svg";
import eyeShow from "../../../public/assets/signup/eye-show.svg";
import eyeShowFocus from "../../../public/assets/signup/eye-show-focus.svg";
import facebookLogo from "../../../public/assets/signup/facebook-logo.svg";
import googleLogo from "../../../public/assets/signup/google-logo.svg";

type events = "onBlur" | "onFocus";

interface ILoginData {
    email: string,
    password: string
}

const LoginForm: React.FC<ILogin> = ({setLoginToken}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemaSignup),
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });

    const router = useRouter()
    const [passwordType, setPasswordType] = useState<string>("password");
    const [showPasswordImage, setShowPasswordImage] = useState<string>(eyeShow);

    const onLogin = (data: FieldValues) => {             
        authService.login(data as ILoginData).then((res) => {
            if (res instanceof AuthSession) {
                AppRoutes.push(router, AppRoutes.home)
            } else {
                if (setLoginToken) {
                    setLoginToken(res.token)
                }
            }
        }).catch((err) => {
            handleError(err)
        })
    };

    const onFacebookLogin = (token: string) => {
        authService.loginFaceBook(token).then((res) => {
            if (res instanceof AuthSession) {
                AppRoutes.push(router, AppRoutes.home)

            } else {
                if (setLoginToken) {
                    setLoginToken(res.token)
                }
            }
        }).catch((err) => {
            handleError(err)
        })
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            setShowPasswordImage(eyeHide)
        } else {
            setShowPasswordImage(eyeShow)
            setPasswordType("password")
        }
    }

    const eyeToggle = (event: events) => () => {
        if (event === "onBlur") {
            passwordType === "password" ? setShowPasswordImage(eyeShow) : setShowPasswordImage(eyeHide)
        } else if (event === "onFocus") {
            passwordType === "password" ? setShowPasswordImage(eyeShowFocus) : setShowPasswordImage(eyeHideFocus)
        }
    }

    return (
        <form onSubmit={handleSubmit(onLogin)} className="relative lg:flex lg:flex-col lg:justify-between lg:h-full lg:pt-[75px]">
            <div>
                <div className="mb-[20px]">
                    <div className="mb-[40px]">
                        <p className="text-lg lg:text-xlg font-medium leading-[28px] mb-[8px] text-center">
                            היי, טוב לראות אותך!
                        </p>
                        <p className="text-md lg:text-lg font-normal leading-[24px] text-center">
                            כתובת המייל שלך היא כרטיס הכניסה
                        </p>
                    </div>
                    <p className="text-sm lg:text-semimd font-normal mb-[8px]">
                        כתובת המייל שלי
                    </p>
                    <div className="relative mb-[40px]">
                        <MobileInput register={register}
                                     label='email'
                                     placeholder='המייל שלי הוא...'
                                     type='text'
                        />
                        {errors.email &&
                            <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">בטוח שזו כתובת המייל? שווה
                                לבדוק שוב
                            </div>}
                    </div>
                    <p className="text-sm lg:text-semimd font-normal mb-[8px]">הסיסמא שלי</p>
                    <div className="relative mb-[8px]">
                        <MobileInput register={register}
                                     label='password'
                                     placeholder='הסיסמא שלך היא...'
                                     type={passwordType}
                                     onBlur={eyeToggle("onBlur")}
                                     onFocus={eyeToggle("onFocus")}
                        />

                        <div className="cursor-pointer absolute top-[14px] z-[2]  left-[14px]"
                                onClick={togglePassword}><Image width="18" height="14" src={showPasswordImage}
                                                                        alt="eye"/>
                        </div>
                    </div>
                    <div className="my-[60px]">
                        <p className="text-center text-semimd text-[#0066FF] cursor-pointer underline">
                            שכחתי סיסמה
                        </p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="text-center text-sm">תודה, אתחבר אליכם דרך:</p>
                    </div>
                    <div dir="ltr" className="flex gap-[16px] mb-[32px] justify-center">
                        <div>
                            <FacebookLogin
                                appId="847825689631751"
                                onSuccess={(response) => {
                                    onFacebookLogin(response.accessToken)
                                }}
                                render={renderProps => (
                                    <button
                                        onClick={renderProps.onClick}
                                        className='flex justify-center w-[148px] items-center px-[22.5px] py-[12.5px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2)]'>
                                        <Image
                                            className="mr-[8px]"
                                            src={facebookLogo}
                                            alt='logo'
                                            width='16'
                                            height='16'
                                        />
                                        <p className='text-[#143E29] text-sm font-medium leading-[20px]'>
                                            Facebook
                                        </p>
                                    </button>
                                )}
                            />
                        </div>
                        <div>
                            <div
                                className='flex justify-center w-[148px] items-center px-[22.5px] py-[12.5px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2)]'>
                                <Image
                                    className="mr-[8px]"
                                    src={googleLogo}
                                    alt='logo'
                                    width='16'
                                    height='16'
                                />
                                <p className='text-[#143E29] text-sm font-medium leading-[20px]'>
                                    Google
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    disabled={!!Object.keys(errors).length}
                    className="w-full text-white text-sm leading-[20px] font-medium rounded-[8px] bg-[#143E29] disabled:bg-[#C2C2C2] flex justify-center px-[43px] py-[14px]">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
