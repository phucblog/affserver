const express = require('express');

const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.render('result');
	});

module.exports = router;
