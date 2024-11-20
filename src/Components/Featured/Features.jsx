import FeaturedCart from "./FeaturedCart"


function Features() {
  return (
    <div className="w-11/12 container mx-auto my-12">
        <div className="my-12">
            <h2 className="text-4xl font-semibold text-center">Featured Listings</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto my-6"></div>
        </div>
        <div>
            <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 my-10">
                <li className="ml-auto border rounded-full px-2 py-1 text-base flex items-center space-x-4 hover:bg-[#fb787e]">
                    <span>All Items (5125)</span>
                </li>
                <li className="ml-auto border rounded-full px-2 py-1 flex items-center space-x-4 hover:bg-red-400">
                    <span>Residential Spaces (64)</span>
                </li>
                <li className="ml-auto border rounded-full px-3 py-1 flex items-center space-x-4 hover:bg-red-400">
                    <span>Sports Venues</span>
                </li>
                <li className="ml-auto border rounded-full px-2   flex items-center space-x-4 hover:bg-red-400">
                    <span>Meeting Spaces</span>
                </li>
                <li className="ml-auto border rounded-full px-2  flex items-center space-x-4 hover:bg-red-400">
                    <span>Vans & Buses</span>
                </li>
                <li className="mx-auto border rounded-full px-2 flex items-center space-x-4 hover:bg-red-400">
                    <span>Cars & SUVs </span>
                </li>
                <li className="mx-auto border rounded-full px-2 flex items-center space-x-4 hover:bg-red-400">
                    <span>Lorries & Industrial </span>
                </li>
            </ul>
        </div>
        <div>
            {/* <FeaturedCart /> */}
        </div>
    </div>
  )
}

export default Features
