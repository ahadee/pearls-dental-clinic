import React from 'react'

function Modal() {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog" role="document">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                        </ol>


                        <div class="carousel-inner">
                            <div class="item active">
                                <img src={require("../images/portfolio/01.jpg")} alt="Los Angeles" style={{ width: "100%" }} />
                                <div class="carousel-content" style={{position: "absolute", bottom: "10%",left: "33%",zIndex: "20", display:"flex", justifyContent:"center"}}>
                                    <h2 style={{color: "white"}}>Gambar Pertama</h2>
                                </div>
                            </div>

                            <div class="item">
                                <img src={require("../images/portfolio/02.jpg")} alt="Chicago" style={{ width: "100%" }} />
                                <div class="carousel-content" style={{position: "absolute", bottom: "10%",left: "33%",zIndex: "20", display:"flex", justifyContent:"center"}}>
                                    <h2 style={{color: "white"}}>Gambar Kedua</h2>
                                </div>
                            </div>

                            <div class="item">
                                <img src={require("../images/portfolio/03.jpg")} alt="New York" style={{ width: "100%" }} />
                                <div class="carousel-content" style={{position: "absolute", bottom: "10%",left: "33%",zIndex: "20", display:"flex", justifyContent:"center"}}>
                                    <h2 style={{color: "white"}}>Gambar Ketiga</h2>
                                </div>
                            </div>
                            <div class="item">
                                <img src={require("../images/portfolio/04.jpg")} alt="New York" style={{ width: "100%" }} />
                                <div class="carousel-content" style={{position: "absolute", bottom: "10%",left: "33%",zIndex: "20", display:"flex", justifyContent:"center"}}>
                                    <h2 style={{color: "white"}}>Gambar Keempat</h2>
                                </div>
                            </div>
                            <div class="item">
                                <img src={require("../images/portfolio/05.jpg")} alt="New York" style={{ width: "100%" }} />
                                <div class="carousel-content" style={{position: "absolute", bottom: "10%",left: "33%",zIndex: "20", display:"flex", justifyContent:"center"}}>
                                    <h2 style={{color: "white"}}>Gambar Kelima</h2>
                                </div>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">New message</h4>
                        </div>
                        <div class="modal-body"> */}
                    {/* <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="control-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="control-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form> */}
                    {/* <img src={require("../images/portfolio/01.jpg")} alt=""/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal
