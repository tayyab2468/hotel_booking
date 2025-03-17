"use client";

import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 px-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the best hotels at unbeatable prices. Your dream stay is just a few clicks away!
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black ml-9">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600 text-lg ml-4 md:text-xl leading-relaxed">
              We make hotel booking effortless, offering the best deals on luxury and budget stays worldwide. 
              Whether you’re planning a business trip or a vacation, we ensure you find the perfect accommodation.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://pix10.agoda.net/hotelImages/569439/-1/f91da57aad28a4a3ccdf3631fb287743.jpg?ca=16&ce=1&s=414x232&ar=16x9"
              width={500}
              height={300}
              alt="Luxury Hotel"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-300 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black">What We Offer</h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Explore a variety of hotels, compare prices, and book instantly with our easy-to-use platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black">Best Price Guarantee</h3>
              <p className="text-gray-600 mt-2">
                Find the best hotel deals at unbeatable rates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
              <p className="text-gray-600 mt-2">
                We're here to assist you anytime, anywhere.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-semibold">Secure & Easy Booking</h3>
              <p className="text-gray-600 mt-2">
                A fast, secure, and seamless booking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-black  text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join Us Today</h2>
          <p className="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto">
            Experience the easiest way to book your perfect stay. Book now and start your journey with us!
          </p>
          <Link href="/booking">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
             Book Now
            </button>
          </Link>
        </div>
      </section>

     
    </div>
  );
}
