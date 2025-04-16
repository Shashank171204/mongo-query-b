db.employee.find({
    $or: [
        {salary:{$gt:2000}},
        {department:{$eq:"CSE"}}
    ]
});
db.employee.find({
    $and: [
        {salary:{$gt:2000}},
        {department:{$eq:"CSE"}}
    ]
});