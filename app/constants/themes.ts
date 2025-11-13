import { getData, storeData } from "../helper/asyncStorage";


export const uiThemes = [
  "Light",
  "Dark",
  "System Default/Adaptive",
  "Accent Color",
  "Custom/Image Background",
  "Minimalist",
  "Neumorphism/Glassmorphism"
];

export const storeThemeToLocalStorage = (theme: string) => {
    storeData('appTheme', theme)
}

export const getThemeFromLocalStorage = () => {
    const theme = getData('appTheme')
    return theme;
}