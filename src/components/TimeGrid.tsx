"use client";

import {
  formatMinutes,
  SLOT_MINUTES,
  WORK_END,
  WORK_START,
  type TimeBlock,
} from "@/lib/planner";

type Props = {
  blocks: TimeBlock[];
  nowMinutes: number;
  selectedBlockId: string | null;
  onSelectBlock: (id: string) => void;
  onAddAtSlot: (minutes: number) => void;
};

const TOTAL = WORK_END - WORK_START;
const PX_PER_MIN = 1.2;
const LABEL_WIDTH = 64;

function slotTop(minutes: number): number {
  return (minutes - WORK_START) * PX_PER_MIN;
}

function blockHeight(start: number, end: number): number {
  return (end - start) * PX_PER_MIN;
}

function visibleSpan(block: TimeBlock): { top: number; height: number } | null {
  const start = Math.max(block.startMinutes, WORK_START);
  const end = Math.min(block.endMinutes, WORK_END);
  if (end <= start) return null;
  return { top: slotTop(start), height: blockHeight(start, end) };
}

export function TimeGrid({
  blocks,
  nowMinutes,
  selectedBlockId,
  onSelectBlock,
  onAddAtSlot,
}: Props) {
  const slots: number[] = [];
  for (let m = WORK_START; m < WORK_END; m += SLOT_MINUTES) {
    slots.push(m);
  }

  const showNow = nowMinutes >= WORK_START && nowMinutes <= WORK_END;
  const gridHeight = TOTAL * PX_PER_MIN;

  return (
    <div className="time-grid min-h-0 flex-1 overflow-y-auto rounded-lg border border-[var(--paid-border)] bg-[var(--paid-bg)]">
      <div className="relative" style={{ height: gridHeight }}>
        {/* Time labels — fixed column, no sticky (sticky was pushing layout) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 border-r border-[var(--paid-border)]/30"
          style={{ width: LABEL_WIDTH }}
        >
          {slots.map((m) => (
            <span
              key={m}
              className="absolute left-0 right-0 px-2 font-mono text-[10px] leading-none text-[var(--paid-muted)]"
              style={{ top: slotTop(m) + 2 }}
            >
              {formatMinutes(m)}
            </span>
          ))}
        </div>

        {/* Clickable slot rows */}
        {slots.map((m) => (
          <button
            key={m}
            type="button"
            className="slot-row group absolute right-0 border-t border-[var(--paid-border)]/30 text-left"
            style={{
              top: slotTop(m),
              left: LABEL_WIDTH,
              height: SLOT_MINUTES * PX_PER_MIN,
            }}
            onClick={() => onAddAtSlot(m)}
          >
            <span className="slot-hint px-2 pt-1 text-[10px] text-[var(--paid-muted)] opacity-0 transition-opacity group-hover:opacity-100">
              + add block
            </span>
          </button>
        ))}

        {blocks.map((block) => {
          const span = visibleSpan(block);
          if (!span) return null;
          const selected = block.id === selectedBlockId;
          const tall = span.height > SLOT_MINUTES * PX_PER_MIN;

          return (
            <button
              key={block.id}
              type="button"
              className={`time-block absolute right-2 z-20 flex flex-col overflow-hidden rounded-md border text-left transition-shadow ${
                selected
                  ? "ring-2 ring-[var(--paid-focus)]"
                  : "hover:brightness-110"
              }`}
              style={{
                top: span.top,
                left: LABEL_WIDTH + 4,
                height: Math.max(span.height, 20),
                background: `color-mix(in srgb, var(--paid-block-${block.colorIndex % 5}) 22%, var(--paid-surface))`,
                borderColor: `var(--paid-block-${block.colorIndex % 5})`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectBlock(block.id);
              }}
            >
              <div
                className="block-accent shrink-0"
                style={{
                  height: 3,
                  background: `var(--paid-block-${block.colorIndex % 5})`,
                }}
              />
              <div
                className={`min-h-0 flex-1 px-2 py-1 ${tall ? "overflow-hidden" : ""}`}
              >
                <p className="truncate text-xs font-semibold text-[var(--paid-fg)]">
                  {block.title}
                </p>
                <p className="font-mono text-[10px] text-[var(--paid-muted)]">
                  {formatMinutes(block.startMinutes)} –{" "}
                  {formatMinutes(block.endMinutes)}
                </p>
              </div>
            </button>
          );
        })}

        {showNow && (
          <div
            className="now-line pointer-events-none absolute right-0 z-30 flex items-center"
            style={{ top: slotTop(nowMinutes), left: LABEL_WIDTH - 8 }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--paid-accent)]" />
            <span className="h-px flex-1 bg-[var(--paid-accent)]" />
          </div>
        )}
      </div>
    </div>
  );
}
