import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import cartSvg  from '../../assets/svg/cart-4-svgrepo-com (2).svg'
import closetSvg  from '../../assets/svg/elegant-closet-svgrepo-com.svg'
import balconySvg  from '../../assets/svg/balcony-svgrepo-com.svg'
import stepSvg  from '../../assets/svg/step-up-female-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'

const Home = () => {
    let navigate = useNavigate();

    

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

    let [cols, set_cols] =  useState([1, 2, 3, 4])

    useEffect(() => {
        let data = list.map(item => 
            
            <div className="cols">
                <div className="client-card shadow">
                    {/*<img src={l} style={{height: '60%', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '15px'}} alt=" />*/}

                    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

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

                    <div onClick={e => navigate('/client/lodge')} className="client-lodge-details">

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
            </div>

        )

        set_cols(data)

    }, [])
    
    return ( 
        <>
            

            <div className="client-home">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-3 p-3">
                    {
                        cols
                    }

                </div>

            </div>
        </>
     );
}
 
export default Home;