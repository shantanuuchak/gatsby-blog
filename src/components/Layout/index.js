import React from "react"
import { ThemeProvider } from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
// Components
// import Header from "components/Header"
//
// import { ModeContext } from "context/ModeProvider"
// Styles
import { GlobalStyles, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)
  // const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
