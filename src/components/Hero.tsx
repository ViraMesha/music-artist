"use client";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  birdImg,
  dotImg,
  microphoneImg,
  singerHeroImg,
  typo1Img,
  typo2Img,
} from "@/utils";
import { fadeIn } from "@/helpers/variants";
import { locationSequence } from "@/constants";

export const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
      <div className="container mx-auto h-full flex-center xl:justify-start">
        {/* text */}
        <div className=" h-full flex-col flex-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image src={typo1Img} alt="" fill className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]"
              >
                <Image src={typo2Img} alt="" fill className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity"
              >
                <Image src={birdImg} alt="" fill className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          {/* tour & location */}
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[60px] flex items-center mb-6 text-[26px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <div>World</div>
              <div className="relative w-2 h-2 mx-2 flex-center">
                <Image src={dotImg} alt="" fill />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex-center">
                <Image src={dotImg} alt="" fill />
              </div>
              <div>2024</div>
            </div>
            {/* icon */}
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
              <Image fill src={microphoneImg} alt="" />
            </div>
            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className="btn btn-lg btn-accent">Get tickets</button>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10"
        >
          <Image
            src={singerHeroImg}
            alt=""
            width={617}
            height={893}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
