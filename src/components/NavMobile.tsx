import { useNavContext } from "@/context";

export const NavMobile = () => {
  const { isOpen } = useNavContext();
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden fixed bg-red-500 w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      NavMobile
    </nav>
  );
};
