console.log("loaded routes");

module.exports = function(app) {
    app.post('/signup', function(req, res) {
        console.log("inside /signup POST route!");
        console.log(req.body);
    });
}
