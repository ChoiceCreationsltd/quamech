import { NavLink } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import image from '../Images/QWA LOGO.png'
import {FiMenu} from 'react-icons/fi'
import { useState } from "react"

const Nav = () => {
    const [navs, setNav] = useState(false)

    const pushdown = () => {
        document.getElementById('nav-custom-link-drop').classList.toggle("show")
    }
    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementById('nav-custom-link-drop');
            var i; 
            for(i = 0; i < dropdowns.lengtt; i++) {
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // const changebg = () => {
    //     let navbar = document.getElementById('navbar-cust');
    //     let scrollValue = window.scrollY;
    //     if (scrollValue < 40) {
    //         navbar.classList.remove('navbar-cust');
    //     } else {
    //         navbar.classList.add('navbar-cust');
    //     }
    // }
    // window.addEventListener('scroll', changebg);
    return (
        <>
            <div className="navbar-custom" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: "3" }}>
                <div className="bg-white" style={{ height: '400x' }}>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-12 col-md-10">
                                <div className="d-flex justify-content-between">
                                    <div className="">
                                        <img src={image} width='150px' />
                                    </div>
                                    <div>
                                        <div>
                                            <button className="btn btn-danger rounded-0">Get started</button>
                                            <button className="btn btn-danger rounded-0 mx-2"><AiOutlineSearch /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
                <div className="p-3 navbar-cust" id="navbar-cust">
                    <div className="" style={{ overflow: 'hidden' }}>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 col-12">
                                <div className="fw-bold text-white">
                                    <div>
                                        <div className="nav-custom-links d-none d-md-flex" style={{ gap: '20px' }}>
                                            <NavLink to='/'>
                                                Home
                                                <div className="line"></div>
                                            </NavLink>
                                            <NavLink to='/About'>
                                                About Us
                                                <div className="line"></div>
                                            </NavLink>
                                            <NavLink to='/Products&Services'>
                                                Our Services
                                                <div className="line"></div>
                                            </NavLink>
                                            <NavLink to='/Company Profile'>
                                                Company Profile
                                                <div className="line"></div>
                                            </NavLink>
                                            <NavLink to='/Contactus'>
                                                Contact Us
                                                <div className="line"></div>
                                            </NavLink>
                                        </div>
                                        <div className="d-md-none">
                                            <div className="text-end">
                                                <button onClick={() => pushdown()} className="btn dropbtn text-white "><FiMenu size={20} /></button>
                                            </div>
                                            <div className="nav-custom-link-drop" id="nav-custom-link-drop">
                                                <NavLink to='/'>
                                                    Home
                                                </NavLink>
                                                <NavLink to='/About'>
                                                    About Us
                                                </NavLink>
                                                <NavLink to='/Products&Services'>
                                                    Our Services
                                                </NavLink>
                                                <NavLink to='/Company Profile'>
                                                    Company Profile
                                                </NavLink>
                                                <NavLink to='/Contactus'>
                                                    Contact Us
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
                {/* <div style={{height:'5px'}} className="bg-danger"></div> */}
            </div>
        </>
    )
}

export default Nav