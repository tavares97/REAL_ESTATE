import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex h-full ">
      <div className="flex-3 ">
        <div className="pr-[100px] md:p-0 sm:p-0 sm:justify-start flex flex-col justify-center gap-12  h-full  ">
          <div>
            <h1 className="text-[64px] sm:text-[45px] lg:text-[48px]  font-semibold leading-none mb-5 ">
              Find Real Estate & Get Your Dream Place Now
            </h1>

            <p>Discover Your Dream Home – Where Luxury Meets Comfort</p>
          </div>

          <SearchBar />
          <div className="flex justify-between sm:hidden">
            <div>
              <h1 className="text-4xl lg:text-3xl">16+</h1>
              <h2 className="text-xl font-light">Years of Experience</h2>
            </div>
            <div>
              <h1 className="text-4xl lg:text-3xl">200</h1>
              <h2 className="text-xl font-light">Awards</h2>
            </div>
            <div>
              <h1 className="text-4xl lg:text-3xl">1200+</h1>
              <h2 className="text-xl font-light">Properties ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 bg-[#fcf5f3] relative md:hidden sm:hidden ">
        <img
          src="/bg.png"
          alt="buildings"
          className="absolute right-12 top-8 "
        />
      </div>
    </div>
  );
};

export default HomePage;
