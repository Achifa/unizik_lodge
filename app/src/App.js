import { Route, Link, useLocation, Routes, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


import './App.css'
import './styles/client.css'
import './styles/agent.css'

import AgentHome from "./pages/agent/Home";

import Home from "./pages/client/Home";
import Header from "./components/Header";
import Profile from "./pages/client/Profile";
import Cart from "./pages/client/Cart";
import Lodge from "./pages/client/Lodge";
import ProfileInfo from "./pages/client/Personal_Info";
import Space from "./pages/client/Space";


import AgentHeader from "./components/AgentHeader";
import AgentProfile from "./pages/agent/Profile";
import AgentProfileInfo from "./pages/agent/Personal_Info";
import AgentNotice from "./pages/agent/Notice";
import AgentSpace from "./pages/agent/Space";
import AgentClientRequest from "./pages/agent/ClientRequest";
import AgentSignup from "./pages/agent/Signup";
import AgentSignin from "./pages/agent/Login";
import Navigation from "./pages/client/Nav";
import Inbox from "./pages/client/Inbox";
import Notice from "./pages/client/Notice";
import LodgeNav from "./pages/client/LodgeNav";
import Support from "./pages/client/Support";
import Settings from "./pages/client/Settings";
import MyPost from "./pages/client/MyPost";
import SavedLodge from "./pages/client/SavedLodge";




//Freelancer



//Clients



const App = () => {

    let [active_header, set_active_header] = useState()
    let [active_nav, set_active_nav] = useState()

    let location = useLocation()


    useEffect(() => {
        if(location.pathname.split('/').splice(1,2)[0] === 'client'){

            if(location.pathname.split('/').splice(-1)[0] === 'lodge'){

                set_active_header(
                    <Header />
                )

                set_active_nav(
                    <LodgeNav />
                )  

            }else if(location.pathname.split('/').splice(-1)[0] === 'info'){
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    ''
                ) 
            }else if(location.pathname.split('/').splice(-1)[0] === 'post'){
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    ''
                ) 
            }else if(location.pathname.split('/').splice(-1)[0] === 'lodge-bank'){
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    ''
                ) 
            }else if(location.pathname.split('/').splice(-1)[0] === 'settings'){
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    ''
                ) 
            }else if(location.pathname.split('/').splice(-1)[0] === 'support'){
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    ''
                ) 
            }else{
                set_active_header(
                    <Header />
                )

                set_active_nav(
                    <Navigation />
                ) 
            }

            console.log( )
            
        }else if(location.pathname.split('/').splice(1,2)[0] === 'agent'){

            set_active_header(
                <AgentHeader />
            )

            set_active_nav(
                ''
            )
            
        }else {
            set_active_header(
                ''
            )

            set_active_nav(
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
                
                
                
                
                <Route path='/client' element={<Home />}></Route>
                <Route path='/client/user' element={<Profile />}></Route>
                
                <Route path='/client/user/support' element={<Support />}></Route>
                <Route path='/client/user/settings' element={<Settings />}></Route>
                <Route path='/client/user/post' element={<MyPost />}></Route>
                <Route path='/client/user/lodge-bank' element={<SavedLodge />}></Route>
                 
                <Route path='/client/inbox' element={<Inbox />}></Route>
                <Route path='/client/notice' element={<Notice />}></Route> 
                <Route path='/client/lodge' element={<Lodge />}></Route>
                <Route path='/client/cart' element={<Cart />}></Route>
                <Route path='/client/user/info' element={<ProfileInfo />}></Route>
                <Route path='/client/space' element={<Space />}></Route>

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
                <Route path='/agent/user/info' element={<AgentProfileInfo />}></Route>
                <Route path='/agent/notice' element={<AgentNotice />}></Route>
                <Route path='/agent/space' element={<AgentSpace />}></Route>
                <Route path='/agent/client/request' element={<AgentClientRequest />}></Route>
                <Route path='/agent/signup' element={<AgentSignup />}></Route>
                <Route path='/agent/signin' element={<AgentSignin />}></Route>
                
            </Routes>
            {
                active_nav 
            }

        </>
     );
}
 
export default App;