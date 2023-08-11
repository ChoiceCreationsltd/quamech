import image from '../Images/qwamech logo PNG.png'
import image2 from '../Images/choice.png'
const Footer = () => {
    return (
        <>
            <div>
                <div className='bg-dark text-white p-3'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-10'>
                            <div>
                                <div className=' d-flex justify-content-between py-3' >
                                    <div className=' d-flex justify-content-center flex-column'>
                                        <img src={image} width='200px' />
                                    </div>
                                    <div className=' d-flex justify-content-end flex-column py-3'>
                                        <div style={{ fontSize: '11px' }}>
                                            created by <br />
                                            <a href="http://choicecreations.co.zm/"><img src={image2} width='150px' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '11px' }} className='d-flex justify-content-evenly'>
                                    <div>Copyright &copy;2023 | Quamech Engineering Services</div>
                                    <div>Terms of use | Privacy Policy</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer