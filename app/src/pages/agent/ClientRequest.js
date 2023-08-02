
import myPhoto  from '../../assets/images/Screenshot_20220720-122957.png'
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'

const Clientrequest = () => {
 
    let amenities = [

        {item: 'Light'},
        {item: 'Water'},
        {item: 'Balcony'},
        {item: 'Ground Floor'},
        {item: 'Pvc'},
        {item: 'Wardrope'}
        
    ]  
    return ( 
        <>
            <div className="agent-client-request">



                <div className="agent-client-request-head"> 
                    <div className="agent-client-dp" style={{padding: '0'}}>

                        <img src={myPhoto}  style={{height: '45px', width: '45px', borderRadius: '50%', float: 'left', border: '2px solid green'}} alt="" />

                        <span style={{position: 'absolute', bottom: '6px', left: '50px', fontSize: 'x-small', fontWeight: 'bold', background: 'green', padding: '2.5px 5px 2.5px 5px', borderRadius: '2px', color: '#fff'}}>
                            Prosper 207
                        </span>


                    </div>

                    <br />
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
                </div>

                

                <br />
                <br />
                <div className="agent-client-request-body">
                    <h6 style={{fontSize: 'medium', color: 'green'}}>
                        Client Title
                    </h6>
                    <h6>
                        I need a 2 bedroom lodge for me and a room mate and it must ontain a balcony and also be a modern structure
                    </h6>

                    <br />

                    <h6 style={{fontSize: 'medium', color: 'green'}}>
                        Client Description
                    </h6>

                    <small>
                    Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features.
                    </small>
                    <br />
                    <br />

                    


                    <h6 style={{fontSize: 'medium', color: 'green'}}>Client Needs</h6>
                    <div className="agent-client-request-item-list">
                        <ul>
                            {
                                amenities.map(item => 
                
                                <li style={{width: 'fit-content', margin: '5px 5px 5px 5px', borderRadius: '5px'}}>
                                    <span>
                                        {item.item}
                                    </span>
                                </li>)

                            }
                        </ul>
                    </div>
                </div>

                <div className="agent-client-request-btn">
                    <button style={{color: '#fff',background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )'}} onClick={''}>
                        Respond
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Clientrequest;