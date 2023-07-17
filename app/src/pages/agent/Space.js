import { useEffect, useState } from 'react'
import addSvg  from '../../assets/svg/add-circle-svgrepo-com.svg'
import removeSvg  from '../../assets/svg/remove-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'


const Space = () => {

    let [imgs, setImgs] = useState([])
    let [vids, setVids] = useState([])

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


    let handleImg = e => {
        let file = e.target.files[0];
        console.log(file)

        let reader = new FileReader();

        reader.addEventListener('load', result => {
            //console.log(reader.result)
            let url = reader.result;
            setImgs(item => [...item, url])
        })

        reader.readAsDataURL(file) 
    }

    let handleVid = e => {
        let file = e.target.files[0];
        console.log(file)

        let reader = new FileReader();

        reader.addEventListener('load', result => {
            //console.log(reader.result)
            let url = reader.result;
            setVids(item => [...item, url])
        })

        reader.readAsDataURL(file) 
    }
    


    return ( 
        <>
            <div className="agent-space-body">

                <textarea name="" id="" placeholder='Enter Lodge Name Here...'></textarea>

                <div className="agent-space-desc">

                    <h6>Set Lodge Price</h6>


                    <div className="agent-space-price">
                        <label htmlFor="price">Lodge Price</label>
                        <input type="text" id='price' />
                    </div>
                    

                    <h6>Set Lodge Location</h6>
                   
                    <div className="agent-space-location">
                        <label htmlFor="location1">Address 1 (Village name)</label>
                        <input type="number" id='location1' />
                    </div>

                    <div className="agent-space-location">
                        <label htmlFor="location2">Address 2 (Street/Junction)</label>
                        <input type="text" id='location2' />
                    </div>

                    <h6>Upload Lodge Photos/Videos</h6>

                    <div className="agent-space-view-carousel">

                        <div style={{display: 'none'}}  id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">

                                

                                {/*
                                
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={l} style={{height: '150px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                    
                                </div>
                                
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={l} style={{height: '150px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                    
                                </div>

                                <div className="carousel-item">
                                    <img src={l} style={{height: '150px', width: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} alt="" />
                                    
                        </div>*/}

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

                    </div>

                    <div className="agent-space-view-btn">

                        <input type="file" style={{display: 'none'}} onChange={handleImg} name="img" id="img" accept='image/*' />

                        <input type="file" style={{display: 'none'}} onChange={handleVid} name="vid" id="vid" accept='video/*' />

                        <label style={{width: '40%', float: 'left', height: '50px'}} htmlFor="img">
                           Upload Photo
                        </label>

                        <label style={{width: '40%', float: 'right', height: '50px'}} htmlFor="vid">
                            Upload Video
                        </label>
                    </div>

                </div>



                <div className="agent-space-amenities">

                    
                    <h6>Resources</h6>
                    <ul>
                        {
                            Items.map((item, index) => 
                                <li key={index}>
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
                            selectedItems.map((item, index) => 
                                <li key={index}>
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