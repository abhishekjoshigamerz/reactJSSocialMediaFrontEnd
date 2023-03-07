import {useEffect, useState} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


export default function Feed({userId}) {
  const postURl = process.env.REACT_APP_BACKEND_URL;
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchPost = async () => {
      const response =userId ? await axios.get(`${postURl}/post/user-post/${userId}`) :await axios.get(`${postURl}/post/timeline-post/6402eb03aa885c2f81161bc4`);
      console.log(userId);
      console.log(response.data.posts);
      response.data.posts ? setPosts(response.data.posts) : setPosts(response.data);
      // setPosts(response.data);
    }
    fetchPost();

  },[userId]);
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
