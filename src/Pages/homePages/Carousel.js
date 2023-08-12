import image from '../../Images/image1.jpg'
import image1 from '../../Images/image1.png'
import image2 from '../../Images/gear-metal-wheels-close-up.jpg'
import image3 from '../../Images/close-up-metal-gears-3d-rendering.jpg'
import image4 from '../../Images/gears-cogwheels.jpg'
const Carousel = () => {
    return (
        <>
            <div style={{zIndex:'-1'}}>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner" style={{ height: '75vh' }}>
                        <div class="" style={{}}>
                            <div className='px-3' style={{ position: 'absolute', top: '0', bottom: '0', right: '0', left: '0', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                <div className='row'>
                                    <div className='col-1'></div>
                                    <div className='col-10'>
                                        <div className='' style={{}}>
                                            <div style={{ height: '75vh' }} className='d-flex justify-content-center flex-column'>
                                                <div>
                                                    <div className=' text-start h-100' >
                                                        <div className=''>
                                                            <div className=''>
                                                                <div className='text-white' style={{}}>
                                                                    <div className='fw-bold display-5'>
                                                                        QUAMECH ENGINEERING <br /> SERVICES
                                                                    </div>
                                                                    <div className='fs-4 fw-light py-4'>
                                                                    We notice everything and have immense confidence in the solutions, we put on the table."
                                                                    </div>
                                                                    <div>
                                                                        <button className='btn btn-outline-info text-white btn-lg rounded-0'>Contact us now</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                            <img src={image3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel