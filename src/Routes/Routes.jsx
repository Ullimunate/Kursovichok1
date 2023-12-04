import { Route,Routes } from "react-router";
import Wrapper from "../Components/Wrapper";


function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element = {<Wrapper/>}/>
            {/* <Route path="/news" element = {<States/>}/> */}
        </Routes>
    )
}

export default AppRoutes