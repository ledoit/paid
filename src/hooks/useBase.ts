"use client";

import { useCallback, useEffect, useState } from "react";
import { DEFAULT_BASE, loadBase, parseBase, saveBase } from "@/lib/planner";

export function useBase() {
  const [base, setBase] = useState(DEFAULT_BASE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBase(loadBase());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveBase(base);
  }, [base, ready]);

  const updateBase = useCallback((value: string) => {
    setBase(parseBase(value));
  }, []);

  return { base, updateBase, ready };
}
