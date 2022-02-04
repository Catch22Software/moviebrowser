
const DNE = () => {

    const imagePath = "https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    return (
        <>
            <div className="container position-relative">
                <h1 className="border-2 bg-danger d-inline-block p-3">THIS PAGE DOES NOT EXIST!!</h1>
                <img src={imagePath} alt="..."/>
            </div>
        </>
    )
}

export default DNE