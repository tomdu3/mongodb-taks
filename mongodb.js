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

// add users
db.users.insertMany([
    {
      _id: ObjectId("1"),
      name: "Tom D",
      email: "tomd@main.com",
    },
    {
        _id: ObjectId("2"), 
        name: "Igor D",
        email: "igord@email.com",
      }
  ]);
  
// add code cata

db.mentors.insertMany([
  {
    _id: ObjectId("101"),
    name: "Mentor A",
    mentees: [ObjectId("1"), ObjectId("2")] // Matches Tom and Igor
  },
  {
    _id: ObjectId("102"),
    name: "Mentor B",
    mentees: [] // No mentees for this mentor yet
  }
]);

// add codekata
db.codekata.insertMany([
    {
      _id: ObjectId("1"), // Codekata record for Tom
      userId: ObjectId("1"),
      problems: [
        { problemId: 101, solvedAt: ISODate("2025-03-01") },
        { problemId: 102, solvedAt: ISODate("2025-03-02") }
      ]
    },
    {
      _id: ObjectId("2"), // Codekata record for Igor
      userId: ObjectId("2"),
      problems: [
        { problemId: 103, solvedAt: ISODate("2025-03-01") },
        { problemId: 104, solvedAt: ISODate("2025-03-03") }
      ]
    }
  ]);
  
// add attendance
db.attendance.insertMany([
    {
      _id: ObjectId("1"), // Attendance record for Tom
      userId: ObjectId("1"),
      records: [
        { date: ISODate("2025-03-01"), status: "present" },
        { date: ISODate("2025-03-02"), status: "absent" }
      ]
    },
    {
      _id: ObjectId("2"), // Attendance record for Igor
      userId: ObjectId("2"),
      records: [
        { date: ISODate("2025-03-01"), status: "absent" },
        { date: ISODate("2025-03-02"), status: "present" }
      ]
    }
  ]);
  
