import { useNavigate } from 'react-router-dom';
import homeSvg  from '../../assets/svg/home-1-svgrepo-com (1).svg';
import addSvg  from '../../assets/svg/add-circle-svgrepo-com (1).svg';
import cartSvg  from '../../assets/svg/cart-4-svgrepo-com (2).svg';
import settingsSvg from '../../assets/svg/inbox-archive-svgrepo-com.svg'
import userSvg  from '../../assets/svg/user-svgrepo-com (1).svg'
 

const Navigation = () => {

    let nav = useNavigate(); 
    return ( 

        <>
            <div className="client-nav shadow">
                <ul>
                    <li onClick={e => nav('/client/')}>
                    <img src={homeSvg} style={{height: '20px', width: '20px', position: 'relative'}} alt="" />
                        <small><b>home</b></small>
                    </li>
                    <li onClick={e => nav('/client/cart')}>  
                        <img src={cartSvg} style={{height: '20px', width: '20px', position: 'relative'}} alt="" />
                        <small><b>cart</b></small>
                    </li>
                    <li>
                        <img src={addSvg} onClick={e => nav('/client/space')} style={{height: '20px', width: '20px', position: 'relative'}} alt="" />
                        <small><b>create</b></small>
                    </li>
                    <li>
                        <img src={settingsSvg} onClick={e => nav('/client/inbox')} style={{height: '20px', width: '20px', position: 'relative'}} alt="" />
                        <small><b>inbox</b></small>
                    </li>
                    <li onClick={e => nav('/client/user')}>
                        <img src={userSvg} style={{height: '20px', width: '20px', position: 'relative'}} alt="" />
                        <small><b>me</b></small>
                    </li>
                </ul> 
            </div>
        
        </>
     ); 
}
 
export default Navigation;