import PostCard from "./PostCard"
import { posts } from "@/utils/mockData"
const PostList = ()=>{

    return(
        posts.length > 0 ? posts.map((post,index)=>{
            return(
                <PostCard
                key={index}
                index={index}
                image={post.image}
                tags={post.tags}
                title={post.title}
                excerpt={post.excerpt}
                avatar={post.author.avatar}
                date={post.date}
                />
            )
        }) : <h1>no post to display</h1>
    )
}
export default PostList;