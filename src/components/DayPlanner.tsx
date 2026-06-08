"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { BlockEditor } from "@/components/BlockEditor";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TimeGrid } from "@/components/TimeGrid";
import { useBase } from "@/hooks/useBase";
import { usePlanner } from "@/hooks/usePlanner";
import { useTheme } from "@/hooks/useTheme";
import {
  dateKey,
  formatMinutes,
  minutesFromMidnight,
  QUICK_MULTIPLIERS,
  quickAddLabel,
  totalPlannedMinutes,
} from "@/lib/planner";

export function DayPlanner() {
  const [selectedDate, setSelectedDate] = useState(() => dateKey());
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [nowMinutes, setNowMinutes] = useState(0);
  const [clock, setClock] = useState("");

  const { themeId, cycleTheme, selectTheme } = useTheme();
  const { base, updateBase } = useBase();
  const {
    plan,
    updatePlan,
    updateBlock,
    removeBlock,
    addQuickBlock,
    addBlockAtSlot,
  } = usePlanner(selectedDate);

  const selectNewBlock = useCallback((id: string | null) => {
    if (id) setSelectedBlockId(id);
  }, []);

  const handleAddAtSlot = useCallback(
    (slotMinutes: number) => {
      const id = addBlockAtSlot(slotMinutes, base);
      selectNewBlock(id);
    },
    [addBlockAtSlot, base, selectNewBlock],
  );

  const handleQuickAdd = useCallback(
    (multiplier: number, duration: number) => {
      const id = addQuickBlock(base, multiplier, duration);
      selectNewBlock(id);
    },
    [addQuickBlock, base, selectNewBlock],
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setNowMinutes(minutesFromMidnight(now));
      setClock(
        now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const selectedBlock = useMemo(
    () => plan.blocks.find((b) => b.id === selectedBlockId) ?? null,
    [plan.blocks, selectedBlockId],
  );

  const isToday = selectedDate === dateKey();
  const plannedMins = totalPlannedMinutes(plan.blocks);
  const showMorningBanner =
    isToday && plan.blocks.length === 0 && nowMinutes < 10 * 60;

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[var(--paid-bg)] text-[var(--paid-fg)]">
      <header className="z-40 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[var(--paid-border)] bg-[var(--paid-bar)] px-4 py-3">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold tracking-tight">
            <span className="text-[var(--paid-accent)]">Paid</span>
          </h1>
          <p className="hidden text-xs text-[var(--paid-muted)] sm:block">
            Morning work planner
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedBlockId(null);
            }}
            className="editor-input rounded-md px-2 py-1.5 text-sm"
          />
          {isToday && (
            <span className="font-mono text-sm text-[var(--paid-muted)]">
              {clock}
            </span>
          )}
          <ThemeToggle
            themeId={themeId}
            onSelect={selectTheme}
            onCycle={cycleTheme}
          />
        </div>
      </header>

      {showMorningBanner && (
        <div className="morning-banner mx-4 mt-4 rounded-lg border border-[var(--paid-border)] bg-[var(--paid-surface)] px-4 py-3">
          <p className="text-sm font-medium">Plan your starting blocks</p>
          <p className="mt-1 text-xs text-[var(--paid-muted)]">
            Set your base, then quick-add blocks — or click the timeline.
          </p>
        </div>
      )}

      <main className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 lg:flex-row">
        <section className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden lg:min-h-0">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              {isToday ? "Today" : selectedDate}
            </h2>
            <span className="text-xs text-[var(--paid-muted)]">
              {plan.blocks.length} block{plan.blocks.length === 1 ? "" : "s"} ·{" "}
              {plannedMins >= 60
                ? `${Math.floor(plannedMins / 60)}h${plannedMins % 60 ? ` ${plannedMins % 60}m` : ""}`
                : `${plannedMins}m`}{" "}
              planned
            </span>
          </div>
          <TimeGrid
            blocks={plan.blocks}
            nowMinutes={isToday ? nowMinutes : -1}
            selectedBlockId={selectedBlockId}
            onSelectBlock={setSelectedBlockId}
            onAddAtSlot={handleAddAtSlot}
          />
        </section>

        <aside className="flex w-full shrink-0 flex-col gap-4 overflow-y-auto lg:w-80 lg:max-h-full">
          <BlockEditor
            block={selectedBlock}
            base={base}
            onBaseChange={updateBase}
            onUpdate={updateBlock}
            onRemove={(id) => {
              removeBlock(id);
              setSelectedBlockId(null);
            }}
            onClose={() => setSelectedBlockId(null)}
          />

          <div className="panel rounded-lg border border-[var(--paid-border)] bg-[var(--paid-panel)] p-4">
            <h3 className="mb-2 text-sm font-semibold">Quick add</h3>
            <div className="flex flex-wrap gap-2">
              {QUICK_MULTIPLIERS.map(({ multiplier, duration }) => (
                <button
                  key={multiplier}
                  type="button"
                  className="quick-add-btn rounded-md px-3 py-1.5 text-xs font-medium font-mono"
                  onClick={() => handleQuickAdd(multiplier, duration)}
                  title={`${multiplier}x base · ${duration}m`}
                >
                  {quickAddLabel(base, multiplier)}
                </button>
              ))}
            </div>
          </div>

          <label className="panel flex flex-col gap-2 rounded-lg border border-[var(--paid-border)] bg-[var(--paid-panel)] p-4">
            <span className="text-sm font-semibold">Morning note</span>
            <textarea
              value={plan.morningNote}
              onChange={(e) => updatePlan({ morningNote: e.target.value })}
              placeholder="Intentions, priorities, first task…"
              rows={4}
              className="editor-input resize-none rounded-md px-3 py-2 text-sm"
            />
          </label>

          {plan.blocks.length > 0 && (
            <div className="panel rounded-lg border border-[var(--paid-border)] bg-[var(--paid-panel)] p-4">
              <h3 className="mb-2 text-sm font-semibold">Agenda</h3>
              <ul className="space-y-2">
                {plan.blocks.map((b) => (
                  <li key={b.id}>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 text-left text-xs hover:text-[var(--paid-accent)]"
                      onClick={() => setSelectedBlockId(b.id)}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background: `var(--paid-block-${b.colorIndex % 5})`,
                        }}
                      />
                      <span className="font-mono text-[var(--paid-muted)]">
                        {formatMinutes(b.startMinutes)}
                      </span>
                      <span className="truncate">{b.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
