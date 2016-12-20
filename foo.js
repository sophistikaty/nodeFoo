
var http = require( 'http' ),
	url = require('url');
	// fs = require('fs');

	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;

		switch( pathname ){

			case '/':
				response.writeHead(200,{
					'Content-Type': 'text/plain'
				});
				response.end('Home Page\n');
			break;

			case '/about':
				response.writeHead(200, {
					'Content-Type': 'text/plain'
				});
				response.end('About Us\n');
			break;

			case '/redirect':
				response.writeHead(301, {
					'Location': '/'
				});
				response.end();
			break;

			default:
				response.writeHead(404,{
					'Content-Type': 'text/plain'
				});
				response.end('Page Not Found\n');
			break;
		}

		// response.writeHead(301,{
		// 	'Location': 'http://www.homestarrunner.com/sbsite'
		// });

	}).listen(3000,'127.0.0.1');
	console.log('Server running at http://127.0.0.1:3000/');


	fetchPage();
	fetchApi();

	// http.get({host:'nyt.com'}, function(response){
	// 	console.log('Got a response from nyt.com', response.statusCode);
	// 	console.log('Took ', new Date() - start, 'ms');
	// }).on('error', function(err){
	// 	console.log('there was an error', err);
	// });

	// fs.readFile('file1.txt', 'utf8', function(err, data){
	// 	if(err) throw err;
	// 	console.log('file 1 read');
	// 	console.log('Took ', new Date() - start, 'ms');
	// });

	// http.get({host:'mashable.com'}, function(response){
	// 	console.log('Got a response from mashable.com', response.statusCode);
	// 	console.log('Took ', new Date() - start, 'ms');
	// }).on('error', function(err){
	// 	console.log('there was an error', err);
	// })

	// fs.readFile('file2.txt', 'utf8', function(err, data){
	// 	if(err) throw err;
	// 	console.log('file 2 read');
	// 	console.log('Took ', new Date() - start, 'ms');
	// });

	// haveBreakfast('pancakes', 'americano', function(){
	// 	console.log('Finished breakfast, time to go to work');
	// 	console.log('Took ', new Date() - start, 'ms');
	// });

// This works as async only when it's using the http request method - simulating sleep is always sync?

	function fetchPage(){
		console.log('fetching Page');

		// sleep(6000, function(){console.log('async page sleep?')});
		
		http.get({host:'trafficjamapp.herokuapp.com', path: '/?delay=3000'},
			function(response){
				console.log('data returned from requesting fake page');
			}).on('error', function(err){
				console.log('there was an error ', err);
			})
	}

	function fetchApi(){
		console.log('fetching api');

		// sleep(4000, function(){console.log('async api sleep?')});

		http.get({host:'trafficjamapp.herokuapp.com', path:'/?delay=2500'},
			function(response){
				console.log('data returned from api');
			}).on('error', function(err){
				console.log('there was an error ', err);
			})
	}

	function haveBreakfast(food,drink,callback){
		console.log('Having breakfast of '+ food + ' ' + drink);
		if(callback && typeof(callback == 'function')){
			callback();
		}
	};

	function sleep(milliseconds){
		var start = new Date();
		while((new Date().getTime() - start) < milliseconds){
			//sleep
		}
		if(callback && typeof(callback == 'function')){
			callback();
		}
	}