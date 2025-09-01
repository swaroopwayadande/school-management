import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./AddSchool";
import ShowSchools from "./ShowSchools";

function App() {
  return (
    <Router>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        fontFamily: "sans-serif",
        background: "#f6f8fa"
      }}>
        <nav style={{
          marginBottom: 20,
          display: "flex",
          gap: 20,
          justifyContent: "center",
          width: "100%",
          maxWidth: 600
        }}>
          <Link to="/" style={{ textDecoration: "none", color: "#2563eb", fontWeight: "bold" }}>
            Add School
          </Link>
          <Link to="/schools" style={{ textDecoration: "none", color: "#2563eb", fontWeight: "bold" }}>
            Show Schools
          </Link>
        </nav>
        <div style={{ width: "100%", maxWidth: 800 }}>
          <Routes>
            <Route path="/" element={<AddSchool />} />
            <Route path="/schools" element={<ShowSchools />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
