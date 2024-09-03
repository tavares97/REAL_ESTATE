import { Link, useNavigate } from "react-router-dom";

import apiRequest from "../lib/apiRequest";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      setLoading(true);
      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex">
      <div className="flex-3 h-full flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="py-3 px-5 border rounded-md"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="py-3 px-5 border rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="py-3 px-5 border rounded-md"
          />
          <button
            className="py-3 px-5 rounded-md bg-amber-200 text-white font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
          {error && (
            <span className="text-red-500 text-center text-sm">{error}</span>
          )}
          <Link to="/login" className="text-xs text-gray-400 w-max ">
            Do you have an account?
          </Link>
        </form>
      </div>
      <div className="flex-2 bg-[#fcf5f3] relative md:hidden sm:hidden ">
        <img
          src="/bg.png"
          alt="buildings"
          className="absolute right-12 top-8 "
        />
      </div>
    </div>
  );
};

export default Register;
