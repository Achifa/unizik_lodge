import { useEffect, useRef, useState } from 'react'
import addSvg  from '../../assets/svg/add-circle-svgrepo-com.svg'
import removeSvg  from '../../assets/svg/remove-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'
import {useDispatch, useSelector} from 'react-redux';
import  { setFacilitiesTo } from '../../redux/agent/facilities';
import { UPLOAD_AGENT_LODGE_FORM } from '../../axios/agent';
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom';


const Space = () => {

    let navigate = useNavigate()
    let [name, setname] = useState()
    let [agentId, setagentId] = useState()
    
    let [price, setprice] = useState()
    
    let [address1, setaddress1] = useState()
    let [address2, setaddress2] = useState()

    let [coord, setcoord] = useState() 

    let [selectedfacilities, setSelectedfacilities] = useState([])

    let [imgs, setImgs] = useState([]);
    let [vids, setVids] = useState([]);

    let [list, setList] = useState(null);


    let [Items, setItems] = useState([])
    let [sList, setSList] = useState([])

    let amenities = [

        {item: 'Light'},
        {item: 'Water'},
        {item: 'Balcony'},
        {item: 'Ground Floor'},
        {item: 'Pvc'},
        {item: 'Wardrope'}
        
    ]   

    useEffect(() => {

    }, [])

    let handleLodgeUpload = async(e) => {
        document.querySelector('.agent-space-upload-overlay').setAttribute('id', 'active') 
        let overlay = document.querySelector('.agent-space-upload-overlay');

        let success = (overlay) => {
            overlay.setAttribute('id', 'inactive');
            let allInputs = [...document.querySelectorAll('input')]
            let allTextArea = [...document.querySelectorAll('textarea')]
            let allRadio = [...document.querySelectorAll('radio')]
            let allFiles = [...document.querySelectorAll('file')]

            let allData = [...allInputs, ...allRadio, ...allTextArea, ...allFiles];

            allData.map(item => 
                item.value = ''
            )
            setSelectedfacilities([])
            let list = [...document.querySelector('.list').children];


            list.map(item => {

                item.style.opacity = '1'
                item.style.pointerEvents = 'all'

            })

            let cnt = document.querySelector('.agent-space-view-carousel');
            cnt.innerHTML = '';


        }
        let response = await UPLOAD_AGENT_LODGE_FORM(name,agentId,price,address1,address2,coord,selectedfacilities.map(item => item.item).join(', '),[...imgs, ...vids]);


        console.log(response)

        let result = response ? setTimeout(() => success(overlay),1000) : false;

        //
    }
 
    let handleSearch = e => {
        let value = e.target.value;
        
        let result = amenities.filter(item => item.item.toLowerCase().indexOf(value.toLowerCase()) > -1);
        let listItem = result.map(item => 
            
            <li style={{width: '100%', margin: '5px 0 5px 0', borderRadius: '5px'}}>
                <span>
                    {item.item}
                </span>
                <img src={addSvg}  onClick={e => {
                         
                    setSelectedfacilities(items => [...items, item])
                    
                    
                        
                    }}  style={{height: '20px', width: '20px', float: 'right', margin: '0 0 0 5px'}} alt="" />
            
            </li>
        
        )

        setList(listItem)
    }

   
 
    useEffect(() => {
        let list = selectedfacilities.map((item, index) => 

            <li key={index}>
                <span>
                    {item.item}
                </span>

                <img src={removeSvg} onClick={e => { 



                    let deletedItem = selectedfacilities.filter(items => items.item === item.item)
                    setSelectedfacilities(items => items.filter(sItem => sItem.item !== item.item));

                    let list = [...document.querySelector('.list').children];
                    let arrReset = []
                    selectedfacilities.map(item => arrReset.push(item.item))
                     
                    
                    let result = list.filter(item => deletedItem[0].item === item.children[0].innerHTML)

                    result[0].style.opacity = '1'
                    result[0].style.pointerEvents = 'all'
            
                    

                     

                }}  style={{height: '25px', width: '35px', float: 'right', margin: '0 0 0 5px'}} alt="" />

            </li>
             
        )

        setSList(list)

    }, [selectedfacilities])

   

    let [isItemEmpty, setIsItemEmpty] = useState(false)
    let [isSelectedItemEmpty, setIsSelectedItemEmpty] = useState(false)

    


    window.addEventListener('load', e => setItems(amenities));

    useEffect(() => {
        let newArr = [...selectedfacilities, ...Items];
        //let newArr = [1,2,3,4,5,6,7,1,2];
        let arrReset = []
        newArr.map(item => arrReset.push(item.item))
        
        let filter = arrReset.filter((item, index) => arrReset.indexOf(item) !== index) 

        let list = [...document.querySelector('.list').children];


        filter.map(item => {
            let result = list.filter(file => file.children[0].innerHTML === item)

            result[0].style.opacity = '.5'
            result[0].style.pointerEvents = 'none'

        })

        
        //console.log(filter); 
        //console.log(newArr); 

    }, [selectedfacilities, Items]);

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

    useEffect(() => {

        if(Items.length < 1){
            setIsItemEmpty(true)
        }else{
            setIsItemEmpty(false)
        }

    }, [Items]) 

    useEffect(() => {
        if(selectedfacilities.length < 1){
            setIsSelectedItemEmpty(true)
        }else{
            setIsSelectedItemEmpty(false)
        }
        
    }, [selectedfacilities])
  

    

    return ( 
        <>
            
            <div className="agent-space-body">

                <h6>Lodge Name</h6>
                <hr />

                <textarea onInput={e => setname(e.target.value)} name="" id="" placeholder='Enter Lodge Name Here...'></textarea>

                <br />
                <br />

                {/*<h6>Lodge Description</h6>
                <hr />

    <textarea onInput={e => setdesc(e.target.value)} name="" id="" placeholder='Enter Lodge Description Here...' style={{height: '100px'}}></textarea>*/}

                  

                <div className="agent-space-desc">

                    <h6>Set Lodge Price</h6>
                    <hr />


                    <div className="agent-space-price">
                        <label htmlFor="price">Lodge Price</label>
                        <input onInput={e => setprice(e.target.value)} type="text" id='price' />
                    </div>
                    
                    

                    <h6>Set Lodge Location</h6>
                    <hr />
                   
                    <div className="agent-space-location">
                        <label htmlFor="location1">Address 1 <br />(Village name)</label>
                        <input onInput={e => setaddress1(e.target.value)} type="text" id='location1' />
                    </div>

                    <div className="agent-space-location">
                        <label htmlFor="location2">Address 2 <br />(Street/Junction)</label>
                        <input onInput={e => setaddress2(e.target.value)} type="text" id='location2' />
                    </div>

                    

                    <div className="agent-space-location" style={{display: 'block'}}>

                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'left'}}>
                            <label htmlFor="north" style={{float: 'left',  fontWeight: 'bold'}}>Up School</label>
                            <input name='coordinate' onInput={e => setcoord(e.target.value)} type="radio" id='north' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'right'}}>
                            <label htmlFor="south" style={{float: 'left',  fontWeight: 'bold'}}>Down School</label>
                            <input name='coordinate' onInput={e => setcoord(e.target.value)} type="radio" id='south' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                    </div>

                    <h6>Upload Lodge Photos/Videos</h6>

                    <div className="agent-space-view-carousel">

                        

                    </div>

                    <div className="agent-space-view-btn" style={{height: '65px', width: '100%'}}>

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
                    <h6>
                        Search for availble facilities
                    </h6>
                    
                    <div className="agent-space-amenities-search">
                        <input style={{height: '50px', padding: '10px', width: '100%'}} type="text" placeholder='Search Facilities Here...' onInput={handleSearch} />

                        <ul className='list' style={{listStyleType: 'none', height: list === null ? '0px' : 'fit-content'}}> 

                            {
                                list
                            }
                            
                        </ul>
                    </div>
                    

                    <h6>Selected Facilities</h6>
                    <ul>
                        {
                            isSelectedItemEmpty 
                            &&
                            (
                                <span style={{width: '100%', height: '50px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <p>No items have been selected</p>
                                </span>
                            )
                        }

                        
                        {
                            sList
                        }
                        
                    </ul>

                </div>

                <div className="agent-space-submit-btn shadow">
                    <button style={{color: '#fff',background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )'}} onClick={handleLodgeUpload}>
                        Upload
                    </button>
                </div>
            </div>

            <div id='inactive'  className="agent-space-upload-overlay">
                <div className="upload-box">
                    <br/>
                    <span className="agent-upload-loader"></span>
                    <br/>

                    <b>Uploading Article...</b>
                   
                </div>
            </div>

        </>
     );
}
 
export default Space;