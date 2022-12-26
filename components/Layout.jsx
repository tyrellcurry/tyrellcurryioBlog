
const Layout = ({children}) => {
  return (
    <div className="root">
      <nav>
        the nav will go here
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout