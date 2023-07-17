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
            setImgs(item => [...item, url]);

            let frame = document.createElement('div');
            frame.className = 'agent-space-view-photo-frame'

            let img = document.createElement('img');
            img.style.height = '100%'
            img.style.width = '100%'
            img.src = url

            frame.appendChild(img);

            let cnt = document.querySelector('.agent-space-view-carousel');
            

            cnt.append(frame)

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

            let frame = document.createElement('div');
            frame.className = 'agent-space-view-video-frame'

            let video = document.createElement('video');
            video.style.height = '100%'
            video.style.width = '100%'
            video.src = url
            video.autoplay = true;

            frame.appendChild(video);

            let cnt = document.querySelector('.agent-space-view-carousel');
            

            cnt.append(frame)
        })

        reader.readAsDataURL(file) 
    }
    


    return ( 
        <>
            <div className="agent-space-body">

                <textarea name="" id="" placeholder='Enter Lodge Name Here...'></textarea>

                <hr />


                <div className="agent-space-desc">

                    <h6>Set Lodge Price</h6>


                    <div className="agent-space-price">
                        <label htmlFor="price">Lodge Price</label>
                        <input type="text" id='price' />
                    </div>
                    
                    <hr />

                    <h6>Set Lodge Location</h6>
                   
                    <div className="agent-space-location">
                        <label htmlFor="location1">Address 1 (Village name)</label>
                        <input type="number" id='location1' />
                    </div>

                    <div className="agent-space-location">
                        <label htmlFor="location2">Address 2 (Street/Junction)</label>
                        <input type="text" id='location2' />
                    </div>

                    

                    <div className="agent-space-location" style={{display: 'block'}}>

                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'left'}}>
                            <label htmlFor="north" style={{float: 'left',  fontWeight: 'bold'}}>Up School</label>
                            <input name='coordinate' type="radio" id='north' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'right'}}>
                            <label htmlFor="south" style={{float: 'left',  fontWeight: 'bold'}}>Down School</label>
                            <input name='coordinate' type="radio" id='south' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                    </div>

                    <h6>Upload Lodge Photos/Videos</h6>

                    <div className="agent-space-view-carousel">

                        

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

                    <hr />


                <div className="agent-space-amenities">

                    
                    <h6>Facilities</h6>
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


                    <h6>Availble Facilities</h6>
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