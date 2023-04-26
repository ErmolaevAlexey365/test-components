import React from 'react';

interface ICardImageButtonProps {
    id: string,
    selected: boolean,
    selectToggle: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    value: string,
    text: string,
    hiddenSelected: boolean
}

const CheckboxRelatedOccupations: React.FC<ICardImageButtonProps> = ({id, selected, selectToggle, value, text, hiddenSelected}) => {

    return (
        <label
            className={`${hiddenSelected && 'hidden'} flex`}
            htmlFor={id}>
            <div
                className={`${selected ? `border-[4px] border-[#62D4FF] bg-[#F7FDFF]` :
                    `border-[4px] border-transparent`} flex w-full items-center py-[8px]
                     px-[12px] text-center mb-[16px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px] w-full`}>
                <div className="flex w-full justify-start items-center">
                    <input
                        checked={selected}
                        className="accent-[#143E29] mt-[4px]"
                        id={id}
                        value={value}
                        onChange={(e) => selectToggle(e, Number(id))}
                        type="checkbox"/>
                    <p className="mr-[16px]">
                        {text}
                    </p>
                </div>
            </div>
        </label>
    );
};

export default CheckboxRelatedOccupations;