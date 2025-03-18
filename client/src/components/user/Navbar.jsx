import React from "react";
import { ButtonOutline, ButtonSolid } from "../common/Button";

const Navbar = () => {
  return (
    <>
      <div className="flex fixed z-50 top-0 w-full backdrop-blur-3xl items-center justify-between md:px-20 px-5 h-20">
        <div className="Logo">
          <h1 className="md:text-3xl text-2xl font-semibold style-regular">
            WanderSphere
          </h1>
        </div>
        <div className="space-x-2">
          <ButtonOutline
            title={"Register"}
            className={"px-3 py-1 md:py-2 rounded-md"}
          />
          <ButtonSolid
            title={"Login"}
            className={"px-3 py-1 md:py-2 rounded-md"}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
