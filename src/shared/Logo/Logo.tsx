import * as React from "react";
import { Link } from "gatsby";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = "/images/logo.png",
  imgLight = "/images/logo-light.png",
  className = "",
}) => {
  return (
    <Link to="/" className={`ttnc-logo inline-block text-primary-6000 ${className}`}>
      <LogoSvgLight />
      <LogoSvg />
    </Link>
  );
};

export default Logo;
