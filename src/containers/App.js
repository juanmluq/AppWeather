import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import { Route, Switch } from 'react-router-dom';
// import apiKey from "./.env"
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
// const {
//   apiKey,
// } = process.env;

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {// con esta funcion busco la ciudad para mostrarla en pantalla
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json()) //cuando tengo la respuesta de la api devuelvo un json
      .then((recurso) => { //despues tengo otra funcion que me dice si respuesta.main es distinta de undefined creo un 
        //objeto ciudad con info del clima 
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]); //funcion que le paso oldCities y creo un arreglo con las oldcities y pusheo ciudad
        } else {
          alert("Ciudad no encontrada");// si la respuesta.main es undefined mando el alerta
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));// cities es un arreglo y con .filter hago que se filtren
    //las ciudades por id
    //paseInt se asegura que la ciudadId que recibe sea un entero
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
    // otra forma de hacer esta funcion es: return cities.find((c => c.id === parseInt(ciudadId))
  }

  return (
    <div className="app">
      <Nav onSearch={onSearch}/>

      <Switch >
      <Route exact path="/"> 
        <Cards
          cities={cities}
          onClose={onClose}
        />
        </Route>

      <Route path="/about"><About/></Route>  {/* llamo about desde aca. si lo hago desde el nav 
      me aparece lo que tengo en about en la pantalla principal  */}
      <Route path="/ciudad/:id" render={({match})=>
       <Ciudad city={onFilter(match.params.id)} /> } /> {/* El render nos sirve para poder
       pasar props (en este caso la props match) a nuestro componente. si no lo hago de esta forma 
       no tengo como decirle que me traiga el id. 
         le digo que haga el render
        y le paso el match que es lo que tiene mi props(las props
         tienen: history, match, location). haciendo match.params estoy diciendo que busque 
         un parametro en particular.. en este caso id por eso pongo match.params.id.
         Dato: le paso el match entre {} porque
          hago destructuring.. sino deberia escribir render={(props.match) => <ciudad
          city={onfilter(props.match.params.id)}/>} 
          despues la funcion dice que pasandole match.params.id retorno null o el valor de la ciudad
         city */}
      </Switch>
    </div>
  );
}

export default App;
//exporto App para que lo tome index.js 
