const darkGlass = {
  glassBlur: "blur(20px) saturate(1.35)",
  glassBlurSoft: "blur(12px) saturate(1.2)",
  glassCardBg: "rgba(11, 16, 32, 0.72)",
  glassCardBorder: "rgba(148, 163, 184, 0.12)",
  glassCardBorderHover: "rgba(34, 211, 238, 0.45)",
  glassCardShadow: "0 8px 40px rgba(0, 0, 0, 0.5)",
  glassCardShadowHover:
    "0 20px 56px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(34, 211, 238, 0.35), 0 0 48px rgba(34, 211, 238, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
  glassChipBg: "rgba(15, 22, 41, 0.65)",
  glassChipShadowHover:
    "0 8px 28px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(34, 211, 238, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  glassSpotHot: "rgba(34, 211, 238, 0.42)",
  glassSpotCool: "rgba(59, 130, 246, 0.38)",
  glassSpotBlend: "normal",
  glassChipGlowWarm: "rgba(34, 211, 238, 0.28)",
  glassChipGlowAccent: "rgba(59, 130, 246, 0.32)",
};

const lightGlass = {
  glassBlur: "blur(18px) saturate(1.15)",
  glassBlurSoft: "blur(10px) saturate(1.1)",
  glassCardBg: "rgba(255, 255, 255, 0.94)",
  glassCardBorder: "rgba(148, 163, 184, 0.35)",
  glassCardBorderHover: "rgba(2, 132, 199, 0.55)",
  glassCardShadow: "0 4px 24px rgba(15, 23, 42, 0.07)",
  glassCardShadowHover:
    "0 12px 36px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(2, 132, 199, 0.25), 0 0 24px rgba(2, 132, 199, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)",
  glassChipBg: "rgba(255, 255, 255, 0.96)",
  glassChipShadowHover:
    "0 6px 20px rgba(15, 23, 42, 0.07), 0 0 0 1px rgba(2, 132, 199, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1)",
  glassSpotHot: "rgba(255, 255, 255, 1)",
  glassSpotCool: "rgba(2, 132, 199, 0.12)",
  glassSpotBlend: "normal",
  glassChipGlowWarm: "rgba(255, 255, 255, 1)",
  glassChipGlowAccent: "rgba(37, 99, 235, 0.1)",
};

export const darkTheme = {
  bg: "#030711",
  bgLight: "#0A1020",
  bgElevated: "#0F1629",
  primary: "#22D3EE",
  primaryMuted: "#0891B2",
  accent: "#3B82F6",
  accentSecondary: "#6366F1",
  text_primary: "#F8FAFC",
  text_secondary: "#94A3B8",
  text_muted: "#64748B",
  text_black: "#F8FAFC",
  card: "#0B1020",
  card_light: "#111827",
  button: "#0891B2",
  white: "#FFFFFF",
  black: "#020617",
  soft2: "#64748B",
  boxShadow: "0 12px 48px rgba(0, 0, 0, 0.45)",
  boxShadowHover: "0 20px 56px rgba(34, 211, 238, 0.12)",
  background:
    "linear-gradient(135deg, #0891B2 0%, #2563EB 50%, #22D3EE 100%)",
  logo: "#F8FAFC",
  filter: "brightness(0) invert(100%);",
  navBarFill: "rgba(3, 7, 17, 0.88)",
  navBorder: "rgba(148, 163, 184, 0.14)",
  navInsetLine: "rgba(255, 255, 255, 0.06)",
  navShadow: "0 1px 0 rgba(0, 0, 0, 0.45)",
  navInnerFill: "rgba(10, 16, 32, 0.6)",
  navLinkHoverFill: "rgba(255, 255, 255, 0.05)",
  navLinkActiveFill: "rgba(34, 211, 238, 0.14)",
  navSpotOpacity: "0.55",
  heroSurface: "rgba(3, 7, 17, 0.35)",
  accentMesh1: "rgba(34, 211, 238, 0.16)",
  accentMesh2: "rgba(59, 130, 246, 0.18)",
  gridLine: "rgba(148, 163, 184, 0.07)",
  primaryGlow: "rgba(34, 211, 238, 0.45)",
  primaryGlowSoft: "rgba(34, 211, 238, 0.22)",
  primaryGlowSubtle: "rgba(34, 211, 238, 0.12)",
  accentGlow: "rgba(59, 130, 246, 0.35)",
  heroAnimationOpacity: 0.15,
  selectionBg: "rgba(34, 211, 238, 0.38)",
  selectionText: "#030711",
  ...darkGlass,
};

export const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#F1F5F9",
  bgElevated: "#FFFFFF",
  primary: "#0284C7",
  primaryMuted: "#0369A1",
  accent: "#1D4ED8",
  accentSecondary: "#4338CA",
  text_primary: "#0F172A",
  text_secondary: "#334155",
  text_muted: "#64748B",
  text_black: "#0F172A",
  card: "#FFFFFF",
  card_light: "#F8FAFC",
  white: "#FFFFFF",
  black: "#020617",
  button: "#0284C7",
  boxShadowHover: "0 12px 32px rgba(2, 132, 199, 0.12)",
  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
  background:
    "linear-gradient(135deg, #0284C7 0%, #1D4ED8 55%, #0369A1 100%)",
  logo: "#0F172A",
  filter: "none",
  soft2: "#64748B",
  navBarFill: "rgba(255, 255, 255, 0.96)",
  navBorder: "rgba(148, 163, 184, 0.35)",
  navInsetLine: "rgba(15, 23, 42, 0.04)",
  navShadow: "0 1px 0 rgba(15, 23, 42, 0.06)",
  navInnerFill: "rgba(255, 255, 255, 0.95)",
  navLinkHoverFill: "rgba(241, 245, 249, 0.95)",
  navLinkActiveFill: "rgba(2, 132, 199, 0.12)",
  navSpotOpacity: "0.32",
  heroSurface: "rgba(255, 255, 255, 0.9)",
  accentMesh1: "rgba(2, 132, 199, 0.1)",
  accentMesh2: "rgba(29, 78, 216, 0.08)",
  gridLine: "rgba(148, 163, 184, 0.22)",
  primaryGlow: "rgba(2, 132, 199, 0.35)",
  primaryGlowSoft: "rgba(2, 132, 199, 0.16)",
  primaryGlowSubtle: "rgba(2, 132, 199, 0.08)",
  accentGlow: "rgba(29, 78, 216, 0.2)",
  heroAnimationOpacity: 0.35,
  selectionBg: "rgba(2, 132, 199, 0.22)",
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
