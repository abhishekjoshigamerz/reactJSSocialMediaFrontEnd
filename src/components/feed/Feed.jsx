import {useEffect, useState} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


export default function Feed() {
  const postURl = process.env.REACT_APP_BACKEND_URL;
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchPost = async () => {
      const response = await axios.get(`${postURl}/post/timeline-post/6402eb03aa885c2f81161bc4`);
     
      setPosts(response.data);
    }
    fetchPost();

  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
