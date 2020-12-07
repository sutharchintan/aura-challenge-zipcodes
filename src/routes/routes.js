const zipcodeRoutes = require("./zipcodeRoutes");
const appRouter = (app, fs) => {
    zipcodeRoutes(app, fs);
};

module.exports = appRouter;