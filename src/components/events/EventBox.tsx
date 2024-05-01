"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { singerImg } from "@/utils";
import { EventT } from "@/models/events/Event.type";
import { fadeIn } from "@/helpers/variants";

// icons
import { RiMapPin2Fill } from "react-icons/ri";

type Props = {
  events: EventT[];
};

export const EventBox = ({ events }: Props) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        {/* Image */}
        <div className="hidden xl:flex w-[400px]">
          <Image
            src={singerImg}
            alt=""
            width={358}
            height={489}
            priority
            quality={100}
          />
        </div>
        {/* event list */}
        <ul className="flex-1  h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent xl:pr-6">
          {events.map((event) => {
            const {
              id,
              date: { day, month },
              location: { city, country, address },
              priceRange,
            } = event;
            return (
              <li
                key={id}
                className="flex flex-col xl:flex-row items-center justify-between gap-y-4  xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0"
              >
                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                  {/* day & month */}
                  <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0 ">
                    <p className="text-[44px] font-black text-accent">{day}</p>
                    <p className="text-[20px] font-extrabold">{month}</p>
                  </div>
                  {/* location */}
                  <div className="w-64 flex flex-col gap-y-2">
                    <div className="text-lg leading-none font-bold">{`${city}, ${country}`}</div>
                    <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                      <div className="text-accent text-lg">
                        <RiMapPin2Fill />
                      </div>
                      <div className="font-light">{address}</div>
                    </div>
                  </div>
                </div>
                {/* price range */}
                <p className="w-[100px] text-[17px] text-center text-accent font-bold">
                  {priceRange}
                </p>
                {/* btn */}
                <button className="btn btn-sm btn-accent">Get tickets</button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};
