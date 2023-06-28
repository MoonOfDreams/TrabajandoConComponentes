import MovieListItem from "./MovieListItem";

function MovieList(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Duración</th>
          <th scope="col">Rating</th>
          <th scope="col">Género</th>
          <th scope="col">Premios</th>
        </tr>
      </thead>
      <tbody>
        {["", "", ""].map((movie) => (
          <MovieListItem />
        ))}
      </tbody>
    </table>
  );
}
export default MovieList;
