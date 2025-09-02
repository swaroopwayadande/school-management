import { useEffect, useState } from "react";
import axios from "axios";
import "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/schools").then((res) => setSchools(res.data));
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen py-8 bg-gray-50 font-sans">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Student list</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {schools.map((sch) => (
            <div
              key={sch.id}
              className="
                bg-white rounded-xl shadow-lg p-6 transition
                duration-300 ease-in-out cursor-default
                hover:scale-105 hover:shadow-2xl
              "
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{sch.name}</h3>
              <p className="font-semibold text-gray-700 mb-2">{sch.address}</p>
              <p className="text-gray-500 mb-2">{sch.city}, {sch.state}</p>
              <p className="text-gray-600 mb-2">Contact: {sch.contact}</p>
              <p className="text-blue-600 font-bold mb-0">Email: {sch.email_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
