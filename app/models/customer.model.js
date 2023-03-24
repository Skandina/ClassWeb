const sql = require("./db.js");

const Customer = function(customer){
	this.email = customer.email;
	this.name = customer.name;
	this.active = customer.active;
};

Customer.create = (NewCustomer, result)=>{
	sql.query("INSERT INTO members SET ?", newCustomer, (err,res)=>{
		if(err){
			console.log("error:", err);
			result(err, null);
			return;
		}
