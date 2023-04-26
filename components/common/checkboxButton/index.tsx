import React from 'react';

interface ICardImageButtonProps {
    id: string,
    selected: boolean,
    selectToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string,
    text: string,
}

const CheckboxButton: React.FC<ICardImageButtonProps> = ({
                                                             id,
                                                             selected,
                                                             selectToggle,
                                                             value,
                                                             text,
                                                         }) => {
    return (
        <label
            className="flex"
            htmlFor={id}>
            <div
                className={`${selected ? ` border-[#62D4FF] bg-[#F7FDFF]` :
                    ` border-transparent`} border-[4px] md:border-[5px] flex w-full items-center py-[8px]
                     px-[12px] md:p-[9px] md:text-semimd shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}>
                <div className="flex gap-[16px] justify-between items-center">
                    <input
                        checked={selected}
                        className="accent-[#143E29]"
                        id={id}
                        value={value}
                        onChange={(e) => selectToggle(e)}
                        type="checkbox"/>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </label>
    );
};

export default CheckboxButton;