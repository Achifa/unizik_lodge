import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import cartSvg  from '../../assets/svg/cart-4-svgrepo-com (2).svg'
import lodgeSvg  from '../../assets/svg/save-svgrepo-com.svg'
import closetSvg  from '../../assets/svg/elegant-closet-svgrepo-com.svg'
import balconySvg  from '../../assets/svg/balcony-svgrepo-com.svg'
import commentSvg  from '../../assets/svg/comments-svgrepo-com.svg'
import seenSvg  from '../../assets/svg/seen-svgrepo-com.svg'
import shareSvg  from '../../assets/svg/share-svgrepo-com.svg'
import stepSvg  from '../../assets/svg/step-up-female-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'
import { GET_AGENT_LODGE_POST } from "../../axios/agent";


const MyPost = () => {

    let navigate = useNavigate();

    let [post, setPost] = useState();

    

    let list = [
        {
            link: 'client',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },
        {
            link: 'client',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },
        {
            link: 'client',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },

    ];

    
    

    useEffect(() => {
        GET_AGENT_LODGE_POST(window.localStorage.getItem('agentId'))
        .then((result) => {
            console.log(result)
            let data = result.data.map(item => 
            
                <div className="cols">
                    <div className="client-card shadow">
                        {/*<img src={l} style={{height: '60%', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '15px'}} alt=" />*/}
    
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    
                            <div className="carousel-indicators">
                                {
                                    result.files.map((item, index) => 
                                        
                                        index === 0 
                                        ? 
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> 
                                        :
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    
                                    )
                                }
                                
                            </div>
    
                            <div className="carousel-inner">
    
                                {
                                    result.files.map(item => 
                                        
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <img src={item.file} style={{height: '168px', width: '100%'}} alt="" />
                                            
                                        </div>
                                    
                                    )
                                }
    
                                
    
                            </div>
    
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
    
                        <div onClick={e => navigate('/client/lodge')} className="client-lodge-details">
    
                            <div className="client-lodge-data1">
                                <div className="client-lodge-name">
                                    <span style={{color: '#0040ff', fontSize: 'Large', fontWeight: 'bold'}}>{item.name}</span>
                                </div>
                                <div className="client-lodge-price">
                                    <span style={{fontSize: 'small'}}>&#x20A6; &nbsp;</span>
                                    <span >{item.price}</span>
                                </div>
                            </div>

                            <div className="client-lodge-data2">
                                <div className="client-lodge-location">
                                    <span>
                                        <img src={locationSvg} style={{height: '20px', width: '20px', marginBottom: '10px'}} alt="" />
                                    </span>
                                    <span style={{padding: '0 0 10px 0', fontSize: 'small', fontWeight: '500'}}>
                                        {item.address1} &#x2022; 
                                        &nbsp;
                                        <span style={{color: '#0040ff', fontSize: 'x-small', fontWeight: 'bold'}}>
                                            {item.address2}
                                        </span>
                                        <span style={{fontSize: 'medium', fontWeight: '1000', margin: '0 5px 0 5px'}}>
                                            &#x2191;
                                        </span> 
                                        {/*<span style={{color: '#0040ff', fontSize: 'x-small', fontWeight: 'bold'}}>
                                            from school gate
    </span>*/}
                                    </span>
                                    
                                </div> 
    
                                <div className="client-lodge-save">
                                    <span style={{width: '48%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5px',  height: '100%', float: 'left', margin: '0'}}> 
                                        <img src={cartSvg} style={{height: '22px', width: '22px'}} alt="" />
                                        <div style={{fontSize: 'xx-small', color: '#006eff'}}>cart </div>
                                    </span>
                                     
                                    <span style={{width: '48%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5px',  height: '100%', float: 'right', margin: '0'}}>
                                        <img src={lodgeSvg} style={{height: '22px', width: '22px'}} alt="" />
                                        <div style={{fontSize: 'xx-small', color: '#006eff'}}>save </div>
    
                                    </span>
                                </div>  
    
                            </div>

                            <div className="client-lodge-data3" style={{background: '#fff', display: 'flex'}}>
                                <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px', whiteSpace: 'nowrap'}}>
                                    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <small >170</small>
    
                                        <div >&nbsp;
                                            <img src={seenSvg} style={{height: '15px', width: '15px'}} alt="" />
                                            <small>seen</small>&nbsp;
                                        </div>
                                    </span>
                                    
                                </span>
    
                                <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px'}}>
                                    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <small >10</small>
    
                                        <div >&nbsp;
                                            <img src={commentSvg} style={{height: '15px', width: '15px'}} alt="" />&nbsp;
                                            <small>comment</small>
                                        </div>
                                    </span>
                                    
                                </span>
    
                                <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px'}}>
                                    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <small >10</small>
    
                                        <div >&nbsp;
                                            <img src={shareSvg} style={{height: '15px', width: '15px'}} alt="" />&nbsp;
                                            <small>shares</small>
                                        </div>
                                    </span>
                                    
                                </span>
    
                               
                            </div>
    
                        </div>
                    </div>
                </div>
    
            )
    
            set_cols(data)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])

    let [cols, set_cols] =  useState([1, 2, 3, 4])



    return ( 
        <>
            <div className="client-posts">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-2 p-2">
                    {
                        cols
                    }
                </div>
            </div>
        </>
     );
}
 
export default MyPost;