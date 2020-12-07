const zipcodeRoutes = (app, fs) => {
    app.get('/allZipcodeData', (req, res) => {
      fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = zipcodeRoutes;