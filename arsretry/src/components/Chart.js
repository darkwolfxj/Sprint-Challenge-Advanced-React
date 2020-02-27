import React from "react";
import Chart from "chart.js";

class MyChart extends React.Component {
    componentDidUpdate() {
        
        
        const playerNames = this.props.data.map(i => i.name)
        const playerSearches = this.props.data.map(i => i.searches)
        
        function getRandomColor() {
            let letters = "0123456789ABCDEF".split("");
            let color = "#";
            for (let i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        const colors = playerSearches.map(name => getRandomColor())
        console.log("This is player names", playerNames)
        console.log("these are the random colors", colors)
        let myChart = document.getElementById("myChart").getContext("2d");
        let playerChart = new Chart(myChart, {
            type: "pie", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
            title: "Google Searches Per Player",
            data: {
                labels: playerNames, 
                datasets: [ 
                {
                    label: "Searches",
                    data: playerSearches,
                    backgroundColor: colors  
                }, 
                {
                    label: "Player",
                    data: playerNames
                }
                ]
            },
        options: { 
            title: { 
                text: "Google Searches By Player",
                position: "top",
                display: true
            },     
            legend: {
                 display: false
            } 
        }
        })
    }
    render() {
    return (
     <canvas data-testid="myChart" id="myChart"></canvas>   
    )}
}

export default MyChart 