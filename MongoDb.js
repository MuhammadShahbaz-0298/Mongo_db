use PMTZ202412C --> Database Select

db.createCollection("Students")

// INSERT ONE

db.Employees.insertOne({
  name : "Shahbaz",
  department : "IT",
  salary : 120
})

db.Employees.insertOne({
  name : "Asad",
  department : "IT",
  salary : 120,
  bonus : 2000
})

db.Employees.insertOne({
  name : "Ashar",
  department : "IT",
})

// INSERT MANY 

db.Employees.insertMany([
  {
    name : "Asma",
    department : "HR",
    salary : 2000,
    bonus : 100
  },
  {
    name : "Aliyan",
    department : "Finance",
    salary : 2000,
  },
  {
    name : "Fatima",
    department : "Marketing",
    salary : 4000,
    bonus : 400
  },
  {
    name : "Ahmed",
    department : "IT",
    salary : 1700,
    bonus : 100
  },
])

// WHEN TO USE QUOTES (")

db.Employees.insertOne({
  "Employee name" : "Zaid",
  department : "IT",
  "2department" : "Finance",
  salary : 2000,
  bonus : 4000,
  "phone#" : 031234567
})

//=============READ OPERATIONS==============

// find()

db.Employees.find()

// findOne()

db.Employees.findOne();

//=========== Introduction to cursors =============

// count
db.Employees.find().count()

// limit
db.Employees.find().limit(4)

// skip
db.Employees.find().skip(4)

// sort
db.Employees.find().sort({ name : 1 })
db.Employees.find().sort({ name : -1 })
db.Employees.find().sort({ salary : 1 })

// ORDERED AND UNORDERED INSERTS


db.Employees.insertMany([
  {
    name : "Zara",
    department : "Logistics",
    salary : 2000,
    bonus : 100
  },
  {
    name : "Jaweria",
    department : "Design",
    salary : 3000,
  },
  {
    _id : ObjectId("6a7aacc619e4a6c5f0dcda07"),
    name : "laiba",
    department : "IT",
    "2department" : "Finance",
    Salary : 2000
  },
  {
    name : "Muzammil",
    department : "HR",
    salary : 2100,
    bonus : 400
  },
],{ ordered : false })

// Comparison Operator

// $eq  --> ==
// $ne	--> !=
// $gt  --> >
// $gte --> >=
// $lt  --> <
// $lte --> <=
// $in
// $nin



db.Employees.find({
  department : {$eq : "IT"}
})

db.Employees.find({
  department : {$ne : "IT"}
})

db.Employees.find({
  salary : {$gt : 2000}
})

db.Employees.find({
  salary : {$gte : 2000}
})

db.Employees.find({
  salary : {$lt : 2000}
})

db.Employees.find({
  salary : {$lte : 2000}
})

db.Employees.find({
  department : {$in : [
    "IT",
    "Finance"
  ]}
})

db.Employees.find({
  department : {$nin : [
    "IT",
    "Finance",
    "HR"
  ]}
})







































