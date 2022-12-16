import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('light', 'dark')(props),
    },
  }),
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  light: '#c5c9d1',
  dark: '#2d323b',
}

const theme = extendTheme({ config, colors, styles })

export default theme
