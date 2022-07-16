

function NavBar() {
    return(
        <div>
            <img src="./airbnb-logo.png" alt="AirBnb logo"></img>
        </div>
    )
}

function App() {
    return(
        <div className="App">
            <NavBar />
            <Name />
            <Buttons />
            <About />
            <Skills />
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"))
