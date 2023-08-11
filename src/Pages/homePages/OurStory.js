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
   






    const Pagenumber = () => {
        if (page == 1) {
            return (
                <>
                    <div>
                        <div className="row">
                            <div className="col-6 p-5">
                                <div className="">
                                    <div>
                                        <h3>Message from Our CEO</h3>
                                        <p>
                                        consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo volu
                                        </p>
                                        <p>
                                        consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo volu
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 p-5">
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
                            <div className="col-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Our Mission</h4>
                                        <p>
                                            consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Our Mission</h4>
                                        <p>
                                            consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Our Mission</h4>
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
                            <div className="col-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image1} style={{ position: "absolute", top: '-50%' }} />
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
                            <div className="col-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Who we are</h4>
                                        <p>
                                            consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Why Us</h4>
                                        <p>
                                            consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Our Commitment to our community</h4>
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
                            <div className="col-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image3} style={{ position: "absolute", height:'100%'}} />
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
                            <div className="col-6 p-5">
                                <div className="">
                                    <div>
                                        <h4>Our Commitment to Our Communities</h4>
                                        <p>
                                            consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
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
                            <div className="col-6 p-5">
                                <div className="h-100" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <img src={image4} style={{ position: "absolute", height:'100%'}} />
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
                    <div className="fw-bold">
                        <button className="btnlink fw-bold" onClick={() => setPage(1)} id="btn2">Forward From Our CEO</button>
                        <button className="fw-bold btnlink" onClick={() => setPage(2)} id="btn1">Our Vision, Mission and Values</button>
                        <button className="btnlink fw-bold" onClick={() => setPage(3)} id="btn3">Who we are</button>
                        <button className="btnlink fw-bold" onClick={() => setPage(4)} id="btn3">Our Community Commitment</button>
                    </div>
                    <div style={{ backgroundColor: '#ddd' }}>
                        <div>
                            <Pagenumber />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurStory;