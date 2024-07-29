import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  showHeader: true,
  toggleHeader: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
