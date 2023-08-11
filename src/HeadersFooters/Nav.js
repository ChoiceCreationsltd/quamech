import { NavLink } from "react-router-dom"
import {AiOutlineSearch} from 'react-icons/ai'
import image from '../Images/qwamech logo PNG.png'

const Nav = () => {
    const changebg = () => {
        let navbar = document.getElementById('navbar-cust');
        let scrollValue = window.scrollY;

        if (scrollValue < 40) {
            navbar.classList.remove('navbar-cust');
        } else {
            navbar.classList.add('navbar-cust');
        }
    }
    window.addEventListener('scroll', changebg);
    return (
        <>
            <div className="navbar-custom" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex:"3" }}>
                <div className="" style={{ height: '400x', backgroundColor: '#333' }}>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="d-flex justify-content-between">
                                    <div className="">
                                        <img src={image} width='150px' />
                                    </div>
                                    <div>
                                        <div>
                                            <button className="btn btn-secondary rounded-0">Get started</button>
                                            <button className="btn btn-secondary rounded-0 mx-2"><AiOutlineSearch/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <div className="p-3 navbar-cust" id="navbar-cust">
                    <div className="" style={{overflow:'hidden'}}>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="fw-bold text-white">
                                    <div>
                                        <div className="nav-custom-links d-none d-md-flex" style={{ gap: '20px' }}>
                                            <NavLink to='/'>Home</NavLink>
                                            <NavLink to='/About'>About</NavLink>
                                            <NavLink to='/Products&Services'>Products & Services</NavLink>
                                            <NavLink to='/Contactus'>Contact us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                {/* <div style={{height:'5px'}} className="bg-danger"></div> */}
            </div>
        </>
    )
}

export default Nav