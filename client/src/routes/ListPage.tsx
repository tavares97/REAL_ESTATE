import Filter from "../components/Filter";
import ListCard from "../components/ListCard";
import Map from "../components/Map";
import { Post } from "@/types/types";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  const { posts } = useLoaderData() as { posts: Post[] };

  return (
    <div className="flex h-full">
      {/* LIST CONTAINER */}
      <div className="flex-3 sm:w-full">
        <div className="pr-12 flex flex-col gap-12 overflow-y-scroll h-full pb-12">
          <Filter />

          {posts.map((listItem) => (
            <ListCard key={listItem.id} listItem={listItem} />
          ))}
        </div>
      </div>

      {/* MAP CONTAINER */}
      <div className="flex-2 bg-[#fcf5f3] h-full md:hidden sm:hidden">
        <Map pins={posts} />
      </div>
    </div>
  );
};

export default ListPage;
