import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("darkMode", isDark);
  }

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        padding: "16px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h2 style={{ color: "#fff" }}>Roomify</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ marginRight: "16px", color: "#fff" }} to="/">
            Home
          </Link>
          <Link style={{ marginRight: "16px", color: "#fff" }} to="/find">
            Find Roommate
          </Link>
          <Link style={{ marginRight: "16px", color: "#fff" }} to="/add">
            Add Listing
          </Link>

          <button
            onClick={toggleDarkMode}
            style={{
              marginLeft: "10px",
              padding: "6px 12px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
