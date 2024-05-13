import dayjs from "dayjs";

export default function CardMovies({ movie }) {
   return (
      <div className="card-movies">
         <figure className="card-movies__image">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
         </figure>
         <div className="card-movies__item">
            <h4 className="card-movies__title">
               <span className="card-movies__label">Title:</span> {movie.title}
            </h4>
         </div>
         <div className="card-movies__item items-start">
            <p className="card-movies__description">
               <span className="card-movies__label">Description:</span> {movie.overview.slice(0, 150)}...
            </p>
         </div>
         <div className="card-movies__item items-start">
            <p className="card-movies__genre">
               <span className="card-movies__label">Genre:</span> {movie.genres}
            </p>
         </div>
         <div className="card-movies__item items-start">
            <p className="card-movies__genre">
               <span className="card-movies__label">Release date:</span>{" "}
               {dayjs(movie.release_date).format("DD MMM YYYY")}
            </p>
         </div>
      </div>
   );
}
