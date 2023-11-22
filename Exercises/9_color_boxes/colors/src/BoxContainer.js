import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css"

class BoxContainer extends Component {
    render() {
        return (
            <div className="Box-container">
                {Array(24).fill(<Box />)}             
            </div>
        )
    }
}
export default BoxContainer;