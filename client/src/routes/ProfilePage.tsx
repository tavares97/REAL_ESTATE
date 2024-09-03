import List from "../components/List";
import Messages from "../components/Messages";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { userData } from "../lib/dummyData";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full md:flex-col md:overflow-scroll sm:flex-col sm:overflow-scroll">
      <div className="flex-3 overflow-y-scroll pb-10 md:flex-none sm:flex-none ">
        <div className="pr-12 flex flex-col gap-5 sm:pr-0">
          <div className="flex justify-between items-center">
            <h1 className="font-light text-2xl">User Information</h1>
            <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer">
              Update Profile
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-5 items-center">
              Avatar:
              <img
                src={userData.img}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </span>

            <span className="flex gap-5 items-center">
              Username: <b>{userData.name}</b>
            </span>
            <span className="flex gap-5 items-center">
              Email: <b>{userData.email}</b>
            </span>

            <button
              className="p-1 w-28 rounded-md border border-red-500 cursor-pointer hover:bg-red-500 hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="font-light text-2xl">My List</h1>
            <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer">
              Create New Post
            </button>
          </div>
          <List />

          <div>
            <h1 className="font-light text-2xl">Saved Lists</h1>
          </div>
        </div>
      </div>

      <div className="flex-2 bg-[#fcf5f3] h-full md:flex-none sm:flex-none ">
        <div className="px-5 h-full">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
