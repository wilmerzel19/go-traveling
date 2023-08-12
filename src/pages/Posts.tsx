import { Title } from "../components/Title";
import { useEffect, useState } from 'react';

export const Posts = () => {
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null); // Agregar estado para el hotel seleccionado

    useEffect(() => {
        fetch('https://api-tests.workingpos.com/api/go-traveling/hotels')
            .then((response) => response.json())
            .then((data) => setHotels(data.data));
    }, []);

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel); // Al hacer clic en un hotel, actualiza el hotel seleccionado
    };

    return (
        <div>
         
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        onClick={() => handleHotelClick(hotel)} // Agrega el manejador de clics
                        className={`overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer ${
                            selectedHotel === hotel ? 'border-2 border-blue-500' : ''
                        }`}
                    >
                        {/* Resto del contenido del hotel */}
                    </div>
                ))}
            </div>
            {selectedHotel && ( // Mostrar detalles del hotel seleccionado si existe
                <div className="mt-4 bg-white rounded-lg shadow-md">
                    {/* Renderizar detalles del hotel seleccionado */}
                </div>
            )}
        </div>
    );
};
