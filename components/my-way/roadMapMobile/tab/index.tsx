import React, { memo } from 'react';
import { motion } from "framer-motion";

interface TabProps {
  label: string,
  setActiveTab: (tabId: number) => void,
  tabId: number,
  tabIsActive: boolean
}

const Tab: React.FC<TabProps> = ({label, setActiveTab, tabId, tabIsActive}) => {
  const onClick = () => {
    setActiveTab(tabId)
  }

  return (
    <motion.button
      onClick={onClick}
      className={`flex py-[11px] flex-1 justify-center font-medium ${tabIsActive && "border-b-[2px] border-b-[#62D4FF]"}`}
      whileTap={{scale: 0.9}}
    >
      {label}
    </motion.button>
  );
}

export default memo(Tab);