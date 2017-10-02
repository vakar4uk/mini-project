var db=require('.../dbconnection');

var Person={

	getAllPersons:function(callback){
		return db.query("select * from Person",callback);
	},
	getPersonById:function(id,callback){
		return db.query("select * from Person where PID=?",[id],callback);
	},
	addPerson:function(Person, callback){
		return db.query("insert into Person values(?,?,?,?,?)",[Person.PID,Person.Fname,Person.Lname,Person.Sex,Person.DOB],callback);
	},
	deletePerson:function(id,callback){
		return db.query("delete from Person where PID=?",[id],callback);
	},
	updatePerson:function(id,callback){
		return db.query("update Person set Fname=?, Lname=?, Sex=?, DOB=? where PID=?",[Person.Fname,Person.Lname,Person.Sex,Person.DOB,id],callback);
	}

};
module.exports=Person;