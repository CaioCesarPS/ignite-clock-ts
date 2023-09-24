import 'styled-components';
import { defaultTheam } from '../styles/theme/default';


type ThemeType = typeof defaultTheam;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}