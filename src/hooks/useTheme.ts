"use client";

import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  DEFAULT_THEME_ID,
  getTheme,
  nextThemeId,
  type ThemeId,
} from "@/lib/themes";
import { loadThemeId, saveThemeId } from "@/lib/planner";

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadThemeId();
    const id = (stored as ThemeId) || DEFAULT_THEME_ID;
    setThemeId(id);
    applyTheme(getTheme(id));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyTheme(getTheme(themeId));
    saveThemeId(themeId);
  }, [themeId, ready]);

  const cycleTheme = useCallback(() => {
    setThemeId((current) => nextThemeId(current));
  }, []);

  const selectTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
  }, []);

  return {
    themeId,
    theme: getTheme(themeId),
    cycleTheme,
    selectTheme,
    ready,
  };
}
