// import React, { useState } from "react";
// import "./SearchBar.css"

// export default function SearchBar({onSearch}) {
//   const [city, setCity] = useState("");
//   return (
//     <div className= "contenedor">
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch(city);
//     }}>
//       <input
//         type="text"
//         placeholder="Ciudad..."
//         value={city}
//         onChange={e => setCity(e.target.value)}
//       />
//       <input type="submit" className="btn" value="Buscar" />
//     </form>
//     </div>
//   );
// }


import React , { useState } from "react";
// import { BiSearchAlt } from "react-icons/bi"
import style from "./SearchBar.css"


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div>
    <form className="d-flex" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
      className="form-control me-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-primary"  value="Buscar">
        {/* <BiSearchAlt /> */}
        Buscar
      </button>
    </form>
    </div>
  );
}