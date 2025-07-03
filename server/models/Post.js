const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    created_at: Date,
    updated_at: Date,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true}
});

exports.Post = mongoose.model("Post",postSchema);