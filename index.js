const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "./katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "./wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "./mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]




function Cards(props) {
    return(
    <div className="Cards">
        <img src={props.coverImg} className="card-img" />
        <div className="card-stats">
            <img src="./star.png" className="card-star" /> 
            <span>{props.stats.rating} </span>
            <span className="gray">({props.stats.reviewCount}) ▪️ </span>
            <span className="gray"> {props.location}</span>
        </div>  
        <p>{props.title}</p>
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
    const cards = data.map(item => {
        return <Cards
                    key={item.id}
                    {...item}                
                />
    })
    return(
        <div className="App">
            <NavBar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"))
