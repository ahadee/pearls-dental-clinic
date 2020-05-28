import React from 'react'

function Gallery() {
    return (
        <div>
            <section id="gallery" className="gallery section">
                <div className="container-fluid">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">Galeri Foto</h2>
                        <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus
          vitae massa <br /> semper aliquam quis mattis quam.</p>
                    </div>
                    <div className="row no-gutter">
                        <div className="col-lg-3 col-md-6 col-sm-6 work">
                            <a href={require("../images/portfolio/01.jpg")} className="work-box"> <img src={require("../images/portfolio/01.jpg")} alt="" />
                                <div className="overlay">
                                    <div className="overlay-caption">
                                        <p><span className="icon icon-magnifying-glass"></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work">
                            <a href={require("../images/portfolio/02.jpg")} className="work-box"> <img src={require("../images/portfolio/02.jpg")} alt="" />
                                <div className="overlay">
                                    <div className="overlay-caption">
                                        <p><span className="icon icon-magnifying-glass"></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work">
                            <a href={require("../images/portfolio/03.jpg")} className="work-box"> <img src={require("../images/portfolio/03.jpg")} alt="" />
                                <div className="overlay">
                                    <div className="overlay-caption">
                                        <p><span className="icon icon-magnifying-glass"></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href={require("../images/portfolio/04.jpg")} className="work-box"> <img
                            src={require("../images/portfolio/04.jpg")} alt="" />
                            <div className="overlay">
                                <div className="overlay-caption">
                                    <p><span className="icon icon-magnifying-glass"></span></p>
                                </div>
                            </div>
                        </a> </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href={require("../images/portfolio/05.jpg")} className="work-box"> <img
                            src={require("../images/portfolio/05.jpg")} alt="" />
                            <div className="overlay">
                                <div className="overlay-caption">
                                    <p><span className="icon icon-magnifying-glass"></span></p>
                                </div>
                            </div>
                        </a> </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href={require("../images/portfolio/06.jpg")} className="work-box"> <img
                            src={require("../images/portfolio/06.jpg")} alt="" />
                            <div className="overlay">
                                <div className="overlay-caption">
                                    <p><span className="icon icon-magnifying-glass"></span></p>
                                </div>
                            </div>
                        </a> </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href={require("../images/portfolio/07.jpg")} className="work-box"> <img
                            src={require("../images/portfolio/07.jpg")} alt="" />
                            <div className="overlay">
                                <div className="overlay-caption">
                                    <p><span className="icon icon-magnifying-glass"></span></p>
                                </div>
                            </div>
                        </a> </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href={require("../images/portfolio/08.jpg")} className="work-box"> <img
                            src={require("../images/portfolio/08.jpg")} alt="" />
                            <div className="overlay">
                                <div className="overlay-caption">
                                    <p><span className="icon icon-magnifying-glass"></span></p>
                                </div>
                            </div>
                        </a> </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Gallery
