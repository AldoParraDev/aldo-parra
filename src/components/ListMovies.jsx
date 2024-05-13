import CardMovies from "./CardMovies";

export default function ListMovies({ listMovies }) {
   return (
      <section className="list-movies">
         {listMovies?.map((movie) => (
            <CardMovies key={movie.id} movie={movie} />
         ))}
      </section>
   );
}
