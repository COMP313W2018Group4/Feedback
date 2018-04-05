/*jshint esversion: 6 */

const mongoose = require ('mongoose');
const schema = mongoose.Schema;

//Create a schema
const userSchema= new schema({
       
   
  
    email:
    {
        type:String, 
        required:true /*  required   */
       
    },
    Subject:
    {
        type:String,
       required:true 
    },
    Complaint:
    {
        type:String,
       required:true
    }

},
{
    collection: "complaints"
});

//Create a model
const complaint= mongoose.model("Complaints", complaintSchema);

//Export the model
module.exports=complaint;