import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About';
import Games from './components/Games'
import Services from './components/Services';
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp';
import UpdateCom from './components/UpdateCom';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';

// import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';




import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';   

function App() {
  return (
    <div>
     
     <Router>
     <Nav />
     <Routes>
         <Route element={<PrivateComponent />} >
         
         <Route path="/about" element={<About />}/>
         <Route path="/games" element={<Games />}/>
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/admindashboard" element={<AdminDashboard />} />
         <Route path="/userprofile" element={<UserProfile />} />
         <Route path="/updatecom/:id" element={<UpdateCom />} />
         </Route>
         <Route path="/" element={<Home />}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
         {/*<Route path="/adminlogin" element={<AdminLogin/>} />*/}
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
