import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import loveSvg  from '../../assets/svg/love-svgrepo-com (1).svg'
import infoSvg  from '../../assets/svg/info-svgrepo-com (3).svg'
import questionSvg  from '../../assets/svg/question-svgrepo-com.svg'
import cartSvg  from '../../assets/svg/cart-4-svgrepo-com (2).svg'
import closetSvg  from '../../assets/svg/elegant-closet-svgrepo-com.svg'
import statusSvg  from '../../assets/svg/status-up-svgrepo-com (1).svg'
import balconySvg  from '../../assets/svg/balcony-svgrepo-com.svg'
import agentSvg  from '../../assets/svg/support-svgrepo-com (1).svg'
import stepSvg  from '../../assets/svg/step-up-female-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'

const Lodge = () => {

    let navigate = useNavigate();


    return ( 
        <>
            <div className="client-lodge">
                <div className="client-card shadow-sm">
                    {/*<img src={l} style={{height: '60%', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '15px'}} alt=" />*/}

                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">

                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={l} style={{height: '168px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                {/*<div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
        </div>*/}
                            </div>

                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={l} style={{height: '168px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                {/*<div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
    </div>*/}
                            </div>

                            <div className="carousel-item">
                                <img src={l} style={{height: '168px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                {/*<div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
</div>*/}
                            </div>

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

                    <div className="client-lodge-details">

                        <div className="client-lodge-data1">
                            <div className="client-lodge-name">
                                Wintess Lodge &#x2022; <span style={{color: '#0040ff', fontSize: 'small', fontWeight: 'bold'}}>(VIP)</span>
                            </div>
                            <div className="client-lodge-price">
                                <span style={{fontSize: 'small'}}>&#x20A6; &nbsp;</span>
                                <span>121,000</span>
                            </div>
                        </div>
                        <div className="client-lodge-data2">
                            <div className="client-lodge-location">
                                <span>
                                    <img src={locationSvg} style={{height: '20px', width: '20px', marginBottom: '10px'}} alt="" />
                                </span>
                                <span style={{padding: '0 0 10px 0', fontSize: 'small', fontWeight: '500'}}>
                                    School Gate &#x2022; 
                                    &nbsp;
                                    <span style={{color: '#0040ff', fontSize: 'x-small', fontWeight: 'bold'}}>
                                        26 miles 
                                    </span>
                                    <span style={{fontSize: 'medium', fontWeight: '1000', margin: '0 5px 0 5px'}}>
                                        &#x2191;
                                    </span> 
                                    <span style={{color: '#0040ff', fontSize: 'x-small', fontWeight: 'bold'}}>
                                        from school gate
                                    </span>
                                </span>
                                
                            </div>

                            <div className="client-lodge-save">
                                <img src={cartSvg} style={{height: '22px', width: '22px'}} alt="" />
                            </div>

                        </div>
                        <div className="client-lodge-data3" >
                            <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px', whiteSpace: 'nowrap'}}>
                                <span>
                                    Ground Floor
                                </span>
                                
                            </span>

                            <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px'}}>
                                <span>
                                    Balcony &#10060;
                                </span>
                                
                            </span>

                            <span style={{fontSize: 'x-small', fontWeight: 'bold', margin: '0 5px 0 5px'}}> 
                                <span>
                                    Wardrope &#9989;
                                </span>
                                
                            </span>
                        </div>

                    </div>
                </div>

                <div className="client-lodge-body shadow">

                    <div style={{display: 'flex', whiteSpace: 'nowrap', marginBottom: '25px'}}>
                        <img src={infoSvg} style={{height: '20px', width: '20px', marginRight: '10px'}} alt="" />
                        <h6>
                            This Lodge have your Desired Amenities
                        </h6>

                    </div>

                    <div className="client-availble-amnities">

                        <h6>Availble Amenities</h6>

                        <ul>
                            <li>Balcony</li>
                            <li>Wardrope</li>
                            <li>Water</li>
                            <li>Light</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                            <li>Toilet</li>
                            <li>Ground floor</li>
                        </ul>

                    </div>

                    <div className="client-availble-amnities">


                        <h6>Unavailble Amenities</h6>

                        <ul>
                            <li>Fan</li>
                            <li>Upstairs</li>
                            <li>Tiled Floor</li>
                            <li>Space</li>
                        </ul>

                    </div>

                    <br />
                    <br />


                    <div className="client-lodge-status">
                    
                        <div style={{whiteSpace: 'nowrap', marginBottom: '25px'}}>

                            <span style={{display: 'flex' }}>
                                <img src={statusSvg } style={{height: '28px', marginBottom: '20px', width: '28px', marginRight: '10px'}} alt="" />
                                <h6 style={{marginTop: '6px '}}>Lodge Status</h6>
                            </span>
                            <h6>
                            
                                <ul >
                                    <li style={{padding: '10px', whiteSpace: 'pre-wrap'}}>Lodge Is Under Inspection at The Moment</li>
                                    <li style={{padding: '10px', whiteSpace: 'pre-wrap'}}>Lodge Is In Good Condition</li>
                                    <li style={{padding: '10px', whiteSpace: 'pre-wrap'}}>Lodge Will or Will Not Be Available Based On Current Occupant Decision</li>
                                </ul>
                            </h6>
                        </div>

                        <div>

                        </div>
                    </div>

                    <br />

                    <button style={{padding: '12px 15px 12px 15px', background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )', color: '#fff', display: 'flex', alignItems: 'center', position: 'relative', whiteSpace: 'nowrap', borderRadius: '5px', border: 'none', }}>
                        <img src={agentSvg} style={{height: '30px',float: 'left', width: '20px', marginRight: '10px'}} alt="" />
                        
                        <h6 style={{float: 'right', marginTop: '8px', width: '90%', fontSize: 'small'}}>Contact Our Agent Here For More Enquiries</h6>
                    </button> 
                    <hr /> 

                    <div style={{display: 'flex', whiteSpace: 'nowrap', marginBottom: '25px'}}>

                        <img src={questionSvg} style={{height: '30px', width: '30px', marginRight: '10px'}} alt="" />

                        <h5>
                            Frequently Asked Questions
                        </h5> 

                    </div>


                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button style={{whiteSpace: 'nowrap', fontSize: 'x-small', fontWeight: 'bold'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Why Groungd Floor cost less than upfloor
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button style={{whiteSpace: 'nowrap', fontSize: 'x-small', fontWeight: 'bold'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Why prices Lodges in different location varies
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button style={{whiteSpace: 'nowrap', fontSize: 'x-small', fontWeight: 'bold'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Which Location is closest to UNIZIK
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            
        </>
     );
}
 
export default Lodge;