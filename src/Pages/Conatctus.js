import image from '../Images/close-up-metallic-equipment-part-turning-factory-generated-by-ai.jpg'
const Contact = () => {
    return (
        <>
            <div style={{background:`url(${image}) no-repeat center`,backgroundSize:'cover', height:'75vh'}}>
                <div className='d-flex justify-content-center text-center flex-column' style={{backgroundColor:"rgba(0,0,0,0.6)",height:'100%', paddingTop:'150px'}}>
                    <div className='display-1 ms-5 fw-bold text-white' style={{}}>Contact Us</div>
                </div>
            </div>
            <div style={{height:"20px"}} className='bg-danger'></div>
            <div style={{height:'100vh'}}>

            </div>
        </>
    )
}

export default Contact