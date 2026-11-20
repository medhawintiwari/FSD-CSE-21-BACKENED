Windows PowerShell 5.1
Copyright (C) Microsoft Corporation. All rights reserved.



# EXPERIMENT 7



PS C:\Users\medha> mongosh
Current Mongosh Log ID: 6b0023389404b13f09173891
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.1
Using MongoDB:          9.0.4
Using Mongosh:          2.14.1
mongosh 2.14.3 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-16T09:31:39.985+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use studentDB
switched to db studentDB
studentDB> db.sutdents.insertOne({
|   name: "Aarav Sharma",
|   rollNo: 101,
|   course: "B.Tech"
| })
{
  acknowledged: true,
  insertedId: ObjectId('6b0023709404b13f09173892')
}
studentDB> db.createCollection("sutdents")
{ ok: 1 }
studentDB> show dbs
| show collections
admin       40.00 KiB
config     108.00 KiB
local       72.00 KiB
student     72.00 KiB
studentDB    8.00 KiB
students    68.00 KiB


------------------------------------------------------------------------------------------------------

# EXPERIMENT 8


studentDB> db.students.insertMany([
|   { name: "Aarav Sharma", age: 19, course: "B.Tech CSE", rollNo: 101 },
|   { name: "Priya Verma", age: 21, course: "B.Tech IT", rollNo: 102 },
|   { name: "Rohan Das", age: 22, course: "BCA", rollNo: 103 },
|   { name: "Ananya Iyer", age: 20, course: "B.Tech ECE", rollNo: 104 },
|   { name: "Kabir Singh", age: 23, course: "MCA", rollNo: 105 }
| ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6b0023919404b13f09173893'),
    '1': ObjectId('6b0023919404b13f09173894'),
    '2': ObjectId('6b0023919404b13f09173895'),
    '3': ObjectId('6b0023919404b13f09173896'),
    '4': ObjectId('6b0023919404b13f09173897')
  }
}
studentDB> db.students.find({ age: { $gt: 20 } })
[
  {
    _id: ObjectId('6b0023919404b13f09173894'),
    name: 'Priya Verma',
    age: 21,
    course: 'B.Tech IT',
    rollNo: 102
  },
  {
    _id: ObjectId('6b0023919404b13f09173895'),
    name: 'Rohan Das',
    age: 22,
    course: 'BCA',
    rollNo: 103
  },
  {
    _id: ObjectId('6b0023919404b13f09173897'),
    name: 'Kabir Singh',
    age: 23,
    course: 'MCA',
    rollNo: 105
  }
]
studentDB> db.students.updateOne(
|   { name: "Aarav Sharma" },
|   { $set: { age: 20 } }
| )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
studentDB> db.students.deleteOne({ rollNo: 105 })
{ acknowledged: true, deletedCount: 1 }
studentDB>
