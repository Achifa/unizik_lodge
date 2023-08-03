import { useEffect, useState } from 'react';
import nnoticeSvg  from '../assets/svg/bell-svgrepo-com.svg'
import userSvg  from '../assets/svg/user-svgrepo-com (1).svg'
import backSvg  from '../assets/svg/back-svgrepo-com (1).svg'
import spaceSvg  from '../assets/svg/create-new-page-svgrepo-com.svg'
import unizikSvg  from '../assets/images/Badge_of_Nnamdi_Azikiwe_University.png'
import myImg from '../assets/images/Screenshot_20220720-122957.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTHENTICATE_USER, CHECK_USER } from '../axios/agent';

const AgentHeader = () => {
    let [filterDisplay , setFilterDisplay] = useState(false)
    let [priceRange0, setPriceRange0] = useState(0);
    let [priceRange1, setPriceRange1] = useState(0);

    let [profileHeader, setProfileHeader] = useState(false);
    let [HomeHeader, setHomeHeader] = useState(false);
    let [LodgeHeader, setLodgeHeader] = useState(false);

    let [CartHeader, setCartHeader] = useState(false);
    let [SpaceHeader, setSpaceHeader] = useState(false);
    let [InboxHeader, setInboxHeader] = useState(false);
    let [NoticeHeader, setNoticeHeader] = useState(false);

    let [SupportHeader, setSupportHeader] = useState(false);
    let [SettingsHeader, setSettingsHeader] = useState(false);
    let [PostHeader, setPostHeader] = useState(false);
    let [InfoHeader, setInfoHeader] = useState(false);
    let [LodgeBankHeader, setLodgeBankHeader] = useState(false);

    let nav = useNavigate();

    let location = useLocation();

    useEffect(() => {
        if(location.pathname.split('/').splice(-1)[0] === 'user'){
            setProfileHeader(true)
            setHomeHeader(false)
            setLodgeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'request'){
            setLodgeHeader(true)
            setProfileHeader(false)
            setHomeHeader(false)
            
            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'notice'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(true)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'earnings'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(true)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'space'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(true)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'inbox'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)
            
            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(true)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === ''){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(true)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'info'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(true)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'support'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(true)
            setSettingsHeader(false)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'post'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(false)
            setPostHeader(true)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'settings'){
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(false)

            setCartHeader(false)
            setSpaceHeader(false)
            setInboxHeader(false)
            setNoticeHeader(false)

            setSupportHeader(false)
            setSettingsHeader(true)
            setPostHeader(false)
            setInfoHeader(false)
            setLodgeBankHeader(false)
        }
    }, [location]) 

    useEffect(() => {

        AUTHENTICATE_USER()
        .then((result) => console.log(result))
        .catch(err => console.log(err))

        CHECK_USER()
        .then((result) => window.localStorage.setItem('agentId', result.user.agentid))
        .catch(err => console.log(err))

    }, [location])

    return ( 
        <>
            {
                filterDisplay
                &&
                (
                    <div className="agent-lodge-filter-overlay">
                        <div className="agent-lodge-filter">

                            <div className="agent-price-range" style={{height: '270px'}}>

                            
                                <h6>Price range</h6>

                                <div className="input-cnt">
                                    <label htmlFor="i-price" style={{fontWeight: 'bold', width: '100%', padding: '0 10px 0 10px'}}>
                                        <span style={{float: 'left'}}>From</span>
                                        <span style={{float: 'right'}}>&#x20A6; &nbsp; {priceRange0}</span>
                                    </label>
                                    <input min={0} max={1000000} onInput={e => setPriceRange0(e.target.value)} style={{width: '100%', height: '5px', border: 'none', outline: 'none'}} type="range" defaultValue={0} name="" id="" />

                                </div>

                                <div className="input-cnt">
                                    <label htmlFor="f-price" style={{fontWeight: 'bold', width: '100%', padding: '0 10px 0 10px'}}>
                                        <span style={{float: 'left'}}>To</span>
                                        <span style={{float: 'right'}}>&#x20A6; &nbsp; {priceRange1}</span>
                                    </label>
                                    <input min={priceRange0} max={1000000} onInput={e => setPriceRange1(e.target.value)} style={{width: '100%', height: '5px', border: 'none', outline: 'none'}} type="range" defaultValue={priceRange0} name="" id="" />

                                </div>

                                <div className="input-cnt">
                                    <div style={{float: 'left', width: '40%'}}>
                                        <h6 htmlFor="">From</h6>
                                        <input style={{width: '100%', float: 'left', height: '40px', outline: 'none', padding: '0 5px 0 5px'}} type="number" name="" id="" />
                                    </div>

                                    <div style={{float: 'right', width: '40%'}}>
                                        <h6 htmlFor="">To</h6>
                                        <input style={{width: '100%', float: 'right', height: '40px', outline: 'none', padding: '0 5px 0 5px'}} type="number" name="" id="" />
                                    </div>
                                </div>

                            </div>

                            <hr />

                            <div className="agent-amenities" style={{padding: '10px'}}>
                                <h6>Lodge Amenities</h6>
                                <div className="input-cnt">
                                    <input type="checkbox" name="" id="Balcony" />
                                    &nbsp;
                                    &nbsp;
                                    <label htmlFor="Balcony">Balcony</label>
                                    <br />
                                    <br />
                                    <input type="checkbox" name="" id="Wardrope" />
                                    &nbsp;
                                    &nbsp;

                                    <label htmlFor="Wardrope">Wardrope</label>
                                </div>
                            </div>

                            <hr />


                            <div className="agent-amenities" style={{padding: '10px'}}>
                                <h6>Lodge Flat</h6>
                                <div className="input-cnt">
                                    <input name='flat' type="radio" id="Ground floor" />
                                    &nbsp;
                                    &nbsp;

                                    <label htmlFor="Ground floor">Ground floor</label>
                                    <br />
                                    <br />
                                    <input name='flat' type="radio" id="Upstairs" />
                                    &nbsp;
                                    &nbsp;

                                    <label htmlFor="Upstairs">Upstairs</label>

                                    
                                </div>
                            </div>

                            <button style={{width: '100%', height: '55px', outline: 'none', border: 'none'}}>
                                Filter
                            </button>

                        </div> 
                    </div>
                )
            }

            <div className="agent-header">

                {
                    HomeHeader
                    &&

                    (
                        <ul>

                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Lodge Request</h4> 
                            </li>

                            
                            <li onClick={e => nav('/agent/notice')}>
                                <img src={nnoticeSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li>
                          
                        </ul>
                    )
                }

                {
                    profileHeader
                    &&
                    (
                        <ul>
                            <li onClick={e => nav('/agent/user')}>
                                <img src={myImg} style={{height: '50px', width: '50px', borderRadius: '50%', position: 'absolute', left: '20px', top: '10px'}} alt="" />

                                <span style={{fontSize: 'x-small', background: 'green', padding: '2.5px 5px 2.5px 2.5px', borderRadius: '5px', color: '#fff', position: 'absolute', left: '72px', top: '35px' }}>UserId: 667gh-76100-990ph</span> 
                            </li> 

                            <li onClick={e => nav('/agent/')}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }


                {
                    LodgeHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h5>Lodge Request Details</h5> 
                            </li>

                            <li onClick={e => nav('/agent/')}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }


{
                    CartHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Cart</h4> 
                            </li>

                            
                            
                        </ul>
                    )
                }

                {
                    SpaceHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Space</h4> 
                            </li>

                             
                            
                        </ul>
                    )
                }

                {
                    InboxHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Inbox</h4> 
                            </li>

                            
                            
                        </ul>
                    )
                }

                {
                    NoticeHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Notice</h4> 
                            </li>

                            <li onClick={e => nav('/agent/')}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }


                {
                    InfoHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Personla Data</h4> 
                            </li>

                            <li onClick={e => nav(-1)}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }

                {
                    PostHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>My Post</h4> 
                            </li>

                            <li onClick={e => nav(-1)}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }

               
                {
                    SettingsHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Profile Settings</h4> 
                            </li>

                            
                            <li onClick={e => nav(-1)}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                        </ul>
                    )
                }

                {
                    SupportHeader
                    &&
                    (
                        <ul>
                            <li style={{position: 'absolute', whiteSpace: 'nowrap', left: '10px', top: '25px', color: '#fff'}}>
                                <h4>Support</h4> 
                            </li>

                            <li onClick={e => nav(-1)}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }

                


            </div>
        </>
     );
}
 
export default AgentHeader;