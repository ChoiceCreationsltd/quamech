import image from '../Images/close-up-metallic-equipment-part-turning-factory-generated-by-ai.jpg'
import {BsHeadset} from 'react-icons/bs'
import {IoMdSend} from 'react-icons/io'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
    return (
        <>
            <div style={{background:`url(${image}) no-repeat center`,backgroundSize:'cover', minHeight:'100vh'}}>
                <div className='d-flex  text-white justify-content-center text-center flex-column' style={{backgroundColor:"rgba(0,0,0,0.6)",minHeight:'100vh', paddingTop:'150px'}}>
                    <div className='display-1 ms-5 fw-bold' style={{}}>Contact Us</div>

                    <div>
                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-10'>
                                    <div className='row'>
                                        <div className='col-md-4 col-12'>
                                            <div className='py-4'>
                                                <div className='row'>
                                                    <div className='col-12 p-2'>
                                                        <div className='border-primary contx border rounded  p-3 d-flex' >
                                                            <div className='d-flex justify-content-center border-danger me-2 flex-column p-3' style={{borderRight:"5px solid"}}><BsHeadset size={50} /></div>
                                                            <div>
                                                                <div style={{fontSize:'11px'}}>
                                                                    <div><b>Customer</b> care</div>
                                                                    <div>+260 977 777 777</div>
                                                                </div>
                                                                <div style={{fontSize:'11px'}}>
                                                                    <div><b>Customer</b> care</div>
                                                                    <div>+260 977 777 777</div>
                                                                </div>
                                                                <div style={{fontSize:'11px'}}>
                                                                    <div><b>Customer</b> care</div>
                                                                    <div>+260 977 777 777</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='col-12 p-2'>
                                                        <div className='border-danger contx border rounded  p-3 d-flex'>
                                                            <div className='d-flex justify-content-center border-danger me-2 flex-column p-3 ' style={{borderRight:"5px solid"}}><FaMapMarkerAlt className='' size={50} /></div>
                                                            <div>
                                                                <div style={{fontSize:'11px'}}>
                                                                    <div className='fw-bold'>Mazabuka, Zambia</div>
                                                                    <div>P.O.Box 670022</div>
                                                                    <div>Plot # 440077</div>
                                                                    <div>Motel area</div>
                                                                </div>
                                                                <a style={{fontSize:'11px'}} href=''>Show map</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='col-12 p-2'>
                                                        <div className='border-primary contx border rounded  p-3 d-flex'>
                                                            <div className='d-flex justify-content-center border-danger me-2 flex-column p-3 ' style={{borderRight:"5px solid"}}><AiOutlineMail className='' size={50} /></div>
                                                            <div>
                                                                <div className='text-start' style={{fontSize:'11px'}}>
                                                                    <div>
                                                                        <div className='fw-bold'>Cstomer care</div>
                                                                        <div>CustomerCare@Quamech.co.zm</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='fw-bold'>Enguiry</div>
                                                                        <div>Enquiry@Quamech.co.zm</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='fw-bold'>Cstomer care</div>
                                                                        <div>CustomerCare@Quamech.co.zm</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-12'>
                                            <div className='py-5'>
                                                <form>
                                                    <div className='d-flex' style={{gap:'20px'}}>
                                                        <div className='w-100 text-start'>
                                                            <div>Email:</div>
                                                            <input required type='email' className='border border-primary text-white p-2 w-100' style={{backgroundColor:'rgba(0,0,0,0)' }}/>
                                                        </div>
                                                        <div className='w-100 text-start'>
                                                            <div>Subject (optional):</div>
                                                            <input type='text' placeholder='' className='border border-primary text-white p-2 w-100' style={{backgroundColor:'rgba(0,0,0,0)' }}/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <textarea  style={{resize:'none',backgroundColor:'rgba(0,0,0,0)', minHeight:'300px'}} className='border text-white p-2 border-primary w-100 my-4' />
                                                    </div>
                                                    <button className='btn btn-outline-primary text-white rounded-0 w-50 '>Send <IoMdSend className='text-white'  size={20}/></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact