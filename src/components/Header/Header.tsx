import * as React from 'react';
import Logo from "../../shared/Logo/Logo";
import Navigation from "../../shared/Navigation/Navigation";
import SwitchDarkMode from "../../shared/SwitchDarkMode/SwitchDarkMode";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import MenuBar from "../../shared/MenuBar/MenuBar";

const Header: React.FC = () => {
    const [isTop, setIsTop] = React.useState(true);

    React.useEffect(() => {
        window.onscroll = function() {
            scrollFunction();
        };
    }, []);

    function scrollFunction() {
        const HEAD = document.getElementById("nc-reelty-header");

        if (!HEAD) return;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            !!isTop && setIsTop(false);
        } else {
            setIsTop(true);
        }
    }

    return (
        <div id="nc-reelty-header" className="nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40">

            {/* Navigation */}
            <div className={`nc-MainNav1 relative z-10 ${isTop ? "onTop " : "notOnTop backdrop-filter"}`}>
                <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
                    <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
                        <Logo />
                        <Navigation />
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
                        <div className="hidden items-center xl:flex space-x-1">
                            <SwitchDarkMode />
                            <div className="px-1" />
                            <ButtonPrimary href="/login">Connect Wallet</ButtonPrimary>
                        </div>
                        <div className="flex items-center xl:hidden">
                            <SwitchDarkMode />
                            <div className="px-1" />
                            <MenuBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;