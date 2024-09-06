import { Link, useNavigate } from "react-router-dom";

import apiRequest from "../lib/apiRequest";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuthStore();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { username, password } = Object.fromEntries(formData);

    try {
      setLoading(true);
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      updateUser(response.data.user);

      navigate("/");
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
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <input
            name="username"
            required
            type="text"
            placeholder="Username"
            className="py-3 px-5 border rounded-md"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="py-3 px-5 border rounded-md"
          />
          <button
            className="py-3 px-5 rounded-md bg-amber-200 text-white font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
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

export default LoginPage;
