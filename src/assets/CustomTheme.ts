interface ThemeType {
  type: "light" | "dark", // light / dark
  theme: {
    colors: {
      primary: string;
      secondary: string;
      primaryContrast?: string;
      secondaryContrast?: string;
    },
  }
}

const lightTheme: ThemeType = {
  type: "light",
  theme: {
    colors: {
      primary: "#fff",
      secondary: "#000",
      primaryContrast: "#0670F3",
      secondaryContrast: "#1d1d1d"
    }
  }
}

const darkTheme: ThemeType = {
  type: "dark",
  theme: {
    colors: {
      primary: "#000",
      secondary: "#fff",
      primaryContrast: "#0670F3",
      secondaryContrast: "#1d1d1d"
    }
  }
}

export { lightTheme, darkTheme };

export type { ThemeType };

