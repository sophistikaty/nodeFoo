
var http = require( 'http' ),

	urls = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com'];

	function fetchPage(url){
		var start = new Date();
		http.get({ host:url}, function(response){
			console.log('Got response from ' , url, response );
			console.log('Request took ', new Date() - start, 'ms');
		});
	}

	for ( var i = 0; i < urls.length; i++ ){
		fetchPage(urls[i]);
	}

	function haveBreakfast(food,drink,callback){
		console.log('Having breakfast of '+ food + ' ' + drink);
		if(callback && typeof(callback == 'function')){
			callback();
		}
	}

	haveBreakfast('pancakes', 'americano', function(){
		console.log('Finished breakfast, time to go to work');
	})