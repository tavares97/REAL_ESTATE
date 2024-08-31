import ListCard from "./ListCard";
import { listData } from "../lib/dummyData";

const List = () => {
  return (
    <div className="flex flex-col gap-8">
      {listData.map((data) => (
        <ListCard key={data.id} listItem={data} />
      ))}
    </div>
  );
};

export default List;
