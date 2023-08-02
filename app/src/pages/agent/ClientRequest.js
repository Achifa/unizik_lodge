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
                    <h5>
                        I need a 2 bedroom lodge 
                    </h5>
                </div>

                


                <div className="agent-client-request-body">

                    
                    <h6>
                        Client Description
                    </h6>
                    <p>
                    Here, you'll find valuable information and guidance to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features.
                    </p>


                    <h6>Client Needs</h6>
                    <div className="agent-client-request-item-list">
                        <ul>
                            {
                                amenities.map(item => 
                
                                <li style={{width: '100%', margin: '5px 0 5px 0', borderRadius: '5px'}}>
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