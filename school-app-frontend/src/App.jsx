import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./AddSchool";
import ShowSchools from "./ShowSchools";
import "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col items-center bg-gray-100 p-6 font-sans overflow-hidden">
        <nav className="mb-8 flex justify-center space-x-12 w-full max-w-xl">
          <Link
            to="/"
            className="text-blue-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            Add School
          </Link>
          <Link
            to="/schools"
            className="text-blue-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            Show Schools
          </Link>
        </nav>
        <main className="w-full max-w-4xl flex-grow bg-white rounded-xl shadow-lg p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<AddSchool />} />
            <Route path="/schools" element={<ShowSchools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
