"use client";

import { THEMES, type ThemeId } from "@/lib/themes";

type Props = {
  themeId: ThemeId;
  onSelect: (id: ThemeId) => void;
  onCycle: () => void;
};

export function ThemeToggle({ themeId, onSelect, onCycle }: Props) {
  const current = THEMES.find((t) => t.id === themeId);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onCycle}
        className="theme-cycle-btn flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
        title="Cycle Rob Ross IDE theme"
      >
        <span
          className="inline-block h-3 w-3 rounded-full ring-1 ring-[var(--paid-border)]"
          style={{ background: current?.accent }}
        />
        <span className="hidden sm:inline">{current?.label}</span>
        <span className="sm:hidden">Theme</span>
      </button>
      <select
        value={themeId}
        onChange={(e) => onSelect(e.target.value as ThemeId)}
        className="theme-select rounded-md px-2 py-1.5 text-xs sm:text-sm"
        aria-label="Select theme"
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}
