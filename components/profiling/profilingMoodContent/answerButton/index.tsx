import React, { useState } from 'react';

const AnswerButton: React.FC<{ text: string, data?: object, dataKey?: string }> = ({text, data, dataKey}) => {
    const [selected, setSelected] = useState<boolean>(false)

    const selectHandler = () => {
        setSelected(!selected)
    }

    return (
        <>
            <input
                className="hidden"
                id={text}
                type="checkbox" onClick={selectHandler}/>
            <label
                className={`${selected ? `border-[#62D4FF]` : `border-transparent`} border-[4px] lg:text-semimd px-[16px] text-center
                 py-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);] rounded-[8px]`}
                htmlFor={text}>{text}</label>
        </>
    );
};

export default AnswerButton;