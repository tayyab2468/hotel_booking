'use client';

import { useState } from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setAlert({
        type: 'success',
        message: 'Message sent successfully!'
      });
    } else {
      setAlert({
        type: 'error',
        message: 'Please fill all the fields.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-0">Contact Us</h2>

        {alert && (
          <div className={`mb-4 p-3 text-sm text-white rounded-md ${alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
            {alert.message}
            <button className="float-right text-white" onClick={() => setAlert(null)}>X</button>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>

      {/* Contact Details */}
<div className="mt-8 text-center space-y-4">
  <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
  
  <div className="flex items-center justify-center space-x-3">
    <EmailIcon className="text-red-500" />
    <a 
      href="mailto:tbasharat804@gmail.com" 
      className="text-gray-700 hover:text-red-500 transition"
    >
     bookingweb@gmail.com
    </a>
  </div>
  
  <div className="flex items-center justify-center space-x-3">
    <PhoneIcon className="text-green-500" />
    <a 
      href="tel:+923087133907" 
      className="text-gray-700 hover:text-green-500 transition"
    >
      +92 111-888-8777
    </a>
  </div>

  <div className="flex items-center justify-center space-x-3">
    <LocationOnIcon className="text-blue-500" />
    <p className="text-gray-700">Karachi, Pakistan</p>
  </div>
</div>
        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">Follow Us</p>
          <div className="flex justify-center gap-6 mt-3">
          
            <Link href="https://www.facebook.com/" target="_blank" className="text-black hover:text-blue-600 text-2xl">
              <FacebookIcon />
            </Link>
            <Link href="https://help.instagram.com/155940534568753" target="_blank" className="text-blue-700 hover:text-blue-900 text-2xl">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;