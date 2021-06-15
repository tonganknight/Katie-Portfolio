import React, {Component, useEffect, useState} from 'react';
import { Button, Modal, Card, Image } from 'react-bootstrap';
import  { Breakpoint, small, large, up, down } from 'react-socks';
import Footer from '../Footer';



function Home() {

/*handel Modals */

/*first Modal*/
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);
/*second Modal*/
const [show2, setShow2] = useState(false);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);
/*Third Modal */
const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);
/*Fourth Modal*/
const [show4, setShow4] = useState(false);
const handleClose4 = () => setShow4(false);
const handleShow4 = () => setShow4(true);
/*Fifth Modal*/
const [show5, setShow5] = useState(false);
const handleClose5 = () => setShow5(false);
const handleShow5 = () => setShow5(true);
/*Sixth Modal*/
const [show6, setShow6] = useState(false);
const handleClose6 = () => setShow6(false);
const handleShow6 = () => setShow6(true);

return (

  <div>

   

  <Breakpoint large up>


<div className="portback">
        <div className="Projectw2">
            <div className="flexrow">
                <div id="port1" className="homewindowtop1"  onClick={handleShow1}></div>
                
                <Modal className =" .modal-content modal-body-flex border-dark"
                  size="lg"
                  show={show1}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homeWindowModalPic1"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="homewindowtop2" onClick={handleShow2}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show2}
                  onHide={handleClose2}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homeWindowModalPic2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="homewindowtop3" onClick={handleShow3}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show3}
                  onHide={handleClose3}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homeWindowModalPic3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  </div>
                </Modal>
            </div>
            <div className="flexrow">

                <div className="homewindowbottom1" onClick={handleShow4}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show4}
                  onHide={handleClose4}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homewindowModalBottompic1"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="homewindowbottom2" onClick={handleShow5}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show5}
                  onHide={handleClose5}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homewindowModalBottompic2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="homewindowbottom3" onClick={handleShow6}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show6}
                  onHide={handleClose6}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homewindowModalBottompic3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  </div>
                </Modal>
            </div>

        </div>

           
        </div>

    </Breakpoint>

    <Breakpoint small down>
    <div className="portback">
        <div className="smProjectw2">
            <div className="smflexrow">
                <div id="port1" className="smhomewindowtop1"  onClick={handleShow1}></div>
                
                <Modal className =" smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show1}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  
                  <div className=" smcustom-modal bg-light" size="lg">
                     <div className="smfontflex">Title: Wolf Logo Het</div>
                 <div className="smhomeWindow1picflex">
                 <div className="smhomeWindowModalPic1"></div>
                 </div>
                 <div className="smfontdescriptionflex">
                   Description: I made this hat. Me I did it it! its mine. I also made this text 
                   because if you want to be an MC you have to study the skill.</div>
                  <Button  className=" border-dark smmodalbutton"variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="smhomewindowtop2" onClick={handleShow2}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show2}
                  onHide={handleClose2}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smhomeWindowModalPic2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="smhomewindowtop3" onClick={handleShow3}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show3}
                  onHide={handleClose3}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smhomeWindowModalPic3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  </div>
                </Modal>
       
                <div className="smhomewindowbottom1" onClick={handleShow4}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show4}
                  onHide={handleClose4}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smhomewindowModalBottompic1"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  </div>
                </Modal>
                  


                <div className="smhomewindowbottom2" onClick={handleShow5}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show5}
                  onHide={handleClose5}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smhomewindowModalBottompic2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="smhomewindowbottom3" onClick={handleShow6}></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show6}
                  onHide={handleClose6}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homewindowModalBottompic3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="smiconflex">
                    <a  target="blank" href="https://www.facebook.com/katelynn.empey" className="iconFacebook"></a>
                    <a  target="blank" href="https://www.instagram.com/alusadesign" className="iconInstagram"></a>
                    <a  target="blank" href="https://www.linkedin.com/in/katelynn-empey-76b6ab4b/" className="iconLink"></a>
                    <a  target="blank" href="https://www.behance.net/KatieAlusa?tracking_source=search_users_recommended%7CKatie%20alusa" className="iconBehance"></a>
        </div>
            </div>

  </div>
</div>
           

  
    </Breakpoint>


  </div>
)

}



export default Home;