console.log("loaded routes");
const user = require('../controllers/user.js');
// const skill = require('../controllers/skills.js');

module.exports = function(app) {
    app.post('/signup', function(req, res) {
        console.log("inside /signup POST route!");
        // console.log(req.body);
        user.signup(req, res);
    });
    app.get('/login/:username', function(req, res) {
        console.log("inside /login GET route");
        console.log(req.params);
        user.login(req, res);
    });
    app.post('/skills', function(req, res) {
      console.log("inside /skills POST route!");
      console.log(req.body);
      // skill.addSkill(req, res);
    });
}
