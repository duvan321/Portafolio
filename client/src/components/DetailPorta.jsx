import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [porTDetails, setporTDetails] = useState({});

  useEffect(() => {
    axios(`/portafolio/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setporTDetails(data);
        } else {
          window.alert("No se encontraron datos para ese ID");
        }
      })
      .catch((error) => {
        console.error("Error al cargar detalles:", error);
        window.alert("Ocurrió un error al cargar los detalles.");
      });
  }, [id]);

  return (
    <div className="p-8">
      <div className=" rounded-lg shadow-lg p-4">
        <img
          src={porTDetails.image?.imagen}
          alt={porTDetails.name}
          className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300"
        />
        <div className="text-2xl  font-bold mb-2">{porTDetails.name}</div>
        <p className="">{porTDetails.descripcion}</p>
      </div>
    </div>
  );
};

export default Detail;
