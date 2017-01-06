var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
	employeeName: String,
	employeeAddress: String,
	// lastUpdated: Date //curnetly not in use
});

module.exports = mongoose.model('Employee', Employee);