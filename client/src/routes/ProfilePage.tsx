import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useEffect } from "react";

import List from "../components/List";
import { ProfilePosts } from "@/types/types";
import apiRequest from "../lib/apiRequest";
import { useAuthStore } from "../store/authStore";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { profilePostsPromise } = useLoaderData() as {
    profilePostsPromise: Promise<ProfilePosts[]>;
  };

  const { user, updateUser } = useAuthStore();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full md:flex-col md:overflow-scroll sm:flex-col sm:overflow-scroll">
      <div className="flex-3 overflow-y-scroll pb-10 md:flex-none sm:flex-none ">
        <div className="pr-12 flex flex-col gap-5 sm:pr-0">
          <div className="flex justify-between items-center">
            <h1 className="font-light text-2xl">User Information</h1>
            <Link to="/profile/update">
              <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer">
                Update Profile
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-5 items-center">
              Avatar:
              <img
                src={user?.avatar || "/avatar.png"}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </span>

            <span className="flex gap-5 items-center">
              Username: <b>{user?.username}</b>
            </span>
            <span className="flex gap-5 items-center">
              Email: <b>{user?.email}</b>
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
            <Link to="/post/create">
              <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer">
                Create New Post
              </button>
            </Link>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Await
              resolve={profilePostsPromise}
              errorElement={<div>Error Loading Posts</div>}
            >
              {(profilePosts: ProfilePosts) => (
                <List listItem={profilePosts.userPosts} />
              )}
            </Await>
          </Suspense>

          <div>
            <h1 className="font-light text-2xl mb-2">Saved Lists</h1>

            <Suspense fallback={<div>Loading...</div>}>
              <Await
                resolve={profilePostsPromise}
                errorElement={<div>Error Loading Posts</div>}
              >
                {(profilePosts: ProfilePosts) => (
                  <List listItem={profilePosts.savedPosts} />
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="flex-2 bg-[#fcf5f3] h-full md:hidden sm:hidden"></div>
    </div>
  );
};

export default ProfilePage;
