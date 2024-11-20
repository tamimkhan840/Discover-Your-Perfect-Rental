import { BiLike } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { TiCompass } from "react-icons/ti";
import { AiOutlineDollar } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

function Browse() {
  return (
    <div className="w-11/12 container mx-auto my-12">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-8">
        Browse From Top Categories
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <li className="flex items-center space-x-4 border rounded-full px-4 py-3 hover:bg-[#fb787e] transition">
          <BiLike className="text-red-600 bg-[#FDEBEC] text-4xl border rounded-full p-2" />
          <p className="text-sm md:text-lg font-medium">Holiday Rentals</p>
        </li>
        <li className="flex items-center space-x-4 border rounded-full px-4 py-3 hover:bg-lime-400 transition">
          <FiHome className="text-lime-500 bg-lime-100 text-4xl border rounded-full p-2" />
          <p className="text-sm md:text-lg font-medium">Residential Spaces</p>
        </li>
        <li className="flex items-center space-x-4 border rounded-full px-4 py-3 hover:bg-fuchsia-500 transition">
          <TiCompass className="text-fuchsia-600 bg-[#FDEBEC] text-4xl border rounded-full p-2" />
          <p className="text-sm md:text-lg font-medium">Event Spaces</p>
        </li>
        <li className="flex items-center space-x-4 border rounded-full px-4 py-3 hover:bg-yellow-300 transition">
          <AiOutlineDollar className="text-yellow-500 bg-yellow-100 text-4xl border rounded-full p-2" />
          <p className="text-sm md:text-lg font-medium">Commercial Properties</p>
        </li>
        <li className="flex items-center space-x-4 border rounded-full px-4 py-3 hover:bg-blue-400 transition">
          <MdMoreHoriz className="text-blue-600 bg-blue-100 text-4xl border rounded-full p-2" />
          <p className="text-sm md:text-lg font-medium">More</p>
        </li>
      </ul>
    </div>
  );
}

export default Browse;
