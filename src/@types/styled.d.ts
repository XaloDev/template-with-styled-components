import 'styled-components'

import { ThemeType } from '@km-por-real/styles/themes/default'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
