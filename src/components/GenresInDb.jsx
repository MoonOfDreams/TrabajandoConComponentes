import PropTypes from "prop-types";

function GenresInDb(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{props.title}</div>
      </div>
    </div>
  );
}

GenresInDb.propTypes = {
    title: PropTypes.string.isRequired,
  };

GenresInDb.defaultProps = {
    title: "Acción"
}

export default GenresInDb;
