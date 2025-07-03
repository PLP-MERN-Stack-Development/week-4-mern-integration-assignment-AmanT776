const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String,enum: ["admin","author","reader"], default: "reader"},
    created_at: Date,
    updated_at: Date
})

exports.User = mongoose.model("User",userSchema);