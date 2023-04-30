import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import StarLogo from '../Gold_Star.svg';
import { Grid } from "@mui/material";
import PopcornLogo from '../popcorn.svg'

export function NewReleases() {
    const [movies, setMovies] = useState([]);
	const baseUrl = 'https://image.tmdb.org/t/p/w342';
	const getMovieRequest = async () => {
       const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=af9017758dcec6ae8a1cbe12c71e9ddf&language=en-US&page=1`;

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
        <div>
            <div style={{justifyContent:'center',display:'flex', padding:'20px'}}>
			<h2>New Releases</h2>
			<img src={PopcornLogo} style={{height: '40px', width: '40px'}} alt="fire icon"></img>
			</div>
      <Carousel>
        {movies.map(movie => (
          <Carousel.Item key={movie.title}>
            <img
              className="testimonialImages w-50"
              src={baseUrl + movie.backdrop_path}
              alt={baseUrl + movie.backdrop_path}
              style={{justifyContent:'center', height: '290px'}}
            />
            <Grid container spacing={2} style={{justifyContent:'center', padding: '35px', }}>
            <div style={{display: 'flex', width: '600px', justifyContent: 'center'}}>
                <img src={baseUrl + movie.poster_path} alt={movie.poster_path} 
                //className="w-50"
                style={{height: '300px', width: '200px'}}></img><br/>
                <div style={{display:'flex', flexDirection: 'column', padding: '15px'}} 
                //className="w-45"
                >
                    <h6 style={{textAlign: 'left'}}>{movie.title}</h6>
                    <div style={{display:'flex', justifyContent:'left'}}><text style={{fontSize:'small'}}>{movie.vote_average}</text><img src={StarLogo} style={{height: '20px', width: '20px'}} alt="fire icon"></img></div>
                    <p style={{fontSize:'small', textAlign: 'left'}}>{movie.overview}</p>
                </div>
            </div>
            </Grid>
            {/* <Carousel.Caption>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
          );
};