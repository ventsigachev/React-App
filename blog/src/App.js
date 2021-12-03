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
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Edit from "./components/Edit";

function App() {

  return (
    <div className="App">
      <Navigation />

      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:storyId" element={<Details />} />
          <Route path="/edit/:storyId" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-story" element={<Create />} />
          <Route path="/user-stories" element={<MyStories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/logout" element={<SignOut />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
