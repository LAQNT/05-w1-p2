import MyBookCard from "./MyBookcard";



function MyLatestRelease() {
    return(
        <>
            <div className="container books-container mt-5" >
                <h3>Lates Releases</h3>
                <div className="row " >
                    <MyBookCard/>
                    <MyBookCard/>
                    <MyBookCard/>
                    <MyBookCard/>
                </div>
            </div>
        </>
    )
}

export default MyLatestRelease;