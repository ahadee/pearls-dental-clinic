import React from 'react'
import '../css/main.css'
import '../css/responsive.css'
import '../css/bootstrap.min.css'
import '../css/animate.min.css'
import '../css/flexslider.css'
import '../css/font-icon.css'
import '../css/jquery.fancybox.css'
function Intro() {
    return (
        <div>
            <section id="intro" className="section intro">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <h3>Selamat Datang di Pearls Dental</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus
                          eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.</p>
                        <div className="site-info">
                            <div className="phoneInfo">
                                <h6>Hubungi Sekarang: </h6><span>123–123–2323</span>; <span>123–123–2323</span>
                            </div>
                            <div className="timeInfo">
                                <h6>Jam Operasi: </h6> <em>Mon–Fri: 9am–6pm; Sun: 10am–1pm</em>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro
