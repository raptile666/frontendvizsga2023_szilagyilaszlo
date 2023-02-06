import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to="/">Főoldal</Link>
        <Link to="/scifi">Sci-Fi</Link>
        <Link to="/humor">Humor</Link>
    </div>
  )
}

export default Header