var mongo = require('mongodb').MongoClient;
var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
	if (err) throw err;
	db.collection('parrots').find({
		age: {
			$gt: +age
		}
	}).toArray(function(err, documents) {
		if (err) throw err;
		console.log(documents);
		db.close();
	});

})

/*Find Documents that Match Query Criteria

To find documents that match a set of selection criteria, call find() with the <criteria> parameter. The following operation returns all the documents from the collection products where qty is greater than 25:

db.products.find( { qty: { $gt: 25 } } )
$gt selects those documents where the value of the field is greater than (i.e. >) the specified value.
*/