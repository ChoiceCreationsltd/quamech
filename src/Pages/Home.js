import image from '../Images/image1.jpg'
import image1 from '../Images/image1.png'
import image2 from '../Images/gear-metal-wheels-close-up.jpg'
import image3 from '../Images/close-up-metal-gears-3d-rendering.jpg'
import image4 from '../Images/gears-cogwheels.jpg'
import { BsGearWideConnected } from 'react-icons/bs'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import Carousel from './homePages/Carousel'
import OurStory from './homePages/OurStory'

const HomePage = () => {

    const Cont = (props) => {
        return (
            <>
                <div className='col-md-4 p-2 col-6 text-center' style={{transform:'translateY(-70px)', zIndex:'1'}}>
                    <div className='d-flex shadow-lg justify-content-center bg-light flex-column' style={{ height: '200px'}}>
                        <div className='p-3'>
                            <BsGearWideConnected size={90} />
                            <div className='py-3 h4' style={{}}>
                                {props.value}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div>

                <div style={{ minHeight: "100vh", marginTop: '60px' }}>
                    <div style={{  }}>
                       <Carousel/>
                        <div className='px-3 ' style={{ paddingBottom: "" }}>
                            <div>
                                <div className='row'>
                                    <div className='col-md-2'></div>
                                    <div className='col-12 col-md-8'>
                                        <div >
                                            <div className='row'>
                                                <Cont value='MECHANICAL ENGINEERING'/>
                                                <Cont value='CIVIL & STRUCTUAL ENGINEERING' />
                                                <Cont value='SUPPLY AND INSTALLATION' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-black'>
                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-10 fw-light'>
                                    <div>
                                        <div>
                                            <div className='fs-2'>Company overview</div>
                                            <div className='fs-5'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <p>
                                                        Quamech Engineering Services offer a one stop solution through
                                                         the different divisions that form an integral part of the company. 
                                                        </p>
                                                        <p>
                                                        Quamech Engineering Services is passionate about supplying sustainable, 
                                                        turn-key solutions that will boost efficiency for our clients. 
                                                        </p>
                                                        <p>
                                                        Our team has experience in high-end designs and detailed
                                                         tailor-made solution for each client. With our strong background 
                                                         and experience in the industry, we can do any size job and provide 
                                                         on-time solutions to all our clients.
                                                        </p>
                                                        <p>
                                                        Along with problem-solving, we also initiate new ideas and skills to enhance
                                                         workflow in operations.
                                                        </p>
                                                    </div>
                                                    <div className='col-6'>
                                                        <p>
                                                        Quamech Engineering Services’ target and supply of the mining, engineering and
                                                         construction, steel mills, food and beverage, transport, agriculture, energy
                                                          and solar power, pulp and paper, sugar mills, chemical and petrochemical and 
                                                          water sanitation, where we have extensive experience and core
                                                         competence offering bespoke/tailored solutions including but not limited to:
                                                        </p>
                                                        <ul>
                                                            <li>
                                                            Plant optimization:
                                                            </li>
                                                            <li>
                                                            Audit of existing plant.
                                                            </li>
                                                            <li>
                                                            Recommendations.
                                                            </li>
                                                            <li>
                                                            Design and simulation.
                                                            </li>
                                                            <li>
                                                            Manufacturing – internal machining and fabrication workshops.
                                                            </li>
                                                            <li>
                                                            Installation.
                                                            </li>
                                                            <li>
                                                            Site maintenance – preventative, correction/repair.
                                                            </li>
                                                            <li>
                                                            365/24/7 technical support.
                                                            </li>
                                                            <li>
                                                            Plant maintenance manuals and training.
                                                            </li>
                                                            <li>
                                                            Plant operate, run and maintain options.
                                                            </li>
                                                            <li>
                                                            Internal financing capability for large outlay purchases and plant operations.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'></div>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <div className='row'>
                                        <div className='col-1'></div>
                                        <div className='col-10'>
                                            <div className='fw-light' style={{minHeight:'100vh'}}>
                                            <OurStory />
                                            </div>
                                        </div>
                                        <div className='col-1'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage