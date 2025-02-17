import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Travel & Tourism */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Travel & Tourism
          </h3>
          <p className="text-gray-600 mt-3">
            Experience the sacred peace of Badrinath and embark on serenity in
            Badrinath’s divine land.
          </p>
        </div>

        {/* Hotel */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Hotel</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Get Directions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Nearby Visits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Customer Help</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                Guest Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Guest Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Location
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="text-gray-600 mt-3">
            Hotel New Urvashi, Mana Road, Badrinath, 246422
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-600 text-sm bg-gray-200 py-4">
        © 2025 Hotel New Urvashi | Powered by Hotel New Urvashi
      </div>
    </footer>
  );
}
