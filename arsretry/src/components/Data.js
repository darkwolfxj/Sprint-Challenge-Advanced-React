import React, { useState, useEffect } from "react";
import axios from "axios";

import Players from "./Players";
import MyChart from "./Chart";
import useDarkMode from "./useDarkmode";

// const StyledDiv = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
// `

function Data(props){
    const [ players, setPlayers ] = useState([])
    const [darkmode, setDarkmode] = useDarkMode(false)
    const handleClick = e => {e.preventDefault(); setDarkmode(!darkmode)}
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {setPlayers(res.data); console.log(players)})
            .catch(err => console.log("There was an error fetching data", err))
    }, [])
        return (
            <div id="chartEtc">
                <button onClick={handleClick}>Dark/Light Mode</button>
                <MyChart data={players} />
                <div id="playersDiv" data-testid="testdiv">{players.map(i => <div id="player"><Players player={i} key={i.id} /></div>)}</div>
            </div>
        )    
}    

export default Data
