import React, { Dispatch, SetStateAction } from 'react';

interface IQuizButtonProps {
    id: string,
    text: string,
    name: string,
    setSelected: Dispatch<SetStateAction<Record<string, number>>>,
    selectButton: Record<string, string>,
    setSelectButton: Dispatch<SetStateAction<Record<string, string>>>,
}

const QuizButton: React.FC<IQuizButtonProps> = ({
                                                    id,
                                                    text,
                                                    name,
                                                    setSelected,
                                                    selectButton,
                                                    setSelectButton
                                                }) => {
    const refId = (name + id);

    return (
        <ul>
            <li>
                <input type="radio"
                       id={refId}
                       name={name}
                       onClick={(e) => {
                           setSelected(state => ({...state, [name]: Number(id)}))
                           setSelectButton(state => ({...state, [name]: (e.target as HTMLElement).id}))
                       }}
                       className="hidden">
                </input>
                <label
                    className={`${selectButton[name] === refId ? `border-[#62D4FF]` : `border-transparent`} flex md:justify-center items-center border-[4px] h-[42px] lg:h-[70px] px-[14px] relative py-[8px] text-center  rounded-[8px] shadow-[0px_0px_16px_rgba(20,62,41,0.2);]`}
                    htmlFor={refId}>
                    <p className="md:text-semimd">
                        {text}
                    </p>

                </label>
            </li>
        </ul>
    );
};

export default QuizButton;