import { MdFavoriteBorder } from "react-icons/md";

function FeaturedCart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
        <img src="" alt="" />
        <p>85,000 LKR<span>/Month</span></p>
        <h3>Luxury villa in Rego Park</h3>
        <ul>
            <li>
                <span>3 Bedrooms</span>
            </li>
            <li>
                <span>2 Bathrooms</span>
            </li>
            <li>
                <span>2500 Square FT</span>
            </li>
        </ul>
        <div className="grid grid-cols-12 border ">

            <div className="col-span-2">
                <img src="" alt="" />
            </div>
            <div className="col-span-2">
                <p>Anne Liza</p>
                <p>Property Seller</p>
            </div>
            <div className="col-span-8 ml-auto">
             <MdFavoriteBorder />
            </div>

        </div>
        </div>
    </div>
  )
}

export default FeaturedCart
