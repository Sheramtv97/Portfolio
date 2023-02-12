import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsGithub, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer--general">
                    <div className='footer--general__logo'>
                        <Link to={'/'}>SH<span>era</span></Link>
                        <div className='footer--general__logo--block'>
                            <NavLink to={'/about'}>About</NavLink>
                            <NavLink to={'/skills'}>Skills</NavLink>
                            <NavLink to={'/projects'}>Projects</NavLink>
                        </div>
                    </div>

                    <div className='footer--general__title'>
                        <div className='footer-d'>
                            <div className='footer--general__title--top'>
                                <AiOutlineLinkedin/>
                                <a href="https://www.linkedin.com/in/shera-mamatov-99880a265/">Linkedin</a>
                            </div>

                            <div className='footer--general__title--top'>
                                <BsGithub/>
                                <a href="https://github.com/Sheramtv97">Github</a>
                            </div>
                        </div>

                            <button>
                                <FiMail/>
                                <a href="tel:+996705149797">Contact me</a>
                            </button>

                        <div className='footer--general__title--block'>
                            <div className='footer--general__title--block--icon'>
                                <BsInstagram className='ins'/>
                                <a href="https://wa.me/qr/UTHG3NB4WBNXD">Whatsapp</a>
                            </div>

                            <div className='footer--general__title--block--icon'>
                                <BsWhatsapp className='wh'/>
                                <a href="https://www.instagram.com/shera_mamatov/">Instagram</a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;