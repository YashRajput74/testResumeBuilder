// import './Header.css'
// export default function Header() {
//   return (
//     // <header>
//     //     <a href="/">
//     //         <img src="#" alt="Logo" />
//     //     </a>
//     //     <nav>
//     //         <ul className="navBar">
//     //             <li>Templates</li>
//     //             <li>Account</li>
//     //         </ul>
//     //     </nav>
//     // </header>
//    <header className="header">
//         <div className="logo">Heitech</div>
//         <nav>
//           <ul className="navBar">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#templates">Templates</a>
//             <a href="#login">Login</a>
//             <a className="signup" href="#login">Sign Up</a>
//           </ul>
//         </nav>
//       </header>
//   )
// }

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
