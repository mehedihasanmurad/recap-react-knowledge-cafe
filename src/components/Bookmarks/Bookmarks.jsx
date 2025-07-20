import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 border mt-5 p-5 bg-gray-400'>
            <h1 className='text-center border border-purple-500 bg-purple-100 text-purple-700 rounded-lg py-3 mb-4'>Spent time on read : {readingTime} min</h1>
            <h1 className='text-2xl text-center'>Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;