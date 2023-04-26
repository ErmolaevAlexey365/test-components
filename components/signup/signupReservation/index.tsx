import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FacebookLogin from "@greatsumini/react-facebook-login/dist";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileInput from "@/components/common/mobileInput";
import SignupConfirmEmail from "@/components/signup/signupConfirmEmail";
import { AppRoutes } from "@/routes/app-routes";
import authService from "@/services/auth/auth-service";
import { AuthSession } from "@/services/auth/auth-session";
import { ISignUpStep } from "@/shared/interfaces/signup/ISignUpStep";
import { schemaSignup } from "@/shared/yup-shema/signup-schema";
import { handleError } from "@/utils/error-handler/error-handler";

import checkMark from "../../../../public/assets/signup/check-mark.svg";
import checkMarkChecked from "../../../../public/assets/signup/check-mark-checked.svg";
import eyeHide from "../../../../public/assets/signup/eye-hide.svg";
import eyeHideFocus from "../../../../public/assets/signup/eye-hide-focus.svg";
import eyeShow from "../../../../public/assets/signup/eye-show.svg";
import eyeShowFocus from "../../../../public/assets/signup/eye-show-focus.svg";
import facebookLogo from "../../../../public/assets/signup/facebook-logo.svg";
import googleLogo from "../../../../public/assets/signup/google-logo.svg";


const SignupReservation: React.FC<ISignUpStep> = ({nextRegisterStep, setRegistrationToken}) => {
    const {register, handleSubmit, getValues, formState: {errors}} = useForm({
        resolver: yupResolver(schemaSignup, {abortEarly: false}),
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });

    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [passwordType, setPasswordType] = useState<string>("password");
    const [showPasswordImage, setShowPasswordImage] = useState<string>(eyeShow);
    const [showConfirmEmail, setShowConfirmEmail] = useState<boolean>(false)

    const onSubmit = (data: any) => {
        authService.reserveAccount(data).then((res) => {
            if (setRegistrationToken) {
                setRegistrationToken(res.token)
            }
            setEmail(data.email)
            setShowConfirmEmail(true)
        }).catch((err) => {
            handleError(err)
        })
    };

    const onFacebookLogin = (token: string) => {
        authService.loginFaceBook(token).then((res) => {
            if (res instanceof AuthSession) {
                AppRoutes.push(router, AppRoutes.home)

            } else {
                if (setRegistrationToken) {
                    setRegistrationToken(res.token)
                }
                nextRegisterStep()
            }
        }).catch((err) => {
            handleError(err)
        })
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            setShowPasswordImage(eyeHide)
            return;
        } else {
            setShowPasswordImage(eyeShow)
            setPasswordType("password")
        }
    }

    const navigateToLogin = () => AppRoutes.push(router, AppRoutes.login)

    const providerPopupOpener = (url: string, title: string) => {
        const windowWidth = window.innerWidth * 0.5
        const windowHeight = window.innerHeight - 200
        const newWindow = window.open(`${url}`, title, `width=${windowWidth},height=${windowHeight},top=${((screen.height - windowHeight) / 2)},left=${((screen.width - windowWidth) / 2)}`)
        newWindow?.focus();
    };


    // useEffect(() => {
    //     window.addEventListener("message", function (e) {
    //         if (setRegistrationToken) {
    //             setRegistrationToken(e.data)
    //             nextRegisterStep()
    //         }
    //     });
    //     return () => window.removeEventListener("message", function (e) {
    //     })
    // }, []);

    return (
        <>
            {!showConfirmEmail
                ?
                <form onSubmit={handleSubmit(onSubmit)} className="relative lg:flex lg:flex-col lg:justify-between lg:h-full lg:pt-[75px]">
                    <div>
                        <div className="mb-[20px]">
                            <div className="mb-[40px]">
                                <p className="text-lg lg:text-xlg font-medium leading-[28px] mb-[8px] text-center">
                                    הכניסה מכאן
                                </p>
                                <p className="text-md lg:text-lg font-normal leading-[24px] text-center">
                                    כתובת המייל שלך היא כרטיס הכניסה
                                </p>
                            </div>
                            <p className="text-sm lg:text-semimd font-normal mb-[8px]">
                                לכאן נשלח עכשיו מייל אימות
                            </p>
                            <div className="relative mb-[40px]">
                                <MobileInput register={register}
                                             label={'email'}
                                             placeholder={'המייל שלי הוא...'}
                                             type={'text'}
                                />
                                {errors.email &&
                                    <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">בטוח שזו כתובת המייל? שווה
                                        לבדוק שוב
                                    </div>}
                            </div>
                            <p className="text-sm lg:text-semimd font-normal mb-[8px]">בחירת סיסמא</p>
                            <div className="relative mb-[8px]">
                                <MobileInput register={register}
                                             label='password'
                                             placeholder='הסיסמא שלך היא...'
                                             type={passwordType}
                                             onBlur={() => {
                                                 passwordType === "password" ? setShowPasswordImage(eyeShow) : setShowPasswordImage(eyeHide)
                                             }}
                                             onFocus={() => {
                                                 passwordType === "password" ? setShowPasswordImage(eyeShowFocus) : setShowPasswordImage(eyeHideFocus)
                                             }}
                                />

                                <div className="cursor-pointer absolute top-[14px] z-[2]  left-[14px]"
                                     onClick={() => togglePassword()}><Image width="18" height="14" src={showPasswordImage}
                                                                             alt="eye"/>
                                </div>
                            </div>
                            <div className="text-xsm lg:text-sm mb-[18px]">
                                <p className="font-medium">המתכון לסיסמה חזקה:</p>
                                <div>
                                    <div className="flex gap-[6px]">
                                        <Image
                                            src={(errors.password as any)?.types.min !== 'min' && getValues('password') ?
                                                checkMarkChecked :
                                                checkMark
                                            }
                                            alt="mark"
                                        />
                                        <p className="font-normal">לפחות 8 תוים</p>
                                    </div>
                                    <div className="flex gap-[6px]">
                                        <Image
                                            src={!(errors.password as any)?.types.matches?.includes("number") && getValues('password') ?
                                                checkMarkChecked :
                                                checkMark}
                                            alt="mark"
                                        />
                                        <p className="font-normal">לפחות ספרה אחת</p>
                                    </div>
                                    <div className="flex gap-[6px]">
                                        <Image
                                            src={!(errors.password as any)?.types.matches?.includes("letter") && getValues('password') ?
                                                checkMarkChecked :
                                                checkMark
                                            }
                                            alt="mark"
                                        />
                                        <p className="font-normal">לפחות אות אחת באנגלית</p>
                                    </div>
                                    <div className="flex gap-[6px]">
                                        <Image
                                            src={!(errors.password as any)?.types.matches?.includes("upperOrSpecial") && getValues('password') ?
                                                checkMarkChecked :
                                                checkMark}
                                            alt="mark"
                                        />
                                        <p className="font-normal">אות גדולה אחת באנגלית או תו מיוחד אחד</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[20px]">
                                <p className="text-center text-sm  font-normal">תודה, אתחבר אליכם דרך:</p>
                            </div>
                            <div dir="ltr" className="flex gap-[16px] mb-[20px] justify-center">
                                <div>
                                    <FacebookLogin
                                        appId="847825689631751"
                                        onSuccess={(response) => {
                                            onFacebookLogin(response.accessToken)
                                            console.log('Login Success!', response);
                                        }}
                                        onFail={(error) => {
                                            console.log('Login Failed!', error);
                                        }}
                                        onProfileSuccess={(response) => {
                                            console.log('Get Profile Success!', response);
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
                                        onClick={() => ""}
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
                            <div onClick={navigateToLogin}>
                                <p className="text-[#0066FF] cursor-pointer hover:underline">
                                    כבר יש לי חשבון.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button disabled={Object.keys(errors).length !== 0}
                                className="w-full text-white text-sm leading-[20px] font-medium rounded-[8px] bg-[#143E29] disabled:bg-[#C2C2C2] flex justify-center px-[43px] py-[14px]">
                            קדימה
                        </button>
                    </div>
                </form>
                :
                <SignupConfirmEmail nextRegisterStep={nextRegisterStep} email={email}/>}
        </>
    );
};

export default SignupReservation;
