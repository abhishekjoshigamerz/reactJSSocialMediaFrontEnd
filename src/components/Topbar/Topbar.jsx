import "./topbar.css";
import {Search,Person,Chat,NotificationsActiveRounded} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">SocialNetwork</span>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for People" type="text" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLink"> Homepage </span>
          <span className="topbarLink"> Timeline </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActiveRounded />
            <span className="topbarIconBadge">1</span>
          </div>
          
        </div>
       
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>
        </div>
        
      </div>
    </div>
  )
}
