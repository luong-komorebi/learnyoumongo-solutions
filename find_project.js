var mongo = require('mongodb').MongoClient;
var age = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
	if (err) throw err;
	db.collection('parrots').find({
		age: {
			$gt: +age
		}
	}, {
		name: 1,
		age: 1,
		_id: 0
	}).toArray(function(err, documents) {
		if (err) throw err;
		console.log(documents);
		db.close();
	});

})


/*Explicitly Exclude the _id Field
The following operation excludes the _id and qty fields from the result set:
db.products.find( { qty: { $gt: 25 } }, { _id: 0, qty: 0 } )
The documents in the result set contain all fields except the _id and qty fields:

{ "item" : "pencil", "type" : "no.2" }
{ "item" : "bottle", "type" : "blue" }
{ "item" : "paper" }*/