import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import myPhoto  from '../../assets/images/Screenshot_20220720-122957.png'
import closetSvg  from '../../assets/svg/elegant-closet-svgrepo-com.svg'
import balconySvg  from '../../assets/svg/balcony-svgrepo-com.svg'
import stepSvg  from '../../assets/svg/step-up-female-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'

const Home = () => {
    let navigate = useNavigate();

    

    let list = [
        {
            link: 'agent',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },
        {
            link: 'agent',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },
        {
            link: 'agent',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },

    ];

    let [cols, set_cols] =  useState([1, 2, 3, 4])

    useEffect(() => {
        let data = list.map(item => 
            
            <div className="cols">
                <div className="agent-card shadow" onClick={e => navigate('client/request')}>
                    {/*<img src={l} style={{height: '60%', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '15px'}} alt=" />*/}

                    
                    <div className="agent-client-dp">

                        <img src={myPhoto}  style={{height: '35px', width: '35px', borderRadius: '50%', float: 'left', border: '2px solid green'}} alt="" />

                        <span style={{position: 'absolute', bottom: '8px', left: '55px', fontSize: 'x-small', fontWeight: 'bold', background: 'green', padding: '2.5px 5px 2.5px 5px', borderRadius: '2px', color: '#fff'}}>
                            Prosper 207
                        </span>

 
                    </div>

                    <div className="agent-client-title">
                        I need a classic lodge with wide space and a two bed room flat and also the lodge must be close to school gate Thank you 
                    </div>
                    <div className="agent-client-budget">
                        Budget: $15.00 - $120.00
                    </div>
                    <div className="agent-client-description">
                        The lodge consists of multiple buildings or blocks that house individual rooms or apartments.The lodge consists of multiple buildings or blocks that house individual rooms or apartments.
                    </div>

                    <div style={{margin: '0 10px 0 10px', fontWeight: 'bold'}}>Amenities</div>

                    <div className="agent-client-amenities">
                        <ul>
                            <li>balcony</li>
                            <li>wardrope</li>
                            <li>space</li>
                            <li>pvc/poc</li>
                            <li>water</li>
                            <li>light</li>
                        </ul>
                    </div>

                </div>
            </div>

        )

        set_cols(data)

    }, [])
    
    return ( 
        <>
            

            <div className="agent-home">

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