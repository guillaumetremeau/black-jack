import React from "react";
import "./App.css";
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
                <div></div>
            </div>
        </div>
    );
}

export default App;
