import React from "react";
import "./App.css";
import Actions from "./containers/Actions";
import Cards from "./containers/Cards";
import ResetScore from "./containers/ResetScore";
import Score from "./containers/Score";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResetScore />
                <Score />
            </header>
            <div className="App-main">
                <Cards />
            </div>
            <footer className="App-footer">
                <Actions />
            </footer>
        </div>
    );
}

export default App;
