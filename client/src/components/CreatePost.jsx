import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

const CreatePost = ()=>{

    return(
        <form className="flex flex-col gap-3 p-10 md:p-20">
            <h1 className="text-2xl font-bold">Create New Post</h1>
            <label>
                Post Title
                <Input placeholder="Enter title for a post"/>
            </label>
            <label>
                Excerpt
                <Input placeholder="a brief summary of your post"/>
            </label>
            <label>
                Featured Image URL
                <Input placeholder="https://example.com/image.jpt"/>
            </label>
            <label>
                Tags
                <Input placeholder="Technolog, Web development,design"/>
            </label>
            <label>
                Content
                <Textarea className="resize-none " placeholder="Write your post content here"/>
            </label>
            <Button className="bg-indigo-800 rounded-sm ml-auto mr-10">Publish Post</Button>
        </form>
    )
}
export default CreatePost;