import React from 'react';
import Nav from "../../components/Home/Nav"
import Footer from "@/components/Home/Footer";


const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-black font-erostyle">
      <Nav />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src="images/ecommerce-2140603_1280.jpg" alt="About" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4 font-brutal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col items-center">
              <img src="images/ecommerce-3562005_1280.jpg" alt="Team Member 1" className="w-40 h-40 object-cover rounded-full shadow mb-4" />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-lg">Co-Founder</p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
              <img src="images/slider-4.jpg" alt="Team Member 2" className="w-40 h-40 object-cover rounded-full shadow mb-4" />
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-lg">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
