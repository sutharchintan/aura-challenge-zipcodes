import React, { Component } from "react";
import FilterComponent from "../FilterComponent/filterComponent";
import FilteredData from "../FilteredData/filteredData";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredData: [] };
    }
    filter = (result) => {
        this.setState({ filteredData: result });
        console.log("app filter func.");
    }
    render() {
        return (
            <div className="fullWidth">
                <FilterComponent callbackFun={this.filter}></FilterComponent>
                <br></br>
                <br></br>
                <br></br>
                <FilteredData zipcodes={this.state.filteredData}></FilteredData>
            </div>
        );
    }
}

export default App;