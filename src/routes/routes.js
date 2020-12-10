const zipcodeRoutes = require("./zipcodeRoutes");
const appRouter = (app, fs) => {
    zipcodeRoutes.GetZipCodes(app, fs);
    zipcodeRoutes.GetFilteredZipCodes(app, fs);
};

module.exports = appRouter;