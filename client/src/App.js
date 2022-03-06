import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sidenav from './components/Sidenav';
import './App.css'
import Landing from "./pages/Landing";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
    <Sidenav user="Tyroo" logo="Popup Foodies"/>
    <Routes>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
