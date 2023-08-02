import userInfoSvg from '../../assets/svg/user-info-svgrepo-com.svg'
import newsSvg from '../../assets/svg/news-feed-2-svgrepo-com.svg'
import stuffsSvg from '../../assets/svg/resources-svgrepo-com.svg'
import saveSvg from '../../assets/svg/save-svgrepo-com.svg'
import settingsSvg from '../../assets/svg/settings-svgrepo-com.svg'
import supportSvg from '../../assets/svg/support-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate();
    let profileList = 
    [
        {
            title: 'Personal Info',
            link: '/client/user/info',
            svg: userInfoSvg
        },
        /*{
            title: 'History',
            link: '/client/history',
            svg: userInfoSvg
        },*/
        {
            title: 'My Posts',
            link: '/client/user/post',
            svg: stuffsSvg
        },
        {
            title: 'Saved Lodges',
            link: '/client/user/lodge-bank',
            svg: saveSvg
        },
        {
            title: 'Settings',
            link: '/client/user/settings',
            svg: settingsSvg
        },
        {
            title: 'Support',
            link: '/client/user/support',
            svg: supportSvg
        }
    ]

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
                                            <div className="card" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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

                {/*<div className="client-profile-exit">
                    Log Out
                    </div>*/}
            </div>
        </>
     );
}
 
export default Profile;