const mongoose=require("mongoose")


const main= async()=>{

try {
    const connaction= await mongoose.Connection("mongodb://127.0.0.1:27017/backend")
//await studentModal.insertMany([{name:"dhiraj",age:23,City:"Latur"}])
const student= new studentModal({
    name:"dhiraj",
    age:23,
    City:"Latur"
})
await student.save()

await studentModal.find({$and:[{age:{$gte:20}},{age:{$lte:20}}]})
await studentModal.deleteMany({$and:[{age:{$gte:20}},{age:{$lte:20}}]})
   connaction.disconnect()  // to disconnect the connection
   console.log("data add")
} catch (error) {
    console.log(error)
}

}

main()

// creating a structure of data that i want to store in db

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    City:String,
})

const studentModal= mongoose.model("student",studentSchema)