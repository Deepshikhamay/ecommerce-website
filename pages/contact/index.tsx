import React, { useState } from "react";
import Nav from "../../components/Home/Nav";
import Footer from "@/components/Home/Footer";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Implement your contact form submission logic here

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center mb-8">
            <img src="images/ecommerce-3562005_1280.jpg" alt="Contact" className="w-48 h-48 rounded-full" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="text-lg font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-lg font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={handleMessageChange}
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
