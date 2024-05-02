"use client";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import Image from "next/image";
import { playerAvatarImg } from "@/utils";
export const Player = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40">
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* text & avatar img */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            {/* avatar */}
            <div className="relative w-16 h-16">
              <Image src={playerAvatarImg} alt="" fill priority />
            </div>
            {/* text */}
            <div className="leading-none">
              <p className="font-medium text-lg">Mia Reynolds</p>
              <p className="font-light text-sm">Freedom</p>
            </div>
          </div>
          {/* player */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
