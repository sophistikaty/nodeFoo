
var http = require( 'http' ),
	fs = require('fs');

	var start = new Date();

	http.get({host:'nyt.com'}, function(response){
		console.log('Got a response from nyt.com', response.statusCode);
		console.log('Took ', new Date() - start, 'ms');
	}).on('error', function(err){
		console.log('there was an error', err);
	});

	fs.readFile('file1.txt', 'utf8', function(err, data){
		if(err) throw err;
		console.log('file 1 read');
		console.log('Took ', new Date() - start, 'ms');
	});

	http.get({host:'mashable.com'}, function(response){
		console.log('Got a response from mashable.com', response.statusCode);
		console.log('Took ', new Date() - start, 'ms');
	}).on('error', function(err){
		console.log('there was an error', err);
	})

	fs.readFile('file2.txt', 'utf8', function(err, data){
		if(err) throw err;
		console.log('file 2 read');
		console.log('Took ', new Date() - start, 'ms');
	});

	function haveBreakfast(food,drink,callback){
		console.log('Having breakfast of '+ food + ' ' + drink);
		if(callback && typeof(callback == 'function')){
			callback();
		}
	};

	haveBreakfast('pancakes', 'americano', function(){
		console.log('Finished breakfast, time to go to work');
		console.log('Took ', new Date() - start, 'ms');
	});