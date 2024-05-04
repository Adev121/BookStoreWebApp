import mongoose from "mongoose";

// defining DB schema

const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    image:String,
    category:String,
});

const BookCol = mongoose.model("BookCol",bookSchema); //BookCol is collection name

export default BookCol;