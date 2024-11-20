import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto w-11/12 grid grid-cols-1 gap-8 md:grid-cols-5 px-4">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-red-500">Gidak</h2>
          <p className="text-gray-600">
            Sri Lanka&apos;s first & largest platform designed to create an online marketplace exclusively for RENT.
          </p>
          <div className="flex space-x-4 text-red-500">
            <FaFacebookF className="cursor-pointer hover:text-red-700 transition" />
            <FaTwitter className="cursor-pointer hover:text-red-700 transition" />
            <FaInstagram className="cursor-pointer hover:text-red-700 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-700 transition" />
            <FaPinterestP className="cursor-pointer hover:text-red-700 transition" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Navigation</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">Blog</li>
            <li className="hover:text-red-500 cursor-pointer">Terms of Use</li>
            <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Featured Locations */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Featured Locations</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Kandy</li>
            <li className="hover:text-red-500 cursor-pointer">Anuradhapura</li>
            <li className="hover:text-red-500 cursor-pointer">Badulla</li>
            <li className="hover:text-red-500 cursor-pointer">Colombo</li>
            <li className="hover:text-red-500 cursor-pointer">Katharagama</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Help</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mt-4">Stay updated with the latest listings and rentals.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © Copyright 2023. Designed and Developed by Kaveesha
      </div>
    </footer>
  );
};

export default Footer;
