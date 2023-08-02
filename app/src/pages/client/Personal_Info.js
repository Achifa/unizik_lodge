import userInfoSvg from '../../assets/svg/user-info-svgrepo-com.svg'
import newsSvg from '../../assets/svg/news-feed-2-svgrepo-com.svg'
import stuffsSvg from '../../assets/svg/resources-svgrepo-com.svg'
import cartSvg from '../../assets/svg/cart-4-svgrepo-com (2).svg'
import settingsSvg from '../../assets/svg/settings-svgrepo-com.svg'

import ing from '../../assets/images/Screenshot_20220720-122957.png'

const ProfileInfo = () => {

    let profileList = 
    [
        {
            name: 'First Name',
            data: 'Chinedu'
        },

        {
            name: 'Last Name',
            data: 'Fabian'
        },
        {
            name: 'Surn Name',
            data: 'Akpulu'
        },
        {
            name: 'Email',
            data: 'akpulufabian@gmail.com'
        },
        {
            name: 'Phone',
            data: '08032639894'
        },
        {
            name: 'User Name',
            data: 'Edwin'
        },
        {
            name: 'Address 1',
            data: 'Ifite-Awka'
        },
        {
            name: 'Address 2',
            data: 'Yahoo Junction'
        }
    ]

    return ( 
        <>
            <div className="agent-profile" style={{padding: '10px'}}>

                <div className="agent-profile-basic-info shadow-sm">
 
                    <img src={ing} style={{height: '90%', width: '40%'}} alt="" />

                    <div className="agent-profile-basic-info-data" style={{height: '90%', width: '60%', padding: '0 0 0 0'}}>
                        <ul>
                            <li>72 &nbsp; Post</li>
                            <li>24 &nbsp; Sold</li>
                            <li>0 &nbsp; Views</li>
                        </ul>
                    </div>

                </div>


                <div className="agent-profile-list" style={{padding: '0'}}>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-1">
                        

                        {
                            profileList.map(item => {
                                return (
                                    <>
                                        <div className="col">
                                            <div className="card" style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: '0'}}>

                                                <div className="card-body" style={{float: 'right', position: 'absolute', padding: '10px 0 0 10px', top: '0', left: '0px'}}>
                                                    <p><b>{item.name}</b></p> 
                                                    <p>{item.data}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>

               
            </div>
        </>
     );
}
 
export default ProfileInfo;