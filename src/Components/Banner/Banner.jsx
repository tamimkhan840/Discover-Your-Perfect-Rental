import minBanner from "../images/young.png";

const Banner = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${minBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center text-black  py-10 px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold my-8 leading-tight">
          Discover Your{"  "}
          <span className="text-red-500">Perfect Rental</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl  mb-6">
          Rent Cars, Houses, and Items in Just a Few Clicks
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 my-6">
          <button className="bg-white hover:bg-red-600 text-black px-6 py-2 rounded-full text-sm md:text-base">
            Places
          </button>
          <button className="bg-white hover:bg-red-600 text-black px-6 py-2 rounded-full text-sm md:text-base">
            Rides
          </button>
          <button className="bg-white hover:bg-red-600 text-black px-6 py-2 rounded-full text-sm md:text-base">
            Things
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center my-12">
          <label className="w-full max-w-md flex items-center bg-white text-black rounded-full shadow-md px-4 py-3">
            <input
              type="text"
              className="flex-grow text-sm md:text-base outline-none"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
