"use client";

import React, { useState } from "react";
import Image from "next/image";
import background from "../../../public/images/background_badrinath.jpeg";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <section className="relative h-[80vh] md:min-h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Luxury Hotel"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6 w-full max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-mono font-bold mb-4">
          Hotel New Urvashi
        </h1>
        <p className="text-md md:text-xl mb-6 tracking-wider">
          Experience luxury and comfort at unbeatable prices.
        </p>

        {/* Booking Inputs */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-center shadow-lg w-full">
          {/* Check-in Input */}
          <div className="relative w-full sm:w-auto">
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full sm:w-auto border text-gray-500 px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoveraccent appearance-none min-w-[160px]"
            />
            <label
              className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${
                checkIn ? "text-xs top-2" : "text-base"
              }`}
            >
              Check-in
            </label>
          </div>

          {/* Check-out Input */}
          <div className="relative w-full sm:w-auto">
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full sm:w-auto border text-gray-500 px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoveraccent appearance-none min-w-[160px]"
            />
            <label
              className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all ${
                checkOut ? "text-xs top-2" : "text-base"
              }`}
            >
              Check-out
            </label>
          </div>

          {/* Guests Input */}
          <div className="relative w-full sm:w-auto">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              min="1"
              placeholder="Guests"
              className="w-full sm:w-auto border text-secondary placeholder-gray-500 px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoveraccent appearance-none min-w-[120px]"
            />
          </div>

          {/* Book Now Button */}
          <button className="bg-secondary text-white px-10 py-3 rounded-lg hover:bg-hoveraccent transition w-full sm:w-auto">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
