const darkGlass = {
  glassBlur: "blur(16px) saturate(1.2)",
  glassBlurSoft: "blur(12px) saturate(1.15)",
  glassCardBg: "#0F1626",
  glassCardBorder: "#1F2A3F",
  glassCardBorderHover: "#3B6EE6",
  glassCardShadow: "0 1px 0 rgba(255, 255, 255, 0.03) inset",
  glassCardShadowHover:
    "0 16px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 110, 230, 0.5)",
  glassChipBg: "#1A2640",
  glassChipShadowHover:
    "0 6px 20px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(59, 110, 230, 0.45)",
  glassSpotHot: "transparent",
  glassSpotCool: "transparent",
  glassSpotBlend: "normal",
  glassChipGlowWarm: "transparent",
  glassChipGlowAccent: "rgba(59, 110, 230, 0.18)",
};

const lightGlass = {
  glassBlur: "blur(16px) saturate(1.1)",
  glassBlurSoft: "blur(10px) saturate(1.1)",
  glassCardBg: "#FFFFFF",
  glassCardBorder: "#DCE3EE",
  glassCardBorderHover: "#2F5FD0",
  glassCardShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
  glassCardShadowHover:
    "0 12px 32px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(47, 95, 208, 0.4)",
  glassChipBg: "#EEF2F8",
  glassChipShadowHover:
    "0 6px 18px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(47, 95, 208, 0.35)",
  glassSpotHot: "transparent",
  glassSpotCool: "transparent",
  glassSpotBlend: "normal",
  glassChipGlowWarm: "transparent",
  glassChipGlowAccent: "rgba(47, 95, 208, 0.12)",
};

export const darkTheme = {
  bg: "#0A0F1C",
  bgLight: "#0D1423",
  bgElevated: "#111A2E",
  primary: "#6C9BFF",
  primaryMuted: "#3B6EE6",
  accent: "#3B6EE6",
  accentSecondary: "#6C9BFF",
  text_primary: "#F1F5F9",
  text_secondary: "#9AA7BD",
  text_muted: "#7C8AA5",
  text_black: "#F1F5F9",
  card: "#0F1626",
  card_light: "#162038",
  button: "#3B6EE6",
  white: "#FFFFFF",
  onPrimary: "#FFFFFF",
  primaryFill: "#3B6EE6",
  black: "#020617",
  soft2: "#7C8AA5",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
  boxShadowHover: "0 16px 40px rgba(0, 0, 0, 0.4)",
  background: "linear-gradient(135deg, #3B6EE6 0%, #2F5FD0 100%)",
  logo: "#F1F5F9",
  filter: "brightness(0) invert(100%);",
  navBarFill: "rgba(10, 15, 28, 0.88)",
  navBorder: "#1F2A3F",
  navInsetLine: "rgba(255, 255, 255, 0.04)",
  navShadow: "0 1px 0 rgba(0, 0, 0, 0.4)",
  navInnerFill: "#0F1626",
  navLinkHoverFill: "rgba(255, 255, 255, 0.05)",
  navLinkActiveFill: "#1A2640",
  navSpotOpacity: "0",
  heroSurface: "transparent",
  accentMesh1: "rgba(59, 110, 230, 0.06)",
  accentMesh2: "transparent",
  gridLine: "transparent",
  primaryGlow: "rgba(59, 110, 230, 0.28)",
  primaryGlowSoft: "rgba(59, 110, 230, 0.16)",
  primaryGlowSubtle: "rgba(59, 110, 230, 0.08)",
  accentGlow: "rgba(59, 110, 230, 0.2)",
  heroAnimationOpacity: 0,
  selectionBg: "rgba(59, 110, 230, 0.4)",
  selectionText: "#FFFFFF",
  ...darkGlass,
};

export const lightTheme = {
  bg: "#F8FAFC",
  bgLight: "#EEF2F8",
  bgElevated: "#FFFFFF",
  primary: "#2F5FD0",
  primaryMuted: "#254DB0",
  accent: "#2F5FD0",
  accentSecondary: "#254DB0",
  text_primary: "#0F172A",
  text_secondary: "#475569",
  text_muted: "#64748B",
  text_black: "#0F172A",
  card: "#FFFFFF",
  card_light: "#F1F5F9",
  white: "#FFFFFF",
  onPrimary: "#FFFFFF",
  primaryFill: "#2F5FD0",
  black: "#020617",
  button: "#2F5FD0",
  boxShadowHover: "0 12px 32px rgba(15, 23, 42, 0.1)",
  boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)",
  background: "linear-gradient(135deg, #2F5FD0 0%, #254DB0 100%)",
  logo: "#0F172A",
  filter: "none",
  soft2: "#526072",
  navBarFill: "rgba(248, 250, 252, 0.9)",
  navBorder: "#DCE3EE",
  navInsetLine: "rgba(15, 23, 42, 0.04)",
  navShadow: "0 1px 0 rgba(15, 23, 42, 0.06)",
  navInnerFill: "#FFFFFF",
  navLinkHoverFill: "#EEF2F8",
  navLinkActiveFill: "#E3EAF8",
  navSpotOpacity: "0",
  heroSurface: "transparent",
  accentMesh1: "rgba(47, 95, 208, 0.05)",
  accentMesh2: "transparent",
  gridLine: "transparent",
  primaryGlow: "rgba(47, 95, 208, 0.2)",
  primaryGlowSoft: "rgba(47, 95, 208, 0.12)",
  primaryGlowSubtle: "rgba(47, 95, 208, 0.06)",
  accentGlow: "rgba(47, 95, 208, 0.15)",
  heroAnimationOpacity: 0,
  selectionBg: "rgba(47, 95, 208, 0.22)",
  selectionText: "#0F172A",
  ...lightGlass,
};

export const THEME_STORAGE_KEY = "portfolio-theme";

export const readStoredTheme = () => {
  if (typeof window === "undefined") {
    return true;
  }
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light") {
    return false;
  }
  if (stored === "dark") {
    return true;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
