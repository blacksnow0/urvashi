import React from "react";
import Image from "next/image";
import { FaWifi, FaUtensils, FaBed, FaBus } from "react-icons/fa";
import double from "../../public/images/rooms/double-bed.jpeg";
import triple from "../../public/images/rooms/triple-bed.jpeg";
import four from "../../public/images/rooms/four-bed.jpeg";
import double_dlx from "../../public/images/rooms/double-bed-dlx.jpeg";
import background from "../../public/images/background_rooms.jpeg"; // Background Image

const rooms = [
  { name: "Double Bed", price: "5000", image: double },
  { name: "Four Bed", price: "8000", image: four },
  { name: "Double Bed Dlx.", price: "6000", image: double_dlx },
  { name: "Triple Bed", price: "7000", image: triple },
];

const RoomCard = () => {
  return (
    <section
      id="room-cards"
      className="relative lg:min-h-screen py-12 px-4 md:px-12  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-mono font-bold text-center mb-8 text-white">
          Discover Our Exclusive Rooms
        </h2>

        {/* Horizontal Scroll Wrapper */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide px-2 md:grid md:grid-cols-2 md:space-x-0 md:gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="flex min-w-full md:min-w-0 snap-center shadow-lg overflow-hidden bg-white hover:scale-[1.02] transition-all "
            >
              {/* Image Section */}
              <div className="relative w-1/2 h-[250px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 w-full font-serif text-white text-sm bg-black px-3 py-4">
                  ₹{room.price} / Night
                </div>
              </div>

              {/* Content Section */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-mono font-bold text-secondary">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Experience luxury & comfort with our premium rooms.
                </p>

                {/* Icons */}
                <div className="flex gap-4 text-secondary mt-4 text-lg">
                  <FaBed />
                  <FaWifi />
                  <FaBus />
                  <FaUtensils />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCard;
