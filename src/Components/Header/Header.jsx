import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {ImSearch} from "react-icons/im"

const Header = () => {

    const history = useNavigate();

  return (
    <nav className="header">
        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" onClick={() => history('/')}/>
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>
        <ImSearch />
    </nav>
  )
}

export default Header