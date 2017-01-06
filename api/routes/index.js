var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoUrl = "mongodb://localhost:27017/employees";
mongoose.connect(mongoUrl);
var Employee = require('../models/employee');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getEmployeeData', function(req, res, next){
	Employee.find(
		{}, //THis is the droid we're looking for
		function(error, document){
			console.log(document);
			if(document.length === 0){
				//there are no employees in the system
				res.json({response: 'noEmployees'}); //Angular will need to act on this information. I.e., send them to the login page					
			}else{
				res.json({
					employeeName: document.employeeName,
					employeeAddress: document.employeeAddress,
				});
			}
		}
	)
});

module.exports = router;
