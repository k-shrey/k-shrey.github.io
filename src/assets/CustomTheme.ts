interface ThemeType {
  type: "light" | "dark", // light / dark
  colors: {
    primary: string;
    secondary: string;
    primaryContrast?: string;
    secondaryContrast?: string;
    badgePrimary?: string;
    badgeSecondary?: string;
    accentColor?: string;
  },
}

const lightTheme: ThemeType = {
  type: "light",
  colors: {
    primary: "#000000",
    secondary: "#ffffff",
    primaryContrast: "#0670F3",
    secondaryContrast: "#1d1d1d",
    badgePrimary: "#000000",
    badgeSecondary: "#F3F4F6",
    accentColor: "#0070F3",
  }
}

const darkTheme: ThemeType = {
  type: "dark",
  colors: {
    primary: "#ffffff",
    secondary: "#000000",
    primaryContrast: "#0670F3",
    secondaryContrast: "#333333",
    badgePrimary: "#000000",
    badgeSecondary: "#374151",
    accentColor: "#0070F3",
  }
}

export { lightTheme, darkTheme };

export type { ThemeType };

