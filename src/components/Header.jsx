import React from 'react'
// import Navbar from 'module'
// import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <section className="banner" role="banner">
                <header id="header">
                    <div className="header-content clearfix"> <a className="logo" href="index.html"><i className="icon icon-beaker" style={{padding:"10px"}}></i>
                        Pearls Dental</a>
                        <nav className="navigation" role="navigation">
                            <ul className="primary-nav">
                                <li><a href="#banner">Beranda</a></li>
                                <li><a href="#services">Perawatan</a></li>
                                <li><a href="#content-3-10">Tentang</a></li>
                                <li><a href="#gallery">Galeri</a></li>
                                <li><a href="#teams">Dokter Kami</a></li>
                                <li><a href="#testimonials">Testimonial</a></li>
                                <li><a href="#contact">Kontak</a></li>
                            </ul>
                        </nav>
                        <a href="#Menu" className="nav-toggle">Menu<span></span></a>
                    </div>
                </header>

                <div className="banner" id="banner">
                    <div className="slider-banner">
                        <div data-lazy-background={require("../images/slides/1.jpg")}>
                            <h3 data-pos="['68%', '-40%', '60%', '12%']" data-duration="700" data-effect="move">
                                Klinik Pearls Dental
                            </h3> <br />
                            <p data-pos="['75%', '110%', '75%', '12%']" data-duration="700" data-effect="move">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                             </p>
                        </div>
                        <div data-lazy-background={require("../images/slides/3.jpg")}>
                            <h3 data-pos="['75%', '-40%', '60%', '12%']" data-duration="700" data-effect="move">
                                Senyuman Anda 
                            </h3> <br />
                            <p data-pos="['75%', '110%', '75%', '12%']" data-duration="700" data-effect="move">
                                Adalah Kepuasan Kami
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
