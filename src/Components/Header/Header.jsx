

import './Header.css';

export default function Header() {
  return (
    <header className="headerr">
        <div className="logo">Heitech.</div>
        <nav className="navBar">
          <a href="#home" className="active">Home</a>
          <a href="#solutions">About ▾</a>
          <a href="#features">Features ▾</a>
          <a href="#templates">Templates</a>
          <a href="#login">Log in</a>
          <a className="signup" href="#signup">Sign Up</a>
        </nav>
    </header>
  );
}
