var assert = require("assert");
var Query = require('../Query.js');

var exampleQuery = {
	"COLUMNS": ["CLIENT_ID","CLIENT_EMAIL","CLIENT_FIRSTNAME","CLIENT_LASTNAME","ORG_NAME"],
	"DATA": [
		[1,"bob@bob.bob","Bob","B","Apple"],
		[2,"clarkie@clarkie.com","Andy","Clarke","Concrete"],
		[3,"jimbo@jimbo.com","James","Jackson","Google"]
	]
};

describe('record count', function(){
	it('return 3', function(){
		var q = new Query(exampleQuery);
		assert(q.getRecordCount() === 3);
	});
});