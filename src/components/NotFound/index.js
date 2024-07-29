import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <div>
          <img
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="not found"
          />
          <h1>Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
