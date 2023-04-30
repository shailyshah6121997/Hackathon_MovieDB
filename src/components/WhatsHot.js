import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import FireLogo from '../fire.svg';

export function WhatsHot() {
    const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=af9017758dcec6ae8a1cbe12c71e9ddf&language=en-US&page=1`;

		const response1 = await fetch(url);
		const res = await response1.json();
		console.log(res.results);

		if (res.results) {
			setMovies(res.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
			<div style={{justifyContent:'center',display:'flex', padding:'20px'}}>
			<h2>What's Hot</h2>
			<img src={FireLogo} style={{height: '40px', width: '40px'}} alt="fire icon"></img>
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div><br/>
		</div>
	);
};