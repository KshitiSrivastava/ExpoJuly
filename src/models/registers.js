const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    mail : {
        type : String,
        required : true,
        unique : true
    },

    phone : {
        type : Number,
        required : true,
        unique : true
    },

    organization : {
        type : String,
        required : true
    },

    designation : {
        type : String,
        required : true
    },

    country : {
        type : String,
        required : true
    },

    Iam : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
});

const Register = new mongoose.model("Register", registrationSchema);

module.exports = Register;