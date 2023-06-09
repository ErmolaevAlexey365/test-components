import React from 'react';

interface BasePrimaryProps {
  color?: string,
  active?: boolean
}

const BasePrimary: React.FC<BasePrimaryProps> = ({color, active}) => {
  return (
    <div className="relative">
      {active && <>
          <div
              className="w-[135px] px-[12px] rounded-[7px] shadow-[0px_0px_40px_rgba(20,62,41,0.2)] py-[10px] text-xsm font-medium
              text-center bg-white absolute bottom-[70px] left-[-36px]">
              <p>
                  מיקומך נכון לעכשיו
              </p>
              <div
                  className="absolute bottom-[-10px] left-[51px] w-[10px] rounded-[2px]  border-l-[15px] border-l-transparent

                   border-r-[15px]  border-r-transparent border-t-[20px] border-t-white">
              </div>
          </div>
          <div className="absolute bottom-[24px] left-[17.5px]">

              <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M17.5 2.94531L11 1.44531L5.5 3.44531L1.5 9.44531V16.4453L12 31.4453L22.5 16.4453V8.94531L17.5 2.94531Z"
                      fill="white"/>
                  <circle cx="12" cy="12.4453" r="5" fill="#62D4FF"/>
                  <path
                      d="M17 12.4453C17 15.2578 14.75 17.4453 12 17.4453C9.1875 17.4453 7 15.2578 7 12.4453C7 9.69531 9.1875 7.44531 12
                      7.44531C14.75 7.44531 17 9.69531 17 12.4453ZM12 15.4453C13.625 15.4453 15 14.1328 15 12.4453C15 10.8203 13.625
                      9.44531 12 9.44531C10.3125 9.44531 9 10.8203 9 12.4453C9 14.1328 10.3125 15.4453 12 15.4453ZM24 12.4453C24 17.9453
                       16.6875 27.6328 13.4375 31.6953C12.6875 32.6328 11.25 32.6328 10.5 31.6953C7.25 27.6328 0 17.9453 0 12.4453C0
                        5.82031 5.3125 0.445312 12 0.445312C18.625 0.445312 24 5.82031 24 12.4453ZM12 2.44531C6.4375 2.44531 2 6.94531 2
                        12.4453C2 13.4453 2.3125 14.7578 3 16.4453C3.6875 18.0703 4.625 19.8203 5.75 21.5703C7.875 25.0078 10.375 28.3203
                         12 30.3203C13.5625 28.3203 16.0625 25.0078 18.1875 21.5703C19.3125 19.8203 20.25 18.0703 20.9375 16.4453C21.625
                          14.7578 22 13.4453 22 12.4453C22 6.94531 17.5 2.44531 12 2.44531Z"
                      fill="#143E29"/>
              </svg>
          </div>
      </>}
      <svg viewBox="0 0 62 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={`${color || "#143E29"} `} opacity="0.2"
              d="M43.7808 10.002H18.4084C18.2571 10.002 18.1074 10.0331 17.9687 10.0935L0.662386 17.6229C0.26015 17.7979 0 18.1947 0
              18.6334V28.6332C0 29.0769 0.266132 29.4774 0.675238 29.6492L17.9743 36.916C18.1094 36.9727 18.2545 37.002 18.4011
              37.002H43.7881C43.9361 37.002 44.0825 36.9722 44.2188 36.9143L61.3286 29.6506C61.7357 29.4778 62 29.0784 62
               28.6362V18.6303C62 18.1932 61.7417 17.7975 61.3415 17.6215L44.2243 10.0952C44.0845 10.0337 43.9335 10.002 43.7808 10.002Z"/>
        <path fill={`${color || "#143E29"} `} stroke={`${color || "#143E29"} `}
              d="M40.6679 14.4688H20.2597H7.12293C5.89438 14.4688 4.89844 15.4647 4.89844 16.6932V23.9897C4.89844 24.8968 5.44924 25.7131
              6.29045 26.0525L19.665 31.45C19.9296 31.5567 20.2122 31.6116 20.4975 31.6116H40.4278C40.7158 31.6116 41.0012 31.5557 41.2679
               31.4469L54.4936 26.0527C55.3308 25.7113 55.878 24.8971 55.878 23.993V16.6932C55.878 15.4647 54.8821 14.4688 53.6535
               14.4688H40.6679Z"
              strokeWidth="2"/>
        <path fill="white" stroke={`${color || "#143E29"

        } `}
              d="M40.4389 1H20.4865C20.2142 1 19.9442 1.05 19.6899 1.14751L6.32637 6.2727C5.46624 6.60257 4.89844 7.42847 4.89844
              8.34968V14.6324C4.89844 15.563 5.47775 16.3953 6.35047 16.7185L19.7067 21.6642C19.954 21.7558 20.2155 21.8026 20.4792
              21.8026H40.4463C40.7125 21.8026 40.9766 21.7548 41.226 21.6615L54.4332 16.7189C55.3022 16.3937 55.878 15.5633 55.878
              14.6355V8.34648C55.878 7.42816 55.3137 6.60423 54.4575 6.27234L41.2428 1.15035C40.9864 1.05098 40.7139 1 40.4389 1Z"
              strokeWidth="2"/>
      </svg>
    </div>
  );
};

export default BasePrimary;