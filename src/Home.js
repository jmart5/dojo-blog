import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  {/*useEffect is useful to run code that you need to run on every render*/}
  useEffect(() => {
    fetch('http://localhost:8000/blogs').then(res => {
      return res.json();
    }).then(data => {
      setBlogs(data);
    })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"  /> }
    </div>
  );
}
 
export default Home;