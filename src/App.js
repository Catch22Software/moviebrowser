import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import Home from "./components/Home";
import MovieView from "./components/MovieView";
import DNE from "./components/DNE";


function App() {

    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if(searchText){
            fetch(` https://api.themoviedb.org/3/search/movie?api_key=bcd32a4f46a201d92be47d9d1f50ddb7&language=en-US&query=${searchText}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data.results)
                })
        }
    }, [searchText])

    return (
    <div>
        <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/about" component={AboutView}/>
            <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults}/>
            </Route>
            <Route path="/movies/:id" component={MovieView}/>
            <Route path="*" component={DNE}/>
        </Switch>
    </div>
    );
}

export default App;
