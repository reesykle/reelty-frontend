import React, { FC } from "react";
import { DEMO_STAY_LISTINGS } from "../../../data/listings";
import { StayDataType } from "data/types";
import TabFilters from "../../Filters/TabFilters";
import Heading2 from "../../Heading/Heading2";
import PropertyCardH from "../../Cards/PropertyCardH";
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";

export interface SectionGridFilterCardProps {
    className?: string;
    data?: StayDataType[];
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const PropertiesSection: FC<SectionGridFilterCardProps> = ({
                                                                   className = "",
                                                                   data = DEMO_DATA,
                                                               }) => {
    return (
        <div className={`nc-SectionGridFilterCard ${className}`} data-nc-id="SectionGridFilterCard">
            <Heading2 heading="Properties" subHeading={
                <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
                   Browse properties to invest in.
                </span>
            }/>

            <div className="mb-8 lg:mb-11">
                <TabFilters />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 ">
                {data.map((stay) => (
                    <PropertyCardH key={stay.id} data={stay} />
                ))}
            </div>
            <div className="flex mt-16 justify-center items-center">
                <div className="flex mt-16 justify-center items-center">
                    <ButtonPrimary>More Coming Soon</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default PropertiesSection;
