import userInfoSvg from '../../assets/svg/user-info-svgrepo-com.svg'
import newsSvg from '../../assets/svg/news-feed-2-svgrepo-com.svg'
import stuffsSvg from '../../assets/svg/resources-svgrepo-com.svg'
import cartSvg from '../../assets/svg/cart-4-svgrepo-com (2).svg'
import settingsSvg from '../../assets/svg/settings-svgrepo-com.svg'
import supportSvg from '../../assets/svg/support-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    let profileList =  
    [
        {
            title: 'Personal Info',
            svg: userInfoSvg,
            link: '/agent/user/info'
        },

        {
            title: 'My Post',
            svg: cartSvg,
            link: ''
        },
        {
            title: 'My Inbox',
            svg: cartSvg,
            link: ''
        },
        {
            title: 'Settings',
            svg: settingsSvg,
            link: ''
        },
        {
            title: 'Support',
            supportSvg: supportSvg,
            link: ''
        }
    ]

    let navigate = useNavigate()

    return ( 
        <>
            <div className="client-profile">
                <div className="client-profile-list">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-1 p-1">
                         

                        {
                            profileList.map(item => {
                                return (
                                    <>
                                        <div className="col" onClick={e => navigate(item.link)}>
                                            <div className="card"  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <img src={item.svg} alt="" style={{height: '20px', width: '20px', position: 'absolute', left: '20px'}} />
                                            
                                                <div className="card-body" style={{float: 'right', position: 'absolute', left: '60px'}}>
                                                    {
                                                        item.title
                                                    }
                                                </div>
                                            </div> 
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>

                <div className="client-profile-exit">
                    Log Out
                </div>
            </div>
        </>
     );
}
 
export default Profile;