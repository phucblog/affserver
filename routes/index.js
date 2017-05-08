class ApplicationRoutesInit {

	static init(app) {

		app.get('/', (req, res) => {
			res.render('index', { title: 'Phuc' });
		});

		const Result = require('./views/result');
		app.use('/result', Result);

		const User = require('./views/users');
		app.use('/user', User);

		const Login = require('./views/login');
		app.use('/login', Login);

		const Signup = require('./views/signup');
		app.use('/signup', Signup);

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
