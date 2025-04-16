import React from 'react'

export default function Header() {
  return (
        <nav>

<div className="top navbar navbar-expand-lg">
  <div className="container-fluid">
    
    <img className="brand" src="/images/logofinal.png" alt="Logo" />

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
       

        <li className="nav-item dropdown d-none d-lg-block">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                App Development
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                UI/UX Design
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item d-lg-none">
          <a
            className="nav-link"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#submenu1"
            aria-expanded="false"
            aria-controls="submenu1"
          >
            Services
          </a>
          <div className="submenu-collapse collapse" id="submenu1">
            <a className="nav-link" href="#">
              Web Development
            </a>
            <a className="nav-link" href="#">
              App Development
            </a>
            <a className="nav-link" href="#">
              UI/UX Design
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
  )
}
