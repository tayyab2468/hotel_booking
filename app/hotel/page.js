"use client";
import { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [city, setCity] = useState("All");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const hotels = [
    {
      id: 1,
      name: "Pearl Continental Karachi",
      description: "A luxurious 5-star hotel in the heart of Karachi, offering premium amenities and fine dining.",
      img: "https://pix10.agoda.net/hotelImages/569439/-1/f91da57aad28a4a3ccdf3631fb287743.jpg?ca=16&ce=1&s=414x232&ar=16x9",
      price: 220,
      city: "Karachi",
      location: "Karachi, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 2,
      name: "Mövenpick Hotel Karachi",
      description: "A stylish and modern hotel known for its excellent hospitality and fine cuisine.",
      img: "https://cdn-img.readytotrip.com/t/1024x768/content/e5/0c/e50c31c6efd1e91e10b6afbd8b7adaacf7ed950e.jpeg",
      price: 180,
      city: "Karachi",
      location: "Karachi, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 3,
      name: "Avari Tower Karachi",
      description: "A landmark hotel in Karachi with exceptional hospitality and a grand ambiance.",
      img: "https://cdn-img.readytotrip.com/t/1024x768/ostrovok/5e/78/5e786de96d44bbe584ba77e4f0adce674f89d6a0.jpeg",
      price: 200,
      city: "Karachi",
      location: "Karachi, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pearl Continental Lahore",
      description: "A 5-star luxury hotel in Lahore, offering world-class services and comfort.",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278504590.jpg?k=2d6676b5981e1fafc018b5d092375e37656a136a18b08e07acebf39a6b395ae1&o=&hp=1",
      price: 250,
      city: "Lahore",
      location: "Karachi, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 5,
      name: "Avari Hotel Lahore",
      description: "A premium hotel with a blend of traditional hospitality and modern amenities.",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277890052.jpg?k=0ccc7b840436119787f53bf98a8c0602eb04c484159688239632ae2d41fb6256&o=&hp=1",
      price: 190,
      city: "Lahore",
      location: "Lahore, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 6,
      name: "The Nishat Hotel Lahore",
      description: "A luxury boutique hotel in Lahore offering a mix of elegance and comfort.",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/ed/cb/ac/hotel-one-gulberg.jpg",
      price: 280,
      city: "Lahore",
      location: "Lahore, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 7,
      name: "Islamabad Serena Hotel",
      description: "A 5-star hotel surrounded by lush gardens, offering a tranquil experience in Islamabad.",
      img: "https://image-tc.galaxy.tf/wijpeg-er2leq29chdfxfqmop0v2o6st/exterior-view-islamabad-serena-hotel.jpg",
      price: 350,
      city: "Islamabad",
      location: "Islamabad, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 8,
      name: "Marriott Hotel Islamabad",
      description: "A luxury hotel with breathtaking views and exceptional hospitality in the capital city.",
      img: "https://i.brecorder.com/primary/2022/07/62d621bddbd0f.jpg",
      price: 300,
      city: "Islamabad",
      location: "Islamabad, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 9,
      name: "Centaurus Hotel Suites",
      description: "A premium hotel inside the famous Centaurus Mall, offering luxury stays in Islamabad.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/First_Mega_Mall_of_Islamabad_-_Centaurus.JPG/1200px-First_Mega_Mall_of_Islamabad_-_Centaurus.JPG",
      price: 270,
      city: "Islamabad",
      location: "Islamabad, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 10,
      name: "Pearl Continental Peshawar",
      description: "The best hotel in Peshawar offering a mix of traditional charm and modern luxury.",
      img: "https://pix10.agoda.net/hotelImages/569/569434/569434_16061317110043499310.jpg?ca=6&ce=1&s=414x232",
      price: 220,
      city: "Peshawar",
      location: "Peshawar, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 11,
      name: "Shelton's Rezidor Peshawar",
      description: "A comfortable and modern hotel with top-notch services in Peshawar.",
      img: "https://images.trvl-media.com/lodging/28000000/27120000/27114800/27114769/7ee5ec3b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      price: 170,
      city: "Peshawar",
      location: "Peshawar, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 12,
      name: "Fort Continental Hotel Peshawar",
      description: "A stylish hotel with modern amenities and great accessibility in Peshawar.",
      img: "https://flypakistan.pk/hotels/imgs/Peshawar/Fort%20Continental%20Hotel/fort-continental-hotel-img12-fort13.jpg",
      price: 150,
      city: "Peshawar",
      location: "Peshawar, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.7,
    },
    {
      id: 13,
      name: "Grand Palace Hotel",
      description: "A luxurious 5-star hotel in Karachi, known for its exceptional service and modern amenities.",
      img: "https://images.trvl-media.com/lodging/2000000/1110000/1102000/1101942/b2b0dad6.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      price: 250,
      city: "Karachi",
      location: "Karachi, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 250 },
        { type: "Suite", price: 400 },
      ],
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant"],
      rating: 4.6,
    },
    {
      id: 14,
      name: "Seaside Resort",
      description: "A premium beachfront resort in Lahore, offering scenic ocean views and relaxation.",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390822683.jpg?k=48c1a8b31712953b008f37a26a358dcb4ad76d7b8fa7668c7fe6b3f63880bdee&o=&hp=1",
      price: 320,
      city: "Lahore",
      location: "Lahore, Pakistan",
      roomTypes: [
        { type: "Deluxe Room", price: 320 },
        { type: "Suite", price: 450 },
      ],
      amenities: ["WiFi", "Pool", "Beach Access", "Spa", "Restaurant"],
      rating: 4.8,
    },
    {
      id: 15,
      name: "Mountain Retreat",
      description: "A peaceful escape in Islamabad, surrounded by lush greenery and mountains.",
      img: "https://onekindesign.com/wp-content/uploads/2016/11/Contemporary-Mountain-Retreat-Berglund-Architects-01-1-Kindesign.jpg",
      price: 180,
      city: "Islamabad",
      location: "Islamabad, Pakistan",
      roomTypes: [
        { type: "Standard Room", price: 180 },
        { type: "Luxury Cabin", price: 300 },
      ],
      amenities: ["WiFi", "Nature Walks", "Fireplace", "Restaurant"],
      rating: 4.5,
    },
    {
      id: 16,
      name: "Urban Stay",
      description: "A modern boutique hotel in the heart of Peshawar, offering city-life convenience and comfort.",
      img: "https://pix10.agoda.net/hotelImages/22732909/-1/d887c6037721ebdac48efbccd2ccf8a9.jpg?ce=0&s=414x232&ar=16x9",
      price: 200,
      city: "Peshawar",
      location: "Peshawar, Pakistan",
      roomTypes: [
        { type: "Standard Room", price: 200 },
        { type: "Executive Suite", price: 350 },
      ],
      amenities: ["WiFi", "Gym", "Restaurant", "Business Center"],
      rating: 4.4,
    },
  ];

  const filteredHotels = hotels.filter(
    (hotel) =>
      (city === "All" || hotel.city === city) &&
      hotel.name.toLowerCase().includes(query.toLowerCase())
  );
  const sortedhotels = filteredHotels.sort((a, b) => (sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price));
  return (
    <div className="text-white">
      <h1 className="text-3xl font-sans font-bold text-center mt-7">Check the best Hotels</h1>
      <div className="flex justify-center mt-4">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
       className="border border-gray-400 rounded-lg p-2 text-white bg-black cursor-pointer"
      >
         <option className="text-white bg-black" value="All">All Cities</option>
        <option   className="text-white bg-black" value="Karachi">Karachi</option>
        <option   className="text-white bg-black"  value="Lahore">Lahore</option>
        <option    className="text-white bg-black" value="Islamabad">Islamabad</option>
        <option   className="text-white bg-black" value="Peshawar">Peshawar</option>
      </select>
      </div>
    {/* Sorting Dropdown */}
    <div className=" hidden sm:flex justify-end  mr-10 ">
    <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 text-white cursor-pointer "
        >
          <option value="lowToHigh" className="text-black">Price: Low to High</option>
          <option value="highToLow" className="text-black">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8 mt-5">
        {filteredHotels.map((hotel) => (
        <Link href={`/hoteldetails?id=${hotel.id}`} key={hotel.id} className="block">
        <div className="bg-[#2a2e35] text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
          <img src={hotel.img} className="w-full h-44 object-cover rounded-lg" alt={hotel.name} />
          <h3 className="text-2xl font-bold mt-4 text-center text-gray-200">{hotel.name}</h3>
          <p className="text-gray-400 mt-2 text-center">{hotel.description}</p>
          <p className="text-lg font-semibold text-center mt-3">${hotel.price}</p>
          <Link href="/booking">
          <button className="mt-4 px-6 py-2 ml-20 bg-green-600 text-white rounded-lg hover:bg-black">Book Now</button>
          </Link>
        </div>
      </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
