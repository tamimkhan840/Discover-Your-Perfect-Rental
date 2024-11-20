/* eslint-disable react/prop-types */

import  image30  from '../Components/images/image30.jpg';

const PropertyCard = ({ property }) => {

    const {title, price, beds, baths, area, imageUrl, sellerName} = property

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-red-600">{price} / Month</span>
          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">For Rent</span>
        </div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <span>{beds} Bedrooms</span>
          <span>|</span>
          <span>{baths} Bathrooms</span>
          <span>|</span>
          <span>{area} Square FT</span>
        </div>
        <div className="flex items-center mt-4">
          <img src={image30} alt={title} className="w-8 h-8 rounded-full" />
          <div className="ml-3">
            <p className="text-sm font-medium">{sellerName}</p>
            <p className="text-xs text-gray-500">Property Seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
