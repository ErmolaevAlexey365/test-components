import { debounce } from 'lodash';
import Image from "next/image";

import authService from "@/services/auth/auth-service";

import confirmEmailImage from "../../../../public/assets/signup/confirm-email-image.png";

const SignupConfirmEmail = ({nextRegisterStep, email}: { nextRegisterStep: () => void, email: string }) => {

    const resendEmailLink = (email: string) => {
        authService.resendEmailConfirmationLink(email).then(() => {
            nextRegisterStep()
        })
    }
    const debouncedResendEmailLink = debounce(resendEmailLink, 1000);


    return (
        <div className="lg:flex lg:flex-col lg:justify-around lg:h-full lg:px-[80px]">
            <div className="lg:text-center">
                <p className="text-center font-medium text-lg  mb-[60px] lg:mb-[96px] lg:text-xlg">
                    הכניסה מכאן
                </p>
                <div className="flex justify-center mb-[40px] lg:mb-[50px]">
                    <Image
                        src={confirmEmailImage}
                        alt="confirm-image"
                    />
                </div>
                <div className="font-normal text-semimd lg:text-md">
                    <p>
                        שלחנו אליך עכשיו מייל אימות לכתובת:
                    </p>
                    <p className="mb-[16px] break-words font-bold">{email}</p>
                    <p className="mb-[16px]">
                        נבקש לאמת את כתובת המייל תוך 24 שעות. כרגע, אפשר להתקדם גם בלי.
                    </p>
                    <p>
                        לא קיבלת מייל?
                    </p>
                    <div className="mb-[140px]">
                        <a onClick={() => debouncedResendEmailLink(email)} className="text-[#0066FF] underline" href="#">
                            לחיצה קלה ונשלח שוב
                        </a>
                    </div>
                </div>
            </div>

            <button onClick={() => nextRegisterStep()}
                    className="w-full text-white text-sm leading-[20px] font-medium rounded-[8px] bg-[#143E29] disabled:bg-[#C2C2C2] flex justify-center px-[43px] py-[14px]">
                קדימה
            </button>
        </div>
    );
};

export default SignupConfirmEmail;
