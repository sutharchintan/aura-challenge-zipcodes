const filterHelper = require("../filterHelper");

const GetZipCodes = (app, fs) => {
  app.get("/resources", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      return res.send(JSON.parse(data));
    });
  });
};

const GetFilteredZipCodes = (app, fs) => {
  app.post("/resources", function(req, res) {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const allData = JSON.parse(data);
      const filterObject = {
        ...(req.body.zip && { zip: req.body.zip }),
        ...(req.body.type && { type: req.body.type }),
        ...(req.body.primary_city && { primary_city: req.body.primary_city }),
        ...(req.body.acceptable_cities && {
          acceptable_cities: req.body.acceptable_cities,
        }),
        ...(req.body.unacceptable_cities && {
          unacceptable_cities: req.body.unacceptable_cities,
        }),
        ...(req.body.state && { state: req.body.state }),
        ...(req.body.county && { county: req.body.county }),
        ...(req.body.timezone && { timezone: req.body.timezone }),
        ...(req.body.area_codes && { area_codes: req.body.area_codes }),
        ...(req.body.estimated_population && {
          estimated_population: req.body.estimated_population,
        }),
        ...(req.body.latitude && { latitude: req.body.latitude }),
        ...(req.body.longitude && { longitude: req.body.longitude }),
      };

      var filteredData =
        filterObject.latitude && filterObject.longitude
          ? filterHelper.closestLocation(filterObject, allData)
          : allData;
      filteredData = filterHelper.propertyFilter(filterObject, filteredData);
      res.send(filteredData);
    });
  });
};

module.exports = { GetZipCodes, GetFilteredZipCodes };
