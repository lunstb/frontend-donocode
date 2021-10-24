import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

/**
 * Create custom theme and colors
 */
const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            // 'regular',
            // 'bold'
          ].join(','),
        useNextVariants: true,
    },
    palette: {
        background: {
            default: '#FEFBEF'
        },
        primary: {
            

            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff',
            action: {
                disabledBackground: 'rgba(0,0,0,0.25)',
                disabled: 'rgba(0,0,0,0.25)'
            }
    },
    secondary: {
        light: '#ff79b0',
        main: '#ff4081',
        dark: '#c60055',
        contrastText: '#000',
    },
        openTitle: '#3f4771',
        protectedTitle: pink['400'],
        type: 'light'
    },
  })

  export default theme