import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import datas from "../../public/db.json";
const Detail = () => {
  const { id } = useParams();
  const [porTDetails, setporTDetails] = useState({});

  useEffect(() => {
    // Busca el proyecto con el ID correspondiente en el array de proyectos
    const data = datas.portafolio.find((item) => item.id === parseInt(id));
    if (data) {
      setporTDetails(data);
    } else {
      window.alert("No se encontraron datos para ese ID");
    }
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
