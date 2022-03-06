import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Sidenav from './components/Sidenav';
import './App.css'
import Landing from "./pages/Landing";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
    <Sidenav user="Tyroo" logo="Popup Foodies"/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
