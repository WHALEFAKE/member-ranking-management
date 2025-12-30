import React from "react";
import logo from "../../assets/logo.svg"
import assist from "../../assets/assist.png"
function Navigation_Bar() {
  return (
    <div className="sticky top-0 flex gap-5 h-25 bg-[#fafafa] px-20">
      <img src={logo} alt="gg-logo" />
      <div className="flex flex-1 justify-between items-center">
        <div>
          <h1 className="text-[#1a2a56] font-bold text-[32px]">Google Developer Group</h1>
          <div className="flex gap-2.5 items-center">
            <span className="text-[#4385f3]">On Campus</span>
            <span>•</span>
            <span>FPT University HCMC</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div>Member</div>
          <div>Event</div>
          <div>Gallery</div>
          <div>FAQ</div>
          <div>
            <img
              className="h-5"
              src={assist}
              alt="assist-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation_Bar;
