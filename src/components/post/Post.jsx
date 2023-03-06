import "./post.css";
import { LineAxisOutlined, MoreVert } from "@mui/icons-material/";
import { Users } from "../../dummyData";
import { useState,useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";


export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState({});
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchUser = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${post.userId}`);
      setUser(res.data.User);
    }

    fetchUser();
  },[post.userId]);
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user._id}`} style={{textDecoration:"none"}} >
            <img
              className="postProfileImg"
              src={user.profilePic || PF+"/person/noavatar.jpg"}
              alt=""
            />
             </Link>
             <Link to={`/profile/${user._id}`} className="nostyle" style={{textDecoration:"none"}} >
            <span className="postUsername">
              {user.username}
            </span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+"/post/"+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}/like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}/heart.png`}  onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
