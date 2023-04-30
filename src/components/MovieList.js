import React from 'react';
//import { Col, Container, Row } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import StarLogo from '../Gold_Star.svg';

const MovieList = (props) => {
	console.log(props.movies);
	const baseUrl = 'https://image.tmdb.org/t/p/w342';
	return (
		// <div>
		// 	{props.movies.map((movie, index) => (
		// 		<div key={index} className='image-container -flex justify-content-start m-3'>
		// 			<img src={baseUrl + movie.poster_path} alt={movie.poster_path}></img>
		// 		</div>
		// 	))}
		// </div>

	//    <Container>
    //     <Row xs={3} sm={3} md={3} lg={3} xl={3}>
    //       <Col>
    //         {props.movies.map((movie, i) => (
    //           <img key = {i} src={baseUrl + movie.poster_path} alt={movie.poster_path}></img>
    //         ))}
    //       </Col>
    //     </Row>
    //   </Container>
	<Grid container spacing={2}>
		{props.movies.map((movie, i) => {
			return (
				<Grid key = {i} item xs={12} sm={3}>
				<img key = {i} src={baseUrl + movie.poster_path} alt={movie.poster_path}></img><br/>
				{movie.vote_average}<img src={StarLogo} style={{height: '20px', width: '20px'}} alt="fire icon"></img><br/>
				{movie.title}
				</Grid>
			);
			})}
		</Grid>
	);
};

export default MovieList;