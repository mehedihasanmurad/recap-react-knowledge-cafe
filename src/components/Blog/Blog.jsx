
const Blog = ({ blog }) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
    
    return (
        <div className="space-y-4">
            <img className="h-[500px] w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="h-14 w-14 rounded-full object-center" src={author_img} alt="" />
                    <div className="ml-6">
                        <h1 className="font-semibold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className="mr-3" key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className="mb-5">
                <a className="text-blue-500 underline" href="">Mark As Read</a>
            </button>
        </div>
    );
};

export default Blog;