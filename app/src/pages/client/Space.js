import { useEffect, useRef, useState } from 'react'
import addSvg  from '../../assets/svg/add-circle-svgrepo-com.svg'
import removeSvg  from '../../assets/svg/remove-svgrepo-com.svg'
import l from '../../assets/images/WhatsApp Image 2023-07-05 at 20.52.40.jpg'
//import { UPLOAD_client_LODGE_FORM } from '../../axios/client';
import locationSvg  from '../../assets/svg/location-pin-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom';


const Space = () => {

    let [priceRange0, setPriceRange0] = useState(0);
    let [priceRange1, setPriceRange1] = useState(0);

    let navigate = useNavigate()
    let [name, setname] = useState()
    let [desc, setdesc] = useState()
    
    let [price, setprice] = useState()
    
    let [address1, setaddress1] = useState()
    let [address2, setaddress2] = useState()

    let [coord, setcoord] = useState() 

    let [selectedfacilities, setSelectedfacilities] = useState([])

  
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

   /*let handleLodgeUpload = async(e) => {
        document.querySelector('.client-space-upload-overlay').setAttribute('id', 'active') 
        let overlay = document.querySelector('.client-space-upload-overlay');

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

            let cnt = document.querySelector('.client-space-view-carousel');
            cnt.innerHTML = '';


        }
        let response = await UPLOAD_client_LODGE_FORM(name,price,address1,address2,coord,selectedfacilities.map(item => item.item).join(', '),[...imgs, ...vids]);


        console.log(response)

        let result = response ? setTimeout(() => success(overlay),1000) : false;

        //
    }*/
 
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
            
            <div className="client-space-body">

                <h6>Title</h6>
                <hr />

                <textarea style={{height: '80px'}} onInput={e => setname(e.target.value)} name="" id="" placeholder='Enter Title Name Here...'></textarea>

                <br />
                <br />

                <h6>Description</h6>
                <hr />

                <textarea style={{height: '180px', fontSize: 'medium', fontWeight: 'normal'}} onInput={e => setname(e.target.value)} name="" id="" placeholder='Enter Description Name Here...'></textarea>

                <br />
                <br />

                {/*<h6>Lodge Description</h6>
                <hr />

    <textarea onInput={e => setdesc(e.target.value)} name="" id="" placeholder='Enter Lodge Description Here...' style={{height: '100px'}}></textarea>*/}

                  

                <div className="client-space-desc">

                    <h6>Set Budget</h6>
                    <hr />


                    <div className="input-cnt" style={{padding: '15px'}}>
                        <label htmlFor="i-price" style={{fontWeight: 'bold', width: '100%', padding: '0 10px 0 10px'}}>
                            <span style={{float: 'left'}}>From</span>
                            <span style={{float: 'right'}}>&#x20A6; &nbsp; {priceRange0}</span>
                        </label>
                        <input min={0} max={1000000} onInput={e => setPriceRange0(e.target.value)} style={{width: '100%', height: '5px', border: 'none', outline: 'none'}} type="range" defaultValue={0} name="" id="" />

                    </div>

                    <div className="input-cnt" style={{padding: '15px'}}>
                        <label htmlFor="f-price" style={{fontWeight: 'bold', width: '100%', padding: '0 10px 0 10px'}}>
                            <span style={{float: 'left'}}>To</span>
                            <span style={{float: 'right'}}>&#x20A6; &nbsp; {priceRange1}</span>
                        </label>
                        <input min={priceRange0} max={1000000} onInput={e => setPriceRange1(e.target.value)} style={{width: '100%', height: '5px', border: 'none', outline: 'none'}} type="range" defaultValue={priceRange0} name="" id="" />

                    </div>

                    <div className="input-cnt" style={{padding: '15px'}}>
                        <div style={{float: 'left', width: '40%'}}>
                            <h6 htmlFor="">From</h6>
                            <input style={{width: '100%', float: 'left', height: '40px', outline: 'none', padding: '0 5px 0 5px'}} type="number" name="" id="" />
                        </div>

                        <div style={{float: 'right', width: '40%'}}>
                            <h6 htmlFor="">To</h6>
                            <input style={{width: '100%', float: 'right', height: '40px', outline: 'none', padding: '0 5px 0 5px'}} type="number" name="" id="" />
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />


                    <h6>Set Lodge Location</h6>
                    <hr />
                   
                    <div className="client-space-location">
                        <label htmlFor="location1">Address 1 <br />(Village name)</label>
                        <input onInput={e => setaddress1(e.target.value)} type="text" id='location1' />
                    </div>

                    <div className="client-space-location">
                        <label htmlFor="location2">Address 2 <br />(Street/Junction)</label>
                        <input onInput={e => setaddress2(e.target.value)} type="text" id='location2' />
                    </div>

                    

                    <div className="client-space-location" style={{display: 'block'}}>

                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'left'}}>
                            <label htmlFor="north" style={{float: 'left',  fontWeight: 'bold'}}>Up School</label>
                            <input name='coordinate' onInput={e => setcoord(e.target.value)} type="radio" id='north' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                        <div style={{width: '40%',  padding: '10px', background: 'transparent', margin: '0 5px 0 5px', whiteSpace: 'nowrap',  float: 'right'}}>
                            <label htmlFor="south" style={{float: 'left',  fontWeight: 'bold'}}>Down School</label>
                            <input name='coordinate' onInput={e => setcoord(e.target.value)} type="radio" id='south' style={{height: '25px', width: '35px', float: 'right'}} />

                        </div>
                    </div>

                   
                </div>

                    
 

                <div className="client-space-amenities">
                    <h6>
                        Search for facilities you need
                    </h6>
                    
                    <div className="client-space-amenities-search">
                        <input style={{height: '50px', padding: '10px', width: '100%'}} type="text" placeholder='Search Facilities Here...' onInput={handleSearch} />

                        <ul className='list' style={{listStyleType: 'none', height: list === null ? '0px' : 'fit-content'}}> 

                        {
                            isSelectedItemEmpty 
                            &&
                            (
                                <span style={{width: '100%', height: '50px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <h6>Search to select items</h6>
                                </span>
                            )
                        }

                        
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
                                    <h6>No items have been selected</h6>
                                </span>
                            )
                        }

                        
                        {
                            sList
                        }
                        
                    </ul>

                </div>

                <div className="client-space-submit-btn shadow">
                    <button style={{color: '#fff',background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )'}} /*onClick={handleLodgeUpload}*/>
                        Upload
                    </button>
                </div>
            </div>

            <div id='inactive'  className="client-space-upload-overlay">
                <div className="upload-box">
                    <br/>
                    <span className="client-upload-loader"></span>
                    <br/>

                    <b>Uploading Article...</b>
                   
                </div>
            </div>

        </>
     );
}
 
export default Space;