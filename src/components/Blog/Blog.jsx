import { LiaBookmarkSolid } from "react-icons/lia";
const Blog = ({ blog, handleToAddBookmarks, handleMarkAsRead }) => {
    const {id,cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
    
    return (
        <div className="space-y-4 mb-10">
            <img className="h-[500px] w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="h-14 w-14 rounded-full object-center" src={author_img} alt="" />
                    <div className="ml-6">
                        <h1 className="font-semibold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleToAddBookmarks(blog)} className="text-2xl cursor-pointer"><LiaBookmarkSolid></LiaBookmarkSolid></button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className="mr-3" key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className="text-blue-700 underline">Mark As Read</button>
        </div>
    );
};

export default Blog;