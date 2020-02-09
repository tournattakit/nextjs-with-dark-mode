import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'
import { useDarkMode } from '../hooks/useDarkMode'

const Providers = ({ children }) => {
  const [value] = useDarkMode()
  const theme = value === 'light' ? lightTheme : darkTheme
  
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

export default Providers
