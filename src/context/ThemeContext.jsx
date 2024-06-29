import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  showHeader: true,
  toggleHeader: () => {},
})

export default ThemeContext
