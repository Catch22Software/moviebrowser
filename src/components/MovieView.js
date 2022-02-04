import Hero from "./Hero";
import {useParams} from 'react-router-dom'
import {useState} from "react";
import {useEffect} from "react";


const MovieView = () => {

    const { id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(id !== ""){
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bcd32a4f46a201d92be47d9d1f50ddb7`)
                .then(response => response.json())
                .then(data => {
                    setMovieDetails(data)
                    setIsLoading(false)
                }).catch()
        }
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="is Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            const altImgUrl = "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"

            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} onError={({currentTarget}) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = altImgUrl;
                                }} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
};

export default MovieView
