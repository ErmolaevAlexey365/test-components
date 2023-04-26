import { FC, useState } from "react";
import Image from "next/image";

import brandMenu from "../../../../public/assets/menu/brand.svg";
import homeMenu from "../../../../public/assets/menu/home.svg";
import jobsMenu from "../../../../public/assets/menu/jobs.svg";
import libraryMenu from "../../../../public/assets/menu/library.svg";
import profileMenu from "../../../../public/assets/menu/profile.svg";
import roadMapMenu from "../../../../public/assets/menu/roadmap.svg";
import MenuItem from "../menuItem";

const Menu: FC = () => {
    const [activeMenu, setActiveMenu] = useState<number>(5)


    return (
        <div className="p-[15px] shadow-[0px_0px_20px_rgba(112,112,112,0.14)] border border-[#FF4F66] h-[100vh] min-w-[120px] rounded-[6px]">
            <MenuItem id={1} image={homeMenu} width={23} height={20} alt="home menu icon" setActive={setActiveMenu} activeMenu={activeMenu} title="עמוד הבית" />
            <MenuItem id={2} image={roadMapMenu} width={20} height={20} alt="roadmap menu icon" setActive={setActiveMenu} activeMenu={activeMenu} title="הדרך שלי" />
            <MenuItem id={3} image={brandMenu} width={20} height={20} alt="brand menu icon" setActive={setActiveMenu} activeMenu={activeMenu} title="מיתוג מקצועי" />
            <MenuItem id={4} image={jobsMenu} width={15} height={20} alt="jobs menu icon" setActive={setActiveMenu} activeMenu={activeMenu} title="המשרות שלי" />
            <MenuItem id={5} image={profileMenu} width={18} height={20} alt="profile menu icon" setActive={setActiveMenu} activeMenu={activeMenu} title="על עצמי" />
            <MenuItem id={6} image={libraryMenu} width={23} height={20} alt="library menu item" setActive={setActiveMenu} activeMenu={activeMenu} title="הספריה" />
        </div>
    );
};

export default Menu;