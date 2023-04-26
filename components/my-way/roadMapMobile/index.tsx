import React, { useState } from 'react';
import { motion } from "framer-motion"

import ReadyIndexTab from "@/components/my-way/roadMapMobile/readyIndexTab";
import RoadMapTab from "@/components/my-way/roadMapMobile/roadMapTab";
import Tab from "@/components/my-way/roadMapMobile/tab";

const tabs = [
  {label: "מפת הדרך", tabId: 0, content: <RoadMapTab/>},
  {label: "מדד המוכנות", tabId: 1, content: <ReadyIndexTab/>},
];

const RoadMapMobile = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  
  return (
    <>
      <section dir="rtl" className="flex  flex-col justify-between grow h-[100vh]">
        <div>
          <div className="flex w-full justify-between">
            {tabs.map((tab) => (
              <Tab
                key={tab.tabId}
                label={tab.label}
                tabId={tab.tabId}
                tabIsActive={activeTab === tab.tabId}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6}}
          >
            {tabs[activeTab].content}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RoadMapMobile;