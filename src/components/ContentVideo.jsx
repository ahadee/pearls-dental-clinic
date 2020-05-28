import React from 'react'

function ContentVideo() {
    return (
        <div>
            <section className="video-section">
                <div className="container">
                    <div className="row">
                        <div id="content24" data-section="content-24" className="data-section">
                            <div className="col-md-6">
                                <h3 className="eidtContent">Video Klinik Kami</h3>
                                <p className="eidtContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.</p>
                                <p className="editContent">There are many variations of passages of Lorem Ipsum available, but the majority have
                                  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
              believable.</p>
                                <p className="editContent">There are many variations of passages of Lorem Ipsum available, but the majority have
                                  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
              believable.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                {/* <div> */}
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/NZqdFNWmYCk" title="myVideo"
                                        allowFullScreen="" http-equiv="Content-Security-Policy">
                                    </iframe>
                                    {/* <Iframe url="https://www.youtube.com/embed/NZqdFNWmYCk"
                                        width="600px"
                                        height="300px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentVideo
