import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/schools").then(res => setSchools(res.data));
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: "100vh",
      padding: 20,
      background: "#f9fafb",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: 30 }}>Student list</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {schools.map((sch) => (
            <div
              key={sch.id}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
                padding: 24,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.12)";
              }}
            >
              <h3 style={{ margin: "0 0 12px", color: "#111827" }}>{sch.name}</h3>
              <p style={{ margin: "0 0 10px", color: "#374151", fontWeight: "600" }}>{sch.address}</p>
              <p style={{ margin: "0 0 10px", color: "#6b7280" }}>
                {sch.city}, {sch.state}
              </p>
              <p style={{ margin: "0 0 10px", color: "#4b5563" }}>Contact: {sch.contact}</p>
              <p style={{ margin: 0, color: "#2563eb", fontWeight: "bold" }}>Email: {sch.email_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
