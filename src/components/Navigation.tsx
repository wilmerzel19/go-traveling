import { ItemNavigation } from "./ItemNavigation"
import { MdAirplanemodeActive, MdInfoOutline, MdOutlineRestaurant } from "react-icons/md";
import { FaBed, FaBusAlt } from "react-icons/fa";
export const Navigation = () => {


    const links = [
        { url: '/', label: 'Hoteles', icon: FaBed },
        { url: '/flights', label: 'Vuelos',  icon: MdAirplanemodeActive  },
        { url: '/transports', label: 'Transporte',  icon: FaBusAlt  },
        { url: '/foods', label: 'Comidas',  icon: MdOutlineRestaurant  },
        { url: '/posts', label: 'informacion',  icon: MdInfoOutline}

    ]
  return (
   
        <nav className="flex px-3 mt-4 sm:px-2">
            <ul className="grid gap-x-4 lg:gap-x-10 grid-cols-5 w-full justify-between text-center">
            {links.map(({ url, label, icon }) => (
                <ItemNavigation key={url} url={url} label={label} icon={icon} />
            ))
            }
            </ul>
        </nav>

  )
}