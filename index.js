

function Main() {
    return(

            <h1>Main Component</h1>

        )
}

function Page() {
    return(
        <div className="Page">
            <Main />
            <Name />
            <Buttons />
            <About />
            <Skills />

        </div>)
}

ReactDOM.render(Page(), document.getElementById("root"))
