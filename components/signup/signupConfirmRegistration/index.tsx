import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import DatePickerInput from "@/components/common/datePickerInput";
import MobileInput from "@/components/common/mobileInput";
import ModalLayout from "@/components/common/ModalLayout";
import { AppRoutes } from "@/routes/app-routes";
import authService from "@/services/auth/auth-service";
import { ISignUpStep } from "@/shared/interfaces/signup/ISignUpStep";
import { schemaConfirmSignUp } from "@/shared/yup-shema/signup-schema";

import calendarIcon from '../../../../public/assets/signup/calendar-icon.png'
import checkedCircle from '../../../../public/assets/signup/checked-circle.png'
import circle from '../../../../public/assets/signup/circle.png'
import femaleIcon from '../../../../public/assets/signup/female-icon.png'
import infoIcon from "../../../../public/assets/signup/info-icon.png"
import lampIcon from '../../../../public/assets/signup/lamp-icon.png'
import maleIcon from '../../../../public/assets/signup/male-icon.png'
import otherIcon from '../../../../public/assets/signup/other-icon.png'
import passportIcon from '../../../../public/assets/signup/passport-icon.png'
import passportIdCheckedIcon from '../../../../public/assets/signup/passport-id-checked-icon.png'
import youngImage from '../../../../public/assets/young-image.svg'
import GenderComponent from "../../common/genderComponent/index."

import "react-datepicker/dist/react-datepicker.css";

const SignupConfirmRegistration: React.FC<ISignUpStep> = ({signUpData, registrationToken}) => {
    const router = useRouter()

    const {register, handleSubmit, getValues, formState: {errors}, control} = useForm({
      resolver: yupResolver(schemaConfirmSignUp, {abortEarly: false}),
      mode: 'onChange',
      reValidateMode: 'onChange',
      criteriaMode: 'all'
    });

    const [youngError, setYoungError] = useState<boolean>(false)
    const [gender, setGender] = useState<string>('');
    //gender: male - "0", female - "1", other - "2"
    const [salutation, setSalutation] = useState<string>('')
    const [openDateAdvice, setOpenDateAdvice] = useState<boolean>(false);
    const [openPassportAdvice, setOpenPassportAdvice] = useState<boolean>(false);

    const handleSalutation = (salutation: string) => () => {
      setSalutation(salutation)
    }

    const showDateAdviceHandler = (value: boolean) => () => {
      setOpenDateAdvice(value)
    }

    const showPassportAdviceHandler = (value: boolean) => () => {
      setOpenPassportAdvice(value)
    }


    const handleGender = (gender: string) => {
      if (gender !== "2") {
        setGender(gender)
        setSalutation('')
      } else {
        setGender(gender)
      }
    };

    const genderValidationExp = (gender: string, salutation: string) =>  !(
      (gender === "0" || gender === "1") ||
      (gender === "2" && Boolean(salutation))
    );

    const onSubmit = async (data: any) => {
      const parsedData = {
        ...data,
        birthDate: data?.birthDate?.toLocaleDateString("fr-CA"),
        gender: Number(gender),
        salutation
      }

      await authService.confirmRegistration(
        {...signUpData, ...parsedData}, registrationToken!).then((res) => {
        AppRoutes.push(router, AppRoutes.home)
      }).catch(() => {
        setYoungError(true)
      })
    }

    if (youngError) {
      return (
        <div className="flex flex-grow flex-col justify-between">
          <div className="flex gap-[100px] justify-center items-center flex-col">
            <div className="text-center lg:mt-[210px]">
              <p className="text-lg md:text-xlg font-medium">
                העולם שייך לצעירים
              </p>
              <p className="text-md">
                נכון לעכשיו, אנחנו מתרכזים בקצת יותר מבוגרים. תודה ודרך צלחה!
              </p>
            </div>
            <div className="mb-[122px]">
              <Image className="w-[157px] h-[157px] lg:w-[343px] lg:h-[266px]" src={youngImage} alt="young"/>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <Link href="/seeker/auth/signup" type="button"
                  className="rounded-[8px] text-center py-[14px] px-[60px] bg-[#143E29] text-white font-medium">
              תשלחו לי תזכורת כשאגיע לגיל שאפשר להתחיל
            </Link>
            <div className="flex justify-center">
              <Link className="text-center text-[#0066FF] text-md underline" href="/seeker/auth/signup">
                לא, תודה
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="relative lg:flex h-full lg:flex-col justify-between">
          <div>
            <div className="mb-[28px] lg:mb-[40px]">
              <p className="text-center text-lg font-medium lg:text-xlg">עם מי יש לנו הכבוד?</p>
              <p className="hidden lg:block lg:text-center lg:text-lg">כמה פרטים לפני שנצא לדרך</p>
            </div>
            <div className="mb-[38px]">
              <div className="flex justify-between mb-[8px]">
                <p>תעודת הזהות שלי</p>
                <div onClick={showPassportAdviceHandler(true)} className="flex items-center gap-[4px]">
                  <div className="w-[15px]">
                    <Image
                      src={infoIcon}
                      width={15}
                      height={15}
                      alt="info"
                    />
                  </div>
                  <div className="text-[#0066FF] underline cursor-pointer">למה
                    השאלה?
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative">
                  {(!errors.passportId && getValues('passportId')) && <Image
                      className="absolute left-[10px] top-[25%] self-center w-[21px] h-[21px]"
                      src={passportIdCheckedIcon}
                      alt='lamp-icon'
                      width={21}
                      height={21}
                  />}
                  <MobileInput placeholder="תעודת הזהות שלי היא..." register={register} label="passportId"
                               maxLength={9}/>
                </div>
                {errors.passportId &&
                    <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">
                        נבקש את שם המשפחה המלא
                    </div>}
              </div>
            </div>
            {/* Date picker */}
            <div className="lg:mb-[5px]">
              <div className="flex justify-between mb-[8px]">
                <p>תאריך הלידה שלי</p>
                <div onClick={showDateAdviceHandler(true)} className="flex items-center gap-[4px]">
                  <div className="w-[15px]">
                    <Image
                      src={infoIcon}
                      width={15}
                      height={15}
                      alt="info"
                    />
                  </div>
                  <div className="text-[#0066FF] underline cursor-pointer">למה השאלה?
                  </div>
                </div>

              </div>
              <div className="relative mb-[20px]">
                <Controller
                  render={({field: {ref, ...field}}) =>
                    <DatePickerInput field={field}/>
                  }
                  name="birthDate"
                  control={control}
                />
                {errors.birthDate &&
                    <div className="absolute text-xsm -bottom-2/4 text-[#FF4F66]">
                        נבקש את שם המשפחה המלא
                    </div>}
              </div>
            </div>
            <div className="flex mb-[40px] lg:mb-[17px]">
              <Image
                className="self-center w-[21px] h-[16px]"
                src={lampIcon}
                alt='lamp-icon'
                width={21}
                height={16}
              />
              <p className='mr-[10px]  text-xsm'>
                כדאי לוודא שהקלדת את תאריך הלידה כמו שצריך.
                אחר כך כבר לא יהיה ניתן לשנותו.
              </p>
            </div>
            <div className="mb-[24px] lg:mb-[16px]">
              <p className="text-semimd">
                ודבר אחרון...
              </p>
              <p>
                איך יתאים לך שנפנה אליך?
              </p>
            </div>
            <div className="flex mb-[12px] gap-[16px]">
              <div onClick={() => handleGender("0")} className="lg:flex-1  w-full">
                <GenderComponent selected={gender === '0'} image={maleIcon} genderText="גבר"/>
              </div>
              <div onClick={() => handleGender("1")} className="lg:flex-1  w-full">
                <GenderComponent selected={gender === '1'} image={femaleIcon} genderText="אישה"/>
              </div>
              <div onClick={() => handleGender("2")} className="lg:flex-1  w-full">
                <GenderComponent selected={gender === '2'} image={otherIcon} genderText="אחר"/>
              </div>
            </div>
            <div className="flex mb-[30px]">
              <Image
                className="self-center w-[21px] h-[16px]"
                src={lampIcon}
                alt='lamp-icon'
                width={21}
                height={16}
              />

              <p className='mr-[10px]  text-xsm'>
                60% ממשתמשי המערכת הם כמוך!
              </p>
            </div>
            <div className="lg:h-[80px]">
              {(gender === "2") &&
                  <>
                      <p className="text-md font-medium mb-[16px]">דברו אליי:</p>
                      <div className="flex flex-col gap-[16px] mb-[36px] lg:flex-row">
                          <div
                              className={`${salutation === "firstType" && "border-[4px] border-[#62D4FF] bg-[#F7FDFF]"} flex items-center  w-full h-[46px] px-[15px] py-[12px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2)]`}
                              onClick={handleSalutation("firstType")}>
                              <Image
                                  className="self-center w-[15px] h-[15px] ml-[16px]"
                                  src={salutation === "firstType" ? checkedCircle : circle}
                                  alt='lamp-icon'
                                  width={15}
                                  height={15}
                              />
                              <p className="lg:text-semimd lg:font-semibold">
                                  בלשון זכר רבים (הם)
                              </p>
                          </div>
                          <div
                              className={`${salutation === "secondType" && "border-[4px] border-[#62D4FF] bg-[#F7FDFF]"} flex items-center  w-full h-[46px] px-[15px] py-[12px] rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2)]`}
                              onClick={handleSalutation("secondType")}>
                              <Image
                                  className="self-center w-[15px] h-[15px] ml-[16px]"
                                  src={salutation === "secondType" ? checkedCircle : circle}
                                  alt='lamp-icon'
                                  width={15}
                                  height={15}
                              />
                              <p className="lg:text-semimd lg:font-semibold">
                                  בלשון נקבה רבות (הן)
                              </p>
                          </div>
                      </div>
                  </>
              }
            </div>
          </div>
          <div>
            <div className="mb-[14px]">
              <p className="text-xsm font-normal">
                מקובל עלי שהמידע הנמסר על ידי במסגרת תהליך חיפוש העבודה שלי, כולל מידע תעסוקתי, אבחוני
                והתנהגותי שנאסף במהלך
                החיפוש,
                יישמר ויעובד על ידכם בהתאם <Link className="text-[#0066FF] underline" href="">למדיניות
                הפרטיות</Link> לצורך
                התהליך
                וכמו כן, ייתכן ויועבר לגורמים
                רלוונטיים כדוגמת מעסיקים
                פוטנציאליים. השימוש בשירות כפוף <Link className="text-[#0066FF] underline"
                                                      href="#">לתקנון.</Link>
                <Link href=""></Link>

              </p>
            </div>
            <button
              disabled={genderValidationExp(gender, salutation) || Boolean(errors.passportId) || Boolean(errors.birthDate)}
              className="w-full text-white text-sm leading-[20px] font-medium rounded-[8px] bg-[#143E29] disabled:bg-[#C2C2C2] flex justify-center px-[43px] py-[14px]">
              קדימה
            </button>
          </div>
        </form>
        {/*Modal windows */}
        <ModalLayout open={openPassportAdvice} setClose={showPassportAdviceHandler(false)}>
          <div dir="rtl" className="flex flex-col justify-center items-center ">
            <Image
              className="self-center w-[35px] h-[40px]"
              src={passportIcon}
              alt='passport-icon'
              width={35}
              height={40}
            />
            <p className="text-lg font-medium mb-[8px]">
              למה השאלה?
            </p>
            <p className="text-md font-normal mb-[28px]">
              תעודת הזהות שלי
            </p>
            <div>
              <p className="text-semimd font-normal text-right">
                <span className="font-medium">DayOne </span>הוא שירות שניתן בחינם ע״י
              </p>
              <p className="text-semimd font-normal text-right">
                המדינה. לכן, באחריותינו לעדכן את זהות המשתמשים בו. </p>
            </div>
          </div>
        </ModalLayout>
        <ModalLayout open={openDateAdvice} setClose={showDateAdviceHandler(false)}>
          <div dir="rtl" className="flex flex-col justify-center items-center">
            <Image
              className="self-center w-[35px] h-[40px]"
              src={calendarIcon}
              alt='calendar-icon'
              width={35}
              height={40}
            />
            <p className="text-lg font-medium mb-[8px]">
              למה השאלה?
            </p>
            <p className="text-md font-normal mb-[28px]">
              נולדתי בתאריך
            </p>
            <p className="text-semimd font-normal text-right">
              כדי לוודא שהגעת לגיל שאפשר להתחיל להשתמש בשירות שלנו.</p>
          </div>
        </ModalLayout>
      </>
    );
  }
;

export default SignupConfirmRegistration;