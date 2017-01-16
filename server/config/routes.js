console.log("loaded routes");
const user = require('../controllers/user.js');

module.exports = function(app) {
    app.post('/signup', function(req, res) {
        console.log("inside /signup POST route!");
        // console.log(req.body);
        user.signup(req, res);
    });
}
