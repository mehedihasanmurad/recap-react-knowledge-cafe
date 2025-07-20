import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-slate-200 m-3 rounded-lg p-4'>
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;