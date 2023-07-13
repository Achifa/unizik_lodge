import { useEffect, useState } from 'react';
import filterSvg  from '../assets/svg/filter-rectangle-svgrepo-com.svg'
import userSvg  from '../assets/svg/user-svgrepo-com (1).svg'
import backSvg  from '../assets/svg/back-svgrepo-com (1).svg'
import cartSvg  from '../assets/svg/cart-4-svgrepo-com (2).svg'
import unizikSvg  from '../assets/images/Badge_of_Nnamdi_Azikiwe_University.png'
import myImg from '../assets/images/Screenshot_20220720-122957.png'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    let [filterDisplay , setFilterDisplay] = useState(false)
    let [priceRange0, setPriceRange0] = useState(0);
    let [priceRange1, setPriceRange1] = useState(0);

    let [profileHeader, setProfileHeader] = useState(false);
    let [HomeHeader, setHomeHeader] = useState(false);
    let [LodgeHeader, setLodgeHeader] = useState(false);

    let nav = useNavigate();

    let location = useLocation();

    useEffect(() => {
        if(location.pathname.split('/').splice(-1)[0] === 'user'){
            setProfileHeader(true)
            setHomeHeader(false)
            setLodgeHeader(false)
        }else if(location.pathname.split('/').splice(-1)[0] === 'lodge'){
            setLodgeHeader(true)
            setProfileHeader(false)
            setHomeHeader(false)
        }else{
            setProfileHeader(false)
            setLodgeHeader(false)
            setHomeHeader(true)
        }
    }, [location])



    return ( 
        <>
            {
                filterDisplay
                &&
                (
                    <div className="client-lodge-filter-overlay">
                        <div className="client-lodge-filter">

                            <div className="client-price-range" style={{height: '270px'}}>

                            
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

                            <div className="client-amenities" style={{padding: '10px'}}>
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


                            <div className="client-amenities" style={{padding: '10px'}}>
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

            <div className="client-header">

                {
                    HomeHeader
                    &&

                    (
                        <ul>

                            <li>
                                <img src={unizikSvg}  style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', position: 'absolute', left: '20px', top: '20px'}} alt="" />
                            </li>
                            <li >
                                <img src={cartSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            <li onClick={e => {
                                filterDisplay ? setFilterDisplay(false) : setFilterDisplay(true)
                            }}>
                                <img src={filterSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li>
                            <li onClick={e => nav('/client/user')}>
                                <img src={userSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li>
                        </ul>
                    )
                }

                {
                    profileHeader
                    &&
                    (
                        <ul>
                            <li onClick={e => nav('/client/user')}>
                                <img src={myImg} style={{height: '50px', width: '50px', borderRadius: '50%', position: 'absolute', left: '20px', top: '10px'}} alt="" />

                                <span style={{fontSize: 'x-small', background: 'green', padding: '2.5px 5px 2.5px 2.5px', borderRadius: '5px', color: '#fff', position: 'absolute', left: '72px', top: '35px' }}>UserId: 667gh-76100-990ph</span> 
                            </li> 

                            <li onClick={e => nav('/client/')}>
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
                            <li onClick={e => nav('/client/user')}>
                                <img src={myImg} style={{height: '50px', width: '50px', borderRadius: '50%', position: 'absolute', left: '20px', top: '10px'}} alt="" />

                                <span style={{fontSize: 'x-small', background: 'green', padding: '2.5px 5px 2.5px 2.5px', borderRadius: '5px', color: '#fff', position: 'absolute', left: '72px', top: '35px' }}>UserId: 667gh-76100-990ph</span> 
                            </li> 

                            <li onClick={e => nav('/client/')}>
                                <img src={backSvg} style={{height: '20px', width: '20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                            </li> 
                            
                        </ul>
                    )
                }

            </div>
        </>
     );
}
 
export default Header;