import Hero from "./Hero";
import {Link} from "react-router-dom";

// TMBD API KEY = bcd32a4f46a201d92be47d9d1f50ddb7

// Example link = https://api.themoviedb.org/3/search/movie?api_key=bcd32a4f46a201d92be47d9d1f50ddb7&
// language=en-US&query=star%20wars&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/550?api_key=bcd32a4f46a201d92be47d9d1f50ddb7

const MovieCard = ({movie}) => {


    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    const altImgUrl = "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-4">
            <div className="card">
                <img src={posterUrl} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = altImgUrl;
                }} className="card-img-top" alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })
    return (
        <>
            <Hero text={title}/>
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
            </div> }
        </>
    )
}

export default SearchView;