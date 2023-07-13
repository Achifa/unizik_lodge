import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate();

    let list = [
        {
            link: 'client',
            name: 'Searching For Lodge', 
            description: " Here, you'll find valuable information to assist you in your search for the perfect lodge. we provide comprehensive details about various lodges, including their locations, amenities, services, and unique features."
        },
        {
            link: 'agent',
            name: 'Agents', 
            description: 'As a lodge agent, it is crucial for you to understand the purpose and content of this page in order to effectively promote and market your lodge to potential guests and customers'
        }

    ];

    let [cols, set_cols] =  useState([1,2,3])

    useEffect(() => {
        let data = list.map(item => 
            
            <div className="cols">
                <div className="dashboard-space-card">
                    <div className="dashboard-space-card-content">
                        <p className="dashboard-space-card-heading">{item.name}</p>
                        <p className="dashboard-space-card-para">
                            {item.description} 
                        </p>
                        <button className="dashboard-space-card-btn" onClick={e => {e.preventDefault(); navigate(`${item.link}`)}}>Get Started</button>
                    </div>
                </div>
            </div>

        )

        set_cols(data)

    }, [])


    return ( 
        <>
            <div className="dashboard-header">



            </div>
            <div className="dashboard">
                
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-x-lg-3 g-3 p-3">
                    {
                        cols
                    }

                </div>

            </div>
        </>
     );
}
 
export default Dashboard;