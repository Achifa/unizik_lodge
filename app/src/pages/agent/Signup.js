import { useEffect, useRef, useState } from "react"
import { UPLOAD_AGENT_SIGNUP_FORM } from "../../axios/agent"
import { useNavigate } from "react-router-dom"



const AgentSignup = () => {

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
        let o = document.querySelector('.agent-signup-overlay');
        o.setAttribute('id', 'agent-signup-overlay')
        let response = await UPLOAD_AGENT_SIGNUP_FORM(fname,lname,sname,email,phone,uname,gender,address1,address2,pwd,photo);
        console.log(response);
        if(response){
            o.style.background = "#000"
            o.style.opacity = ".5"
            o.innerHTML = 'Redirecting...'

            setTimeout(() => {
                navigate('/agent/signin')
            }, 1000);
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

            let close = document.querySelector('.agent-frame-close');

            let cnt = document.querySelector('.agent-file-frame');

            let label = document.querySelector('.agent-file-label');
            close.style.display = 'flex';
            label.style.display = 'none';
            
            //cnt.innerHTML = '';
            cnt.append(close)
            cnt.append(img) 
            
            close.onclick = e => {
                close.style.display = 'none';
                label.style.display = 'flex';
                cnt.querySelector('img').remove()

                document.querySelector('#agent-file').value = ''
                
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

    useEffect(() => {
        setFormInfo(formData[0])
    }, []);

    let handleNextForm = (elem, formNum) => {
        
        setNum(formNum);
        
        if(formNum !== '6'){
            elem.setAttribute('id', 'agent-inactive-elem')
            elem.nextElementSibling.removeAttribute('id')
        }
        
    }

    let handlePrevForm = (elem, formNum) => {
        setNum(formNum);

        if(formNum !== '0'){
            elem.setAttribute('id', 'agent-inactive-elem')
            elem.previousElementSibling.removeAttribute('id')
        }else{
            return false
        }
    }

    let handleNext = e => {
        e.preventDefault();
        let f = [...document.querySelector('form').children];

        //let hiddenForm = f.filter(item => item.hasAttribute('id'));
        let visibleForm = f.filter(item => !item.hasAttribute('id'));
        handleNextForm(visibleForm[0], visibleForm[0].nextElementSibling.dataset.num)
        
    }

    let handlePrev = e => {
        e.preventDefault();

        let f = [...document.querySelector('form').children];

        //let hiddenForm = f.filter(item => item.hasAttribute('id'));
        let visibleForm = f.filter(item => !item.hasAttribute('id'));
        handlePrevForm(visibleForm[0], visibleForm[0].previousElementSibling.dataset.num)
       
    }

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

    return ( 
        <>
            <div  className="agent-signup-overlay">

            </div>
        
            <div className="agent-signup-form">

                <div className="agent-form-name">
                    <h4>
                        Agent Signup Form
                    </h4>
                </div>

                <br />

                <div className="agent-form-step-illustrator">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>

                <div className="agent-form-detail">
                    <h5>
                        {formInfo}
                    </h5>
                </div>
                <form action="">

                    <div data-num='1' className="agent-form-one">
                        <div className="agent-input-cnt">
                            <input onInput={e => setsname(e.target.value)} type="text" placeholder="SurnName" />
                        </div>

                        <div className="agent-input-cnt">
                            <input onInput={e => setfname(e.target.value)} type="text" placeholder="FirstName" />
                        </div>

                        <div className="agent-input-cnt">
                            <input onInput={e => setlname(e.target.value)} type="text" placeholder="LastName" />
                        </div>
                    </div>

                    <div data-num='2' id='agent-inactive-elem' className="agent-form-two">
                        <div className="agent-input-cnt">
                            <input onInput={e => setemail(e.target.value)} type="text" placeholder="Email" />
                        </div>

                        <div className="agent-input-cnt">
                            <input onInput={e => setuname(e.target.value)} type="text" placeholder="UserName" />
                        </div>

                        <div className="agent-input-cnt">
                            <input onInput={e => setphone(e.target.value)} type="text" placeholder="Phone" />
                        </div>
                    </div>

                    <div data-num='3' id='agent-inactive-elem' className="agent-form-three">
                        <div className="agent-input-cnt" style={{height: '60px', marginBottom: '20px'}}>
                           <h6>Gender</h6>
                           <br />
                           
                           <div style={{width: '40%', display: 'flex', padding:'0 0 0 10px', float: 'left'}}>
                                <label  htmlFor="Male"><h6>Male</h6></label>&nbsp;&nbsp;
                                <input onInput={e => setgender(e.target.value)} style={{height: '20px', width: '20px'}} type="radio" name="gender" id="Male" />
                            </div> 


                            <div style={{width: '40%', display: 'flex', padding:'0 0 0 10px', float: 'right'}}>
                                <label  htmlFor="Female"><h6>Female</h6></label>&nbsp;&nbsp;
                                <input onInput={e => setgender(e.target.value)} style={{height: '20px', width: '20px'}} type="radio" name="gender" id="Female" />
                            </div>
                        </div>

                        <br />

                        <div className="agent-input-cnt">
                            <input onInput={e => setaddress1(e.target.value)} type="text" placeholder="Address 1" />
                        </div>

                        <div className="agent-input-cnt">
                            <input onInput={e => setaddress2(e.target.value)} type="text" placeholder="Address 2" />
                        </div>
                    </div>

                    <div data-num='4' id='agent-inactive-elem' className="agent-form-four">
                        <div className="agent-input-cnt">
                            <input onInput={e => setpwd(e.target.value)} type="password" name="" placeholder="Create password" id="" />
                        </div>

                        <div className="agent-input-cnt">
                            <input type="password" placeholder="Confirm Password" name="" id="" />
                        </div>
                    </div>


                    <div style={{padding: '10px'}} data-num='5' id='agent-inactive-elem' className="agent-form-five">

                        <div className="agent-file-frame">
                            <label className="agent-file-label" htmlFor="agent-file">
                                Upload File
                            </label>
                            <div className="agent-frame-close">x</div>
                        </div>

                        <div className="agent-input-cnt">
                            <input onChange={handleImg}  style={{display: 'none'}} type="file" name="" id="agent-file" />
                        </div> 
                        
                    </div>

                </form>

                <div className="agent-btn-cnt">
                    <button  disabled={num === '1' ? true : false} onClick={handlePrev} style={{float: 'left'}}>Previous</button>
                    <button onClick={btnInfo === 'Next' ? handleNext : dataUpload} style={{float: 'right'}}>{btnInfo}</button>
                </div>

            </div>
        </>
     );
}
 
export default AgentSignup;