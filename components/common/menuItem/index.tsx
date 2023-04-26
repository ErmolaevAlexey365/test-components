import { FC, useState } from "react";
import Image from "next/image";

interface IMenuItem {
    id: number,
    image: string,
    width: number,
    height: number,
    setActive: (number: number) => void,
    activeMenu: number
    title: string,
    alt: string,
}

const MenuItem: FC<IMenuItem> = ({id, image, width, height, setActive, title, alt, activeMenu}) => {
    return (
        <div onClick={() => setActive(id)} className={`${activeMenu === id ? "bg-[#FF4F66] text-white" : "text-[#143E29]"} flex flex-col gap-[8px] justify-center items-center text-center p-[12px] rounded-[8px] hover:bg-[#FF4F66] text-xsm hover:text-white cursor-pointer`}>
            <Image
                src={image}
                width={width}
                height={height}
                alt={alt}
            />
            {title}
        </div>
    );
};

export default MenuItem;