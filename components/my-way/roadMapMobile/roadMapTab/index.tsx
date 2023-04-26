import React from 'react';
import { a, config, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import dynamic from "next/dynamic";
import Image from "next/image";

import taskIcon from "../../../../../public/assets/my-way/task-icon.svg";
import helpingToolsIcon from "../../../../../public/assets/my-way/task-icon.svg";
import thinkingToolsIcon from "../../../../../public/assets/my-way/thinking-tools-icon.svg";
import workingToolsIcon from "../../../../../public/assets/my-way/working-tools-icon.svg";

const Map = dynamic(() => import('../../map/Map'), {
  ssr: false
})

interface DragHandlerAttributes {
  last: boolean,
  vxvy: number[],
  movement: number[],
  cancel: () => void,
  canceled: boolean
}

const STATUS_BAR_HEIGHT = 360;

const RoadMapTab = () => {
  const [{y}, set] = useSpring(() => ({y: STATUS_BAR_HEIGHT}))
  const dragConfig = {
    initial: () => [0, y.get()],
    filterTaps: true,
    bounds: {top: 0},
    rubberband: true
  }

  // const display = y.to((py) => (py < STATUS_BAR_HEIGHT ? 'block' : 'block'))

  const open = (canceled: boolean) => () => {
    set({y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff})
  }

  const close = (velocity = 0) => () => {
    set({y: STATUS_BAR_HEIGHT, immediate: false, config: {...config.stiff, velocity}})
  }

  const dragHandler = ({last, vxvy: [, vy], movement: [, my], cancel, canceled}: DragHandlerAttributes) => {
    if (my < -70) cancel()

    if (last) {
      my > STATUS_BAR_HEIGHT * 0.5 || vy > 0.5 ? close(vy)() : open(true)()
    } else set({y: my, immediate: true})
  }
  const drag = useDrag(dragHandler, dragConfig)



  return (
    <>
      <div onClick={close(0)}>
        <Map/>
      </div>
      <a.div
        className="rounded-t-[6px] shadow-[0px_0px_50px_rgba(40,36,33,0.12)] z-[1000] bg-white touch-none w-full fixed" {...drag()}
        style={{height: `calc(100vh + 100px)`, bottom: `calc(-100vh + ${STATUS_BAR_HEIGHT - 70}px)`, y}}>
        <div onClick={open(true)} className="flex h-[30px] flex-col justify-center items-center">
          <div className="w-[100px] h-[2px] bg-[#143E29] mb-[6px]">

          </div>
        </div>
        <div className="flex container flex-col gap-[16px]">
          <div
            className="flex justify-between py-[10px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
            <div className="flex gap-[12px]">
              <Image
                src={taskIcon}
                width={30}
                height={30}
                alt="task"
              />
              <div className="text-xsm leading-[18px]">
                <p className="font-medium">כלי עבודה</p>
                <p>
                  משימות שונות שהשלמתן תקדם אותך ליעד. הגישה אליהן מהמפה או מתוך הספריה.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between py-[10px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-[12px]">
              <Image
                src={workingToolsIcon}
                width={30}
                height={30}
                alt="task"
              />
              <div className="text-xsm leading-[18px]">
                <p className="font-medium">כלי עבודה</p>
                <p>
                  איך לכתוב קו"ח, להתכונן לראיון,
                  להתנהל בלינקדאין ועוד
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between py-[10px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-[12px]">
              <Image
                src={helpingToolsIcon}
                width={30}
                height={30}
                alt="task"
              />
              <div className="text-xsm leading-[18px]">
                <p className="font-medium">כלי עזר</p>
                <p>
                  איך להפוך למותג אישי, ללמוד ללמוד,
                  לבדוק התאמה לעצמאות ועוד
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between py-[10px] text-xsm pl-[12px] pr-[8px] rounded-[6px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-[12px]">
              <Image
                src={thinkingToolsIcon}
                width={30}
                height={30}
                alt="task"
              />
              <div className="text-xsm leading-[18px]">
                <p className="font-medium">כלי חשיבה</p>
                <p>
                  איך להרים ולשדרג את המוטיבציה ולשמור
                  שתהיה בת לוויה נאמנה
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#0066FF]">לספריה</p>
              </div>
            </div>
          </div>
        </div>
      </a.div>
    </>
  );
};

export default RoadMapTab;