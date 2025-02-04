import React from 'react'
import '../styles/vas.css'

function ValueService() {
    return (
        <div className="vas-cont">
            <div className="vas-body">
                <div className="vas-title">
                Value added services
                </div>
                <div className="vas-title-text">
                Extra services offered at the hospital to ensure the comfort of health care providers and patients.
                </div>
                <div className="vas-services">
                    <div className="vas-service">
                             <div className="service-img">
                                 <img src={require('../img/rah-assets/2424.png').default} />
                             </div>
                             <div className="service-title">
                                         24/7 services
                             </div>
                             <div>
                             <p>24 hrs CCTV surveilance</p>
                                 <p>24x7 observation</p>
                                 <p>24hrs open pharmacy</p>
                             </div>
                    </div>
                    <div className="vas-service">
                             <div className="service-img">
                                 <img src={require('../img/rah-assets/2424.png').default} />
                             </div>
                             <div className="service-title">
                                         24/7 services
                             </div>
                             <div>
                             <p>24 hrs CCTV surveilance</p>
                                 <p>24x7 observation</p>
                                 <p>24hrs open pharmacy</p>
                             </div>
                    </div>
                    <div className="vas-service">
                             <div className="service-img">
                                 <img src={require('../img/rah-assets/2424.png').default} />
                             </div>
                             <div className="service-title">
                                         24/7 services
                             </div>
                             <div>
                                 <p>24 hrs CCTV surveilance</p>
                                 <p>24x7 observation</p>
                                 <p>24hrs open pharmacy</p>
                             </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default ValueService
