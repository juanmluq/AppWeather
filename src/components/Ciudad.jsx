import React from "react";
import "./ciudad.css"

export default function Ciudad({city}) {
    return (
        <div className="centrado">
        <span className="city">
                     <h2>{city.name}</h2>
                         <div>Temperatura: {city.temp} ºC</div>
                         <div>Clima: {city.weather}</div>
                         <div>Viento: {city.wind} km/h</div>
                         <div>Cantidad de nubes: {city.clouds}</div>
                         <div>Latitud: {city.latitud}º</div>
                         <div>Longitud: {city.longitud}º</div>
        </span>
        </div> 
    )
}