import React, { useEffect, useState } from "react";

function FetchContainer() {
  //Declaramos los estados
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    //Pido datos con el get
    setLoader(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json()) //Lo traducimos
      .then((data) => {
        setError(false); //Apagamos el error
          //setLoader(false)
          console.log(data)
        setPersonajes(data.results);
      })
      .catch((err) => {
        //Atrapamos el error
        setError(true);
        console.log("Hubo un error al traer los personajes", err);
      })
      .finally(() => {
        //Apagamos el loader independientemente si cae en el then o el catch
        setLoader(false);
      });
  }, []);

  //Return anticipado
  if (error) return <p>Cargando...</p>;

  return (
    <>
      {error && <p>Disculpe las molestias, intente más tarde</p>}
      {personajes.map((personaje) => {
        return <p key={personaje.id}>{personaje.name}</p>;
      })}
    </>
  );
}

export default FetchContainer;
