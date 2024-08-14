import Image, { type StaticImageData } from "next/image";

import LogoIcon from "../../public/logo.svg";

export function Logo() {
  const logo = LogoIcon as StaticImageData;
  return (
    <Image
      alt="logo"
      src={logo}
      width={logo.width}
      height={logo.height}
      blurDataURL={logo.blurDataURL}
      style={{
        height:"50px"
      }}
    />
  );
}
