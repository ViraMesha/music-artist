"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/variants";
import { AlbumSlider, SectionHeader } from "@components/index";

export const Albums = () => {
  return (
    <section id="discography">
      <div className="mx-auto container">
        <SectionHeader preTitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
};
