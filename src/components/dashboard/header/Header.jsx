import { NavLink } from 'react-router-dom';
import './header.css'

function Header() {

  return (
    <div className='header'>
      <h1>InboxGuard</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/info">Info</NavLink>
      </div>
    </div>
  )
}

export default Header;
