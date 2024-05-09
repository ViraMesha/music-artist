"use client";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { PostT } from "@/models/posts/Post.type";
import Link from "next/link";
import { fadeIn } from "@/helpers/variants";

type Props = {
  posts: PostT[];
};

export const PostList = ({ posts }: Props) => {
  // get first three posts
  const firstThreePosts = posts.slice(0, 3);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center"
    >
      <ul className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10">
        {firstThreePosts.map((post) => {
          const { id, date, title, description } = post;
          return (
            <li key={id} className="flex-1">
              {/* date */}
              <p className="text-accent font-bold mb-1">{date}</p>
              {/* title */}
              <p className="text-xl font-medium mb-4">{title}</p>
              {/* description */}
              <p className="text-white/30 mb-6 font-light">{description}</p>
              <Link href="#" className="flex items-center gap-x-2 group">
                Read more{" "}
                <BsArrowRight className="text-xl group-hover:ml-1 transition-all" />
              </Link>
            </li>
          );
        })}
      </ul>
      <button type="button" className="btn btn-lg btn-accent">
        View all posts
      </button>
    </motion.div>
  );
};
