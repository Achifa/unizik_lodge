import { Route, Link, useLocation, Routes, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";


import './App.css'
import './styles/client.css'
import './styles/agent.css'

import AgentHome from "./pages/agent/Home";

import Home from "./pages/client/Home";
import Header from "./components/Header";
import Profile from "./pages/client/Profile";
import Lodge from "./pages/client/Lodge";


import AgentHeader from "./components/AgentHeader";
import AgentProfile from "./pages/agent/Profile";
import AgentNotice from "./pages/agent/Notice";
import AgentSpace from "./pages/agent/Space";




//Freelancer



//Clients



const App = () => {

    let [active_header, set_active_header] = useState()

    let location = useLocation()


    useEffect(() => {
        if(location.pathname.split('/').splice(1,2)[0] === 'client'){

            set_active_header(
                <Header />
            )
            
        }else if(location.pathname.split('/').splice(1,2)[0] === 'agent'){

            set_active_header(
                <AgentHeader />
            )
            
        }else{
            set_active_header(
                ''
            )
        }
    }, [location])


    return ( 

        <>
            {
                active_header
            }
            
            <Routes> 

               
                {/*Freelancer*/}
                
                
                <Route path='/' element={<Dashboard />}></Route>
                
                
                <Route path='/client' element={<Home />}></Route>
                <Route path='/client/user' element={<Profile />}></Route>
                <Route path='/client/lodge' element={<Lodge />}></Route>

                {/*<Route path='/freelancer/signup' element={<SignupPage />}></Route>
                <Route path='/freelancer/login' element={<LoginPage />}></Route>

                <Route path='/freelancer/dashboard' element={<Dashboard />}></Route>
                <Route path='/freelancer/space' element={<SpacePage />}></Route>
                <Route path='/freelancer/chat' element={<ChatPage />}></Route>
                <Route path='/freelancer/contract' element={<ContractPage />}></Route>
                
                <Route path='/freelancer/settings' element={<Dashboard />}></Route>
                <Route path='/freelancer/finance' element={<Dashboard />}></Route>

        <Route path='/freelancer/profile' element={<Profile />}></Route>*/}

                <Route path='/agent' element={<AgentHome />}></Route>
                <Route path='/agent/user' element={<AgentProfile />}></Route>
                <Route path='/agent/notice' element={<AgentNotice />}></Route>
                <Route path='/agent/space' element={<AgentSpace />}></Route>
                
            </Routes>

        </>
     );
}
 
export default App;