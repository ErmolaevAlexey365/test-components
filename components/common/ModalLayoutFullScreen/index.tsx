import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { Rubik } from '@next/font/google'
import Image from "next/image";

import crossIcon from "../../../../public/assets/proffesional-profiling/cross.svg"

import styles from './MobalLayoutFullScreen.module.scss'

const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-inter',
})

interface IModalProps {
    open: boolean,
    setClose: (data: boolean) => void,
    children: React.ReactNode,
    title: string
}

const ModalLayoutFullScreen: React.FC<IModalProps> = ({open, setClose, children, title}) => {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!open) return null;

    return mounted
        ? createPortal(<div className={`${styles.modal} ${rubik.variable} font-sans  lg:!absolute`} onClick={() => setClose(false)}>
                <div
                    className={styles.modalDialog + " container relative max-w-[372px] p-[20px] pt-[30px] pb-[40px] lg:max-w-[450px] lg:px-[70px] lg:py-[40px] items-start cursor-pointer"}
                    onClick={e => e.stopPropagation()}>
                    <Image
                        onClick={() => setClose(false)}
                        src={crossIcon}
                        width={24}
                        height={24}
                        alt="cross-img"
                        className="absolute top-[16px] left-[16px] lg:top-[26px] lg:left-[26px]"
                    />
                    <p className="absolute top-[16px] right-[16px] lg:top-[26px] lg:right-[26px] text-lg">{title}</p>
                    {children}
                </div>
            </div>,
            document.getElementById("__next")!)
        : null
};

export default ModalLayoutFullScreen;
