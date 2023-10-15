import React from 'react';
import { ThemeContextType } from '../../interface/interface';


export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

interface Child extends ThemeContextType {
    children: React.ReactNode;
  }
export const SearchProvider = ({
  children,
  theme,
  toggleDisplayMode
}:
Child) => {
  return <ThemeContext.Provider value={{ theme, toggleDisplayMode}}>{children}</ThemeContext.Provider>;
};
