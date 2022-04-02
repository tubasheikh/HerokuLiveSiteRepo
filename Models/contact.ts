import mongoose from "mongoose";
const Schema = mongoose.Schema; // allias

const ContactSchema = new Schema
({
    FullName: String,
    ContactNumber: String,
    EmailAddress: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;