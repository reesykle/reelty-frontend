import * as React from 'react';
import MainNavigation from "../../shared/Navigation/MainNavigation";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const [isTop, setisTop] = useState(true);

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    function scrollFunction() {
        const $head = document.getElementById("nc-chifis-header");
        if (!$head) return;
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            !!isTop && setisTop(false);
        } else {
            setisTop(true);
        }
    }

    return (
        <div id="nc-chifis-header" className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40">
            <Helmet>
                <title>Reelty | Decentralized Real Estate</title>
            </Helmet>

            {/* NAV */}
           <MainNavigation isTop={isTop} />
            <ButtonPrimary className="mt-6 sm:mt-11">
                Become an author
            </ButtonPrimary>
        </div>
    );
};

export default Header;
