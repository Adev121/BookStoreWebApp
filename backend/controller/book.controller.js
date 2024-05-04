import BookCol from '../model/book.model.js'

export const getBook=async(req,res)=>{
try {
    const book=await BookCol.find();
    res.status(200).json(book);
} catch (error) {
    console.log(`Error Occured : ${error}`)
    res.status(500).json({message:`Error Occured : ${error}`})
}
}