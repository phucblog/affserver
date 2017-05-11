const Promise = require('bluebird');

class MongoProvider {

	static save(newModelData) {
		return new Promise((resolve, reject) => {
			return newModelData.save((err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	static findOne(Model, queryOpts, documentFields) {
		return Model.findOneAsync(queryOpts, documentFields);
	}

	static find(Model, queryOpts) {
		return Model.findAsync(queryOpts);
	}

	static findById(Model, queryOpts, documentFields) {
		return Model.findByIdAsync(queryOpts, documentFields);
	}
}

module.exports = MongoProvider;

