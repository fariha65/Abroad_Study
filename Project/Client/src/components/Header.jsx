import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext";

function Header() {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.body.style.backgroundColor = savedTheme === "dark" ? "#121212" : "#ffffff";
    document.body.style.color = savedTheme === "dark" ? "#ffffff" : "#000000";
  }, []);

  // Toggle theme and save preference to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.body.style.backgroundColor = newTheme === "dark" ? "#121212" : "#ffffff";
    document.body.style.color = newTheme === "dark" ? "#ffffff" : "#000000";
  };

  // Logout function
  const logout = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("authUser");
    setState({ user: null, token: "" });
    navigate("/login");
  };

  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="/" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>
                <span className="fa fa-graduation-cap" />
                Abroad Study
                <span className="logo"> Journey to success</span>
              </a>
            </h1>
            <button
              className="navbar-toggler collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>Home</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/about" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/universities" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>Universities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Program" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>Program</a>
                </li>
                {state && state.user && (
               <li className="nav-item">
               <a className="nav-link" href="/Ranking" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>Ranking</a>
               </li>
                )}
                
                <li className="nav-item">
                  <a className="nav-link" href="/contact" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>Contact</a>
                </li>
              </ul>

              {/* Search functionality */}
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search" aria-hidden="true" />
                </a>
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form action="/SearchDetails" method="GET" className="search-box">
                      <input type="search" placeholder="Search Country" name="search" required autoFocus />
                      <button type="submit" className="btn">
                        <span className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                  <a className="close" href="#">×</a>
                </div>
              </div>

              {state && state.user ? (
                <div className="top-quote mr-lg-2 text-center">
                  <a href="/StudentProfile" className="btn login mr-2" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>
                    {state.user.name}
                  </a>
                  <button onClick={logout} className="btn logout mr-2">
                    <span className="fa fa-sign-out-alt" /> Logout
                  </button>
                </div>
              ) : (
                <div className="top-quote mr-lg-2 text-center">
                  <a href="/login" className="btn login mr-2" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }}>
                    <span className="fa fa-user" /> Login
                  </a>
                </div>
              )}
            </div>

            {/* Toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isDarkMode}
                      onChange={toggleTheme}
                    />
                    <div className="mode-container py-1">
                      <i className="gg-sun" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }} />
                      <i className="gg-moon" style={{ color: isDarkMode ? "#f0f0f0" : "#333" }} />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
