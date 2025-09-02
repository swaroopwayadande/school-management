import { useForm } from "react-hook-form";
import axios from "axios";
import "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"



export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:5000/schools", data);
    alert("Student added!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg flex flex-col w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">Student Registration</h2>

        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-600 text-sm mb-3 ml-1">Name is required</p>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.address && <p className="text-red-600 text-sm mb-3 ml-1">Address is required</p>}

        <input
          {...register("city", { required: true })}
          placeholder="City"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.city ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.city && <p className="text-red-600 text-sm mb-3 ml-1">City is required</p>}

        <input
          {...register("state", { required: true })}
          placeholder="State"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.state ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.state && <p className="text-red-600 text-sm mb-3 ml-1">State is required</p>}

        <input
          {...register("contact", { required: true, pattern: /^[0-9]+$/ })}
          placeholder="Contact"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.contact ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.contact && <p className="text-red-600 text-sm mb-3 ml-1">Valid contact number required</p>}

        <input
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={`mb-3 p-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.email_id ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email_id && <p className="text-red-600 text-sm mb-3 ml-1">Valid email required</p>}

        <button
          type="submit"
          className="mt-4 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all tracking-wide"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
