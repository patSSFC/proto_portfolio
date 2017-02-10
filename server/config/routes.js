console.log("loaded routes");
const user = require('../controllers/user.js');
const skill = require('../controllers/skill.js');

module.exports = function(app) {
    app.post('/signup', function(req, res) {
        user.signup(req, res);
    });
    app.get('/login/:username', function(req, res) {
        user.login(req, res);
    });
    app.post('/skills', function(req, res) {
      skill.postNewSkill(req, res);
    });
}
