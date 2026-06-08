export const WORK_START = 9 * 60;
export const WORK_END = 21 * 60;
export const SLOT_MINUTES = 30;

export type TimeBlock = {
  id: string;
  title: string;
  startMinutes: number;
  endMinutes: number;
  colorIndex: number;
};

export type DayPlan = {
  date: string;
  blocks: TimeBlock[];
  morningNote: string;
};

export const QUICK_MULTIPLIERS = [
  { multiplier: 0.5, duration: 30 },
  { multiplier: 1, duration: 60 },
  { multiplier: 1.5, duration: 90 },
  { multiplier: 2, duration: 120 },
] as const;

export const DEFAULT_BASE = 260;

const STORAGE_KEY = "paid-planner-v1";
const THEME_KEY = "paid-theme-v1";
const BASE_KEY = "paid-base-v1";

export function quickAddLabel(base: number, multiplier: number): string {
  return String(Math.round(base * multiplier));
}

export function parseBase(value: string): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : DEFAULT_BASE;
}

export function dateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatMinutes(m: number): string {
  const h = Math.floor(m / 60);
  const min = m % 60;
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(min).padStart(2, "0")} ${period}`;
}

export function formatDuration(start: number, end: number): string {
  const mins = end - start;
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function snapToSlot(m: number): number {
  return Math.round(m / SLOT_MINUTES) * SLOT_MINUTES;
}

export function newBlockId(): string {
  return `blk_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

export function loadDayPlan(date: string): DayPlan {
  if (typeof window === "undefined") {
    return { date, blocks: [], morningNote: "" };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date, blocks: [], morningNote: "" };
    const all = JSON.parse(raw) as Record<string, DayPlan>;
    return all[date] ?? { date, blocks: [], morningNote: "" };
  } catch {
    return { date, blocks: [], morningNote: "" };
  }
}

export function saveDayPlan(plan: DayPlan) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? (JSON.parse(raw) as Record<string, DayPlan>) : {};
    all[plan.date] = plan;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* ignore quota errors */
  }
}

export function loadThemeId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(THEME_KEY);
}

export function saveThemeId(id: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, id);
}

export function loadBase(): number {
  if (typeof window === "undefined") return DEFAULT_BASE;
  try {
    const raw = localStorage.getItem(BASE_KEY);
    if (!raw) return DEFAULT_BASE;
    return parseBase(raw);
  } catch {
    return DEFAULT_BASE;
  }
}

export function saveBase(base: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(BASE_KEY, String(Math.round(base)));
}

export function blocksOverlap(a: TimeBlock, b: TimeBlock): boolean {
  return a.startMinutes < b.endMinutes && b.startMinutes < a.endMinutes;
}

export function sortBlocks(blocks: TimeBlock[]): TimeBlock[] {
  return [...blocks].sort((a, b) => a.startMinutes - b.startMinutes);
}

export function totalPlannedMinutes(blocks: TimeBlock[]): number {
  return blocks.reduce((sum, b) => sum + (b.endMinutes - b.startMinutes), 0);
}

export function minutesFromMidnight(d: Date = new Date()): number {
  return d.getHours() * 60 + d.getMinutes();
}

export function suggestedMorningStart(): number {
  const now = minutesFromMidnight();
  const snapped = snapToSlot(now);
  return Math.max(WORK_START, Math.min(snapped, WORK_END - SLOT_MINUTES));
}
