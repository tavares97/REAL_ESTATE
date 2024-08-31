import { MagnifyingGlass } from "@phosphor-icons/react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="font-light text-2xl">
        Search results for <b>Lisbon</b>
      </h1>
      {/* TOP */}
      <div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="city" className="text-xs">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City location"
            className="w-full p-2 border border-[#e0e0e0] text-sm rounded-md"
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-between gap-5 sm:flex-col ">
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="type" className="text-xs">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
          >
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property" className="text-xs">
            Property
          </label>
          <select
            name="property"
            id="property"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
          >
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice" className="text-xs">
            Min Price
          </label>
          <input
            type="text"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice" className="text-xs">
            Max Price
          </label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom" className="text-xs">
            Bedroom
          </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-24 p-2 border border-[#e0e0e0] text-sm rounded-md sm:w-full"
          />
        </div>

        <button className="w-24 p-2 cursor-pointer flex items-center justify-center bg-[#fece51] rounded-md sm:w-full">
          <MagnifyingGlass size={20} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
