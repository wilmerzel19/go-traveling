import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Asegúrate de importar useParams
import { Title } from "../components/Title";

type Hotel = {
  id: number;
  name: string;
  description: string;
  starring: number;
  address: string;

  price: number;

  image: string;
};

export const Posts = () => {
  const [hotel, setHotel] = useState<Hotel>(); // Crea un estado para almacenar los detalles del hotel

  const id = useParams(); // Recupera el hotelId de los parámetros de la URL

  console.log(id);

  useEffect(() => {
    fetch(`https://api-tests.workingpos.com/api/go-traveling/hotels/${id.id}`) // Hace una petición GET a la API
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHotel(data.data); // Actualiza el estado con los datos de la API
      }); // Actualiza el estado con los datos de la API
  }, []);
  console.log(hotel);

  return (
    <div>
      <Title texto="Detalles del hotel" />
      <div className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
        {hotel && (
          <div
            key={hotel.id}
            className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer"
          >
            <img
              src={hotel.image}
              alt="hotel"
              className="object-cover object-center w-full h-56"
            />

            <div className="py-4">
              <h3 className="flex justify-between mb-1 text-xs tracking-widest text-gray-500 title-font">
                {hotel.name}
                <span>Precio: ${hotel.price}</span>
              </h3>
              <p className="text-sm text-gray-400">
                Descripcion: {hotel.description}
              </p>
              <p className="text-sm text-gray-400">
                Estrellas: {hotel.starring}
              </p>
              <p className="text-sm text-gray-400">address: {hotel.address}</p>
            </div>

            <button className="px-4 py-2 w-full text-sm text-white bg-blue-500 rounded-b-md hover:bg-blue-600">
              Reservar  
            </button>
          </div>
        )}
      </div>


    </div>
  );
};
