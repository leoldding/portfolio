import React from "react";
import { Copyright } from "@mui/icons-material";

function Footer() {
    return (
      <div className={"relative bottom-0 w-full h-[36px] bg-orange-200 flex flex-col justify-center items-center"}>
          <div className={"text-xs"}>
             Leo Ding <Copyright sx={{fontSize: "14px"}}/> {(new Date().getFullYear())}. Hosted on AWS.
          </div>
      </div>
    );
}

export default Footer;
