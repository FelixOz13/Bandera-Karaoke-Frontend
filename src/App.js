import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import VideoBackground from "./components/VideoBackground.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div>
      <Navbar/>
      <VideoBackground />
      
    <div className='videoBgcontent'>
      <div className='App'>
      {code ? <Dashboard code={code} /> : <Login />}
      </div>
      </div>
      </div>
  );
}

export default App;
