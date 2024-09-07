import UploadWidget from "../components/UploadWidget";
import apiRequest from "../lib/apiRequest";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileUpdatePage = () => {
  const { user, updateUser } = useAuthStore();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [avatar, setAvatar] = useState<string[]>([]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const response = await apiRequest.put(`/users/${user?.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });

      updateUser(response.data);
      navigate("/profile");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-full flex md:flex-col md:overflow-scroll sm:flex-col sm:overflow-scroll">
      <div className="flex-3 flex items-center justify-center md:flex-none sm:flex-none">
        <form className="flex flex-col gap-5 sm:pr-0" onSubmit={handleUpdate}>
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
      <div className="flex-2 bg-[#fcf5f3]  md:bg-white sm:bg-white flex flex-col gap-5 items-center justify-center md:flex-none sm:flex-none sm:mt-10 ">
        <img
          src={avatar[0] || user?.avatar || "/avatar.png"}
          alt=""
          className="avatar"
        />
        <UploadWidget setState={setAvatar} />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
