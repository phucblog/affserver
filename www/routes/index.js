class ApplicationRoutesInit {

	static init(app, passport) {

		app.get('/', (req, res) => {
			res.render('index', { title: 'Phuc' });
		});

		const Result = require('./views/result');
		app.use('/result', Result);

		const User = require('./views/users');
		app.use('/user', User);

		// const Login = require('./views/login');
		// app.use('/login', Login);

		// const Signup = require('./views/signup');
		// app.use('/signup', Signup);

		app.use('/login',
			(req, res) => {
				res.render('login', { env: process.env });
			});

		// Perform session logout and redirect to homepage
		app.use('/logout', (req, res) => {
			req.logout();
			res.redirect('/');
		});

		// Perform the final stage of authentication and redirect to '/user'
		app.use('/callback',
			passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
			(req, res) => {
				res.redirect(req.session.returnTo || '/user');
			});

















		// catch 404 and forward to error handler
		app.use((req, res, next) => {
			const err = new Error('Not Found');
			err.status = 404;
			next(err);
		});

		// error handler
		app.use((err, req, res, next) => {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development' ? err : {};

			// render the error page
			res.status(err.status || 500);
			res.render('error');
		});
	}

}
module.exports = ApplicationRoutesInit;
