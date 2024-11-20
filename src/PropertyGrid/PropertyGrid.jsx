
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 24.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },
    {
      id: 2,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 25.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },
    {
      id: 3,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 26.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },
    {
      id: 4,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 27.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },
    {
      id: 5,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 28.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },
    {
      id: 6,
      title: "Luxury villa in Rego Park",
      price: "85,000 LKR",
      beds: 3,
      baths: 2,
      area: "2500",
      imageUrl: `${new URL('../Components/images/image 29.png', import.meta.url)}`,
      sellerName: "Anne Liza",
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
          Load More
        </button>
      </div>
    </div>
  );
};

export default PropertyGrid;
