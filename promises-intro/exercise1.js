const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function testNum(num) {
	return new Promise(function(resolve, reject) {
		const req = new XMLHttpRequest();
		req.onload = function() {
			if (num > 10) {
				resolve(req.response);
			} else {
				reject(Error(req.statusText));
			}
		};

		req.onerror = function() {
			reject(Error("Network Error"));
		};

		req.send();
	})
}


testNum(15)

testNum(5)