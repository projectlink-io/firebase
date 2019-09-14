import { useEffect, useState, Dispatch, SetStateAction, useCallback } from "react";

/**
 * TODO:
 * 
 * persist and hydrate theme choice
 */

/**
 * useDarkmode
 * 
 * hook that keeps track of
 * app theme. the hook first
 * queries the browser for
 * system darkmode
 */
export function useDarkmode(): UseDarkmode {
  const [theme, setTheme] = useState<Theme>("light");

  useBrowserDarkmode(useCallback(setTheme, []));

  return [theme, setTheme];
}

const useBrowserDarkmode = (setTheme: Dispatch<SetStateAction<Theme>>) => {
  useEffect(() => {
    /**
     * opt out if there's no support
     * for matchMedia
     */
    if (!matchMedia) return () => {};

    const derriveTheme = (e: MediaQueryListEvent) => {
      if (e.matches) return setTheme("dark")
      return setTheme("light");
    }

    const mediaQueryList = matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addListener(derriveTheme);

    return () => {
      mediaQueryList.removeListener(derriveTheme);
    }
  }, [setTheme])
}

type UseDarkmode = [Theme, Dispatch<SetStateAction<Theme>>]
type Theme = "light" | "dark";
