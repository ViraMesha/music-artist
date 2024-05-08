"use client";
import { navLinks } from "@/lib/data";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useNavContextActions } from "@/context";

type Props = {
  containerStyles: string;
  linkStyles?: string;
};

export const Nav = ({ containerStyles, linkStyles }: Props) => {
  const isDesktop = useMediaQuery({
    query: "(min-width:1310px)",
  });

  const { toggleMenuOpen } = useNavContextActions();

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link, index) => {
        const { path, name } = link;
        return (
          <Link
            key={index}
            to={path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
            onClick={toggleMenuOpen}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
