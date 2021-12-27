import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="App-header">
        <p>
          Navigation_Main_Home_Link:
        </p>
        <Link className="nav-bar-link" to="/daniels">Daniel's Section</Link>
        <Link className="nav-bar-link" to="/alla">Alla FE ONLY</Link>
        <Link className="nav-bar-link" to="/icons">Icon</Link>
        <Link className="nav-bar-link" to="/github">GithubLink (should be external)</Link>
      </header>
  )
}

export default NavBar
