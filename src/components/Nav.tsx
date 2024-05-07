"use client";
import { navLinks } from "@/lib/data";
import { Link } from "react-scroll";

type Props = {
  containerStyles: string;
  linkStyles: string;
};

export const Nav = ({ containerStyles, linkStyles }: Props) => {
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link, index) => {
        const { path, name } = link;
        return (
          <Link
            key={index}
            to={path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth
            spy
            offset={-50}
            activeClass="active"
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
