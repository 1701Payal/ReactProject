import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar({ tt, cc }) {
  const [mode, setMode] = useState('light'); // Default mode to 'light'

  const toggleMode = (event) => {
    if (event.target.checked) {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid" style={{ color: cc }}>
        <a className="navbar-brand" href="/">{tt}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/">SignUp</Link>
            </li>
            <li className="nav-item">
            <li><Link className="nav-link" to="/login">Login</Link></li>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
