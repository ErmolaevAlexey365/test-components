import React, { RefObject } from 'react';
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IMobileInputProps {
    label: string,
    placeholder?: string,
    type?: string,
    onBlur?: () => void,
    register: UseFormRegister<FieldValues>,
    onFocus?: () => void,
    ref?: RefObject<HTMLInputElement>,
    maxLength?: number
}

//For use mobile input and react-hook-from put register and label to prop: register={register} label={label}
const MobileInput: React.FC<IMobileInputProps> = ({
                                                      ref,
                                                      register,
                                                      label,
                                                      placeholder,
                                                      type,
                                                      onBlur,
                                                      onFocus,
                                                      maxLength
                                                  }) => {
    return (
        <input ref={ref} {...register ? register(label! || '') : ''}
               placeholder={placeholder}
               className="py-[9px] px-[12px] h-[40px] border-solid border border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px] w-full lg:hover:border-[#62D4FF]"
               type={type}
               onFocus={onFocus}
               maxLength={maxLength || 524288}
               onBlur={onBlur}
        />
    );
};

export default MobileInput;