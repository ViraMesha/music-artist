import { useNavContext, useNavContextActions } from "@/context";
import { RiCloseLine } from "react-icons/ri";
import { Nav } from "./index";

export const NavMobile = () => {
  const { isOpen } = useNavContext();
  const { toggleMenuOpen } = useNavContextActions();
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden fixed bg-primary w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={toggleMenuOpen}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Nav containerStyles="flex flex-col text-[30px] uppercase font-bold bg-pink-500/10 h-full items-center justify-center gap-y-8" />
    </nav>
  );
};
