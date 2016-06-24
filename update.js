var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
		if (err) throw err;
		var users = db.collection('users');
		users.update({
			username: 'tinatime'
		}, {
			$set: {
				age: 40
			}
		}, function(err) {
			if (err) throw err;
			db.close();
		})
	})
	/*
	db.collection.update()	
	Either updates or replaces a single document that match a specified filter or updates all documents that match a specified filter.

	By default, the db.collection.update() method updates a single document. To update multiple documents, use the multi option.
	$set
	The $set operator replaces the value of a field with the specified value.

	The $set operator expression has the following form:

	{ $set: { <field1>: <value1>, ... } }
	db.products.update(
	   { _id: 100 },
	   { $set:
	      {
	        quantity: 500,
	        details: { model: "14Q3", make: "xyz" },
	        tags: [ "coats", "outerwear", "clothing" ]
	      }
	   }
	)*/