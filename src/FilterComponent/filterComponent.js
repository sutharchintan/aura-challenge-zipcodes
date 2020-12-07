import React, { Component } from "react";
import ZipcodeProvider from "../zipcode-provider";
import "./filterComponent.css";

class FilterComponent extends Component {

    render() {
        var getFilteredData = () => {
            var column = document.getElementById('ddlColumn').value;
            var value = document.getElementById('txtValue').value;
            var zipcodeProvider = new ZipcodeProvider();
            var initCallback = (obj) => {
                var result = obj.getFilteredZipcodeData(column, value);
                this.props.callbackFun(result);
            };
            zipcodeProvider.init(initCallback);
        };

        var filterByLonLat = () => {
            var longitude = document.getElementById('txtLongitude').value;
            var latitude = document.getElementById('txtLatitude').value;
            var initCallback = (obj) => {
                var result = obj.closestLocation({ "longitude": longitude, "latitude": latitude });
                this.props.callbackFun(result ? [result] : []);
            };
            var zipcodeProvider = new ZipcodeProvider();
            zipcodeProvider.init(initCallback);

        };
        return (
            <div>
                <div className="float-left">
                    <span>Choose the field to search with:</span>
                    <select id="ddlColumn">
                        <option value="0">All Data</option>
                        <option>zip</option>
                        <option>type</option>
                        <option>primary_city</option>
                        <option>acceptable_cities</option>
                        <option>unacceptable_cities</option>
                        <option>state</option>
                        <option>county</option>
                        <option>timezone</option>
                        <option>area_codes</option>
                        <option>country</option>
                        <option>estimated_population</option>
                    </select>
                    <span>Enter value:</span>
                    <input type="text" id="txtValue"></input>
                    <button onClick={getFilteredData}>Search</button>
                </div>
                <div className="float-right">
                    <span>latitude:  </span>
                    <input type="text" id="txtLatitude"></input>
                    <span>longitude:  </span>
                    <input type="text" id="txtLongitude"></input>
                    <button onClick={filterByLonLat}>Search nearest zipcode</button>
                </div>
            </div>
        );
    }
}

export default FilterComponent;