import { useEffect, useState } from 'react'
import comment_svg from '../../assets/svg/comments-svgrepo-com.svg'
import share_svg from '../../assets/svg/share-svgrepo-com.svg'
import views_svg from '../../assets/svg/views-svgrepo-com.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
//import comment_img from '../../assets/images/vector-icon-set-chat-bubble-white-blue-message-texting_134830-1235.avif'
//import delete_svg from '../../assets/svg/delete-svgrepo-com (1).svg'
import { CHECK_USER, DELETE_COMMENT, GET_COMMENT, SIGNIN, UPLOAD_COMMENT } from '../../axios/client';

import {useSelector} from 'react-redux'
 
const LodgeNav = () => {

    let [cmmt, set_cmmt] = useState(0)
    let [views, set_views] = useState(0)
    let [shares, set_shares] = useState(0)
    let [list, setlist] = useState('');

    let [email,setemail] = useState('')
    let [pwd,setpwd] = useState('')
    let [err, set_err] = useState('')

    let [article_id, set_article_id] = useState();
    let [user_id, set_user_id] = useState();
    let [name, set_name] = useState();

    let loader = <span class="login_loader"></span>;
    let [log, set_log] = useState('Login');

    let [is_logged_in, set_is_logged_in] = useState(false);


    let open_comments = e => {
        if(document.querySelector('.comment-display-overlay').hasAttribute('id')){
            document.querySelector('.comment-display-overlay').removeAttribute('id');
            document.querySelector('.comment-display').removeAttribute('id');

        }else{
            document.querySelector('.comment-display-overlay').setAttribute('id', 'active')
            document.querySelector('.comment-display').setAttribute('id', 'comment-display');

        }
    }

    let open_login_cnt = e => {
        document.querySelector('.floating-panel').removeAttribute('id');
        document.querySelector('.login_overlay').setAttribute('id', 'login_overlay');

    } 

    let open_messenger = e => {

        if(document.querySelector('.comment-display-overlay').hasAttribute('id')){
            document.querySelector('.comment-display-overlay').removeAttribute('id');
            document.querySelector('.comment-display').removeAttribute('id');

            if(is_logged_in){
                let elem = e.currentTarget;
                document.querySelector('.floating-panel').removeAttribute('id')
                
                document.querySelector('.comment_messenger_overlay').setAttribute('id', 'comment_messenger_overlay')
                document.querySelector('.comment_messenger').setAttribute('id', 'comment_messenger')
            }else{
                open_login_cnt()
            }

        }else{
            if(is_logged_in){
                let elem = e.currentTarget;
                document.querySelector('.floating-panel').removeAttribute('id')
                
                document.querySelector('.comment_messenger_overlay').setAttribute('id', 'comment_messenger_overlay')
                document.querySelector('.comment_messenger').setAttribute('id', 'comment_messenger')
            }else{
                open_login_cnt()
            }

        }

        
        

    }

    let [mssg, set_mssg] = useState();


    let remove_comment_overlay = e => {
        if(e.target === document.querySelector('.comment-display-overlay')){
            e.target.removeAttribute('id');
            //document.querySelector('.floating-panel').setAttribute('id', 'floating-panel')
        }else{

        }
    }

    let remove_overlay = e => {
        if(e.target === document.querySelector('.comment_messenger_overlay')){
            e.target.removeAttribute('id');
            document.querySelector('.floating-panel').setAttribute('id', 'floating-panel')
        }else{

        }
    }

    let messenger = async(e) => {
        let value = comment_upload(article_id, user_id, name, mssg).then(result => result).catch(err => err);
        let data = await value
        if(data){
            document.querySelector('.comment_messenger_overlay').removeAttribute('id');
            document.querySelector('.floating-panel').setAttribute('id', 'floating-panel')

            document.querySelector('.popin').setAttribute('id', 'popin');
            document.querySelector('.popin').innerHTML = 'Comment Was Successfully Uploaded...'
            setTimeout(() => {
                document.querySelector('.popin').removeAttribute('id');
            }, 2000);
        }else{
            document.querySelector('.comment_messenger_overlay').removeAttribute('id');
            document.querySelector('.floating-panel').setAttribute('id', 'floating-panel')
            
            document.querySelector('.popin').setAttribute('id', 'popin');
            document.querySelector('.popin').innerHTML = 'Comment Was Not Successfully Uploaded...'
            setTimeout(() => {
                document.querySelector('.popin').removeAttribute('id');
            }, 2000);


        }
    }

    
    let submit = e => SIGNIN(email,pwd);
    
    let client_authentication = e => {
        CHECK_USER()
        .then((result) =>{ 
            let user = result.user;
            if(result.bool){
                set_is_logged_in(true);
                set_user_id(user.client_id);
                set_name(`${user.fname} ${user.lname}`);
            }else{
                set_is_logged_in(false)
            }
        })
        .catch((err) => console.log(err));
    }


    let handleBtns = async(e) => {
        e.target.disabled = true;
        set_log(loader)
        set_err('')
        e.preventDefault()

        submit()
        .then((data) => {
            client_authentication();
            document.querySelector('.login_overlay').removeAttribute('id');
            document.querySelector('.floating-panel').setAttribute('id', 'floating-panel');

            document.querySelector('.popin').setAttribute('id', 'popin');
            document.querySelector('.popin').innerHTML = 'Login Was Successfull...'
            setTimeout(() => {
                document.querySelector('.popin').removeAttribute('id');
                set_log('Login')
            }, 5000);

            

        })
        .catch((err) => {
            set_err(err.response.data.Mssg)
            set_log('Login')
            e.target.disabled = false;

            document.querySelector('.popin').setAttribute('id', 'popin');
            document.querySelector('.popin').innerHTML = 'Login Was Not Successfull...'
            setTimeout(() => {
                document.querySelector('.popin').removeAttribute('id');
            }, 5000);
        })

    }
   

    let comment_upload = (article_id,user_id,name,mssg) => {
        let response = UPLOAD_COMMENT(article_id,user_id,name,mssg)
        .then((result) => {
            return(result)
        })
        .catch((err) => {
            return(err)
        })

        return response;
    }

    let remove_login_overlay = e => {
        if(e.target === document.querySelector('.login_overlay')){
            e.target.removeAttribute('id');
            document.querySelector('.floating-panel').setAttribute('id', 'floating-panel')
        }else{

        }
    } 

    let nav = useNavigate(); 

    return ( 
        <>
            <div className="client-nav shadow">
                <div className="floating-panel shadow" id='floating-panel'>
                    
                    <div className="comment-er" onClick={open_messenger}>
                        <small>Write A Comment</small>
                    </div>
    
                    <ul>
                        <li onClick={open_comments}>
                            <small >{cmmt}</small>
                            <img src={comment_svg} style={{height: '20px', width: '20px', float: 'left'}} className="card-img-top" alt=""/>
                        </li>
                        <li>
                            <small>{views}</small>
                            <img src={views_svg} style={{height: '20px', width: '20px', float: 'left'}} className="card-img-top" alt=""/>
                        </li>
                        <li>
                            <small>{shares}</small>
                            <img src={share_svg} style={{height: '20px', width: '20px', float: 'left'}} className="card-img-top" alt=""/>
                        </li>
                    </ul>
    
                </div>
            </div>

            <div onClick={remove_comment_overlay} className="comment-display-overlay">
                <div className="comment-display">
                    <div className="comment-head"> &nbsp; {cmmt} &nbsp; {cmmt > 1 ? 'Comments' : 'Comment'}</div>
                    <div className="row row-cols-1 row-cols-md-4 row-cols-sm-1 g-2 p-2">
                        {
                            list
                        }
                    </div>

                    

                </div>
            </div>


            <div className="comment_messenger_overlay" onClick={remove_overlay}>

                <div className="comment_messenger"> 
                    <button style={{float: 'right'}} id='comment-btn' onClick={messenger}>Send</button>
                    <textarea onInput={e => set_mssg(e.target.value)} placeholder='Write Comment Here ...' name="" id="messenger"></textarea>
                </div>
                
            </div>

            <div className="popin"></div>


            <div className="login_overlay" onClick={remove_login_overlay}> 

                <div className="login_cnt">
                    <h6>Login Form</h6>
                    <input onInput={e => setemail(e.target.value)} type="text" placeholder='UserName' />
                    <input onInput={e => setpwd(e.target.value)} type="password" placeholder='Password' />

                    <div className="err-mssg">{err}</div>

                    <button onClick={handleBtns} style={{width: '70%', marginTop: '20px', marginBottom: '20px', height: '50px', background: 'blue', color: '#fff'}}>{log}</button> 

                    <small>Don't have an account, <Link to='/0/signup'>Sign Up Here</Link></small>
                </div>

            </div>
        
        </>
     );
}
 
export default LodgeNav;