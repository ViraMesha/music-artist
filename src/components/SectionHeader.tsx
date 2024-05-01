"use client";
import { fadeIn } from "@/helpers/variants";
import { motion } from "framer-motion";

type Props = {
  preTitle: string;
  title: string;
};

export const SectionHeader = ({ preTitle, title }: Props) => {
  return (
    <header className="mb-8">
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {preTitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center"
      >
        {title}
      </motion.h2>
    </header>
  );
};
