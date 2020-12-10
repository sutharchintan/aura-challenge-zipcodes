import React, { Component } from "react";
import ZipcodeProvider from "../zipcodeProvider";
import "./filterComponent.css";

class FilterComponent extends Component {
    constructor(props) {
        super(props);
    }

    clearSearch = () => {
        document.getElementById('txtzip').value = "";
        document.getElementById('txttype').value = "";
        document.getElementById('txtprimary_city').value = "";
        document.getElementById('txtacceptable_cities').value = "";
        document.getElementById('txtunacceptable_cities').value = "";
        document.getElementById('txtstate').value = "";
        document.getElementById('txtcounty').value = "";
        document.getElementById('txttimezone').value = "";
        document.getElementById('txtarea_codes').value = "";
        document.getElementById('txtestimated_population').value = "";
        document.getElementById('txtLongitude').value = "";
        document.getElementById('txtLatitude').value = "";
        var zipcodeProvider = new ZipcodeProvider();
        var initCallback = (obj) => {
            this.props.callbackFun(obj.allZipCodeData);
        };
        zipcodeProvider.init(initCallback, {});
    };
    getFilteredData = () => {
        var zipcodeProvider = new ZipcodeProvider();
        var initCallback = (obj) => {
            this.props.callbackFun(obj.allZipCodeData);
        };
        var filterObject = {};
        var txtzip = document.getElementById('txtzip').value;
        txtzip != "" ? filterObject.zip = txtzip : null;
        var txttype = document.getElementById('txttype').value;
        txttype != "" ? filterObject.type = txttype : null;
        var txtprimary_city = document.getElementById('txtprimary_city').value;
        txtprimary_city != "" ? filterObject.primary_city = txtprimary_city : null;
        var txtacceptable_cities = document.getElementById('txtacceptable_cities').value;
        txtacceptable_cities != "" ? filterObject.acceptable_cities = txtacceptable_cities : null;
        var txtunacceptable_cities = document.getElementById('txtunacceptable_cities').value;
        txtunacceptable_cities != "" ? filterObject.unacceptable_cities = txtunacceptable_cities : null;
        var txtstate = document.getElementById('txtstate').value;
        txtstate != "" ? filterObject.state = txtstate : null;
        var txtcounty = document.getElementById('txtcounty').value;
        txtcounty != "" ? filterObject.county = txtcounty : null;
        var txttimezone = document.getElementById('txttimezone').value;
        txttimezone != "" ? filterObject.timezone = txttimezone : null;
        var txtarea_codes = document.getElementById('txtarea_codes').value;
        txtarea_codes != "" ? filterObject.area_codes = txtarea_codes : null;
        var txtestimated_population = document.getElementById('txtestimated_population').value;
        txtestimated_population != "" ? filterObject.estimated_population = txtestimated_population : null;
        var longitude = document.getElementById('txtLongitude').value;
        longitude != "" ? filterObject.longitude = longitude : null;
        var latitude = document.getElementById('txtLatitude').value;
        latitude != "" ? filterObject.latitude = latitude : null;
        zipcodeProvider.init(initCallback, filterObject);
    };

    componentDidMount() {
        this.getFilteredData();
    }
    render() {
        return (
            <div>
                <div>
                    <table>
                        <tr>
                            <td><span>zip</span></td>
                            <td><input type="text" id="txtzip"></input></td>
                            <td><span>type</span></td>
                            <td><input type="text" id="txttype"></input></td>
                            <td><span>primary_city</span></td>
                            <td><input type="text" id="txtprimary_city"></input></td>
                        </tr>
                        <tr>
                            <td><span>acceptable_cities</span></td>
                            <td><input type="text" id="txtacceptable_cities"></input></td>
                            <td><span>unacceptable_cities</span></td>
                            <td><input type="text" id="txtunacceptable_cities"></input></td>
                            <td><span>state</span></td>
                            <td><input type="text" id="txtstate"></input></td>
                        </tr>
                        <tr>
                            <td><span>county</span></td>
                            <td><input type="text" id="txtcounty"></input></td>
                            <td><span>timezone</span></td>
                            <td><input type="text" id="txttimezone"></input></td>
                            <td><span>area_codes</span></td>
                            <td><input type="text" id="txtarea_codes"></input></td>
                        </tr>
                        <tr>
                            <td><span>country</span></td>
                            <td><input type="text" id="txtcountry"></input></td>
                            <td><span>estimated_population</span></td>
                            <td><input type="text" id="txtestimated_population"></input></td>
                            <td><button onClick={this.getFilteredData}>Search</button></td>
                            <td><button onClick={this.clearSearch}>Clear</button></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <br></br>
                <div>
                    <table>
                        <tr>
                            <td><span>latitude:  </span></td>
                            <td><input type="text" id="txtLatitude"></input></td>
                            <td><span>longitude:  </span></td>
                            <td><input type="text" id="txtLongitude"></input></td>
                            <td><button onClick={this.getFilteredData}>Search nearest zipcode</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default FilterComponent;