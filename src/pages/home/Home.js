import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./home.css";
export default function Home() {
  return (
    <div>
    <Topbar />
      <div className="home-container">
          <Sidebar />
          <Feed />  
          <Rightbar />
      </div>
    </div>
  )
}
