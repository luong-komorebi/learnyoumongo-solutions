var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];
mongo.connect(url, function(err, db) {
	if (err) throw err;
	db.collection('parrots').count({
		age: {
			$gt: +age
		}
	}, function(err, count) {
		console.log(count);
		db.close();
	})
})


/*db.collection.count(query, options)*/
/*Returns the count of documents that would match a find() query. The db.collection.count() method does not perform the find() operation but instead counts and returns the number of results that match a query.*/