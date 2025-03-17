"use client";

import Image from "next/image";
import image2 from '../public/hotel12.jpg'
import { Search } from "lucide-react"; 
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [searchCity, setSearchCity] = useState("");

  const hotels = [
    {
      "id": 1,
      "name": "Grand Palace Hotel",
      "description": "A luxurious 5-star hotel with breathtaking city views and world-class amenities.",
      "img": "https://images.trvl-media.com/lodging/2000000/1110000/1102000/1101942/b2b0dad6.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      city: "Karachi",
      "price": 250
    },
    {
      "id": 2,
      "name": "Seaside Resort",
      "description": "Enjoy the serene ocean view at our premium beach resort, perfect for a relaxing getaway.",
      "img": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390822683.jpg?k=48c1a8b31712953b008f37a26a358dcb4ad76d7b8fa7668c7fe6b3f63880bdee&o=&hp=1",
      city: "Lahore",
      "price": 320
    },
    {
      "id": 3,
      "name": "Mountain Retreat",
      "description": "Nestled in the hills, this retreat offers peace, fresh air, and stunning mountain scenery.",
      "img": "https://onekindesign.com/wp-content/uploads/2016/11/Contemporary-Mountain-Retreat-Berglund-Architects-01-1-Kindesign.jpg",
       city: "Islamabad",
      "price": 180
    },
    {
      "id": 4,
      "name": "Urban Stay",
      "description": "A modern boutique hotel in the heart of downtown, close to all major attractions.",
      "img": "https://pix10.agoda.net/hotelImages/22732909/-1/d887c6037721ebdac48efbccd2ccf8a9.jpg?ce=0&s=414x232&ar=16x9",
      "price": 200,
      city: "Peshawar",
    }
  ];
    const destinations = [
      {
        "id": 1,
        "name": "Karachi",
        "description": "The largest city of Pakistan, known for its beaches, vibrant nightlife, and historical landmarks.",
        "img": "https://pyaraskardu.com/wp-content/uploads/2022/10/Mazar-e-Quaid-Karachi-1-960x636.jpg",
        "country": "Pakistan"
      },
      {
        "id": 2,
        "name": "Lahore",
        "description": "The cultural heart of Pakistan, famous for its Mughal-era architecture and delicious food.",
        "img": "https://c1.wallpaperflare.com/preview/258/515/614/lahore-lahore-city-lhr-lahore-pakistan.jpg",
        "country": "Pakistan"
      },
      {
        "id": 3,
        "name": "Islamabad",
        "description": "The capital city of Pakistan, known for its beautiful scenery, modern architecture, and peaceful environment.",
        "img": "https://t4.ftcdn.net/jpg/04/15/05/17/360_F_415051795_wKolxKkPr2tS7fnMKOQouqUecOHMuAjh.jpg",
        "country": "Pakistan"
      },
      {
        "id": 4,
        "name": "Peshawar",
        "description": "One of the oldest cities in South Asia, famous for its historic bazaars and rich Pashtun culture.",
        "img": "https://thumbs.dreamstime.com/b/khyber-pass-peshawar-pakistan-gate-was-built-mouth-where-jamrud-fort-also-located-near-city-155406774.jpg",
        "country": "Pakistan"
      },
      
    
  ];

  const filteredHotels = hotels.filter(hotel =>
    hotel.city.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gray-900">
    {/* Hero Section */}
    <div className="relative w-full h-[50vh] sm:h-[60vh]">
      <Image 
        src={image2}  
        alt="Hotel Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
       <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white px-4 sm:px-8">
        <h1 className="text-xl sm:text-5xl font-bold text-center mt-16">Find Your Perfect Stay</h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-300  text-center">Discover amazing hotels at unbeatable prices.</p>
        <Link href="/hotel">
        <button className="mt-5 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Find Hotels
        </button>
        </Link>
      </div>
    </div>

        {/* Trending News Section */}
  {/* Featured Hotels Section */}
  <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6 text-center">
        Featured Hotels
      </h2>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8">
      {filteredHotels.map((project) => (
          <div
            key={project.id}
            className="bg-[#2a2e35] text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={project.img}
              className="w-full h-44 object-cover rounded-lg"
              alt={project.name}
            />
            <h3 className="text-2xl font-bold mt-4 text-center text-gray-200">
              {project.name}
            </h3>
            <p className="text-gray-400 mt-2 text-center">{project.description}</p>
            <p className="text-lg font-semibold text-center mt-3">
              ${project.price}
            </p>
            <Link href="/hotel">
            <button className="mt-4 px-6 py-2 ml-20 bg-green-600 text-white rounded-lg hover:bg-green-700">
               View More
              </button>
              </Link>
          </div>
        ))}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6 text-center">
       Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8">
        {destinations.map((destinations) => (
          <div
            key={destinations.id}
            className="bg-[#2a2e35] text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={destinations.img}
              className="w-full h-44 object-cover rounded-lg"
              alt={destinations.name}
            />
            <h3 className="text-2xl font-bold mt-4 text-center text-gray-200">
              {destinations.name}
            </h3>
            <p className="text-gray-400 mt-2 text-center">{destinations.description}</p>
            <Link href="/hotel">
            <button className="mt-4 px-6 py-2 ml-20 bg-green-600 text-white rounded-lg hover:bg-green-700">
                View More
              </button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}    