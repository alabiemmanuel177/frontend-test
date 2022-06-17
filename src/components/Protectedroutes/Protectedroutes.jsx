import {Outlet} from "react-router-dom"
import Login from "../../views/Login"

const useAuth = () => {
    const user = { loggedIn: false};
    return user && user.loggedIn;
}

function Protectedroutes(){
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Login/>
}

export default Protectedroutes;