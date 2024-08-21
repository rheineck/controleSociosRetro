import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
