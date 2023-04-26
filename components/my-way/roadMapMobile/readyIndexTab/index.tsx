import React from 'react';
import Image from "next/image";

import checklistIcon from "../../../../../public/assets/my-way/checklist-icon.svg"
import dumbbellIcon from "../../../../../public/assets/my-way/dumbbell-icon-moded.svg"
import helpingToolsIcon from "../../../../../public/assets/my-way/helping-tools-icon-moded.svg"
import medalIcon from "../../../../../public/assets/my-way/medal-icon.svg"
import taskIcon from "../../../../../public/assets/my-way/task-icon-moded.svg"

const ReadyIndexTab = () => {
  return (
    <div className="container">
        <div className="flex flex-col items-center mt-[28px] mb-[24px]">
          <p className="text-semimd font-medium">
            מדד המוכנות שלך
          </p>
          <p className="leading-[47px] text-[40px] font-medium mb-[20px]">
            7
          </p>
          <p className="mb-[20px]">
            השבוע צברת 42 נקודות:
          </p>
          <div className="flex gap-[20px] mb-[40px]">
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
                  alt="task"
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
          <div>
            <p className="text-semimd font-medium mb-[24px]">המשימות הבאות שלך</p>
            <div className="flex flex-col gap-[16px]">
              <div
                className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
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
                className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
                <div className="flex gap-[8px]">
                  <Image
                    src={helpingToolsIcon}
                    width={30}
                    height={30}
                    alt="task"
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
                      <p className="">
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
                className="flex gap-[10px] justify-between py-[20px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
                <div className="flex gap-[8px]">
                  <Image
                    src={dumbbellIcon}
                    width={30}
                    height={30}
                    alt="task"
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
                      <p className="">
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
        </div>
    </div>
  );
};

export default ReadyIndexTab;