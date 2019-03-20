import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">{props.homeLink}</a>
    </nav>
  )
}

export default Header
