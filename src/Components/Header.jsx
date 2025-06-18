import "../ResumeRenderer/ResumeRenderer";
 export default function Header(){
    return (
        // <header>
        //     <a href="/">
        //         <img src="#" alt="Logo" />
        //     </a>
        //     <nav>
        //         <ul className="navBar">
        //             <li>Templates</li>
        //             <li>Account</li>
        //         </ul>
        //     </nav>
        // </header>
         <header className="header">
        <div className="logo">Heitech</div>
        <nav>
          <a href="#templates">Templates</a>
          <a href="#about">About</a>
          <a href="#login">Login</a>
        </nav>
      </header>
    )
}