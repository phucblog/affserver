const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

const router = express.Router();

/* GET users listing. */
router.get('/', ensureLoggedIn, (req, res) => {
	res.render('user', { user: req.user });
});

module.exports = router;
