import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import UserAvatar from '../UserAvatar';

export default function Header() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

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

            <button
                className="menuToggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <div className={`navWrapper ${menuOpen ? "open" : ""}`}>
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
                                className="logoutBtn"
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
            </div>
        </header>
    );
}
