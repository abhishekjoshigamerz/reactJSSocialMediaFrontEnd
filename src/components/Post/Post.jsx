import './post.css';
import {MoreVert} from '@mui/icons-material/';
export default function post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">John Doe</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :)</span>
                <img className='postImg' src="/assets/post/3.jpeg" alt="" />
            </div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
