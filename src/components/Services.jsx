import React from 'react'
import Modal from './Modal'


function Services() {
    return (
        <div>
            <section id="services" className="services service-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">Perawatan</h2>
                        <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus
          vitae massa <br /> semper aliquam quis mattis quam.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-happy"></span>
                            <div className="services-content">
                                <h5>Cosmetic</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-layers"></span>
                            <div className="services-content">
                                <h5>Oral Surgery</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-wine"></span>
                            <div className="services-content">
                                <h5>Replacement</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-hotairballoon"></span>
                            <div className="services-content">
                                <h5>Orthodontics</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-heart"></span>
                            <div className="services-content">
                                <h5>Child Dental </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services text-center"> <span className="icon icon-scope"></span>
                            <div className="services-content">
                                <h5>Restorative</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
              faucibus eget quis lacus.</p>
                                <a href="#gallery" className="btn btn-outline btn-outline outline-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Our Gallery</a>
                                <Modal />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
