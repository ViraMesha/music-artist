"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type NavContextT = {
  isOpen: boolean;
};

type NavContextActionsT = {
  toggleMenuOpen: () => void;
};

const NavContext = createContext<NavContextT | null>(null);
const NavContextActions = createContext<NavContextActionsT | null>(null);

export const NavContextProvider = ({ children }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const contextValue = useMemo(
    () => ({
      isOpen,
    }),
    [isOpen]
  );

  return (
    <NavContext.Provider value={contextValue}>
      <NavContextActions.Provider value={{ toggleMenuOpen }}>
        {children}
      </NavContextActions.Provider>
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context)
    throw new Error("useNavContext must be used within a NavContextProvider");

  return context;
};

export const useNavContextActions = () => {
  const context = useContext(NavContextActions);
  if (!context)
    throw new Error(
      "useNavContextActions must be used within a NavContextActionsProvider"
    );

  return context;
};
