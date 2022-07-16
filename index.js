function Card() {
    return(
    <div className="Card">
        <img src="./katie-zaferes.png" alt="Katie Zaferes" className="card-katie" />
        <div className="card-stats">
            <img src="./star.png" className="card-star" /> 
            <span>5.0</span>
            <span className="gray">(6) ▪️ </span>
            <span className="gray"> USA</span>
        </div>  
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
    )
}

function Hero() {
    return(
        <section>
            <img src="./photo-grid.png" alt="photo-grid" className="photo-grid" />
            <h1 className="photo-title">Online Experiences</h1>
            <p className="photo-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

function NavBar() {
    return(
        <div className="NavBar">
            <img src="./Airbnb-logo.png" alt="AirBnb logo" className="logo"></img>
        </div>
    )
}

function App() {
    return(
        <div className="App">
            <NavBar />
            <Hero />
            <Card />
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"))
