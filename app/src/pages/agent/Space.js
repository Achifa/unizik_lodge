import { useEffect, useState } from 'react'
import addSvg  from '../../assets/svg/add-circle-svgrepo-com.svg'
import removeSvg  from '../../assets/svg/remove-svgrepo-com.svg'


const Space = () => {

    let amenities = [

        {item: 'Light'},
        {item: 'Water'},
        {item: 'Balcony'},
        {item: 'Ground Floor'},
        {item: 'Pvc'},
        {item: 'Wardrope'},
        
    ]

    let [Items, setItems] = useState([])
    let [selectedItems, setSelectedItems] = useState([])

    useEffect(() => {
        
        setItems(amenities);

    }, [])
    


    return ( 
        <>
            <div className="agent-space-body">

                <textarea name="" id="" cols="30" rows="10"></textarea>

                <div className="agent-space-desc">

                </div>



                <div className="agent-space-amenities">

                    
                    <h6>Resources</h6>
                    <ul>
                        {
                            Items.map(item => 
                                <li>
                                    <span>
                                        {item.item}
                                    </span>
                                    <img src={addSvg} onClick={e => {setSelectedItems(txt => [...txt, item]); e.target.parentElement.remove();}}  style={{height: '25px', width: '35px', float: 'right', margin: '0 0 0 5px'}} alt="" />

                                </li>
                            )
                        }
                    </ul>


                    <h6>Availble resources</h6>
                    <ul>
                        
                        {
                            selectedItems.map(item => 
                                <li>
                                    <span>
                                        {item.item}
                                    </span>
                                    <img src={removeSvg} onClick={e => {setItems(txt => [...txt, item]); e.target.parentElement.remove();}}  style={{height: '25px', width: '35px', float: 'right', margin: '0 0 0 5px'}} alt="" />

                                </li>
                                
                            )
                        }
                        
                    </ul>

                </div>

                <div className="agent-space-submit-btn shadow">
                    <button>
                        Upload
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Space;