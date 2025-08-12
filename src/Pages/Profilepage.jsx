import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch current authenticated user
  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data.user);
      }
    }
    fetchUser();
  }, []);

  // Fetch resumes after user is loaded
  useEffect(() => {
    if (!user) return;

    const fetchResumes = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("resumes")
        .select("*")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (error) {
        console.error("Error fetching resumes:", error.message);
      } else {
        setResumes(data);
      }
      setLoading(false);
    };

    fetchResumes();
  }, [user]);

  // Handle logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/"; // redirect to home or login
  };

  if (!user) return <div style={styles.loading}>Loading profile...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👤 Profile</h2>

      {/* User Info */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>User Info</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at).toLocaleString()}</p>
      </div>

      {/* Resume List */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>📄 My Resumes</h3>
        {loading ? (
          <p>Loading resumes...</p>
        ) : resumes.length === 0 ? (
          <p>No resumes found.</p>
        ) : (
          resumes.map((resume) => (
            <div key={resume.id} style={styles.resumeCard}>
              <h4 style={styles.resumeTitle}>{resume.title}</h4>
              <p>Last updated: {new Date(resume.updated_at).toLocaleDateString()}</p>
              <button style={styles.button}>Edit</button>
              <button style={styles.deleteButton}>Delete</button>
            </div>
          ))
        )}
      </div>

      {/* Account Actions */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>⚙️ Account</h3>
        <button onClick={handleLogout} style={styles.logoutButton}>Log Out</button>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f9f9f9",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#333"
  },
  card: {
    background: "#fff",
    padding: "1.5rem",
    marginBottom: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease"
  },
  sectionTitle: {
    fontSize: "1.3rem",
    marginBottom: "1rem",
    color: "#444"
  },
  resumeCard: {
    borderTop: "1px solid #eee",
    paddingTop: "1rem",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  resumeTitle: {
    fontWeight: "bold",
    fontSize: "1.1rem"
  },
  button: {
    display: "inline-block",
    padding: "0.5rem 1.2rem",
    borderRadius: "6px",
    background: "#6c63ff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginRight: "1rem",
    fontWeight: 500,
    transition: "0.3s"
  },
  deleteButton: {
    display: "inline-block",
    padding: "0.5rem 1.2rem",
    borderRadius: "6px",
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
    transition: "0.3s"
  },
  logoutButton: {
    marginTop: "0.5rem",
    padding: "0.6rem 1.4rem",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  },
  loading: {
    padding: "2rem",
    textAlign: "center",
    fontSize: "1.2rem"
  }
};
