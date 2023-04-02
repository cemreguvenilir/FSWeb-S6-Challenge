// Karakter bileşeniniz buraya gelecek

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import Filmler from "./Filmler";
import Accordeon from "./Accordeon";

function Karakter() {
  const [karakter, setKarakter] = useState([]);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const karakterPromise = axios("https://swapi.dev/api/people/");
    const filmsPromise = axios("https://swapi.dev/api/films/");
    Promise.all([karakterPromise, filmsPromise]).then((values) => {
      console.log(values);
      setKarakter(values[0].data);
      setFilms(values[1].data[0].results);
    });
  }, []);

  return (
    <div>
      {karakter.map((char, i) => {
        return (
          <Accordeon key={"c" + i} title={char.name}>
            <p>
              <span>Gender: </span>
              {char.gender}{" "}
            </p>
            <p>
              <span>Height: </span>
              {char.height}{" "}
            </p>
            <p>
              <span>Mass: </span>
              {char.mass}{" "}
            </p>
            <p>
              <span>Birth Year: </span>
              {char.birth_year}{" "}
            </p>
            <p>
              <span>Eye Color: </span>
              {char.eye_color}{" "}
            </p>
            <p>
              <span>Skin Color: </span>
              {char.skin_color}{" "}
            </p>
            <p>Appears in {char.films.length} movies</p>
            <Filmler char={char} i={i} films={films} />;
          </Accordeon>
        );
      })}
    </div>
  );
}

export default Karakter;
