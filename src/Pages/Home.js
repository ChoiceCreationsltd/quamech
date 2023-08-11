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
    const Cont = () => {
        return (
            <>
                <div className='col-md-4 p-2 col-6 text-center' style={{transform:'translateY(-70px)', zIndex:'1'}}>
                    <div className='d-flex shadow-lg justify-content-center bg-light flex-column' style={{ height: '200px'}}>
                        <div className='p-3'>
                            <BsGearWideConnected size={90} />
                            <div className='py-3' style={{ fontSize: '10px' }}>
                                stuff about the above logo
                                stuff about the above logo
                                stuff about the above logo
                                stuff about the above logo
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
                                                <Cont />
                                                <Cont />
                                                <Cont />
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
                                <div className='col-10'>
                                    <div>
                                        <div>
                                            <div className='fs-2'>Company overview</div>
                                            <div className='fs-5'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                                         dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                                         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                                                          est, qui dolorem ipsum quia dolor sit amet,
                                                        </p>
                                                    </div>
                                                    <div className='col-6'>
                                                        <p>
                                                        consectetur, adipisci velit, sed quia non numquam eius
                                                           modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                                             Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                                         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                                        </p>
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
                                            <div style={{minHeight:'100vh'}}>
                                            <OurStory/>
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