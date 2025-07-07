import { useState } from "react"
import PostCard from "./PostCard"
import { useEffect } from "react";
import API from "@/services/api";
const PostList = ()=>{
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const res = await API.get('/posts/');
            setPosts(res.data);
        }
        fetchData();
    },[])
    console.log(posts)
    return(
        posts.length > 0 ? posts.map((post,index)=>{
            return(
                <PostCard
                key={index}
                index={index}
                image={post.imgUrl}
                tags={post.tags}
                title={post.title}
                excerpt={post.excerpt}
                // avatar={post.author.avatar}
                date={post.created_at.split('T')[0]}
                />
            )
        }) : <h1>no post to display</h1>
    )
}
export default PostList;