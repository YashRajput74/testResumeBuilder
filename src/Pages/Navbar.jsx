// import React from "react";
// import { useResume } from "../context/ResumeContext";
// import { useNavigate } from "react-router-dom";

// export default function Navbar({ onDownload }) {
//     const navigate = useNavigate();
//   return (
//     <header
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "1rem 2rem",
//         background: "linear-gradient(to right, #d3bae7, #fdda7c)",
//         boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
//         position: "sticky",
//         top: '0',
//         zIndex: '999',
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//  <div className="logo"    onClick={() => navigate("/")}
//   style={{ cursor: "pointer" }} >Heitech.</div>
       
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//         <button
//           className="btnPrimary"
//           onClick={onDownload}
//           style={{
//            background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
//             color: "white",
//             padding: "0.5rem 1.2rem",
//             fontWeight: "600",
//             borderRadius: "8px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//            Download
//         </button>

//         <div
//           style={{
//             width: "36px",
//             height: "36px",
//             borderRadius: "50%",
//             background: "#444",
//             color: "#fff",
//             fontSize: "0.9rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           KB
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Adjust path if needed

export default function Navbar({ onDownload }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        const name = user.email.split("@")[0];
        setUserName(name);
      }
    };
    getUser();
  }, []);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(/[._\s]/) // split by dot/underscore/space
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2); // limit to 2 letters
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "linear-gradient(to right, #d3bae7, #fdda7c)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Heitech.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          className="btnPrimary"
          onClick={onDownload}
          style={{
            background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
            color: "white",
            padding: "0.5rem 1.2rem",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Download
        </button>

        <div
          title={userName || "Not logged in"}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#444",
            color: "#fff",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
          }}
        >
          {getInitials(userName)}
        </div>
      </div>
    </header>
  );
}
