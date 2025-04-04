import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins">
          <span>Get</span>
        </p>
      </div>

    </div>
  </div>
);

export default GetStarted;