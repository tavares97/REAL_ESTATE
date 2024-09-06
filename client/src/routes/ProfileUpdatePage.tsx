import UploadWidget from "../components/UploadWidget";
import apiRequest from "../lib/apiRequest";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const ProfileUpdatePage = () => {
  const { user, updateUser } = useAuthStore();

  const [error, setError] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const response = await apiRequest.put(`/users/${user?.id}`, {
        username,
        email,
        password,
      });

      updateUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-full flex">
      <div className="flex-3 flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
          <h1 className="text-2xl font-bold">Update Profile</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-gray-500">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={user?.username}
              className="py-2 px-4 rounded-md border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={user?.email}
              className="py-2 px-4 rounded-md border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-500">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="py-2 px-4 rounded-md border border-gray-300"
            />
          </div>
          <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer hover:bg-amber-300">
            Update
          </button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="flex-2 bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center">
        <img src={user?.avatar || "/avatar.png"} alt="" className="avatar" />
        <UploadWidget />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
