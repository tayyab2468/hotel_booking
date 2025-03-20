"use client";
import { useState, useEffect } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    nights: 1,
    checkIn: "",
    checkOut: "",
    paymentMethod: "",
    termsAccepted: false,
  });

  const [alert, setAlert] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Pricing per night for different room types
  const roomPrices = {
    Standard: 100,
    Deluxe: 150,
    Suite: 200,
  };

  // Calculate total price dynamically
 useEffect(() => {
  if (formData.roomType) {
    setTotalPrice((roomPrices[formData.roomType] || 0) * formData.nights);
  }
}, [formData.roomType, formData.nights, roomPrices]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.roomType || !formData.checkIn || !formData.checkOut || !formData.paymentMethod || !formData.termsAccepted) {
      setAlert({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setAlert({ type: "success", message: "🎉 Booking Confirmed Successfully!" });
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => setAlert(null), 5000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      roomType: "",
      nights: 1,
      checkIn: "",
      checkOut: "",
      paymentMethod: "",
      termsAccepted: false,
    });
    setTotalPrice(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="container max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Stay 🏨</h2>

        {alert && (
          <div className={`mb-4 p-3 text-white rounded ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {alert.message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-black">Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded text-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold  text-black">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Phone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Room Type *</label>
            <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-2 border rounded text-black">
              <option value="">Select Room</option>
              <option value="Standard">Standard - $100/night</option>
              <option value="Deluxe">Deluxe - $150/night</option>
              <option value="Suite">Suite - $200/night</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">Nights *</label>
              <input type="number" name="nights" value={formData.nights} onChange={handleChange} min="1" className="w-full p-2 border rounded text-black" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Total Price</label>
              <p className="p-2 border rounded bg-gray-200 text-black">{totalPrice ? `$${totalPrice}` : "--"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">Check-in Date *</label>
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Check-out Date *</label>
              <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Payment Method *</label>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full p-2 border rounded text-black">
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>


          <div className="flex items-center">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" />
            <label className="text-gray-700">I agree to the Terms & Conditions *</label>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
