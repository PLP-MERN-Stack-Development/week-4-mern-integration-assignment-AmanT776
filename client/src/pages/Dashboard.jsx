import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import FeaturedCard from "@/components/FeaturedCard";
import { posts } from "@/utils/mockData";
const Dashboard = ()=>{
    const featuredPost = posts[0];
    console.log(featuredPost)
    return(
        <div className="overflow-hidden">
            <Header/>
            <main>
            <div className="translate-x-6 mt-2 w-full mr-2">
                <h2 className="text-gray-950 text-2xl font-bold">Welcome to DaguBlog</h2>
                <p>Discover interesting stories and insights from our authors</p>
            </div>
           <div className="mt-3">
                <h3 className="font-semibold text-xl translate-x-6">Featured Post</h3>
                <div className="p-12 md:p-0 ">
                    <FeaturedCard
                    image={featuredPost.image}
                    tags={featuredPost.tags}
                    title={featuredPost.title}
                    excerpt={featuredPost.excerpt}
                    avatar={featuredPost.author.avatar}
                    author={featuredPost.author.name}
                    date={featuredPost.date}
                />
                </div>
            </div>
                <div>
                    <h2 className="translate-x-6 mt-6 text-xl font-semibold">Latest Articles</h2>
                    <div className="flex flex-wrap gap-5 justify-center pt-5 p-12 md:p-0">
                    <PostList/>
                </div>
                </div>
            </main>
            <Footer/>     
        </div>
    )
}
export default Dashboard;