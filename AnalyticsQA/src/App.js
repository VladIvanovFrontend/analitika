import React from "react";
import './styles/App.css';
import Controls from "./components/Controls";
import StatBoard from "./components/StatBoard";

function App() {
    return (
        <div className='app'>
            <h1 className='title'>Зарплаты в сфере QA</h1>
            <div className='content'>
                <Controls/>
                <StatBoard/>
            </div>
        </div>
    )
}

export default App;

