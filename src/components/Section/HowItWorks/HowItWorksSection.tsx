import Heading from "../../Heading/Heading";
import * as React from 'react';
import NcImage from "../../../shared/NcImage/NcImage";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: string;
    imgDark?: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: "/images/HIW1.png",
    title: "Book & relax",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 2,
    img: "/images/HIW2.png",
    title: "Smart checklist",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 3,
    img: "/images/HIW3.png",
    title: "Save more",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
];

const HowItWorksSection: React.FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="HowItWorksSection"
    >
      <Heading isCenter desc="Keep calm & travel on">
        How it work
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={"/images/VectorHIW.svg"}
          alt=""
        />
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.imgDark ? (
              <>
                <NcImage
                  containerClassName="dark:hidden block mb-8 max-w-[200px] mx-auto"
                  src={item.img}
                />
                <NcImage
                  containerClassName="hidden dark:block mb-8 max-w-[200px] mx-auto"
                  src={item.imgDark}
                />
              </>
            ) : (
              <NcImage
                containerClassName="mb-8 max-w-[200px] mx-auto"
                src={item.img}
              />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
