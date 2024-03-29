import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import MovieList from './MovieList';
function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">
					{["success", "primary", "warning"].map(e => (<ContentRowMovies key={"contentrow" + e} color={e} />))}

				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">
									Last movie in Data Base
								</h5>
							</div>
							<LastMovieInDb />
						</div>
					</div>
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
							</div>
							<div className="card-body">
								<div className="row">
									{["Accion", "Aventura"].map(e => (<GenresInDb key={"genrecard" + e} title={e} />))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<MovieList/>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;