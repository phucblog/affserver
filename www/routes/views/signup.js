const express = require('express');

const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.render('signup');
	})
	.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile', // redirect to the secure profile section
		failureRedirect: '/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));



module.exports = router;
