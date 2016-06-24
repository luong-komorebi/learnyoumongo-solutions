var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
		var collection = db.collection(process.argv[3]);
		var _id = process.argv[4];
		collection.remove({
			_id: _id
		}, function(err) {
			if (err) throw err;
			db.close();
		})
	})
	/*db.collection.remove()
	Removes documents from a collection.

	The db.collection.remove() method can have one of two syntaxes. The remove() method can take a query document and an optional justOne boolean:
	*/