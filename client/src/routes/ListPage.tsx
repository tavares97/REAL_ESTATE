import { Await, useLoaderData } from "react-router-dom";

import Filter from "../components/Filter";
import ListCard from "../components/ListCard";
import Map from "../components/Map";
import { Post } from "@/types/types";
import { Suspense } from "react";

const ListPage = () => {
  const { postsPromise } = useLoaderData() as { postsPromise: Promise<Post[]> };

  return (
    <div className="flex h-full">
      {/* LIST CONTAINER */}
      <div className="flex-3 sm:w-full">
        <div className="pr-12 flex flex-col gap-12 overflow-y-scroll h-full pb-12">
          <Filter />
          <Suspense fallback={<div>Loading...</div>}>
            <Await
              resolve={postsPromise}
              errorElement={<div>Error Loading Posts</div>}
            >
              {(posts: Post[]) => (
                <>
                  {posts.map((listItem) => (
                    <ListCard key={listItem.id} listItem={listItem} />
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </div>
      </div>

      {/* MAP CONTAINER */}
      <div className="flex-2 bg-[#fcf5f3] h-full md:hidden sm:hidden">
        <Suspense fallback={<div>Loading map...</div>}>
          <Await resolve={postsPromise}>
            {(posts: Post[]) => <Map pins={posts} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
