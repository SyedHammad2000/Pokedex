import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokedex = () => {
  const [data, setdata] = useState([]);

  const color = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
  };

  useEffect(() => {
    const fetchApi = async (id) => {
      // pokemon api
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      console.log(res.data);
      setdata(res.data.results);
    };

    fetchApi();
  }, []);

  return (
    <>
      <h1 className=" font-semibold text-center">Pokedex</h1>
      <div className="Poke-container flex flex-wrap justify-center my-auto max-w-7xl">
        {data.map((item, idx) => {
          return (
            <div
              key={item.id}
              className="pokemon bg-neutral-300 rounded-sm text-center shadow-md mt-2  mr-5"
            >
              <div className="img-container bg-orange-200 rounded-md h-32 w-32">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    idx +1
                  }.png`}
                  alt="img"
                  className="w-4/5 mt-10"
                />
              </div>
              <div className="info mt-5">
                <span className="number px-2 rounded-md bg-gray-400">
                  {
                    item.url.split("/")[item.url.split("/").length - 2]
                  }
                </span>
                <h3 className="name">{item.name}</h3>
                <small className="type">{
                  item.url.split("/")[item.url.split("/").length - 2]
                }</small>
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  );
};

export default Pokedex;
