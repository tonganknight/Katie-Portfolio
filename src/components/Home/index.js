import React, {Component, useEffect, useState} from 'react';
import { Button, Modal, Card, Image } from 'react-bootstrap';


function Home() {

/*handel Modals */

  const [show, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

return (



<div className="portback">

        <div className="Projectw1">
            <div className="flexrow">
                <div id="port1" className="homewindowtop"  onClick={handleShow1}>window1</div>
                
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-dark" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="homeWindow1pic"></div>
                 </div>
                
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="homewindowtop">window2</div>
                <div className="homewindowtop">window3</div>
            </div>
            <div className="flexrow">
                <div className="homewindow">window1</div>
                <div className="homewindow">window2</div>
                <div className="homewindow">window3</div>
            </div>

        </div>

           
        </div>
)

}



export default Home;