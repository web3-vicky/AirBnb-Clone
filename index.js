function Card(props) {
    return(
    <div className="Card">
        <img src={props.img} alt="Katie Zaferes" className="card-katie" />
        <div className="card-stats">
            <img src="./star.png" className="card-star" /> 
            <span>{props.rating} </span>
            <span className="gray">({props.upvotes}) ▪️ </span>
            <span className="gray"> {props.country}</span>
        </div>  
        <p>{props.subject}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
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
            <Card 
            img="./katie-zaferes.png"
            rating="5.0"
            upvotes={6}
            country="USA"
            subject="Life Lessons with Katie Zaferes"
            price={136}
            />
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"))
