import image from '../Images/close-up-metal-gears-3d-rendering.jpg'
const About = () => {
    return (
        <>
            <div style={{ overflow: 'hidden' }}>
                <div style={{ paddingTop: '100px' }}>
                    <div className="" style={{ minHeight: '65vh', position: 'relative', background: `url(${image}) no-repeat center`, backgroundSize: 'cover' }}>
                        <div className=''>
                            <div className="">
                                <div className=" p-5" style={{ maxWidth: '700px', position: 'absolute', right: '0', top: '60px', bottom: '60px', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                    <div className=" h-100">
                                        <div className='text-white fs-3'>
                                            striving for exxellence in all we do is our habit
                                            we are always looking for opportunities
                                            to grow more and serve better
                                        </div>
                                        <div className='mt-5'>
                                            <button className='btn px-5 btn-outline-light rounded-5 btn-lg'>Contact us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div style={{height:'20px'}} className='bg-danger'></div>
                <div className='my-5' style={{ minHeight: '100vh' }}>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div style={{gap:'30px'}}  className='col-10 px-5 bg-white d-flex flex-column fw-light'>
                            <div className=''>
                                <div className='fw-bold text-danger fs-3'>
                                    About Us
                                </div>
                                <hr className='text-danger mt-1' />
                                <div className='fs-5 '>

                                    <p>
                                        Quamech Engineering Services offer a one stop solution through the different divisions that form an integral part of the company.
                                    </p>
                                    <p>
                                        Quamech Engineering Services is passionate about supplying sustainable, turn-key solutions that will boost efficiency for our clients.
                                    </p>
                                    <p>
                                        Our team has experience in high-end designs and detailed tailor-made solution for each client. With our strong background and experience in the industry, we can do any size job and provide on-time solutions to all our clients.
                                    </p>
                                    <p>
                                        Along with problem-solving, we also initiate new ideas and skills to enhance workflow in operations.
                                    </p>
                                    <p>
                                        Quamech Engineering Services’ target and supply of the mining, engineering and construction,
                                        steel mills, food and beverage, transport, agriculture, energy and solar power, pulp and paper,
                                        sugar mills, chemical and petrochemical and water sanitation, where we have extensive experience
                                        and
                                        core competence offering bespoke/tailored solutions including but not limited to:
                                    </p>
                                </div>
                                <div>
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
                            
                            <div>
                                <div className='fs-3 text-danger fw-bold'>
                                    FUNDAMENTAL PHILOSOPHY AND MANAGEMENT POLICIES
                                </div>
                                <hr className='text-danger mt-1' />
                                <div className='fs-5'>
                                    <p>
                                        Quamech Engineering Services’ contributes to the world through the pursuit of the
                                        possibilities inherent in Mechanical Engineering, Designing, Installation, Repairing
                                        and Maintenance of Mechanical
                                        machineries and equipment, Supply and Structural Engineering Construction Sector.
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                        With the raising of the level of customer satisfaction constituting the predominant theme of management, we shall aim to provide optimal levels of quality, delivery times, costs, and services and engage in corporate activities accordingly.
                                        </li>
                                        <li>
                                        Through engineering technologies, it is our goal to be a constantly growing, future-oriented corporate group highly trusted by shareholders and the general public.
                                        </li>
                                        <li>
                                        We are committed to building a rewarding workplace that respects the independence and creativity of employees, encourages employees to have goals, and permits fair evaluations.
                                        </li>
                                        <li>
                                        Based on compliance with laws and social norms, we shall observe public order as well as contribute to society through conscientious and fair corporate activities.
                                        </li>
                                        <li>
                                        We shall aim to coexist in a state of consonance with people, engineering technologies, and the natural environment and engage in corporate activities that will contribute to the conservation of the global environment.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className='fs-3 text-danger fw-bold'>
                                QUALITY AND PRODUCT SAFETY
                                </div>
                                <hr className='text-danger mt-1' />
                                <div className='fs-5'>
                                    <p>
                                    Based on the Safety standards, which all our African production bases have acquired, we are striving to improve quality and are engaged in continuous improvement activities every step of the way from design and development to production, sales, and service. For these activities, we have adopted a theme of prioritizing the improvement of customer satisfaction to ensure that we are able to manufacture completely unique products and deliver the highest standards of quality.
                                    </p>
                                    <p>
                                    Control system about product liability We establish control regulations about product liability, and not only work for the prevention of an accident caused by defects in products at each step such as product planning, designing, manufacturing, sales, but construct proper response system in case of an accident.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className='fs-3 text-danger fw-bold'>
                                WHY CLIENTS CHOOSE US
                                </div>
                                <hr className='text-danger mt-1' />
                                <div className='fs-5'>
                                    <p>
                                    Positioning a customer-first, quality-first approach as the foundation of our business, we continue to respond to the trust of our customers through a production system incorporating state-of-the-art facilities, a global network that spans the entire country, reliable technologies that anticipate next-generation advances, and new proposals based on our expansive knowledge.
                                    </p>
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

export default About