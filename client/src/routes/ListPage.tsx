import { ListData, listData } from "../lib/dummyData";

import Filter from "../components/Filter";
import ListCard from "../components/ListCard";
import Map from "../components/Map";

const ListPage = () => {
  const data: ListData[] = listData;
  return (
    <div className="flex h-full">
      {/* LIST CONTAINER */}
      <div className="flex-3">
        <div className="pr-12 flex flex-col gap-12 overflow-y-scroll h-full pb-12">
          <Filter />

          {data.map((listItem) => (
            <ListCard key={listItem.id} listItem={listItem} />
          ))}
        </div>
      </div>

      {/* MAP CONTAINER */}
      <div className="flex-2 bg-[#fcf5f3] h-full">
        <Map pins={data} />
      </div>
    </div>
  );
};

export default ListPage;
