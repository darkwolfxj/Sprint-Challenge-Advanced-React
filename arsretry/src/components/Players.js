import React from "react";

 class Players extends React.Component {
    render() { 
    return (
        <div data-testid="test">
            <h1>{this.props.player.name}</h1>
            <h2>Country: {this.props.player.country}</h2>
            <h3>Searches: {this.props.player.searches}</h3>
        </div>
    )}
}

export default Players