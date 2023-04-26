import React from 'react';
import Image from "next/image";

import helperIcon from "../../../../public/assets/profiling/stepper/first-step/helper-icon.png";

const HelperIcon = () => {
    return (
        <div className="w-full max-w-[40px] md:max-w-[80px] md:mt-[-25px]">
            <Image
                src={helperIcon}
                width={40}
                height={40}
                alt="helper-icon"
                className="flex rounded-full w-full border border-[#62D4FF]"
            />
        </div>
    );
};

export default HelperIcon;