function MovieListItem(props) {
    return (
      <tr>
        <td>{props.title}</td>
        <td>{props.duration}</td>
        <td>{props.rating}</td>
        <td>{props.genre}</td> 
        <td>{props.awards}</td>
      </tr>
    );
  }
  MovieListItem.defaultProps = {
      title: "Star Wars",
      duration: 12,
      rating: 5,
      genre: "Ciencia Ficcion",
      awards: 2
  }
  export default MovieListItem;
  