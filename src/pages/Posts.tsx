import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Asegúrate de importar useParams
import { Title } from "../components/Title";

export const Posts = () => {
  const { hotelId } = useParams(); // Recupera el hotelId de los parámetros de la URL
  const [hotel, setHotel] = useState(null); // Cambia setHotel para que sea un estado

  useEffect(() => {
    fetch(`https://api-tests.workingpos.com/api/go-traveling/hotels`)
      .then((response) => response.json())
      .then((data) => setHotel(data.data)); // Actualiza el estado con los detalles del hotel
  }, [hotelId]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title texto="Detalles del hotel" />
      <div className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
     
       
        <img
          src={hotel.image}
          alt={hotel.from + " to " + hotel.to}
          className="object-cover object-center w-full h-56"
        />
        
        <div className="py-4">
          <h3 className="flex justify-between mb-1 text-xs tracking-widest text-gray-500 title-font">
            {hotel.from} to {hotel.to}
            <span>Precio: ${hotel.price}</span>
          </h3>
          <p className="text-sm text-gray-400">Fecha: {hotel.date}</p>
          <p className="text-sm text-gray-400">Duración: {hotel.duration}</p>
          <p className="text-sm text-gray-400">Creado en: {hotel.created_at}</p>
          <p className="text-sm text-gray-400">Actualizado en: {hotel.updated_at}</p>
        </div>
      </div>
    </div>
  );
};
