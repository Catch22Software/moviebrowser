import Hero from "./Hero";


// TMBD API KEY = bcd32a4f46a201d92be47d9d1f50ddb7

// Example link = https://api.themoviedb.org/3/search/movie?api_key=bcd32a4f46a201d92be47d9d1f50ddb7&
// language=en-US&query=star%20wars&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/550?api_key=bcd32a4f46a201d92be47d9d1f50ddb7

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    return (
        <>
            <Hero text={title}/>
        </>
    )
}

export default SearchView;