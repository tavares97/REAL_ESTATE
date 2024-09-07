import { Link } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { QueryParams } from "@/types/types";
import { useState } from "react";

const types = ["BUY", "RENT"];

const SearchBar = () => {
  const [query, setQuery] = useState<QueryParams>({
    type: "BUY",
    city: "",
    minPrice: "0",
    maxPrice: "1000000",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <div>
        {types.map((type, index) => (
          <button
            key={index}
            onClick={() => setQuery({ ...query, type })}
            className={`${
              query.type === type
                ? "bg-[#fece51]"
                : "hover:bg-[#fece51] hover:bg-opacity-20"
            } py-4 px-9  border-[#cac9c9] border capitalize border-b-0 sm:border-b  ${
              type === "buy"
                ? "rounded-tl-md border-r-0 sm:rounded-bl-md"
                : "rounded-tr-md border-l-0 sm:rounded-br-md"
            } `}
          >
            {type}
          </button>
        ))}
      </div>

      <form
        action=""
        className="border-[#cac9c9] border flex justify-between h-16 gap-1 rounded-tr-md rounded-br-md rounded-bl-md sm:flex-col sm:border-0 sm:mt-2"
      >
        <input
          type="text"
          name="city"
          placeholder="City Location"
          className="px-2 w-[200px] lg:p-1 lg:w-[140px] md:w-auto sm:p-5 sm:border sm:w-full sm:rounded-md"
          onChange={handleChange}
          value={query.city}
        />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="px-2 w-[200px] lg:p-1 lg:w-[140px] md:w-auto sm:p-5 sm:border sm:w-full sm:rounded-md"
          onChange={handleChange}
          value={query.minPrice}
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="px-2 w-[200px] lg:p-1 lg:w-[140px] md:w-auto sm:p-5 sm:border sm:w-full sm:rounded-md"
          onChange={handleChange}
          value={query.maxPrice}
        />

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="cursor-pointer hover:bg-[#fece51] hover:bg-opacity-70 bg-[#fece51] flex items-center justify-center p-3 sm:rounded-md"
        >
          <button>
            <MagnifyingGlass size={20} />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
