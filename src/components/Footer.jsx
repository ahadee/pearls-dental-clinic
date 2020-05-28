import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container-fluid">
                    <div id="map-row" className="row">
                        <div className="col-xs-12">
                            {/* <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.31325486341!2d112.61534144994768!3d-7.966542881579614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882819a86978b%3A0x280d6d03e1f10721!2sJl.%20Gresik%20No.7%2C%20Gading%20Kasri%2C%20Kec.%20Klojen%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065115!5e0!3m2!1sen!2sid!4v1590552506950!5m2!1sen!2sid" title="myVideo" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                            <div id="map-overlay" className="col-xs-5 col-xs-offset-6" >
                                <h2 style={{ marginTop: 0, color: "#fff}" }}>Contact us </h2>
                                <address style={{ color: "#fff" }}>
                                    <strong>Pearls Dental</strong><br />
                                    Jalan Gresik no.7<br />
                                    Malang, Jawa Timur<br />
                                    Indonesia<br />
                                    65515<br />
                                    <abbr title="Phone">Tel:</abbr> (604) 555-4321
            </address>
                                © 2020. by <a href="https://github.com/ahadee/" target="_blank" rel="noopener noreferrer">
                                    Bagus Mahardhika</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
