import 'styled-components'

import { ThemeType } from '@template/styles/themes/default'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
