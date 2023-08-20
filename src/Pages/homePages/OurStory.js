import { useState } from "react"
import image1 from '../../Images/construction-site-silhouettes.jpg'
import image2 from '../../Images/african-business-woman-grey-wall-looking.jpg'
import image3 from '../../Images/construction-silhouette.jpg'
import image4 from '../../Images/future-building-const.jpg'

const OurStory = () => {
    const [page, setPage] = useState(1)
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
    let btn3 = document.getElementById('btn3')
    let btn4 = document.getElementById('btn4')

    const increment = () => {
        if(page > 3){
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }
const decrement = () => {
    setPage(page - 1)
}






    const Pagenumber = () => {
        if (page == 1) {
            return (
                <>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6 px-4 py-5">
                                <div className="">
                                    <div >
                                        <h3>Message from Our CEO</h3>
                                        <p>
                                            Dear partners, colleagues and friends,
                                        </p>
                                        <p>
                                            We happen to live in challenging and uncertain era. Nevertheless, a strong wind of change that can blow away
                                            a few flags can also fill the sails and set ships in motion. The need for quick adaptation prompts us to
                                            handle problems in a faster and more cost-saving way,
                                            discover new markets, invent innovative profit generation and introduce new kinds of customer relationships.
                                        </p>
                                        <span className="hide" id="hiden">
                                            <p>
                                                Happily, we can rise to these challenges with the help of modern digital technologies.
                                                On the one hand, these mature technologies are powerful enough to tackle most practical tasks.
                                                On the other hand, they have become widely available to everybody,
                                                not only to the largest and wealthiest businesses, as it used to be not so long ago.
                                            </p>
                                            <p>
                                                In my opinion, PROFICIENCY IN THE USE OF DIGITAL TECHNOLOGIES to address customers'
                                                challenges in an ever-changing and unpredictable environment is Quamech Engineering
                                                Services’ main competitive edge. This know-how includes two components: TECHNOLOGY
                                                EXPERTISE AND INDUSTRY EXPERIENCE. Indeed, we have been accumulating expertise for
                                                10+ years in the market, and enhancing it with mergers with and acquisitions o
                                                f specialized companies.
                                            </p>
                                            <p>
                                                Industry experience means that our profound knowledge of real problems faced by
                                                customers extends to Mechanical Engineering, Designing, Installation, Repairing and
                                                Maintenance of Mechanical machineries and equipment, Supply, Construction and dozens
                                                of other industries-and we have learned best practices to deal with them all.
                                            </p>
                                            <p>
                                                We understand full well that a good business partner must be 100% reliable and act in
                                                a prompt and flexible fashion. At this point, Quamech Engineering Services’ second
                                                advantage, NAMELY HIGH OPERATIONAL EFFICIENCY, comes to the fore.
                                            </p>
                                            <p>
                                                It is enabled by world-class professional management, special efforts to maintain
                                                financial resilience, and automation of business processes.
                                            </p>
                                            <p>
                                                The third advantage of our company is versatility. We do not only supply our customers
                                                with any products and services available on the market but also build SOPHISTICATED
                                                SOLUTIONS WITH HIGH INTELLECTUAL VALUE ADDED.
                                            </p>
                                            <p>
                                                I am confident that our understanding of the right approach to general supply and
                                                engineering goes well beyond merely solving the technical problems of our customers
                                                to create opportunities for innovation and new growth. The list of our clients includes
                                                leading market players, sugar mills, mining, engineering and construction, steel mills,
                                                food and beverage, transport, agriculture, energy and solar power, pulp and paper
                                                , chemical and petrochemical and water sanitation, government agencies, medium and
                                                small businesses-and all of them have a good reason to trust us with challenging
                                                and expensive projects.
                                            </p>
                                            <p>
                                                Welcome to Quamech Engineering Services. We are here to help you succeed.
                                            </p>
                                            <p>
                                                Steve,<br />
                                                C.E.O and Founder


                                            </p>
                                        </span>
                                        <div onClick={() => document.getElementById('hiden').classList.toggle('hide')}>
                                            more...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-5">
                                <div className=" h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image2} width='100%' />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (page == 2) {
            return (
                <>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Our Vission</h4>
                                        <p>
                                            We will enrich daily life and society by contributing to technological development.
                                            Also to create value for our shareholders by:
                                        </p>
                                        <ul>
                                            <li>
                                            Being our customers’ first choice, 
                                            </li>
                                            <li>
                                            Being a great place to work, 
                                            </li>
                                            <li>
                                            Improving the communities in which we work and live, 
                                            </li>
                                            <li>
                                            Being an environmental leader in our industry, and 
                                            </li>
                                            <li>
                                            Leveraging our core strengths to drive growth and increase profitability.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Our Mission</h4>
                                        <p>
                                        With the raising of the level of customer satisfaction constituting the predominant theme of management, 
                                        we shall aim to provide optimal levels of quality, delivery times, costs, and services and engage in corporate
                                         activities accordingly.
                                        </p>
                                        <p>
                                        Through engineering technologies, it is our goal to be a constantly growing,
                                         future-oriented corporate group highly trusted by shareholders and the general public.
                                        </p>
                                        <p>
                                        We are committed to building a rewarding workplace that respects the independence
                                         and creativity of employees, encourages employees to have goals, and permits fair evaluations.
                                        </p>
                                        <p>
                                        Based on compliance with laws and social norms, we shall observe public order as well as
                                         contribute to society through conscientious and fair corporate activities.
                                        </p>
                                        <p>
                                        We shall aim to coexist in a state of consonance with people, carbon technologies, and the natural
                                         environment and engage in corporate activities that will contribute to the conservation of the global environment.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Our Values</h4>
                                        <p>
                                        We will be ahead of the pack in supplying the quality and 
                                        technologies that form the foundations of a variety of industries and products and make the impossible possible.
                                        </p>
                                        <p>
                                        Quamech Engineering Services is guided by the following principles in
                                         serving our shareholders, customers, employees and communities: 
                                        </p>
                                        <ul>
                                            <li>
                                            <b>INTEGRITY:</b> We conduct all we do on behalf of Quamech Engineering Services with respect, candor and honesty. 
                                            </li>
                                            <li>
                                            <b>ACCOUNTABILITY:</b> We strive to fulfil commitments 100% of the time, and when we fall short, we acknowledge, recover and learn from our mistakes. 
                                            </li>
                                            <li>
                                            <b>TEAMWORK:</b> We leverage our resources and diverse talent to achieve superior results. 
                                            </li>
                                            <li>
                                            <b>ACHIEVEMENT:</b> We promote individual and organizational success. 
                                            </li>
                                            <li>
                                            <b>INNOVATION:</b> We value creativity, initiative and agility. 
                                            </li>
                                            <li>
                                            <b>SAFETY:</b> We make workplace safety our highest priority both on land and at sea. 
                                            </li>
                                            <li>
                                            <b>ENVIRONMENT:</b> We are a leader in environmental stewardship and consider the environment in all we do. 
                                            </li>
                                            <li>
                                            <b>COMMUNITY:</b> We contribute positively to the communities in which we work and live. 
                                            </li>
                                            <li>
                                            <b>RICH HISTORY:</b> We have a long, proud history that we honor in all we do.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image1} height='100%' style={{ position: "absolute"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (page == 3) {
            return (
                <>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Who we are</h4>
                                        <p>
                                        Quamech Engineering Services offer a one stop solution through the different divisions that form an integral part of the company.
                                        </p>
                                        <p>
                                        Quamech Engineering Services is passionate about supplying sustainable, turn-key solutions that will boost efficiency for our clients. 
                                        </p>
                                        <p>
                                        Our team has experience in high-end designs and detailed tailor-made solution for each client. With our strong background and experience
                                         in the industry, we can do any size job and provide on-time solutions to all our clients.
                                        </p>
                                        <p>
                                        Along with problem-solving, we also initiate new ideas and skills to enhance workflow in operations.
                                        </p>
                                        <p>
                                        Quamech Engineering Services’ target and supply of the mining, engineering and construction, steel mills, food and beverage, transport,
                                         agriculture, energy and solar power, pulp and paper, sugar mills, chemical and petrochemical and water 
                                        sanitation, where we have extensive experience and core competence offering bespoke/tailored solutions including but not limited to:
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
                            <div className="col-12 col-md-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image3} style={{ position: "absolute", height: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (page == 4) {
            return (
                <>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Our Commitment to Our Communities</h4>
                                        <p>
                                        Our corporate philosophy of contributing to the Country by pursuing the possibilities inherent in Mechanical Engineering, 
                                        supply and construction 
                                        embodies the objective of corporate social responsibility (CSR) itself, namely, contributing to sustainable development.
                                        </p>
                                        <p>
                                        Based on our corporate philosophy, all employees including senior management vow to make ongoing contributions to 
                                        sustainable development by maintaining healthy relationships with all our stakeholders and working on environmental and social issues.
                                        </p>

                                        <h4>CORPORATE GOVERNANCE</h4>
                                        <p>
                                        Under our corporate philosophy of contributing to the world by pursuing the possibilities inherent in Mechanical Engineering, supply and structural Engineering, to develop perpetually as a global corporate company, 
                                        we have built a firm internal control system and also promote healthy corporate activities that prioritize compliance.
                                        </p>
                                        <p>
                                        All Quamech Engineering Services employees are provided with a copy of our behavioural standards, which indicate action
                                         guidelines, and our compliance guidebook, which explains laws and regulations that must be observed. In addition to carrying
                                          out educational activities to encourage awareness, we have rolled out this policy at our office with the aim of ensuring a unified 
                                          awareness across the entire company.
                                        </p>
                                        <p>
                                        We have also established a risk and compliance committee, and are working to solve various issues through interdepartmental coordination.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image4} style={{ position: "absolute", height: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

    }
    return (
        <>
            <div>
                <div>
                    <div className="fw-bold d-none d-md-block">
                        <button className="btnlink fw-bold" onClick={() => setPage(1)} id="btn2">Forward From Our CEO</button>
                        <button className="fw-bold btnlink" onClick={() => setPage(2)} id="btn1">Our Vision, Mission and Values</button>
                        <button className="btnlink fw-bold" onClick={() => setPage(3)} id="btn3">Who we are</button>
                        <button className="btnlink fw-bold" onClick={() => setPage(4)} id="btn3">Our Community Commitment</button>
                    </div>
                    <div style={{ backgroundColor: '#ddd' }}>
                        <div className="d-flex justify-content-between">
                            {page == 1 ? 
                            <button disabled  className="btn btn-light rounded-0">previouse</button>

                            :
                            <button onClick={() => decrement()}  className="btn rounded-0 btn-light">previouse</button>
                            
                        }
                        <button onClick={() => increment()} className="btn btn-light rounded-0 ">next</button>
                        </div>
                        <div className="" style={{textAlign:'justify'}}>
                            <Pagenumber />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurStory;