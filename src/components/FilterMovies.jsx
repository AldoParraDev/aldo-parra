// import { PiMagnifyingGlassLight } from "react-icons/pi";

import { PiXCircleLight } from "react-icons/pi";

export default function FilterMovies({
   openFilters,
   handleOpenFilters,
   listGenres,
   movieName,
   movieDescription,
   movieGenre,
   handleMovieName,
   handleMovieDescription,
   handleMovieGenre,
}) {
   return (
      <section className={`filter-movies ${openFilters && "open"}`}>
         <button className="filter-movies__close" onClick={() => handleOpenFilters(false)}>
            <PiXCircleLight />
         </button>
         <h2 className="filter-movies__title">Filters</h2>
         <div className="filter-movies__genres">
            <h3 className="filter-movies__title-genres">By name:</h3>
            <div className="ctn-input-search">
               <input
                  type="text"
                  placeholder="Search by name..."
                  className="input-search"
                  value={movieName}
                  onChange={(e) => handleMovieName(e.target.value)}
               />
            </div>
         </div>
         <div className="filter-movies__genres">
            <h3 className="filter-movies__title-genres">By genre:</h3>
            <ul className="filter-movies__list-genres">
               {listGenres.map((genre) => (
                  <li key={genre.id} className="filter-movies__list-genres__item">
                     <label htmlFor={genre.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                           type="checkbox"
                           id={genre.id}
                           value={genre.id}
                           checked={movieGenre.includes(genre.id)}
                           onChange={(e) => handleMovieGenre(genre, e.target.checked)}
                        />
                        {genre.name}
                     </label>
                  </li>
               ))}
            </ul>
         </div>
         <div className="filter-movies__genres">
            <h3 className="filter-movies__title-genres">By description:</h3>
            <div className="ctn-input-search">
               <textarea
                  type="text"
                  placeholder="Search by description..."
                  className="textarea-search"
                  value={movieDescription}
                  onChange={(e) => handleMovieDescription(e.target.value)}
               />
            </div>
         </div>
      </section>
   );
}
