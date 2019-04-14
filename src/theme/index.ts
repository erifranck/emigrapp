import * as styledComponents from "styled-components";

const {
    default: setStyles,
    css,
    keyframes,
    ThemeProvider,
    withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule< IThemeInterface >;

export interface IThemeInterface {
    primaryColor: string;
    secondaryColor: string;
    white: string;
    grey: string;
    blue: string;
    yellow: string;
    orange: string;
    fontSmall: string;
    fontMedium: string;
    fontLarge: string;
    fontTitle: string;
    fontFamily: string;
    borderRadius: string;
}

export const theme = {
    primaryColor: "#6473AA",
    secondaryColor: "#BE6638",
    white: '#fff',
    grey: "#9F9EB9",
    blue: "#6473AA",
    yellow: "#D49D4B",
    orange: "#BE6638",
    depth: '0 1px 8px 0 rgba(0, 0, 0, 0.01)',
    depth2: '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    fontSmall: "12px",
    fontMedium: "14px",
    fontLarge: "16px",
    fontSubTitle: "24px",
    fontTitle: "36px",
    fontFamily: "'Muli', sans-serif",
    borderRadius: "5px",
};

export const styled = setStyles;
export { css, keyframes, ThemeProvider, withTheme };
