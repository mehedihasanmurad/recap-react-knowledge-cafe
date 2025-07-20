import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleToAddBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    //remove form bookmark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
    
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex mx-auto mt-8 gap-5 max-w-7xl '>
        <Blogs handleToAddBookmarks={handleToAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
