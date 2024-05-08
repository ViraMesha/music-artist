import { useNavContextActions } from "@/context";

export const MenuBtn = () => {
  const { toggleMenuOpen } = useNavContextActions();
  return (
    <div
      onClick={toggleMenuOpen}
      className="group flex flex-col gap-y-2 cursor-pointer xl:hidden items-end"
    >
      <div className="w-7 h-[2px] bg-white"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white"></div>
    </div>
  );
};
