import * as React from 'react';
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const HeroSection: React.FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="HeroSection"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            The Future of Real Estate is Decentralized
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Join the movement and be part of the next disruptive thing in blockchain.
          </span>
          <ButtonPrimary>Start Investing</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={"/images/architecture/architecture-3.jpg"} alt="hero" />
        </div>
      </div>

      <div className="z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
      </div>
    </div>
  );
};

export default HeroSection;
