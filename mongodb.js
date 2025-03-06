// this is a sequence of commands to be executed in mongo shell
db = connect( 'mongodb://localhost/myDatabase' );

use ZenClassDB;  // create a database named ZenClassDB if doesn't exist


// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

db.createCollection("users")
db.createCollection("codekata")
db.createCollection("attendance")
db.createCollection("topics")
db.createCollection("tasks")
db.createCollection("companyDrives")
db.createCollection("mentors")

