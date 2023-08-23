import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN, UPLOAD_AGENT_SIGNIN_FORM } from "../axios/agent";

const Login = () => {

    let navigate = useNavigate()

    let [active_label,set_active_label] = useState();

    let [err, set_err] = useState('')
    let [email, setemail] = useState('')
    let [pwd,setpwd] = useState('')

    let loader = <span className="loader"></span>;
    let [log, set_log] = useState('Login')




    let form_labels = useRef(
        [
            ' Login Form',
        ] 
    )


    let submit = e => UPLOAD_AGENT_SIGNIN_FORM(email,pwd)
    
    useEffect(() => {
        set_active_label(form_labels.current[0])
    }, [])



    let handleBtns = async(e) => {
        e.target.disabled = true;
        set_log(loader)
        set_err('')
        e.preventDefault();


        submit()
        .then((data) => {
            console.log(data)
            if(data.user){
                window.localStorage.setItem('agentToken', data.token)
                navigate(`/agent`)

            }else{
                set_err(data.Mssg);
                set_log('Login')
                e.target.disabled = false;
            }
        })
        .catch((err) => {
            console.log(err)
            //set_err(err.response.data.Mssg)
            set_log('Login')
            e.target.disabled = false;
        })

      
      
    }
 


    return ( 
        <>
            
            <div className="signin" style={{overflow: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100vh'}}>

                <form className="signin-form">

                   

                    <div style={{width: '100%'}} className="form-input-cnt">
                        <input onInput={e => setemail(e.target.value)} type="text" placeholder="Email"/>     
                    </div>
                                
                    <div style={{width: '100%', marginBottom: '20px'}} className="form-input-cnt">
                        <input onInput={e => setpwd(e.target.value)} type="text" placeholder="Password"/>
                    </div>

                    
                    <small>
                        <p>Don't have an account? <span style={{color: 'blue'}}>Signup here.</span></p>
                    </small>

                    <small>
                        <p>Forgot Password?</p>
                    </small>

                    <div className="err-mssg">{err}</div>
                   

                    <div className="btn-cnt">
                        <button onClick={handleBtns}  style={{float: 'right'}}>{log}</button>
                    </div>

                </form>

             
            </div>
        </>
     );
}
 
export default Login;
