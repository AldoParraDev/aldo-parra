import { useEffect, useState } from "react";
import FilterMovies from "./FilterMovies";
import ListMovies from "./ListMovies";
import axios from "axios";

export default function Movies({ openFilters, handleOpenFilters }) {
   const [listGenres, setListGenres] = useState([]);
   const [listMovies, setListMovies] = useState([]);
   const [movieName, setMovieName] = useState("");
   const [movieDescription, setMovieDescription] = useState("");
   const [movieGenre, setMovieGenre] = useState([]);

   /* eslint-disable react-hooks/exhaustive-deps */

   // Funcion para guardar el valor de la busqueda por nombre
   const handleMovieName = (value) => {
      // Guardamos el valor de busqueda por nombre
      setMovieName(value);
   };
   // Funcion para guardar el valor de la busqueda por descripción
   const handleMovieDescription = (value) => {
      // Guardamos el valor de busqueda por descripcion
      setMovieDescription(value);
   };

   // Funcion para guardar el valor de los generos marcados en el filtro
   const handleMovieGenre = (genre, isChecked) => {
      if (isChecked) {
         // Si el checkbox está marcado, agregamos el género a la lista
         setMovieGenre([...movieGenre, genre.id]);
      } else {
         // Si el checkbox está desmarcado, eliminamos el género de la lista
         setMovieGenre(movieGenre.filter((item) => item !== genre.id));
      }
   };

   // Funcion para obtener los generos
   const getGenres = async () => {
      // Obtenemos los generos de la api para el filtro por genero
      axios
         .get("https://api.themoviedb.org/3/genre/movie/list", {
            params: {
               api_key: "2f95257bd9cc525c375889c8b3f0b96a",
            },
         })
         .then((response) => {
            console.log(response.data.genres);
            setListGenres(response.data.genres);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getMovies = async () => {
      // Obtenemos las peliculas del archivo JSON para el listado
      try {
         // const response = await axios.get("/src/service/movies.json");
         const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
               api_key: "2f95257bd9cc525c375889c8b3f0b96a",
               page: 1,
            },
         });
         let filteredMovies = response?.data?.results.map((movie) => {
            return {
               ...movie,
               genres: listGenres
                  .filter((genre) => movie.genre_ids.includes(genre.id))
                  .map((genre) => genre.name)
                  .join(", "),
            };
         });

         console.log(filteredMovies);
         if (movieName !== "") {
            filteredMovies = filteredMovies?.filter((movie) =>
               movie?.title?.toLowerCase().includes(movieName.toLowerCase())
            );
         }

         if (movieDescription !== "") {
            filteredMovies = filteredMovies?.filter((movie) =>
               movie?.overview?.toLowerCase().includes(movieDescription.toLowerCase())
            );
         }

         if (movieGenre.length > 0) {
            filteredMovies = filteredMovies.filter((movie) =>
               movieGenre.some((genre) => movie.genre_ids.includes(genre))
            );
         }

         setListMovies(filteredMovies);
      } catch (error) {
         console.log(error);
         setListMovies([]);
      }
   };

   useEffect(() => {
      getGenres();
      getMovies();
   }, []);

   useEffect(() => {
      const timer = setTimeout(() => {
         getMovies();
      }, 500); // Esperar 1000 milisegundos (1 segundo) antes de realizar la petición

      // Limpiar el temporizador en cada cambio de searchCompany
      return () => clearTimeout(timer);
   }, [movieName, movieDescription, movieGenre]);

   return (
      <section className="movies">
         <FilterMovies
            openFilters={openFilters}
            handleOpenFilters={handleOpenFilters}
            listGenres={listGenres}
            movieName={movieName}
            movieDescription={movieDescription}
            movieGenre={movieGenre}
            handleMovieName={handleMovieName}
            handleMovieDescription={handleMovieDescription}
            handleMovieGenre={handleMovieGenre}
         />
         <ListMovies listMovies={listMovies} />
      </section>
   );
}
