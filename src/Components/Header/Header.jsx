

// import './Header.css';

// export default function Header() {
//   return (
//     <header className="headerr">
//         <div className="logo">Heitech.</div>
//         <nav className="navBar">
//           <a href="#home" className="active">Home</a>
//           <a href="#solutions">About ▾</a>
//           <a href="#features">Features ▾</a>
//           <a href="#templates">Templates</a>
//           <a href="#login">Log in</a>
//           <a className="signup" href="#signup">Sign Up</a>
//         </nav>
//     </header>
//   );
// }

import './Header.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import UserAvatar from '../UserAvatar';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <header className="headerr">
            <div className="logo">Heitech.</div>
            <nav className="navBar">
                <a href="#home" className="active">Home</a>
                <a href="#solutions">About ▾</a>
                <a href="#features">Features ▾</a>
                <a href="#templates">Templates</a>

                {user ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <UserAvatar email={user.email} />
                        <button 
                            onClick={async () => {
                                await supabase.auth.signOut();
                                setUser(null);
                            }} 
                            style={{ 
                                background: "black", 
                                color: "white", 
                                padding: "0.4rem 1rem", 
                                borderRadius: "20px", 
                                border: "none", 
                                cursor: "pointer" 
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/auth">Log in</Link>
                        <Link to="/auth" className="signup">Sign Up</Link>
                    </>
                )}
            </nav>
        </header>
    );
}