import * as React from "react";
import HeroSection from "../components/Section/Hero/HeroSection";
import NewCategoriesSliderSection from "../components/Section/NewCategoriesSlider/NewCategoriesSliderSection";
import FeaturesSection from "../components/Section/Features/FeaturesSection";
import SectionGridFeaturePlaces from "../components/Section/Featured/SectionFeaturedProperties";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "../data/types";
// @ts-ignore
import { Helmet } from "react-helmet"
import PropertiesSection from "../components/Section/Properties/PropertiesSection";

const DEMO_CATS: TaxonomyType[] = [
    {
        id: "1",
        href: "/property",
        name: "New York",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/property",
        name: "Singapore",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/property",
        name: "Paris",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/property",
        name: "London",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/property",
        name: "Tokyo",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/property",
        name: "Maldives",
        taxonomy: "category",
        count: 0,
        thumbnail:
            "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];
const DEMO_CATS_2: TaxonomyType[] = [
    {
        id: "1",
        href: "/property",
        name: "Enjoy the great cold",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "222",
        href: "/property",
        name: "Sleep in a floating way",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        href: "/property",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "4",
        href: "/property",
        name: "Cool in the deep forest",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "5",
        href: "/property",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

function PageHome() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            <Helmet>
                <title>Reelty | Decentralized Real Estate</title>
            </Helmet>
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
                {/* SECTION HERO */}
                <HeroSection className="pt-10 lg:pt-24 pb-16" />

                {/* SECTION 1 */}
                <NewCategoriesSliderSection categories={DEMO_CATS} />

                {/* SECTION */}
                <div className="relative py-16">
                    <PropertiesSection />
                </div>

                {/* SECTION2 */}
                <FeaturesSection />
            </div>
        </div>
    );
}

export default PageHome;
