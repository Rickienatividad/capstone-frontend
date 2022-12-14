import axios from "axios";
import { Link } from "react-router-dom";

export function Header() {
  const handleLogout = (event) => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    console.log("logged out");
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RoR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            {localStorage.jwt ? (
              <>
                <li className="nav-item">
                  <a onClick={handleLogout} className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <></>
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fishing Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/species">
                    SC freshwater species
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/knots">
                    Fishing Knots
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="/map">
                    SC Map
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
