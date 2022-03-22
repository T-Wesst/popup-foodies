import { Outlet } from 'react-router-dom'
import SignIn from './pages/SignIn'

const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
}

export default function ProtectedRoutes() {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <SignIn/>
}
