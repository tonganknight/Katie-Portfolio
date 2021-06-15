import React,{ useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import  { Breakpoint, small, large, up, down } from 'react-socks';
function Portfolio() {

    /*modal Handler*/
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
/*Seventh Modal*/
const [show7, setShow7] = useState(false);
const handleClose7 = () => setShow7(false);
const handleShow7 = () => setShow7(true);
/*Eighth Modal*/
const [show8, setShow8] = useState(false);
const handleClose8 = () => setShow8(false);
const handleShow8 = () => setShow8(true);
/*Ninth Modal*/
const [show9, setShow9] = useState(false);
const handleClose9 = () => setShow9(false);
const handleShow9 = () => setShow9(true);
/*Tenth Modal*/
const [show10, setShow10] = useState(false);
const handleClose10 = () => setShow10(false);
const handleShow10 = () => setShow10(true);
/*Eleventh Modal*/
const [show11, setShow11] = useState(false);
const handleClose11 = () => setShow11(false);
const handleShow11 = () => setShow11(true);
/*Twelfth Modal*/
const [show12, setShow12] = useState(false);
const handleClose12 = () => setShow12(false);
const handleShow12 = () => setShow12(true);
/*Thirteenth Modal*/
const [show13, setShow13] = useState(false);
const handleClose13 = () => setShow13(false);
const handleShow13 = () => setShow13(true);
/*Fourteenth Modal*/
const [show14, setShow14] = useState(false);
const handleClose14 = () => setShow14(false);
const handleShow14 = () => setShow14(true);
/*Fifteenth Modal*/
const [show15, setShow15] = useState(false);
const handleClose15 = () => setShow15(false);
const handleShow15 = () => setShow15(true);
/*Sixteenth Modal */
const [show16, setShow16] = useState(false);
const handleClose16 = () => setShow16(false);
const handleShow16 = () => setShow16(true);

    return(
     <div>

      <Breakpoint large up>

        <div className="portback">
            <div className="Projectw2">
            <div className="flexrow">         
                <div onClick={handleShow1} className="portWindowTop1"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show1}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal1"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow2} className="portWindowTop2"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show2}
                  onHide={handleClose2}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow3} className="portWindowTop3"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show3}
                  onHide={handleClose3}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow4} className="portWindowTop4"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show4}
                  onHide={handleClose4}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal4"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  </div>
                </Modal>
            </div>
            <div className="flexrow">
                <div onClick={handleShow5} className="portWindow4"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show5}
                  onHide={handleClose5}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal5"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow6} className="portWindow5"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show6}
                  onHide={handleClose6}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal6"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow7} className="portWindow6"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show7}
                  onHide={handleClose7}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal7"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose7}>
                    Close
                  </Button>
                  </div>
                </Modal>
                
                <div onClick={handleShow8} className="portWindow7"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show8}
                  onHide={handleClose8}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal8"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose8}>
                    Close
                  </Button>
                  </div>
                </Modal>

            </div>

            <div  className="flexrow">

                <div onClick={handleShow9} className="portWindow8"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show9}
                  onHide={handleClose9}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal9"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose9}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow10} className="portWindow9"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show10}
                  onHide={handleClose10}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal10"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose10}>
                    Close
                  </Button>
                  </div>
                </Modal>
                
                <div onClick={handleShow11} className="portWindow10"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show11}
                  onHide={handleClose11}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal11"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose11}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow12} className="portWindow11"></div>
                <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show12}
                  onHide={handleClose12}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal12"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose12}>
                    Close
                  </Button>
                  </div>
                </Modal>
            </div>

            <div  className="flexrow">
            <div onClick={handleShow13} className="portWindow12"></div>
            <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show13}
                  onHide={handleClose13}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal13"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose13}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow14} className="portWindow13"></div>
            <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show14}
                  onHide={handleClose14}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal14"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose14}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow15} className="portWindow15"></div>
            <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show15}
                  onHide={handleClose15}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal15"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose15}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow16} className="portWindow16"></div>
            <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show16}
                  onHide={handleClose16}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal16"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose16}>
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
            <div className="smflexrowport">         
                <div id="port1" onClick={handleShow1} className="smportWindowTop1"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show1}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal1"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow2} className="smportWindowTop2"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show2}
                  onHide={handleClose2}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal2"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow3} className="smportWindowTop3"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show3}
                  onHide={handleClose3}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal3"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow4} className="smportWindowTop4"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show4}
                  onHide={handleClose4}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal4"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow5} className="smportWindow4"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show5}
                  onHide={handleClose5}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal5"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow6} className="smportWindow5"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show6}
                  onHide={handleClose6}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal6"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow7} className="smportWindow6"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show7}
                  onHide={handleClose7}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal7"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose7}>
                    Close
                  </Button>
                  </div>
                </Modal>
                
                <div onClick={handleShow8} className="smportWindow7"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show8}
                  onHide={handleClose8}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal8"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose8}>
                    Close
                  </Button>
                  </div>
                </Modal>


                <div onClick={handleShow9} className="smportWindow8"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show9}
                  onHide={handleClose9}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal9"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose9}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow10} className="smportWindow9"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show10}
                  onHide={handleClose10}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal10"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose10}>
                    Close
                  </Button>
                  </div>
                </Modal>
                
                <div onClick={handleShow11} className="smportWindow10"></div>
                <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show11}
                  onHide={handleClose11}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal11"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose11}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div onClick={handleShow12} className="smportWindow11"></div>
                <Modal className =" .snmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show12}
                  onHide={handleClose12}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="sncustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal12"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose12}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow13} className="smportWindow12"></div>
            <Modal className =" .modal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show13}
                  onHide={handleClose13}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="portModal13"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose13}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow14} className="smportWindow13"></div>
            <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show14}
                  onHide={handleClose14}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal14"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose14}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow15} className="smportWindow15"></div>
            <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show15}
                  onHide={handleClose15}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal15"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose15}>
                    Close
                  </Button>
                  </div>
                </Modal>

            <div onClick={handleShow16} className="smportWindow16"></div>
            <Modal className =" .smmodal-content modal-body-flex  border-dark"
                  size="lg"
                  show={show16}
                  onHide={handleClose16}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="smcustom-modal bg-light" size="lg">
                 <div className="homeWindow1picflex">
                 <div className="smportModal16"></div>
                 </div>
                  <Button  className=" border-dark modalbutton"variant="secondary" onClick={handleClose16}>
                    Close
                  </Button>
                  </div>
                </Modal>
                

            </div>

            
    </div>




    </div>



      </Breakpoint>

    </div>
    



    )
}
export default Portfolio