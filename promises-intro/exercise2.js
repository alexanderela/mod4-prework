const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeAllCaps(array) {
	return new Promise(function(resolve, reject) {
		const req = new XMLHttpRequest();
		req.onload = function() {
			return array.map(word => {
				if(typeof word === 'string') {
					resolve(req.response)
					return word.toUpperCase()
				} else {
					reject(Error(req.statusText))
				}
			})
		}
	})
}

function sortWords(words) {
	return new Promise(function(resolve, reject) {
		const req = new XMLHttpRequest();
		req.onload = function() {
			resolve(req.response)
			return words.sort(word => a - b)
		} else {
			reject(Error(req.statusText))
		}
	})

}


makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
// ['BIRD', 'PANTS', 'WOWOW']



makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
// 'No, the array you passed in contained an element that was not a string!'