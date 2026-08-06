"use client";

import { ReactNode, createContext, useContext } from "react";

type HeaderContextType = {
  onMenuClick: () => void;
};

const HeaderContext = createContext<HeaderContextType>({
  onMenuClick: () => {},
});

type DashboardHeaderProviderProps = {
  onMenuClick: () => void;
  children: ReactNode;
};

export const DashboardHeaderProvider = ({
  onMenuClick,
  children,
}: DashboardHeaderProviderProps) => {
  return (
    <HeaderContext.Provider value={{ onMenuClick }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useDashboardHeader = () => {
  return useContext(HeaderContext);
};