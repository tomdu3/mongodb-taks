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
      codekataId: ObjectId("1"), // Reference to codekata progress
      mentorId: ObjectId("101"), // Reference to mentor
      attendance: [
        { date: ISODate("2025-03-01"), status: "present" },
        { date: ISODate("2025-03-02"), status: "absent" }
      ],
      tasks: [
        { taskId: ObjectId("201"), status: "submitted", submittedAt: ISODate("2025-03-01") }
      ]
    },
    {
        _id: ObjectId("2"), 
        name: "Igor D",
        email: "igord@email.com",
        codekataId: ObjectId("2"), // Reference to codekata progress
        mentorId: ObjectId("101"), // Reference to mentor
        attendance: [
          { date: ISODate("2025-03-01"), status: "absent" }, // Correct dates
          { date: ISODate("2025-03-02"), status: "present" }
        ],
        tasks: [
          {
            taskId: ObjectId("202"), 
            status: "not submitted" // Updated task status
          }
        ]
      }
  ]);
  