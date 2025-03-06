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
    { _id: ObjectId("1"), name: "Tom D", email: "tomd@main.com", codekataSolved: 120 },
    { _id: ObjectId("2"), name: "Igor D", email: "igord@email.com", codekataSolved: 80 }
  ]);

// add codekata
db.codekata.insertMany([
    {
      _id: ObjectId("1"),
      userId: ObjectId("1"),
      userName: "Tom D",
      problemsSolved: [
        { problemId: "P101", solvedAt: ISODate("2025-03-01") },
        { problemId: "P102", solvedAt: ISODate("2025-03-02") }
      ],
      totalSolved: 120
    },
    {
      _id: ObjectId("2"),
      userId: ObjectId("2"),
      userName: "Igor D",
      problemsSolved: [
        { problemId: "P103", solvedAt: ISODate("2025-03-01") },
        { problemId: "P104", solvedAt: ISODate("2025-03-03") }
      ],
      totalSolved: 80
    }
  ]);

// add attendance
db.attendance.insertMany([
    {
      _id: ObjectId("1"),
      userId: ObjectId("1"),
      userName: "Tom D",
      attendanceRecords: [
        { date: ISODate("2025-03-01"), status: "present" },
        { date: ISODate("2025-03-02"), status: "absent" }
      ]
    },
    {
      _id: ObjectId("2"),
      userId: ObjectId("2"),
      userName: "Igor D",
      attendanceRecords: [
        { date: ISODate("2025-03-01"), status: "absent" },
        { date: ISODate("2025-03-02"), status: "present" }
      ]
    }
  ]);

// add topics
db.topics.insertMany([
    { _id: ObjectId("301"), name: "JavaScript Basics", taughtOn: ISODate("2025-10-01"), mentorId: ObjectId("101"), mentorName: "Mentor A" },
    { _id: ObjectId("302"), name: "MongoDB Fundamentals", taughtOn: ISODate("2025-10-15"), mentorId: ObjectId("101"), mentorName: "Mentor A" }
  ]);

// add tasks
db.tasks.insertMany([
    {
      _id: ObjectId("201"),
      topicId: ObjectId("301"),
      topicName: "JavaScript Basics",
      description: "Complete your JS problems",
      dueDate: ISODate("2025-10-20"),
      submissions: [
        { userId: ObjectId("1"), userName: "Tom D", status: "submitted", submittedAt: ISODate("2025-10-19") },
        { userId: ObjectId("2"), userName: "Igor D", status: "not submitted" }
      ]
    },
    {
      _id: ObjectId("202"),
      topicId: ObjectId("302"),
      topicName: "MongoDB Fundamentals",
      description: "Write MongoDB Aggregation queries",
      dueDate: ISODate("2025-10-30"),
      submissions: [
        { userId: ObjectId("1"), userName: "Tom D", status: "submitted", submittedAt: ISODate("2025-10-28") }
      ]
    }
  ]);

// add company drives
db.companyDrives.insertMany([
    {
      _id: ObjectId("401"),
      companyName: "Google",
      date: ISODate("2025-10-15"),
      studentsAppeared: [
        { userId: ObjectId("1"), userName: "Tom D" }
      ]
    },
    {
      _id: ObjectId("402"),
      companyName: "Amazon",
      date: ISODate("2025-10-25"),
      studentsAppeared: [
        { userId: ObjectId("2"), userName: "Igor D" }
      ]
    }
  ]);
  
  // add mentors
  db.mentors.insertOne({
    name: "Mentor A",
    mentees: [
      { userId: ObjectId("1"), userName: "Tom D" },
      { userId: ObjectId("2"), userName: "Igor D" }
    ]
  });

  