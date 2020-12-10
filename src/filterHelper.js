const vectorDistance = (dx, dy) => {
    return Math.sqrt(dx * dx + dy * dy);
}

const locationDistance = (location1, location2) => {
    var dx = location1.latitude - location2.latitude,
        dy = location1.longitude - location2.longitude;

    return vectorDistance(dx, dy);
}

const closestLocation = (targetLocation, data) => {
    var item = data.reduce(function (prev, curr) {
        var prevDistance = locationDistance(targetLocation, prev),
            currDistance = locationDistance(targetLocation, curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
    return [item];
}

const propertyFilter = (filterObject, data) => {
    return data.filter(function (zipcode) {
        return Object.keys(this).every((key) => {
            if (zipcode[key]) {
                if (key === "acceptable_cities" || key === "unacceptable_cities") {
                    var arrKey = this[key].split(",");
                    return arrKey.every(val => zipcode[key].includes(val));
                } else if (key === "estimated_population") {
                    return zipcode[key].toString() == this[key].toString();
                } else
                    return zipcode[key].toString().toLowerCase().includes(this[key].toString().toLowerCase());
            }
        });
    }, filterObject);
};

module.exports = { closestLocation, propertyFilter }