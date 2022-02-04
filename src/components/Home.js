import Hero from "./Hero";


const Home = () => {
    return (
        <>
        <Hero text="Welcome to Movie Viewer Alpha!!!"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Type in any movie title to search through the database. Click on details to view more info
                            with each movie. Poster pictures will show along with movie details. If no picture exists
                            within the database, a filler image will be shown with "Films" in the image.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;