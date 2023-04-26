import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

import checklistIcon from "../../../../public/assets/my-way/checklist-icon.svg";
import collapseArrowIcon from "../../../../public/assets/my-way/collapse-arrow.svg";
import dumbbellIcon from "../../../../public/assets/my-way/dumbbell-icon-moded.svg";
import growIcon from "../../../../public/assets/my-way/grow-icon.svg"
import helpingToolsIcon from "../../../../public/assets/my-way/helping-tools-icon.svg";
import medalIcon from "../../../../public/assets/my-way/medal-icon.svg";
import taskIcon from "../../../../public/assets/my-way/task-icon.svg";
import thinkingToolsIcon from "../../../../public/assets/my-way/thinking-tools-icon.svg";
import workingToolsIcon from "../../../../public/assets/my-way/working-tools-icon.svg";


const Map = dynamic(() => import('../map/Map'), {
  ssr: false
})

const RoadMapDesktop = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false)

  const toggleCollapseHandler = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <section dir="rtl" className="h-[100vh] p-[20px] bg-[#F3F3F4]">
      <div className="flex grow h-full gap-[20px]">
        <div className="flex bg-transparent min-w-[120px]">

        </div>
        <div className="flex pt-[20px] bg-white w-[70%] flex-col grow">
          <div className="min-h-[557px] mb-[10px]">
            <Map/>
          </div>
          <div className="flex flex-col overflow-y-scroll p-[20px] pt-[10px] gap-[16px]">
            <div className="flex w-full grow bg-white justify-between p-[20px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
              <div className="flex gap-[12px]">
                <Image
                  src={taskIcon}
                  width={30}
                  height={30}
                  alt="task"
                />
                <div className="flex leading-[18px]">
                  <div className="flex items-center w-[180px] border-l border-l-[#DADADA]">
                    <p className="text-semimd font-medium">כלי עבודה</p>
                  </div>
                  <div className="flex items-center pr-[16px]">
                    <p className="flex">
                      משימות שונות שהשלמתן תקדם אותך ליעד. הגישה אליהן מהמפה או מתוך הספריה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full grow  bg-white justify-between p-[20px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
              <div className="flex gap-[12px]">
                <Image
                  src={workingToolsIcon}
                  width={30}
                  height={30}
                  alt="tooltip"
                />
                <div className="flex leading-[18px]">
                  <div className="flex items-center w-[180px] border-l border-l-[#DADADA]">
                    <p className="text-semimd font-medium">כלי עבודה</p>
                  </div>
                  <div className="flex items-center pr-[16px]">
                    <p className="flex">
                      משימות שונות שהשלמתן תקדם אותך ליעד. הגישה אליהן מהמפה או מתוך הספריה.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
            <div className="flex w-full grow bg-white justify-between p-[20px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
              <div className="flex  gap-[12px]">
                <Image
                  src={helpingToolsIcon}
                  width={30}
                  height={30}
                  alt="tooltip"
                />
                <div className="flex leading-[18px]">
                  <div className="flex items-center w-[180px] border-l border-l-[#DADADA]">
                    <p className="text-semimd font-medium">כלי עבודה</p>
                  </div>
                  <div className="flex items-center pr-[16px]">
                    <p className="flex">
                      משימות שונות שהשלמתן תקדם אותך ליעד. הגישה אליהן מהמפה או מתוך הספריה.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
            <div className="flex w-full grow bg-white justify-between p-[20px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
              <div className="flex gap-[12px]">
                <Image
                  src={thinkingToolsIcon}
                  width={30}
                  height={30}
                  alt="tooltip"
                />
                <div className="flex leading-[18px]">
                  <div className="flex items-center w-[180px] border-l border-l-[#DADADA]">
                    <p className="text-semimd font-medium">כלי עבודה</p>
                  </div>
                  <div className="flex items-center pr-[16px]">
                    <p className="flex">
                      משימות שונות שהשלמתן תקדם אותך ליעד. הגישה אליהן מהמפה או מתוך הספריה.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`py-[20px] ${isCollapse ? "w-[500px] px-[30px]" : "w-[155px] px-[20px]"} overflow-x-hidden
         transition-width duration-[300ms] relative overflow-y-scroll flex flex-col bg-white`}>
          <div className="flex relative mb-[10px]">
            <motion.div
              initial="collapsed"
              className="relative"
              onClick={toggleCollapseHandler}
              animate={isCollapse ? "collapsed" : "open"}
              variants={{
                collapsed: {left: "-95%"},
                open: {left: 0}
              }}
            >
              <div className={`${isCollapse ? "rotate-0 left-0" : "rotate-180"} flex relative z-[10] p-[10px] cursor-pointer
             rounded-[8px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]`}>
                <Image
                  src={collapseArrowIcon}
                  width={14}
                  height={16}
                  alt="collapse"
                />
              </div>
            </motion.div>
          </div>
          <AnimatePresence initial={false}>
            {isCollapse && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {x: 1},
                  collapsed: {x: -1000}
                }}
                transition={{duration: 0.6}}
              >
                <div className="flex grow flex-col items-center mt-[28px] mb-[24px]">
                  <div className="w-full border-b border-b-[#DADADA] mb-[50px]">
                    <p className="text-semimd font-medium mb-[24px]">המשימות הבאות שלך</p>
                    <div className="flex flex-col gap-[16px] mb-[32px]">
                      <div
                        className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px]
                        shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
                        <div className="flex gap-[8px]">
                          <Image
                            src={taskIcon}
                            width={30}
                            height={30}
                            alt="task"
                          />
                          <div>
                            <p className="font-medium">הכנה עצמית לעבודה עם המחולל</p>
                            <div className="flex gap-[8px]">
                              <p>שאלון</p>
                              <div className="flex justify-center items-center py-[3px]">
                                <div className="h-[12px] border-r border-r-[#DADADA]">
                                </div>
                              </div>
                              <p>
                                זמן מוערך: 8 דקות
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-[#143E29] rounded-[4px] text-white py-[11px] px-[20px]">
                            קדימה
                          </button>
                        </div>
                      </div>
                      <div
                        className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px]
                         shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
                        <div className="flex gap-[8px]">
                          <Image
                            src={helpingToolsIcon}
                            width={30}
                            height={30}
                            alt="toolsIcon"
                          />
                          <div>
                            <p className="font-medium">קורות חיים -<br/>
                              היכרות עם Best Practice לכתיבה</p>
                            <div className="flex gap-[8px]">
                              <p>שאלון</p>
                              <div className="flex justify-center items-center py-[3px]">
                                <div className="h-[12px] border-r border-r-[#DADADA]">
                                </div>
                              </div>
                              <p>
                                זמן מוערך: 8 דקות
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-[#143E29] rounded-[4px] text-white py-[11px] px-[20px]">
                            קדימה
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px]
                        shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
                        <div className="flex gap-[8px]">
                          <Image
                            src={dumbbellIcon}
                            width={30}
                            height={30}
                            alt="dumbbell"
                          />
                          <div>
                            <p className="font-medium">אימון CBT -<br/>
                              אימון יומי לפיתוח חשיבה חיובית</p>
                            <div className="flex gap-[8px]">
                              <p>שאלון</p>
                              <div className="flex justify-center items-center py-[3px]">
                                <div className="h-[12px] border-r border-r-[#DADADA]">
                                </div>
                              </div>
                              <p>
                                זמן מוערך: 8 דקות
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-[#143E29] rounded-[4px] text-white py-[11px] px-[20px]">
                            קדימה
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-[20px]">
                      <p className="text-semimd font-medium">
                        מדד המוכנות שלך
                      </p>
                      <p className="leading-[47px] text-[40px] font-medium mb-[20px]">
                        7
                      </p>
                      <div className="flex justify-center gap-[8px]">
                        <Image
                          src={growIcon}
                          width={18}
                          height={18}
                          alt="grow"
                        />
                        <p>
                          השבוע צברת 42 נקודות:
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
                      <div className="flex bg-white flex-col items-center justify-between py-[12px] px-[18px]
                                  rounded-[6px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)]">
                        <div className="mb-[20px]">
                          <Image
                            src={taskIcon}
                            width={40}
                            height={40}
                            alt="task"
                          />
                        </div>
                        <p className="text-semimd font-semibold">
                          24
                        </p>
                        <p className="text-center">
                          קפיצה
                          באבני דרך
                        </p>
                      </div>
                      <div className="flex bg-white flex-col items-center justify-between py-[12px] px-[18px]
                                  rounded-[6px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)]">
                        <div className="mb-[20px]">
                          <Image
                            src={medalIcon}
                            width={40}
                            height={40}
                            alt="medal"
                          />
                        </div>
                        <p className="text-semimd font-semibold">
                          12
                        </p>
                        <p className="text-center">
                          מקדמי
                          סיכוי
                        </p>
                      </div>
                      <div className="flex bg-white flex-col items-center justify-between py-[12px] px-[18px]
                                  rounded-[6px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)]">
                        <div className="mb-[20px]">
                          <Image
                            src={checklistIcon}
                            width={40}
                            height={40}
                            alt="task"
                          />
                        </div>
                        <p className="text-semimd font-semibold">
                          6
                        </p>
                        <p className="text-center">
                          מעורבות
                          ועניין
                        </p>
                      </div>
                    </div>
                    <p className="cursor-pointer text-center text-xsm text-[#0066FF] mb-[36px]">
                      להיסטוריית ההצלחות שלך
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
            <motion.div
              className="absolute top-[50px] pl-[20px]"
              initial="collapsed"
              onClick={toggleCollapseHandler}
              animate={isCollapse ? "collapsed" : "open"}
              variants={{
                open: {right: 20},
                collapsed: {right: -500}
              }}
            >
              <div className="py-[20px] font-medium border-b border-b-[#DADADA]">
                <p className="text-xlg">3</p>
                <p>
                  משימות
                  לביצוע
                </p>
              </div>
              <div className="py-[20px] font-medium">
                <p className="text-xlg">
                  547
                </p>
                <p>
                  מדד
                  המוכנות
                  שלך
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RoadMapDesktop;