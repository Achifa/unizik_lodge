import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { UPLOAD_AGENT_SIGNUP_FORM } from "../axios/agent";
import { UPLOAD_CLIENT_SIGNUP_FORM } from "../axios/client";


const Signup = () => {

    let [role, setRole] = useState()

    let [formName, setFormName] = useState();
    let location = useLocation()

    let [fname, setfname] = useState()
    let [lname, setlname] = useState()
    let [sname, setsname] = useState()
    let [email, setemail] = useState()
    let [phone, setphone] = useState()
    let [uname, setuname] = useState()
    let [gender, setgender] = useState()
    let [address1, setaddress1] = useState()
    let [address2, setaddress2] = useState()
    let [pwd, setpwd] = useState()
    

    let [photo, setphoto] = useState();
    let loader = <span className="loader"></span>;

    let navigate = useNavigate();


    let dataUpload = async() => {
        setBtnInfo(loader)
        let o = document.querySelector('.signup-overlay');
        o.setAttribute('id', 'signup-overlay')
        if(role === 'client'){
            let response = UPLOAD_CLIENT_SIGNUP_FORM(fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo);

            if(response){
                o.style.background = "#000"
                o.style.opacity = ".5"
                o.innerHTML = 'Redirecting...'
    
                setTimeout(() => {
                    navigate('/client/signin')
                }, 1000);
            }
        }else{
            let response = UPLOAD_AGENT_SIGNUP_FORM(fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo);

            if(response){
                o.style.background = "#000"
                o.style.opacity = ".5"
                o.innerHTML = 'Redirecting...'
    
                setTimeout(() => {
                    navigate('/agent/signin')
                }, 1000);
            }
        }
        
        
        
    }

    let handleImg = e => {
        let file = e.target.files[0];
        //let value = e.target.value;

        let reader = new FileReader();

        reader.addEventListener('load', result => {
            //console.log(reader.result)
            let url = reader.result;
            setphoto(url);

            let img = document.createElement('img');
            img.style.height = '100%'
            img.style.width = '100%'
            img.src = url

            let close = document.querySelector('.frame-close');

            let cnt = document.querySelector('.file-frame');

            let label = document.querySelector('.file-label');
            close.style.display = 'flex';
            label.style.display = 'none';
            
            //cnt.innerHTML = '';
            cnt.append(close)
            cnt.append(img) 
            
            close.onclick = e => {
                close.style.display = 'none';
                label.style.display = 'flex';
                cnt.querySelector('img').remove()

                document.querySelector('#file').value = ''
                
            }
        })

        reader.readAsDataURL(file) 


        
    }
 

    let [num, setNum] = useState('1')  

    let [formData, setformData] = useState([
        'Personal Info',
        'Media Data',
        'Demograhy',
        'Security Setup',
        'Cover Photo'
    ]);


    let [formInfo, setFormInfo] = useState()

    

 

 

    let [btnInfo, setBtnInfo] = useState('Next')

     

    useEffect(() => {

        if(num === '1'){
            setFormInfo(formData[0])
            setBtnInfo('Next')
        }else if(num === '2'){
            setFormInfo(formData[1])
            setBtnInfo('Next')
            
        }else if(num === '3'){
            setFormInfo(formData[2])
            setBtnInfo('Next')
            
        }else if(num === '4'){
            setFormInfo(formData[3])
            setBtnInfo('Next')
            
        }else if(num === '5'){
            setFormInfo(formData[4])
            setBtnInfo('Submit')

        }

    }, [num])

    useEffect(() => {
        setFormInfo(formData[0])
    }, []);


    useEffect(() => {
        if(location.pathname.split('/').splice(1,2)[0] === 'client'){
            setFormName('Client Signup Form')
            setRole('client')
        }else if(location.pathname.split('/').splice(1,2)[0] === 'agent'){
            setFormName('Agent Signup Form')
            setRole('agent')

        }
    }, [location])




    return ( 
        <>
            <div  className="signup-overlay">

            </div>
        
            <div className="signup-form">


                <form action="" className="form-field">
                {/*<b style={{margin: '0 0 0 10px'}}>Personal Info</b>
*/}
                <div data-num='1' className="form-one">

                    <div className="form-input-cnt">
                        <input onInput={e => setfname(e.target.value)} type="text" placeholder="FirstName" />
                    </div>

                    <div className="form-input-cnt">
                        <input onInput={e => setlname(e.target.value)} type="text" placeholder="LastName" />
                    </div>

                    <div className="form-input-cnt">
                        <input onInput={e => setemail(e.target.value)} type="text" placeholder="Email" />
                    </div>

                </div>
                <br />

                {/*<b style={{margin: '0 0 0 10px'}}>Media Info</b>
*/}
                <div data-num='2' className="form-two">
                    

                    <div className="form-input-cnt">
                        <input onInput={e => setuname(e.target.value)} type="text" placeholder="UserName" />
                    </div>

                    <div className="form-input-cnt">
                        <input onInput={e => setphone(e.target.value)} type="text" placeholder="Phone" />
                    </div>
                </div>
                <br />

                {/*<b style={{margin: '0 0 0 10px'}}>Location Info</b>
*/}
                


                {/*<b style={{margin: '0 0 0 10px'}}>Gender Info</b>
*/}
                <div data-num='3' className="form-three">
                    <div className="form-input-cnt" style={{fontSize: 'medium', float: 'left', width: '100%'}}>
                       <select name="" id="" style={{width: '100%', height: '50px', padding: '10px'}}>
                            <option value="null">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                       </select>
                    </div>

                </div>
                <br />

                {/*<b style={{margin: '0 0 0 10px'}}>Security Info</b>
*/}
                <div data-num='4' className="form-four">
                    <div className="form-input-cnt">
                        <input onInput={e => setpwd(e.target.value)} type="password" name="" placeholder="Create password" id="" />
                    </div>

                </div>
                <br />

                {/*<b style={{margin: '0 0 0 10px'}}>Bio Info</b>
*/}
                <div style={{padding: '10px'}} data-num='5' className="form-five">

                    <div className="file-frame">
                        <label className="file-label" htmlFor="file">
                            Upload File
                        </label>
                        <div className="frame-close">x</div>
                    </div>

                    <div className="form-input-cnt">
                        <input onChange={handleImg}  style={{display: 'none'}} type="file" name="" id="file" />
                    </div> 

                </div>

                <small>
                    <p>Already have an account? <span style={{color: 'blue'}}>Signin here.</span></p>
                </small>

                </form>

                <div className="btn-cnt">
                    <button onClick={dataUpload} style={{float: 'right'}}>Register</button>
                </div>

            </div>
        </>
     );
}
 
export default Signup;