import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";
import app from "./firebase";
import UserList from "./components/UserList";


function App() {
  console.log("Firebase App:", app);
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/registration" style={{ margin: "0 10px" }}>Registration</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/userlist" style={{ margin: "0 10px" }}>UserList</Link>
        </nav>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
