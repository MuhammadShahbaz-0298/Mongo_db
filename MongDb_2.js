//Logical Operators
//Element Operators
//Projection
//Delete Operation in MongoDb
//Delete One
//Delete Many

//==================== LOGICAL OPERATORS ==================== 
// 1)$and
// 2)$or
// 3)$not
// 4)$nor


db.Employees.find({
    $and: [
        {
            salary: { $gte: 1400 },
        },
        {
            bonus: { $gte: 2000 }
        }
    ]
})

db.Employees.find({
    $or: [
        { department: { $eq: "Logistics" } },
        { salary: { $lte: 2000 } },
        { bonus: { $eq: 200 } }
    ]
})

db.Products.find({
    category: { $not: { $eq: "Shoes" } }
})


db.products.find({
    $nor: [
        { category: "Shoes" },
        { price: { $lt: 20000 } }
    ]
})

//==================== Element Operators ==================== 

// $exist

db.Employees.find({
    bonus: { $exists: true }
})

db.Employees.find({
    bonus: { $exists: false }
})


// $type

db.Employees.find({
    salary: { $type: "string" }
})

db.Employees.find({
    salary: { $type: "number" }
})

db.Employees.find({
    salary: { $type: 2 }
})

db.Employees.find({
    salary: { $type: 16 }
})

// $size

db.Products.find({
    colors: { $size: 1 }
})

db.Products.find({
    colors: { $size: 2 }
})


//==================== Delete Operation in MongoDb ==================== 

//Delete One

db.Employees.deleteOne({
    _id: { $eq: ObjectId("6a7aaa0219e4a6c5f0dcda00") }
})

// DeleteMany

db.Employees.deleteMany({
    $and: [
        { bonus: { $exists: false } },
        { department: { $eq: "Finance" } }
    ]
})

