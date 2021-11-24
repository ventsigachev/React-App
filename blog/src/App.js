import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Create from "./components/Create";
import MyStories from "./components/MyStories";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <main className="main">
        <Routes>

          <Route path="/" element={ <Landing /> }/>
          <Route path="/home" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/add-story" element={ <Create /> }/>
          <Route path="/user-stories" element={ <MyStories /> }/>
          <Route path="/profile" element={ <Profile /> }/>
          <Route path="/login" element={ <LogIn /> }/>
          <Route path="/logout" element={ <LogOut /> }/>
          <Route path="/register" element={ <Register /> }/>
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
