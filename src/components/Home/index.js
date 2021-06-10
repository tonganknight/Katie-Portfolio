import React, {Component, useEffect, useState} from 'react';
import { Button, Modal, Card, Image } from 'react-bootstrap';


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



<div className="portback">

        <div className="Projectw1">
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
)

}



export default Home;