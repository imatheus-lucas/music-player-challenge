import { Themes } from "../styles/theme";

type themeType = typeof Themes.light;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
