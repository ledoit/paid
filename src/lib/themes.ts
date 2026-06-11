/** Rob Ross IDE palettes — auto-synced from Menhir Holdings/Color/Rob-Ross (github.com/ledoit/Rob-Ross) */

export type ThemeId =
  | "dracula-punch"
  | "fjord-hammer"
  | "alpenglow-paper"
  | "kimbie-warm"
  | "ion-storm"
  | "forest-canopy"
  | "void-forge"
  | "candy-voltage"
  | "night-siren"
  | "high-contrast-signal"
  | "lemon-paper"
  | "lemon-cream";

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
    surface: "#2E222F",
    bar: "#1B161D",
    panel: "#342735",
    border: "#4B2D4E",
    accent: "#C64CF0",
    accentHover: "#EA3EC6",
    focus: "#C64CF0",
    muted: "#864B86",
    selection: "#C64CF066",
    blockColors: ["#D88CF2", "#EDD07D", "#6EE7C8", "#ED92B2", "#C7F278"],
  },
  {
    id: "fjord-hammer",
    label: "Fjord Hammer",
    mode: "light",
    bg: "#F7F7F8",
    fg: "#262721",
    surface: "#E7E8E9",
    bar: "#FFFFFF",
    panel: "#F2F2F3",
    border: "#DBDCE1",
    accent: "#1656D4",
    accentHover: "#3928AF",
    focus: "#1656D4",
    muted: "#8688A2",
    selection: "#1656D44A",
    blockColors: ["#D64D7A", "#D05048", "#B06F35", "#8A7F32", "#529023"],
  },
  {
    id: "alpenglow-paper",
    label: "Alpenglow Paper",
    mode: "light",
    bg: "#F5F5F5",
    fg: "#272521",
    surface: "#E9E8E7",
    bar: "#FCFCFC",
    panel: "#F3F2F2",
    border: "#E1DEDA",
    accent: "#D45916",
    accentHover: "#9E8824",
    focus: "#A39785",
    muted: "#A39785",
    selection: "#D459163C",
    blockColors: ["#238A47", "#268C92", "#3371C1", "#5E52CB", "#BD34D5"],
  },
  {
    id: "kimbie-warm",
    label: "Kimbie Warm",
    mode: "dark",
    bg: "#282420",
    fg: "#F8F8F7",
    surface: "#383229",
    bar: "#2D2924",
    panel: "#413A30",
    border: "#4B3F2A",
    accent: "#ED9E50",
    accentHover: "#E1DB47",
    focus: "#E1DB47",
    muted: "#786C44",
    selection: "#ED9E505A",
    blockColors: ["#E9AC76", "#E4E467", "#7BDD5A", "#8088DF", "#BC64E8"],
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
    border: "#432A56",
    accent: "#8E40FC",
    accentHover: "#DF31F6",
    focus: "#8E40FC",
    muted: "#7C4596",
    selection: "#8E40FC7E",
    blockColors: ["#D3FA85", "#72F8B7", "#62F4ED", "#8CD4F2", "#7095FB"],
  },
  {
    id: "forest-canopy",
    label: "Forest Canopy",
    mode: "dark",
    bg: "#1B1D1B",
    fg: "#F7F8F7",
    surface: "#233423",
    bar: "#1D201D",
    panel: "#273A27",
    border: "#2B402D",
    accent: "#5CED50",
    accentHover: "#4EDA85",
    focus: "#4EDA85",
    muted: "#506C55",
    selection: "#5CED5056",
    blockColors: ["#7880E2", "#B369DD", "#D55D91", "#DA8481", "#E19B66"],
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
    border: "#3D273F",
    accent: "#C750ED",
    accentHover: "#E048BE",
    focus: "#E048BE",
    muted: "#7E497D",
    selection: "#C750ED72",
    blockColors: ["#D080E9", "#E3C872", "#64DCBF", "#E189A5", "#BBE86D"],
  },
  {
    id: "candy-voltage",
    label: "Candy Voltage",
    mode: "dark",
    bg: "#191016",
    fg: "#F9F6F7",
    surface: "#341E2A",
    bar: "#1C1219",
    panel: "#3A222F",
    border: "#55253C",
    accent: "#FB41BA",
    accentHover: "#F53256",
    focus: "#FB41BA",
    muted: "#984364",
    selection: "#FB41BA7A",
    blockColors: ["#F985D1", "#C8F575", "#65C0F1", "#F48B95", "#70FABC"],
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
    border: "#213640",
    accent: "#46DCF6",
    accentHover: "#387FF0",
    focus: "#387FF0",
    muted: "#3E637E",
    selection: "#46DCF67A",
    blockColors: ["#F688EF", "#F37790", "#EE9768", "#EFC48F", "#E9F674"],
  },
  {
    id: "high-contrast-signal",
    label: "High Contrast Signal",
    mode: "dark",
    bg: "#131712",
    fg: "#F6F8F7",
    surface: "#223021",
    bar: "#131712",
    panel: "#223121",
    border: "#203C20",
    accent: "#64F646",
    accentHover: "#38F06E",
    focus: "#64F646",
    muted: "#417B46",
    selection: "#64F64688",
    blockColors: ["#88A4F6", "#8E78F2", "#EE68EA", "#EF8FB6", "#F67F74"],
  },
  {
    id: "lemon-paper",
    label: "Lemon Haze",
    mode: "light",
    bg: "#F4F0E7",
    fg: "#430E36",
    surface: "#EBE7D1",
    bar: "#F7F4EE",
    panel: "#EFECDC",
    border: "#E2DDB1",
    accent: "#A97A04",
    accentHover: "#958704",
    focus: "#A97A04",
    muted: "#999838",
    selection: "#A97A0440",
    blockColors: ["#B36D05", "#A46C04", "#9F7104", "#9A7504", "#957804"],
  },
  {
    id: "lemon-cream",
    label: "Lemon Custard",
    mode: "light",
    bg: "#FFFACD",
    fg: "#361F4F",
    surface: "#FFF8DC",
    bar: "#FFFAD1",
    panel: "#FFFAE5",
    border: "#FAFAD2",
    accent: "#FFD700",
    accentHover: "#8B6914",
    focus: "#FFD700",
    muted: "#7A6A1E",
    selection: "#8B691450",
    blockColors: ["#00695C", "#6A1B9A", "#7B4FAD", "#5E35B1", "#8B6914"],
  }
];

export const DEFAULT_THEME_ID: ThemeId = "lemon-cream";

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
