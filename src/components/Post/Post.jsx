import './post.css';
import {MoreVert} from '@mui/icons-material/';
export default function post() {
  return (
    <div>
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
                <span className="postText">Hey! Its my first post :)</span> <br />
                <img className='postImg' src="/assets/post/3.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">0 comments</span>
                </div>
            </div>
        </div>
    </div>
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/2.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Snow white</span>
                    <span className="postDate">15 mins ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :)</span> <br />
                <img className='postImg' src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">0 comments</span>
                </div>
            </div>
        </div>
    </div>
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/4.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Dosa</span>
                    <span className="postDate">1 Day ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :)</span> <br />
                <img className='postImg' src="/assets/post/2.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">0 comments</span>
                </div>
            </div>
        </div>
    </div>
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/6.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Snow boy</span>
                    <span className="postDate">59 secs ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :)</span> <br />
                <img className='postImg' src="/assets/post/6.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">0 comments</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
