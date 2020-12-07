import Handler from "./handler";

class ZipcodeProvider {

    init = (callback) => {
        new Handler().GetZipcodeData(null).then(result => { this.allZipCodeData = result; console.log("provider init"); callback(this); },
            error => console.log(error));
    }

    getFilteredZipcodeData = (columnName, value) => {
        if (!columnName || columnName === "" || !value || value === "")
            return this.allZipCodeData;
        else {
            const filteredData = this.allZipCodeData.filter(function (zipCode) {
                return ((zipCode[columnName]).toString().toLowerCase().includes(value.toLowerCase()));
            });
            return filteredData;
        }
    }

    vectorDistance = (dx, dy) => {
        return Math.sqrt(dx * dx + dy * dy);
    }

    locationDistance = (location1, location2) => {
        var dx = location1.latitude - location2.latitude,
            dy = location1.longitude - location2.longitude;

        return this.vectorDistance(dx, dy);
    }

    closestLocation = (targetLocation) => {
        var zipcodeProvider = this;
        return this.allZipCodeData.reduce(function (prev, curr) {
            var prevDistance = zipcodeProvider.locationDistance(targetLocation, prev),
                currDistance = zipcodeProvider.locationDistance(targetLocation, curr);
            return (prevDistance < currDistance) ? prev : curr;
        });
    }
}

export default ZipcodeProvider;