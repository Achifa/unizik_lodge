import userInfoSvg from '../../assets/svg/user-info-svgrepo-com.svg'
import newsSvg from '../../assets/svg/news-feed-2-svgrepo-com.svg'
import stuffsSvg from '../../assets/svg/resources-svgrepo-com.svg'
import saveSvg from '../../assets/svg/save-svgrepo-com.svg'
import settingsSvg from '../../assets/svg/settings-svgrepo-com.svg'
import supportSvg from '../../assets/svg/support-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom'

const Notice = () => {

    let navigate = useNavigate();
    let profileList = 
    [
        {
            title: 'Your Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: '/client/user/info'
        },
        {
            title: 'Your Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: '/client/history'
        },
        {
            title: 'Your Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: ''
        },
        {
            title: 'Saved LodgesYour Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: ''
        },
        {
            title: 'Your Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: ''
        },
        {
            title: 'Your Lodge Search With Id 23u4-90rt-hr569-jk12 Matches A Recent Lodge Posted By Our Agent',
            link: ''
        }
    ]

    return ( 
        <>
            <div className="client-notice">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-2 p-1">
                    {
                        profileList.map(item => {
                            return (
                                <>
                                    <div className="col" onClick={e => navigate(item.link)}>
                                        
                                        <div className="client-notice-mssgs shadow-sm">
                                            {
                                                item.title
                                            }

                                            <div className="client-notice-btns">
                                                <button style={{float: 'left'}}>Mark as read</button>
                                                <button style={{float: 'right', margin: '0 0 0 10px'}}>View Lodge</button>
                                            </div>

                                            <div className="client-notice-time">
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
 
export default Notice;