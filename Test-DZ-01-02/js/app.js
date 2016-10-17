var app = {
	sayHello: function (name){
		return 'Hello, ' + name + '!';
	}
}

try {
	module.exports = app;
} catch (e){}
