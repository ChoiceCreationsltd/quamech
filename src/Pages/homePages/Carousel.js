import image from '../../Images/image1.jpg'
import image1 from '../../Images/image1.png'
import image2 from '../../Images/gear-metal-wheels-close-up.jpg'
import image3 from '../../Images/close-up-metal-gears-3d-rendering.jpg'
import image4 from '../../Images/gears-cogwheels.jpg'
const Carousel = () => {
    return (
        <>
            <div style={{zIndex:'-1'}}>
                <div id="" class="" data-bs-ride="carousel">
                    <div class="carousel-inner" style={{ height: '75vh' }}>
                        <div class="" style={{background:`url(${image3}) center no-repeat`, backgroundSize:'cover'}}>
                            <div className='px-3' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-12 col-md-10'>
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
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel