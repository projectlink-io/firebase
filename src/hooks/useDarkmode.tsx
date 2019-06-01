import { useEffect } from "react";
import { setTheme } from "../components/ThemeProvider";

const derriveTheme = (e: MediaQueryListEvent) => {
  if (e.matches) return setTheme("dark")
  return setTheme("light");
}

/**
 * useDarkmode
 * 
 * hook that queries the browser
 * for system darkmode and sets
 * theme accordingly
 */
export const useDarkmode = () => useEffect(() => {
  /**
   * opt out if there's no support
   * for matchMedia
   */
  if (!matchMedia) return () => {};

  const mediaQueryList = matchMedia("(prefers-color-scheme: dark)");
  mediaQueryList.addListener(derriveTheme);

  return () => {
    mediaQueryList.removeListener(derriveTheme);
  }
}, [])
