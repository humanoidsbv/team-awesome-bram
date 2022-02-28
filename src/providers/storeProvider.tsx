import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

interface StoreContextProps {
  isMenuOpen: [isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>>];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = {
    isMenuOpen: useState(false),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
