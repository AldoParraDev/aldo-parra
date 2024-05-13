# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Node Version

v20.11.0

# About Project

El proyecto es una prueba tecnica de un sitio web de peliculas, el cual cuenta con un filtrado por nombre, generos y descripcion de la pelicula.

La lista de peliculas se obtuvo desde una API externa gratuita, el cual nos provee una lista de peliculas con su nombre, descripcion, genero, fecha de lanzamiento y una imagen de portada. El servicio fue de The Movie DB (https://developer.themoviedb.org/docs/getting-started).

La url para el listado de peliculas es https://api.themoviedb.org/3/movie/popular
LA url para el listado de generos es https://api.themoviedb.org/3/genre/movie/list
