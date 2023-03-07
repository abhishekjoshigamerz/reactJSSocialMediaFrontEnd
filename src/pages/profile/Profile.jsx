import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const windowUrl = window.location.href;
  const profileId = windowUrl.split("/")[4];
  console.log(`PP id is ${profileId}`);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  useEffect(() => {
    
    
   
    const fetchUser = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/${profileId}`
      );
      setUser(res.data.User);
     
    };
    fetchUser();
  }, []);
  

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPic || PF + "/person/cover.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePic || PF + "/person/noavatar.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userId={user._id}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
