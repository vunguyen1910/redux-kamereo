import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-right mx-1">
      <a className="navbar-brand ml-3" href="#">
        <strong className="mr-5" style={{letterSpacing: "3px", fontSize:"25px"}}>X</strong> <strong style={{letterSpacing: "3px", fontSize:"25px"}}>KAMEREO</strong>
      </a>
      <button
        className="navbar-toggler btn btn-link"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav col-auto">
          <li className="nav-item active d-flex align-items-center border-left p-3">
            <a className="nav-link" href="#">
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li className="nav-item d-flex align-items-center border-left p-3">
            <a className="nav-link" href="#">       
              <i className="fas fa-shopping-cart"></i><sup className="badge rounded-circle border" style={{marginTop: "-20px", backgroundColor: "#2F904F", color:"white"}}>9</sup>
            </a>
          </li>
          <li className="nav-item d-flex align-items-center border-left p-3">
            <div className="dropdown">
              <div
                className="btn dropdown-toggle d-flex align-items-center"
                id="dropdownMenuButton2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ENG
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <a className="dropdown-item" href="#">
                  VN
                </a>
                <a className="dropdown-item" href="#">
                  ENG
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item d-flex align-items-center border-left p-3">
            <div className="dropdown">
              <div
                className="btn dropdown-toggle d-flex align-items-center"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="https://i.pinimg.com/236x/28/0b/be/280bbe85c8d041715e6d0372b108ad2f.jpg" alt="avatar" className="rounded-circle avatar"/>
                <div className="ml-3">
                    <strong>Name</strong><br/>
                    <small>Administation</small>
                </div>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
