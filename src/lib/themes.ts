/** Rob Ross IDE palettes — sourced from Menhir/Color/robross-palette-engine */

export type ThemeId =
  | "dracula-punch"
  | "fjord-hammer"
  | "alpenglow-paper"
  | "kimbie-warm"
  | "ion-storm"
  | "forest-canopy"
  | "void-forge"
  | "bonfire-gold"
  | "candy-voltage"
  | "night-siren"
  | "high-contrast-signal";

export type ThemeMode = "light" | "dark";

export type PaidTheme = {
  id: ThemeId;
  label: string;
  mode: ThemeMode;
  bg: string;
  fg: string;
  surface: string;
  bar: string;
  panel: string;
  border: string;
  accent: string;
  accentHover: string;
  focus: string;
  muted: string;
  selection: string;
  blockColors: [string, string, string, string, string];
};

export const THEMES: PaidTheme[] = [
  {
    id: "dracula-punch",
    label: "Dracula Punch",
    mode: "dark",
    bg: "#18141A",
    fg: "#F8F7F8",
    surface: "#342735",
    bar: "#1B161D",
    panel: "#342735",
    border: "#864B86",
    accent: "#C64CF0",
    accentHover: "#EA3EC6",
    focus: "#C64CF0",
    muted: "#864B86",
    selection: "#C64CF066",
    blockColors: ["#C64CF0", "#EA3EC6", "#D88CF2", "#69D7EC", "#6EE7C8"],
  },
  {
    id: "fjord-hammer",
    label: "Fjord Hammer",
    mode: "light",
    bg: "#F7F7F8",
    fg: "#262721",
    surface: "#F2F2F3",
    bar: "#FFFFFF",
    panel: "#F2F2F3",
    border: "#8688A2",
    accent: "#1656D4",
    accentHover: "#3928AF",
    focus: "#1656D4",
    muted: "#8688A2",
    selection: "#1656D44A",
    blockColors: ["#1656D4", "#3928AF", "#D64D7A", "#268D84", "#B06F35"],
  },
  {
    id: "alpenglow-paper",
    label: "Alpenglow Paper",
    mode: "light",
    bg: "#F5F5F5",
    fg: "#272521",
    surface: "#F3F2F2",
    bar: "#FCFCFC",
    panel: "#F3F2F2",
    border: "#A39785",
    accent: "#D45916",
    accentHover: "#9E8824",
    focus: "#A39785",
    muted: "#A39785",
    selection: "#D459163C",
    blockColors: ["#D45916", "#9E8824", "#C47A2A", "#8B6B4E", "#5C7A3A"],
  },
  {
    id: "kimbie-warm",
    label: "Kimbie Warm",
    mode: "dark",
    bg: "#282420",
    fg: "#F8F8F7",
    surface: "#413A30",
    bar: "#2D2924",
    panel: "#413A30",
    border: "#786C44",
    accent: "#ED9E50",
    accentHover: "#E1DB47",
    focus: "#E1DB47",
    muted: "#786C44",
    selection: "#ED9E505A",
    blockColors: ["#ED9E50", "#E1DB47", "#C9A86A", "#8FB87A", "#D47A6A"],
  },
  {
    id: "ion-storm",
    label: "Ion Storm",
    mode: "dark",
    bg: "#141019",
    fg: "#F9F6F9",
    surface: "#281D30",
    bar: "#141019",
    panel: "#281D30",
    border: "#7C4596",
    accent: "#8E40FC",
    accentHover: "#DF31F6",
    focus: "#8E40FC",
    muted: "#7C4596",
    selection: "#8E40FC7E",
    blockColors: ["#8E40FC", "#DF31F6", "#5B8DEF", "#3DD6C8", "#F0C040"],
  },
  {
    id: "forest-canopy",
    label: "Forest Canopy",
    mode: "dark",
    bg: "#1B1D1B",
    fg: "#F7F8F7",
    surface: "#273A27",
    bar: "#1D201D",
    panel: "#273A27",
    border: "#506C55",
    accent: "#5CED50",
    accentHover: "#4EDA85",
    focus: "#4EDA85",
    muted: "#506C55",
    selection: "#5CED5056",
    blockColors: ["#5CED50", "#4EDA85", "#8FD46A", "#4AB8A0", "#C8D050"],
  },
  {
    id: "void-forge",
    label: "Void Forge",
    mode: "dark",
    bg: "#0D0B0E",
    fg: "#F8F7F7",
    surface: "#251825",
    bar: "#0D0B0E",
    panel: "#251825",
    border: "#7E497D",
    accent: "#C750ED",
    accentHover: "#E048BE",
    focus: "#E048BE",
    muted: "#7E497D",
    selection: "#C750ED72",
    blockColors: ["#C750ED", "#E048BE", "#7B5CF0", "#48C8E0", "#F0A848"],
  },
  {
    id: "bonfire-gold",
    label: "Bonfire Gold",
    mode: "light",
    bg: "#EAE3E1",
    fg: "#3D2615",
    surface: "#E2D9D4",
    bar: "#F0EBEA",
    panel: "#E2D9D4",
    border: "#AF835A",
    accent: "#EB3400",
    accentHover: "#9E6E05",
    focus: "#9E6E05",
    muted: "#AF835A",
    selection: "#EB340068",
    blockColors: ["#EB3400", "#9E6E05", "#C45A20", "#6B8C3A", "#3A7A8C"],
  },
  {
    id: "candy-voltage",
    label: "Candy Voltage",
    mode: "dark",
    bg: "#191016",
    fg: "#F9F6F7",
    surface: "#3A222F",
    bar: "#1C1219",
    panel: "#3A222F",
    border: "#984364",
    accent: "#FB41BA",
    accentHover: "#F53256",
    focus: "#FB41BA",
    muted: "#984364",
    selection: "#FB41BA7A",
    blockColors: ["#FB41BA", "#F53256", "#FF6B9D", "#48D4F0", "#F0D848"],
  },
  {
    id: "night-siren",
    label: "Night Siren",
    mode: "dark",
    bg: "#0D1112",
    fg: "#F6F8F8",
    surface: "#1A2428",
    bar: "#0D1112",
    panel: "#1A2428",
    border: "#3E637E",
    accent: "#46DCF6",
    accentHover: "#387FF0",
    focus: "#387FF0",
    muted: "#3E637E",
    selection: "#46DCF67A",
    blockColors: ["#46DCF6", "#387FF0", "#5CE0C0", "#F0A848", "#F06080"],
  },
  {
    id: "high-contrast-signal",
    label: "High Contrast Signal",
    mode: "dark",
    bg: "#131712",
    fg: "#F6F8F7",
    surface: "#223121",
    bar: "#131712",
    panel: "#223121",
    border: "#417B46",
    accent: "#64F646",
    accentHover: "#38F06E",
    focus: "#64F646",
    muted: "#417B46",
    selection: "#64F64688",
    blockColors: ["#64F646", "#38F06E", "#F0F040", "#48C8F0", "#F06060"],
  },
];

export const DEFAULT_THEME_ID: ThemeId = "night-siren";

export function getTheme(id: ThemeId): PaidTheme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function nextThemeId(current: ThemeId): ThemeId {
  const idx = THEMES.findIndex((t) => t.id === current);
  return THEMES[(idx + 1) % THEMES.length].id;
}

export function applyTheme(theme: PaidTheme) {
  const root = document.documentElement;
  root.dataset.theme = theme.id;
  root.dataset.mode = theme.mode;
  root.style.setProperty("--paid-bg", theme.bg);
  root.style.setProperty("--paid-fg", theme.fg);
  root.style.setProperty("--paid-surface", theme.surface);
  root.style.setProperty("--paid-bar", theme.bar);
  root.style.setProperty("--paid-panel", theme.panel);
  root.style.setProperty("--paid-border", theme.border);
  root.style.setProperty("--paid-accent", theme.accent);
  root.style.setProperty("--paid-accent-hover", theme.accentHover);
  root.style.setProperty("--paid-focus", theme.focus);
  root.style.setProperty("--paid-muted", theme.muted);
  root.style.setProperty("--paid-selection", theme.selection);
  theme.blockColors.forEach((c, i) => {
    root.style.setProperty(`--paid-block-${i}`, c);
  });
}
