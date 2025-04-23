//use db-kia
//db.createCollection("cars")
db.cars.insertOne({model:"m1"})
db.cars.insertMany([
    {
        model:"m2"
    },
    {
        model:"m3"
    }
])
db.cars.updateMany({},{$set:{price:20000}})

db.cars.updateOne(
    {model:"m2"},
    {$inc :{price : 5000}}
)

db.cars.updateMany({},{$set:{date:Date()}})

db.cars.updateOne(
    {model : "m1"},
    {$set :{variant :["v1","v2","v2"]}}
)


db.cars.updateMany(
    {},
    {$set:{price:5000}}
)