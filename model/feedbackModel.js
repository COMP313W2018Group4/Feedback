/*jshint esversion: 6 */

const mongoose = require ('mongoose');
const schema = mongoose.Schema;

//Create a schema
const userSchema= new schema({
       
    firstname:
    {
        type:String,
        required: true, /* built in validator  */
        minlength:3/* built in validator  */
    },
    lastname:
    {
        type:String,
        required:true,/* built in validator  */
        minlength:3, /* built in validator  */
    },
    email:
    {
        type:String, 
        required:true,/* built in validator  */
        minlength:3, /* built in validator  */
    },
    date:
    {
        type:String,
        required:true /* built in validator  */
    },
    Company:
    {
        type:String,
        enum: ['Company A', 'Company B', 'Company C']
    },

    comment:
    {
        type:String,
        required:true
    }

},
{
    collection: "feedback"
});

//Create a model
const feedback= mongoose.model("Feedback", userSchema);

//Export the model
module.exports=feedback;