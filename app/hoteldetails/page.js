"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
// Mock Hotel Data (Replace with API Call if Needed)
const hotels = [
  {
    id: 1,
    name: "Pearl Continental Karachi",
    description: "A luxurious 5-star hotel in the heart of Karachi, offering premium amenities and fine dining.",
    img: "https://pix10.agoda.net/hotelImages/569439/-1/f91da57aad28a4a3ccdf3631fb287743.jpg?ca=16&ce=1&s=414x232&ar=16x9",
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
    location: "Karachi, Pakistan",
    roomTypes: [
      { type: "Standard Room", price: 180 },
      { type: "Executive Suite", price: 300 },
    ],
    amenities: ["WiFi", "Gym", "Restaurant", "Conference Rooms"],
    rating: 4.5,
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

const HotelDetails = () => {
  const searchParams = useSearchParams(); // ✅ Correct way to get query params
  const hotelId = searchParams.get("id"); // Get hotel ID from URL

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    if (hotelId) {
      const foundHotel = hotels.find((h) => h.id === parseInt(hotelId));
      setHotel(foundHotel || null);
    }
  }, [hotelId]);

  if (!hotel) {
    return <div className="text-center text-2xl text-red-600">Hotel not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Full Width Image */}
    <div className="w-full h-[500px]">
      <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
    </div>

    {/* Content Section */}
    <div className="max-w-3xl mx-auto bg-white shadow-lg  p-6 mt-6">
      <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
      <p className="text-gray-600 mt-2">{hotel.description}</p>
      <p className="text-gray-500 mt-1">📍 Location: {hotel.location}</p>

      {/* Hotel Rating */}
      <p className="text-yellow-500 text-lg font-semibold mt-2">⭐ {hotel.rating} / 5</p>

      {/* Room Types & Prices */}
      <h2 className="text-xl font-semibold mt-4 text-black">Room Types & Prices</h2>
      <ul className="mt-2 space-y-2">
        {hotel.roomTypes.map((room, index) => (
          <li key={index} className="p-3 border rounded-md bg-gray-50 text-black">
            {room.type} - <span className="font-bold">${room.price} per night</span>
          </li>
        ))}
      </ul>

      {/* Amenities */}
      <h2 className="text-xl font-semibold mt-4 text-black">Amenities</h2>
      <ul className="mt-2 flex flex-wrap gap-2">
        {hotel.amenities.map((amenity, index) => (
          <li key={index} className="px-3 py-1 bg-gray-100 rounded-full text-black">{amenity}</li>
        ))}
      </ul>

      {/* Confirm Booking Button */}
      <Link href="/booking">
      <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-black ">
        Confirm Booking
      </button>
      </Link>
    </div>
  </div>
);
};

export default HotelDetails;