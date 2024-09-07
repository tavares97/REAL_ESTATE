import ListCard from "./ListCard";
import { Post } from "@/types/types";

type ListProps = {
  listItem: Post[];
};

const List = ({ listItem }: ListProps) => {
  console.log(listItem);
  return (
    <div className="flex flex-col gap-8">
      {listItem.map((item) => (
        <ListCard key={item.id} listItem={item} />
      ))}
    </div>
  );
};

export default List;
