import { Title } from "../components/Title"

export const Posts = () => {
    let hotels = [
        {
            from: "Erlingview",
            to: "Runolfsdottirton",
            price: "1046",
            image: "https://via.placeholder.com/640x480.png/005511?text=vel",
            date: "1988-07-27",
            duration: "09:15:02",
            created_at: "2023-08-11T18:18:48.000000Z",
            updated_at: "2023-08-11T18:18:48.000000Z",
        
        },
    ]

    return (
        <div>
            <Title texto="Busca un hotel cerca de ti" />
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                {hotels.map((hotel, index) => (
                    <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
                        <img src={hotel.image} alt={hotel.from + ' to ' + hotel.to} className="object-cover object-center w-full h-56" />
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
                ))}
            </div>
        </div>
    )
}
