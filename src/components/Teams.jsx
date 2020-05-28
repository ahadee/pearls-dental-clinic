import React from 'react'

function Teams() {
    return (
        <div>
            <section id="teams" className="section teams">
                <div className="container">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">Dokter Kami</h2>
                        <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus
          vitae massa <br /> semper aliquam quis mattis quam.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="person"><img src={require("../images/team-1.jpg")} alt="" className="img-responsive" />
                                <div className="person-content">
                                    <h4>Jonh Dow</h4>
                                    <h5 className="role">Doctor</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                                </div>
                                <ul className="social-icons clearfix">
                                    <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="https://twitter.com/"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="https://www.instagram.com/?hl=en"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="person"> <img src={require("../images/team-2.jpg")} alt="" className="img-responsive" />
                                <div className="person-content">
                                    <h4>Markus Linn</h4>
                                    <h5 className="role">Doctor</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                                </div>
                                <ul className="social-icons clearfix">
                                    <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="https://twitter.com/"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="https://www.instagram.com/?hl=en"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="person"> <img src={require("../images/team-3.jpg")} alt="" className="img-responsive" />
                                <div className="person-content">
                                    <h4>Chris Jemes</h4>
                                    <h5 className="role">Doctor</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                                </div>
                                <ul className="social-icons clearfix">
                                    <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="https://twitter.com/"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="https://www.instagram.com/?hl=en"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="person"> <img src={require("../images/team-4.jpg")} alt="" className="img-responsive" />
                                <div className="person-content">
                                    <h4>Vintes Mars</h4>
                                    <h5 className="role">Doctor</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                                </div>
                                <ul className="social-icons clearfix">
                                    <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="https://twitter.com/"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="https://www.instagram.com/?hl=en"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teams
