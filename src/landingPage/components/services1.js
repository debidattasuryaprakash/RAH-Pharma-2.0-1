import React from 'react'
import '../styles/services.css';


function Services1() {
    return (
        <div>
        <section class="services-area services-border pos-rel pt-185 pb-160">
            <span class="h4services-bg">
                <img src="" alt="" />
            </span>
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="section-title text-center pos-rel mb-75">
                            <div class="section-icon">
                                <img class="section-back-icon" src={require("../img/section/section-back-icon.png").default} alt="" />
                            </div>
                            <div class="section-text pos-rel">
                                <h1>Hospitals near you</h1>
                                <h5>Fetch details of all the hospitals nearby you and select the best <br/> services from a wide range of options.</h5>
                            </div>
                            <div class="section-line pos-rel">
                                <img src="img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row h4service-active">
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt=""  />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">Cardiology</a>
                            </div>
                            <div class="service-content h4services-content" >
                                <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <p class="mb-20 f-600">4 kms away</p>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src= {require("../img/rah-assets/sumhospital.png").default} alt=""/>
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">Cardiology</a>
                            </div>
                            <div class="service-content h4services-content">
                                <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <p class="mb-20 f-600">4 kms away</p>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt="" />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">Cardiology</a>
                            </div>
                            <div class="service-content h4services-content">
                                <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <p class="mb-20 f-600">4 kms away</p>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb pos-rel mb-0">
                                <img src={require("../img/home4/services/h4__services__thumb3.png").default} alt="" />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">neurology</a>
                            </div>
                            <div class="service-content h4services-content">
                                <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <p class="mb-20 f-600">4 kms away</p>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                <p class="mb-20 f-600">+91 9000000000</p>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Services1
