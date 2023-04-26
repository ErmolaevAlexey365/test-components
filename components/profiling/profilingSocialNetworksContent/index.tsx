import React, { useState } from 'react';

import CardImageButton from "@/components/common/cardImageButton";
import DefaultButton from "@/components/common/defaultButton";
import RevertButton from "@/components/common/revertButton";
import { IProfilingComponentProps } from "@/shared/interfaces/profiling/IProfilingComponentProps";

import faceBookImage from "../../../../public/assets/profiling/stepper/second-step/facebook-image.png";
import instagramImage from "../../../../public/assets/profiling/stepper/second-step/instagram-image.png";
import linkedinImage from "../../../../public/assets/profiling/stepper/second-step/linkedin-image.png";
import otherImage from "../../../../public/assets/profiling/stepper/second-step/other-image.png";
import tikTokImage from "../../../../public/assets/profiling/stepper/second-step/tiktok-image.png";
import twitterImage from "../../../../public/assets/profiling/stepper/second-step/twitter-image.png";

const ProfilingSocialNetworksContent: React.FC<IProfilingComponentProps> = ({answerQuestion, revertAnswer}) => {

    const [hasSocialNetworks, setHasSocialNetworks] = useState<boolean | null>(null)
    const [openSocialList, setOpenSocialList] = useState<boolean>(false)
    const [selectedSocial, setSelectedSocial] = useState<string[]>([]);
    const [otherNetwork, setOtherNetwork] = useState<string>("");

    const selectToggle = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        let social = [...selectedSocial]

        if (social.includes(value)) {
            setSelectedSocial(social.filter((item) => item !== value));
            return;
        }

        social.push(value)

        setSelectedSocial(social);

    };

    const isDisabledHandler = () => {
        return !(selectedSocial[0] || hasSocialNetworks !== null);
    }

    const revertHandler = async () => {
        revertAnswer()
    }

    const submitHandler = async () => {
        const answer: {
            answer: {
                type: string,
                questionIdentifier: string,
                hasSocialNetworks?: boolean,
                socialNetworks?: string[],
                otherNetwork?: string,
            }
        } = {
            answer: {
                type: "SocialNetworks",
                questionIdentifier: "SocialNetworks",
                hasSocialNetworks: hasSocialNetworks!,
                socialNetworks: selectedSocial,
                otherNetwork
            }
        }

        if (!hasSocialNetworks) {
            delete answer.answer.socialNetworks
            delete answer.answer.otherNetwork
        }

        answerQuestion(answer)
    }

    return (
        <>
            <div className="flex flex-col grow justify-between lg:px-[100px]">
                <div className="text-semimd md:text-md font-medium">
                    <p className="mb-[16px] md:mb-[32px]">
                        האם אני פעיל ברשתות חברתיות? מדובר על כניסה וצפייה בתכנים ולאו דווקא העלאת תכנים)
                    </p>
                    <div className="flex gap-[22px] mb-[40px] md:mb-[80px]">
                        <DefaultButton selected={hasSocialNetworks} text="כן" handleFunction={() => {
                            setOpenSocialList(true)
                            setHasSocialNetworks(true)
                        }}/>
                        <DefaultButton selected={hasSocialNetworks === false} text="לא" handleFunction={() => {
                            setOpenSocialList(false)
                            setHasSocialNetworks(false)
                        }}/>
                    </div>
                    {openSocialList &&
                        <>
                            <p className="text-semimd font-medium md:text-md">היכן?</p>
                            <p className="text-xsm md:text-sm font-normal mb-[16px] md:mb-[32px]">הדרג הניהולי הבכיר ביותר שלי היה:</p>
                            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[16px] mb-[66px]">
                                <CardImageButton
                                    imageSize="w-[34px] h-[34px]"
                                    value="Facebook"
                                    text="לינקדאין"
                                    img={linkedinImage}
                                    id="1"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("Facebook")}
                                />
                                <CardImageButton
                                    imageSize="w-[19px] h-[34px]"
                                    value="LinkedIn"
                                    text="פייסבוק"
                                    img={faceBookImage}
                                    id="2"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("LinkedIn")}
                                />
                                <CardImageButton
                                    imageSize="w-[34px] h-[34px]"
                                    value="Instagram"
                                    text="טיק טוק"
                                    img={instagramImage}
                                    id="4"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("Instagram")}
                                />
                                <CardImageButton
                                    imageSize="w-[30px] h-[35px]"
                                    value="TikTok"
                                    text="אינסטגרם"
                                    img={tikTokImage}
                                    id="3"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("TikTok")}
                                />

                                <CardImageButton
                                    imageSize="w-[37px] h-[30px]"
                                    value="Twitter"
                                    text="טוויטר"
                                    img={twitterImage}
                                    id="5"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("Twitter")}
                                />
                                <CardImageButton
                                    imageSize="w-[34px] h-[34px]"
                                    value="Other"
                                    text="אחר"
                                    img={otherImage}
                                    id="6"
                                    selectToggle={selectToggle}
                                    selected={selectedSocial.includes("Other")}
                                />
                            </div>
                            {selectedSocial.includes('Other') &&
                                <div className="mb-[26px]">
                                    <p className="mb-[8px]">
                                        באיזו רשת חברתית?
                                    </p>
                                    <textarea placeholder="כאן המקום לכתוב..."
                                              value={otherNetwork}
                                              onChange={(e) => setOtherNetwork(e.target.value)}
                                              className="resize-none py-[9px] px-[12px] h-[96px] border-solid border border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px] w-full lg:hover:border-[#62D4FF]"
                                    />
                                </div>}
                        </>
                    }
                </div>
            </div>
            <div className="flex justify-between gap-[16px]">
                <div className="max-w-[106px]">
                    <RevertButton text="אחורה" onClick={() => revertHandler()}/>
                </div>
                <div className="w-full md:max-w-[132px]">
                    <button disabled={isDisabledHandler()} onClick={submitHandler} type="button"
                            className="flex gap-[8px] bg-[#143E29] text-white w-full items-center justify-center flex-2 px-[36px]
                             py-[13px] rounded-[8px] disabled:bg-[#C2C2C2] ">
                        קדימה
                    </button>
                </div>
            </div>
        </>

    );
};

export default ProfilingSocialNetworksContent;