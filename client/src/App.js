import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import About from "./pages/About.js"
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Header from "./components/Header.js";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route  path="/" element = {<Home/>}/>
        <Route  path="/about" element = {<About/>}/>
        <Route  path="/sign-in" element = {<SignIn/>}/>
        <Route  path="/sign-up" element = {<SignUp/>}/>
        <Route element = {<PrivateRoute/>}>
        <Route  path="/profile" element = {<Profile/>}/>
        </Route>  
      </Routes>
    </BrowserRouter> 
    
   
  );
}

export default App;
