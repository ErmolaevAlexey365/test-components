import { FC } from "react";

interface IMatchTypes {
    type: string
    percentMatch: string
}

const AboutMeResultMatchTypes: FC<IMatchTypes> = ({type, percentMatch}) => {
    return (
        <div className="flex items-center justify-end">
            <p className="grow">{type}</p>
            <div className="h-[6px] rounded-[7px] bg-[#DADADA] w-full max-w-[222px] mx-[10px] lg:max-w-[80%]">
                <div className="h-[6px] rounded-[7px] bg-[#FF4F66]" style={{width: percentMatch}}></div>
            </div>
            <p>{percentMatch}</p>
        </div>
    );
};

export default AboutMeResultMatchTypes;