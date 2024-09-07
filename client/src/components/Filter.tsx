import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { QueryParams } from "@/types/types";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<QueryParams>({
    city: searchParams.get("city") || "",
    type: searchParams.get("type") || "BUY",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "0",
    maxPrice: searchParams.get("maxPrice") || "1000000",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSearchParams(query);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="font-light text-2xl">
        Search results for{" "}
        <b>
          {searchParams.get("city") ? searchParams.get("city") : "Anywhere"}
        </b>
      </h1>
      {/* TOP */}
      <div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="city" className="text-xs">
            Location
          </label>
          <Input
            type="text"
            id="city"
            name="city"
            placeholder="City location"
            className="w-full p-2 border border-[#e0e0e0] text-sm rounded-md"
            onChange={handleChange}
            value={query.city}
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-between gap-5 sm:flex-col ">
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="type" className="text-xs">
            Type
          </label>

          <Select
            value={query.type}
            onValueChange={(value) => setQuery({ ...query, type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BUY">Buy</SelectItem>
              <SelectItem value="RENT">Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property" className="text-xs">
            Property
          </label>

          <Select
            value={query.property}
            onValueChange={(value) => setQuery({ ...query, property: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice" className="text-xs">
            Min Price
          </label>

          <Input
            type="text"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
            onChange={handleChange}
            value={query.minPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice" className="text-xs">
            Max Price
          </label>
          <Input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
            onChange={handleChange}
            value={query.maxPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom" className="text-xs">
            Bedroom
          </label>
          <Input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
            onChange={handleChange}
            value={query.bedroom}
          />
        </div>

        <button
          className="w-24 p-2 cursor-pointer flex items-center justify-center bg-[#fece51] rounded-md sm:w-full"
          onClick={handleFilter}
        >
          <MagnifyingGlass size={20} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
