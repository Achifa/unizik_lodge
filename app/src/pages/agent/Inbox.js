import userInfoSvg from '../../assets/svg/user-info-svgrepo-com.svg'
import newsSvg from '../../assets/svg/news-feed-2-svgrepo-com.svg'
import stuffsSvg from '../../assets/svg/resources-svgrepo-com.svg'
import saveSvg from '../../assets/svg/save-svgrepo-com.svg'
import settingsSvg from '../../assets/svg/settings-svgrepo-com.svg'
import supportSvg from '../../assets/svg/support-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom'
import infoSvg  from '../../assets/svg/info-svgrepo-com (3).svg'

const Inbox = () => {

    let navigate = useNavigate();
    let profileList = 
    [
        {
            title: 'You can now update your post to stay current on lodge posted ',
            link: '/client/user/info'
        },
        {
            title: 'You can now update your post to stay current on lodge posted ',
            link: '/client/history'
        },
        {
            title: 'You can now update your post to stay current on lodge posted ',
            link: ''
        },
        {
            title: 'Saved LodgesYou can now update your post to stay current on lodge posted ',
            link: ''
        },
        {
            title: 'You can now update your post to stay current on lodge posted ',
            link: ''
        },
        {
            title: 'You can now update your post to stay current on lodge posted ',
            link: ''
        }
    ]

    return ( 
        <>
            <div className="client-inbox">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-2 p-2">
                    {
                        profileList.map(item => {
                            return (
                                <>
                                    <div className="col" onClick={e => navigate(item.link)}>
                                        
                                        <div className="client-inbox-mssgs shadow-sm">
                                           
                                            <img src={infoSvg } style={{height: '20px', width: '20px', marginTop: '7px', float: 'left'}} alt="" />
                                           
                                           <p style={{
                                                lineHeight: '18px',
                                                fontWeight: '500',
                                                fontSize: 'small',
                                                overflow: 'hidden',
                                                color: '#000',
                                                float: 'right',
                                                width: '90%',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: '2',
                                                WebkitBoxOrient: 'vertical',
                                            }}>
                                           {
                                                item.title
                                            }
                                           </p>
                                           

                                            
                                            <div className="client-inbox-time">
                                                2 hrs ago
                                            </div>
                                        </div> 


                                        

                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
     );
}
 
export default Inbox;