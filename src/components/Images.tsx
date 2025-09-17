import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <>
      {/* html image */}
      <img src="./placeholder.png" alt="" width={100} height={100} />
      {/* next image */}
      <Image src={"/placeholder.png"} alt="" width={100} height={100} />
    </>
  );
};

export default Images;
