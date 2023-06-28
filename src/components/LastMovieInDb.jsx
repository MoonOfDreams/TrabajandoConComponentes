import PropTypes from "prop-types";
import imagenFondo from "../assets/images/mandalorian.jpg";

function LastMovieInDb(props) {
  return (
    <div className="card-body">
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: 40 + "rem" }}
          src={props.image}
          alt={props.title}
        />
      </div>
      <p>{props.description}</p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
        View movie detail
      </a>
    </div>
  );
}

LastMovieInDb.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

LastMovieInDb.defaultProps = {
  title: " Star Wars - Mandalorian ",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,consequatur explicabo officia inventore libero veritatis iurevoluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatumnon corporis ratione aperiam voluptatum quae dolorem culpa rationeaperiam voluptatum?",
  image: imagenFondo,
};

export default LastMovieInDb;
