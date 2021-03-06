import ButtonPrimary from "../shared/Button/ButtonPrimary";
import * as React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import NcImage from "../shared/NcImage/NcImage";

const NotFoundPage: React.FC = () => (
    <div className="nc-Page404">
        <Helmet>
            <title>Reelty Page Not Found</title>
        </Helmet>
        <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
            <NcImage src={"/images/404.png"} />
            <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
                THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.{" "}
            </span>
            <div className="pt-8">
                <ButtonPrimary href="/">Return Home Page</ButtonPrimary>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
