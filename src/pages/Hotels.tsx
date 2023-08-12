import { Link } from "react-router-dom";
import { Title } from "../components/Title";
import { useEffect, useState } from "react";

export const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://api-tests.workingpos.com/api/go-traveling/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data.data));
  }, []);

  return (
    <div>
      <Link to="/posts">
        <Title texto="Busca un hotel cerca de ti" />
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="object-cover object-center w-full h-56"
              />
              <div className="py-4">
                <h3 className="flex justify-between mb-1 text-xs tracking-widest text-gray-500 title-font">
                  {hotel.name}
                  <span>{hotel.starring} estrellas</span>
                </h3>
                <p className="mt-1">${hotel.price}</p>
                <div className="flex items-center">
                  <span className="flex items-center py-1 pr-3 text-sm leading-none text-gray-400"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};
