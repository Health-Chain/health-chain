import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../data/doctorsImages";

function AllDoctors() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleNavbarClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter images based on selected category; if 'All' is selected, show all images
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleCombinedClick = (category) => {
    closeNavbar(); // Close the navbar
    handleNavbarClick(category); // Set the selected category dynamically
  };

  return (
    <div className=" md:mx-8 mx-4">
      <div className="px-6 md:px-8 pt-8 ">
        <div className="flex md:flex-row gap-6 flex-col justify-center">
          <nav className="pb-4 pt-10 px-6 bg-white start-0">
            <h4 className="pb-3 text-lg">
              Browse through the doctors specialist.
            </h4>
            {/* Button for toggling the navbar in mobile view */}
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={toggleNavbar}
                className="inline-flex items-center p-2 w-30 h-100 border justify-center text-sm text-gray-100 rounded-lg md:hidden  bg-blue focus:outline-none focus:ring-0 focus:ring-gray-200 "
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
                <span className="text-lg px-2">Filters</span>
              </button>
            </div>
            {/* Navbar links */}
            <div
              className={`items-center justify-between ${
                isOpen ? "block" : "hidden"
              } w-full md:flex doctor-nav  md:w-auto md:order-1`}
              id="navbar-sticky "
            >
              <ul className="flex flex-col  mt-4 font-medium    md:flex-col md:mt-0 ">
                <li className="hidden" onClick={() => handleNavbarClick("All")}>
                  All
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 1")}
                    className="block mt-3 border  py-2 px-6 text-gray-500  rounded-full hover:bg-gray-100  "
                  >
                    General physician
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 2")}
                    className="block border py-2 px-6 mt-3 text-gray-500 rounded-full hover:bg-gray-100   "
                  >
                    Gynecologist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 3")}
                    className="block py-2 px-6 mt-3 border text-gray-500 rounded-full hover:bg-gray-100 "
                  >
                    Dermatologist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 4")}
                    className="block py-2 px-6 border mt-3 text-gray-500 rounded-full hover:bg-gray-100"
                  >
                    Pediatricians
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 5")}
                    className="block py-2 px-6 border mt-3 text-gray-500 rounded-full hover:bg-gray-100"
                  >
                    Neurologist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCombinedClick("Category 6")}
                    className="block py-2 px-6 border mt-3 text-gray-500 rounded-full hover:bg-gray-100"
                  >
                    Gastroenterologist
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Landing Page Images */}
          <div className="image-container mt-4 md:mt-20 grid grid-cols-1 md:grid-cols-3  gap-6">
            {filteredImages.map((image, index) => (
              <div
                className=" doctor-hover rounded-lg shadow transition "
                key={index}
              >
                <Link to={`/doctor/${image.id}`} className="block">
                  <div className="flex justify-center  doctor-hover2">
                    <img
                      key={image.id}
                      src={image.src}
                      alt={`Image ${image.id}`}
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className="bg-white px-6 pt-4 pb-5 ">
                    <ul
                      key={image.id}
                      className="list-disc available-color  pl-4"
                    >
                      <li className="font-medium">{image.text}</li>
                    </ul>
                    <h2 className="font-bold text-lg">{image.name}</h2>
                    <p className="text-gray-700 text-sm">{image.skill}</p>
                  </div>
                </Link>
              </div>
              
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AllDoctors;
