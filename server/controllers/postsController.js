const Post = require("../models/Post");
const Category = require("../models/Category");

exports.getAllPosts = async(req,res)=>{
    try{
        const posts = await Post.fetch();
        if(!posts) return res.status(404).json({message: "post not found"});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
    }
}

exports.getPost = async(req,res)=>{
    try{
        const {id} = req.body;
        const post = await Post.findById(id);
        if(!post) return res.status(404).json({message: "post not found"});
        res.status.json(post);
    }catch(err){
        console.log(err)
    }
}

exports.createPost = async(req,res)=>{
    try{
        const post = await Post.create(req.body);
        res.status(200).json({message: "post created successfully"});
    }catch(err){
        console.log(err);
    }
}

exports.updatePost = async(req,res)=>{
    try{
        const {id} = req.body;
        const update = await findByIdAndUpdate(id,req.body);
        res.status(200).json({message: "successfully updated"});
    }catch(err){
        console.log(err);
    }
}

exports.deletePost = async(req,res)=>{
    try{
        const {id} = req.body;
        const post = await Post.findByIdAndDelete(id);
        res.status(200).json({message: "post deleted"});
    }catch(err){
        console.log(err);
    }
}

exports.getCategories = async(req,res)=>{
    try{
        const categories = await Category.find();
        if(!categories) return res.status(404).json({message: "category not found"});
        res.status(200).json(categories)
    }catch(err){
        console.log(err);
    }
}

exports.createCategory = async(req,res)=>{
    try{
        const category = Category.create(req.body);
        res.status(200).json({message: "category added"});
    }catch(err){
        console.log(err);
    }
}