import image31 from "../Components/images/image31.png";
import image32 from "../Components/images/image32.png";
import image33 from "../Components/images/image33.png";
import image34 from "../Components/images/image34.png";

const ImportantArticles = () => {
  const articles = [
    {
      date: "May 2, 2023",
      title: "Car Rental Hacks for a Smooth Journey",
      description:
        "Learn insider tips for getting the best deals and making the most of your rental car experience.",
    },
    {
      date: "April 15, 2023",
      title: "Managing Your Rental Items: A Comprehensive Guide",
      description:
        "Get valuable insights on how to effectively manage and maintain your rented items.",
        image: image32
    },
    {
      date: "January 2, 2023",
      title: "Navigating the Rental Market: Insights for New Renters",
      description:
        "Explore key considerations and useful tips for individuals new to the rental market.",
        image: image33
    },
    {
      date: "April 1, 2023",
      title: "Maximizing Returns: Strategies for Rental Property Owners",
      description:
        "Learn strategies to optimize the return on investment for your rental property.",
        image: image34
    },
  ];

  return (
    <div className="my-10 w-10/12 container mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">Important Articles</h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Featured Article */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={image31}
              alt="Main Article"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-red-500 text-sm mb-2">{articles[0].date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {articles[0].title}
              </h3>
              <p className="text-gray-600">{articles[0].description}</p>
            </div>
          </div>
        </div>

        {/* Secondary Articles */}
        <div className="space-y-8 md:col-span-2">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border-b pb-4 last:border-none"
            >
              <img
                src={article.image} // Replace with real image URL
                alt="Thumbnail"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-red-500 text-sm">{article.date}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {article.title}
                </h4>
                <p className="text-gray-600">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantArticles;
