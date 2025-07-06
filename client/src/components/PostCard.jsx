import { posts } from "@/utils/mockData";


const PostCard = ({index,image,tags,title,excerpt,avatar,author,date})=>{
        return(
        <div className="card  md:w-96 shadow-xl px-5 gap-3" key={index}>
        <figure className="px-10 pt-10">
            <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
         <div className='flex gap-2 mb-2'>
                    {tags.map((tag,index)=>{
                return(
                    <div key={index} className="flex justify-center translate-y-3">
                        <h3 className="bg-indigo-50 text-indigo-900 px-2 text-sm  rounded-md text-xs">{tag}</h3>
                    </div>
                )
            })}
                </div>
        <div className="card-body items-center">
            <h2 className="card-title text-xl">{title}</h2>
            <p className="text-lg">{excerpt}</p>
            <div className="card-actions w-full flex justify-start gap-3">
                    <div>
                        <img src={avatar} className="w-[40px] h-[40px] rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default PostCard;