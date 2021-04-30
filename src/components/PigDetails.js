import React, { Component } from "react";

export default class PigDetails extends Component{
    render() {
        return (
            <div>
                <h1>{this.props.hogObject.specialty}</h1> 
                <h1>{this.props.hogObject.weight}</h1> 
                <h1>{this.props.hogObject.greased ? 'Greasy...' : 'Grippy'}</h1> 
                <h1>{this.props.hogObject['highest medal achieved']}</h1> 
            </div>
        )
    }
}