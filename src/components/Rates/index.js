import React, {useEffect, useState} from 'react';
import  { Breakpoint, small, large, up, down } from 'react-socks';
import { Button, Modal, dialogClassName } from 'react-bootstrap';



function Rates() {

    /*Full Icon Package*/
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

const [show2, setShow2] = useState(false);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);


const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);



    return (
    <div>
            <Breakpoint large up>

        <div className="ratesslate">

            <div className="ratesbackground">

                <div className="largeRatesintroLogo">

                <div className="largeRatesLogo">Placeholder</div>
            
                </div>

                <div className="largeRatesintro"> This is some text that is 
                being tested on this div. We want to format it so it looks nice 
                for this design. We will know after we set up the rest
                of the page how to modify this field. We need to help them understand
                that you are open to work, and have a system set up 
                on how to help clients. You also want this pitch to explain</div>

                <div className="logoBlockholder">
                    <div className="logoTitle">Logos</div>
                </div>

                <div className="fullPackageLogoflex">

                <div className="fullPackageLogoImage" onClick={handleShow1}></div>
                <Modal className ="border-dark"
                  size="xl"
                  show={show1}
                  onHide={handleClose1}
                  dialogClassName="modal-90w"
                                        >
                  <div className="bg-light" size="xl">
                      <div className="fullPackageLogoModalTitle">Full Logo Package</div>
                 <div className="fullPackageLogoModalTitlepicflex">
                 <div className="fullPackageLogoModalTitlepic"></div>
                 </div>
                
            <div className="fullPackageLogoFeaturesFlex">

                <div className="phaselogosFlex">
                    <ul className="fullLogoPackagePhase">Phase 1</ul>
                        <li className="basicLiModal">Consultation</li>
                        <li className="basicLiModal">4 Concept Sketches</li>
 
                </div>

                <div className="phaselogosFlex">
                    <ul className="fullLogoPackagePhase">Phase 2</ul>
                        <li className="basicLiModal">1-2 Concept Edits</li>
                        <li className="basicLiModalBold smallernote">* Additional edits may increase price</li>

                        
                </div>

                <div className="phaselogosFlex">
                    <ul className="fullLogoPackagePhase">Phase 3</ul>
                        <li className="basicLiModal">Minor Edits to Finalize Logo</li>
                        <li className="basicLiModal">Finalized Logo</li>
                        <li className="basicLiModal">Full Color (1 Color, Black, White)</li>
                </div>

                


            </div>

                    <div className="phaseLogoFilesFlex">
                    <ul className="fullLogoPackagePhase">Logo Files</ul>
                        <li className="basicLiModal">.Ai</li>
                        <li className="basicLiModal">.EPS</li>
                        <li className="basicLiModal">.JPEG</li>
                        <li className="basicLiModal">.PNG</li>    
                </div>



            <div className="fullLogoPackageBreakdownFlex"> 
                    <div className="price">$000</div>

            </div>

                  <Button  className=" border-dark modalbutton ratesButton "variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
                </Modal>

                <div className="fullPackageLogoTitle">Full Logo Package</div>

    </div>

                <div className="logoBlockholder">
                    <div className="BrandingTitle"> Branding</div>
                </div>

                <div className="BasicPackageLogoflex">

                <div className="fullPackageLogoImage" onClick={handleShow2}></div>
                <Modal className ="border-dark"
                size="xl"
                show={show2}
                onHide={handleClose2}
                dialogClassName="modal-90w"
                                        >
                <div className="bg-light" size="xl">
                    <div className="fullPackageLogoModalTitle"> Basic Branding Package</div>
                <div className="fullPackageLogoModalTitlepicflex">
                <div className="fullPackageLogoModalTitlepic"></div>
                </div>

                <div className="fullPackageLogoFeaturesFlex">

                <div className="phaselogosFlex">
                    <ul className="BasicLogoPackagePhase">Includes</ul>
                        <li className="basicLiModalBold">* Includes Full Logo Package</li>
                    
                </div>

                <div className="phaselogosFlex">
                <ul className="fullBrandingPackagePhase">Basic Branding Package</ul>
                    <li className="basicLiModal">Company Colors</li>
                    <li className="basicLiModal"> Custom Company Tyefaces</li>
                    <li className="basicLiModal">Company Business Cards</li>
            </div>


                </div>

                <div className="fullLogoPackageBreakdownFlex"> 
                    <div className="price">$00</div>

                </div>
                <Button  className=" border-dark modalbutton ratesButton "variant="secondary" onClick={handleClose2}>
                    Close
                </Button>
                </div>
                </Modal>

                <div className="fullPackageLogoTitle">Basic Branding Package</div>


                </div>

                <div className="BasicPackageLogoAddonsflex">

            <div className="fullPackageLogoImage" onClick={handleShow3}></div>
            <Modal className ="border-dark"
            size="xl"
            show={show3}
            onHide={handleClose3}
            dialogClassName="modal-90w"
                                    >
            <div className="bg-light" size="xl">
                <div className="fullPackageLogoModalTitle">Full Branding Package</div>
            <div className="fullPackageLogoModalTitlepicflex">
            <div className="fullPackageLogoModalTitlepic"></div>
            </div>

            <div className="fullPackageLogoFeaturesFlex">

            <div className="phaselogosFlex">
                <ul className="fullLogoPackagePhase">Includes</ul>
                    <li className="basicLiModalBold">*Full Logo Package</li>
                    <li className="basicLiModalBold">*Basic Branding Package</li>
            </div>

            <div className="phaselogosFlex">
                <ul className="fullBrandingPackagePhase"> Optional Addons</ul>
                    <li className="basicLiModal">Leader Heads</li>
                    <li className="basicLiModal">T-shirt Design</li>
                    <li className="basicLiModal">Car Vinyl</li>
                    <li className="basicLiModal">Hat Design</li>
            </div>

            


            </div>

            <div className="fullLogoPackageBreakdownFlex"> 
                <div className="price">$000</div>

            </div>

            <Button  className=" border-dark modalbutton ratesButton "variant="secondary" onClick={handleClose3}>
                Close
            </Button>
            </div>
            </Modal>

            <div className="fullPackageLogoTitle">Branding Package +</div>

            </div>



            

            </div>
            
        </div>
            </Breakpoint>


            <Breakpoint small down>


            </Breakpoint>

        </div>
      
    )

}

export default Rates;