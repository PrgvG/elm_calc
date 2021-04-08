import React from "react";

import logo from "../../logo/Logo_text.png";

function Header() {
  return (
    <header className="header">
      <a href="https://euroliftmash.ru/" target="_blank" rel="noreferrer">
        <img className="header--logo" src={logo} alt="elm logo" />
      </a>
    </header>
  );
}

export default Header;
