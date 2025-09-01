import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://localhost:5000/schools", data);
    alert("Student added!");
    reset();
  };

  // Inline style objects
  const inputStyle = {
    marginBottom: 7,
    padding: "10px",
    fontSize: 16,
    border: "1px solid #ddd",
    borderRadius: 5
  };

  const errorStyle = {
    color: "#eb3737",
    fontSize: 13,
    marginBottom: 6,
    marginLeft: 2
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f8fa"
    }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: "#fff",
          padding: "32px 24px",
          borderRadius: 12,
          boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          width: 350
        }}
      >
        <h2 style={{ marginBottom: 24, color: "#2563eb", textAlign: "center" }}>Student Registration</h2>

        <input
          {...register("name", { required: true })}
          placeholder="Name"
          style={inputStyle}
        />
        {errors.name && <span style={errorStyle}>Name is required</span>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
          style={inputStyle}
        />
        {errors.address && <span style={errorStyle}>Address is required</span>}

        <input
          {...register("city", { required: true })}
          placeholder="City"
          style={inputStyle}
        />
        {errors.city && <span style={errorStyle}>City is required</span>}

        <input
          {...register("state", { required: true })}
          placeholder="State"
          style={inputStyle}
        />
        {errors.state && <span style={errorStyle}>State is required</span>}

        <input
          {...register("contact", { required: true, pattern: /^[0-9]+$/ })}
          placeholder="Contact"
          style={inputStyle}
        />
        {errors.contact && <span style={errorStyle}>Valid contact number required</span>}

        <input
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          style={inputStyle}
        />
        {errors.email_id && <span style={errorStyle}>Valid email required</span>}

        <button
          type="submit"
          style={{
            marginTop: 14,
            padding: "10px 0",
            background: "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            letterSpacing: 1
          }}
        >
          Add Student 
        </button>
      </form>
    </div>
  );
}
