"use client";

import { useCallback, useEffect, useState } from "react";
import {
  loadDayPlan,
  newBlockId,
  quickAddLabel,
  saveDayPlan,
  sortBlocks,
  suggestedMorningStart,
  type DayPlan,
  type TimeBlock,
  WORK_END,
  WORK_START,
  SLOT_MINUTES,
} from "@/lib/planner";

function appendBlock(
  prev: DayPlan,
  block: TimeBlock,
): DayPlan | null {
  const overlaps = prev.blocks.some(
    (b) => b.startMinutes < block.endMinutes && block.startMinutes < b.endMinutes,
  );
  if (overlaps) return null;
  return {
    ...prev,
    blocks: sortBlocks([...prev.blocks, block]),
  };
}

export function usePlanner(selectedDate: string) {
  const [plan, setPlan] = useState<DayPlan>({
    date: selectedDate,
    blocks: [],
    morningNote: "",
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    setPlan(loadDayPlan(selectedDate));
    setReady(true);
  }, [selectedDate]);

  useEffect(() => {
    if (!ready) return;
    saveDayPlan(plan);
  }, [plan, ready]);

  const updatePlan = useCallback((patch: Partial<DayPlan>) => {
    setPlan((prev) => ({ ...prev, ...patch }));
  }, []);

  const addBlock = useCallback(
    (block: Omit<TimeBlock, "id"> & { id?: string }): string => {
      const id = block.id ?? newBlockId();
      setPlan((prev) => {
        const next = appendBlock(prev, { ...block, id });
        return next ?? prev;
      });
      return id;
    },
    [],
  );

  const updateBlock = useCallback((id: string, patch: Partial<TimeBlock>) => {
    setPlan((prev) => ({
      ...prev,
      blocks: sortBlocks(
        prev.blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)),
      ),
    }));
  }, []);

  const removeBlock = useCallback((id: string) => {
    setPlan((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((b) => b.id !== id),
    }));
  }, []);

  const addQuickBlock = useCallback(
    (base: number, multiplier: number, duration: number): string | null => {
      const title = quickAddLabel(base, multiplier);
      let createdId: string | null = null;

      setPlan((prev) => {
        const lastEnd =
          prev.blocks.length > 0
            ? Math.max(...prev.blocks.map((b) => b.endMinutes))
            : suggestedMorningStart();
        const start = Math.max(WORK_START, lastEnd);
        const end = Math.min(WORK_END, start + duration);
        if (end <= start) return prev;

        const id = newBlockId();
        const next = appendBlock(prev, {
          id,
          title,
          startMinutes: start,
          endMinutes: end,
          colorIndex: prev.blocks.length % 5,
        });
        if (!next) return prev;
        createdId = id;
        return next;
      });

      return createdId;
    },
    [],
  );

  const addBlockAtSlot = useCallback(
    (slotMinutes: number, base: number): string | null => {
      const start = slotMinutes;
      const end = Math.min(WORK_END, start + SLOT_MINUTES);
      if (end <= start) return null;

      let createdId: string | null = null;

      setPlan((prev) => {
        const id = newBlockId();
        const next = appendBlock(prev, {
          id,
          title: quickAddLabel(base, 0.5),
          startMinutes: start,
          endMinutes: end,
          colorIndex: prev.blocks.length % 5,
        });
        if (!next) return prev;
        createdId = id;
        return next;
      });

      return createdId;
    },
    [],
  );

  return {
    plan,
    updatePlan,
    addBlock,
    updateBlock,
    removeBlock,
    addQuickBlock,
    addBlockAtSlot,
    ready,
  };
}
