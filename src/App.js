import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home7 from "./components/pages/Home7";
import Home from "./components/pages/Home";
import Home2 from "./components/pages/Home2";
import Home1 from "./components/pages/Home1";
import Home3 from "./components/pages/Home3";
import Home4 from "./components/pages/Home4";
import Home5 from "./components/pages/Home5";
import Home6 from "./components/pages/Home6";
import Home8 from "./components/pages/Home8";
import Home9 from "./components/pages/Home9";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Booknow from "./components/Booknow/Booknow";

import { useContext, useEffect } from "react";
import { AuthContext, Firebasecontext } from "./store/Context";

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase} = useContext(Firebasecontext);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log(user)
    })
  })
  

  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home1" element={<Home1 />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="home3" element={<Home3 />} />
          <Route path="home4" element={<Home4 />} />
          <Route path="home5" element={<Home5 />} />
          <Route path="home6" element={<Home6 />} />
          <Route path="home7" element={<Home7 />} />
          <Route path="home8" element={<Home8 />} />
          <Route path="home9" element={<Home9 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booknow" element={<Booknow />} />
        </Routes>
      }
    </div>
  );
}

export default App;
