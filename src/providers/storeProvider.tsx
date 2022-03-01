import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import { TimeEntryProps } from "../types/Types";

interface StoreContextProps {
  isMenuOpen: [isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>>];
  timeEntries: [
    timeEntries: TimeEntryProps[],
    setTimeEntries: Dispatch<SetStateAction<TimeEntryProps[]>>,
  ];
}

export const StoreContext = createContext({} as StoreContextProps);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = {
    isMenuOpen: useState(false),
    timeEntries: useState<TimeEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
