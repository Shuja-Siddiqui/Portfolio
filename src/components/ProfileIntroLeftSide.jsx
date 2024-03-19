import React, { useEffect } from "react";
import logo from "../assets/img/user-sidebar-thumb.png";
import { Doughnut } from "./charts";
import { FaDownload } from "react-icons/fa";
import Typed from "typed.js";
export const ProfileIntroLeftSide = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 30,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full z-20 rounded-2xl bg-primaryDark flex justify-center items-center p-3 overflow-hidden relative md:max-w-lg ">
      <div className="absolute z-20 w-[320px] h-[100px] -right-[215px] top-[-50px] bg-[#18191A] overflow-hidden"></div>
      <div className="absolute z-20 w-[320px] h-[50px] right-[40px] top-[-106px] rotate-45  bg-[#18191A]"></div>
      <div className="flex  w-full flex-col justify-start items-center gap-3 p-1 pt-12">
        <div className="w-[150px] h-[150px] rounded-full relative border-8 border-night-black">
          <img
            src={logo}
            alt="profile"
            className="absolute inset-0 rounded-full overflow-hidden top-0"
          />
        </div>
        <div className="w-full flex justify-start items-center flex-col gap-3 min-h-[50px] mb-5">
          <h4 className="font-bold">Brown Reddick</h4>
          <div id="typed-strings">
            <p>
              <i>MERN</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Vue</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Progressive</i> <strong>Applications</strong>
            </p>
          </div>
          <p className="text-secondary" id="typed"></p>
        </div>
        <hr className=" w-full" style={{ borderTop: "2px solid #333" }} />
        <div className=" w-full flex justify-start items-center flex-col  gap-3">
          <div className="w-full flex justify-between items-center gap-2">
            <h6>Residence</h6>
            <p className="text-primary">Canada</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <h6>Residence</h6>
            <p className="text-primary">Canada</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <h6>Residence</h6>
            <p className="text-primary">Canada</p>
          </div>
        </div>
        <div className="card w-full bg-[#333] shadow-xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Skills!</h2>
            <div className="w-full flex justify-center items-center mb-5">
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"HTML"}
              />
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"CSS"}
              />
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"Js"}
              />
            </div>
          </div>
        </div>

        <button className="w-full flex justify-center uppercase items-center bg-secondary py-4 font-bold px-5 rounded-full">
          <span className="mr-2">Download CV</span>
          <FaDownload className="text-white animate-bounce" />{" "}
          {/* Use the imported icon component */}
        </button>
      </div>
    </div>
  );
};