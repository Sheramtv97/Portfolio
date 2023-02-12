import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

const Header = () => {


    return (
        <header id='header'>
            <div className="container">
                <div className="header--general">

                    <div className='header--general__logo'>
                        <Link to={'/'}>SH<span>era</span></Link>
                    </div>

                    <div className='header--general__block'>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/skills'}>Skills</NavLink>
                        <NavLink to={'/projects'}>Projects</NavLink>
                    </div>

                    <div className='header--general__title'>

                        <div className='header--general__title--top'>
                            <AiOutlineLinkedin/>
                            <a href="https://www.linkedin.com/in/shera-mamatov-99880a265/">Linkedin</a>
                        </div>

                        <div className='header--general__title--top'>
                            <BsGithub/>
                            <a href="https://github.com/Sheramtv97">Github</a>
                        </div>

                        <button>
                            <FiMail/>
                            <a href="tel:+996705149797">Contact me</a>
                        </button>

                    </div>

                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>

                        <ul className="menu__box">
                        <li><NavLink to={'/about'}>About</NavLink></li>
                         <li><NavLink to={'/skills'}>Skills</NavLink></li>
                         <li><NavLink to={'/projects'}>Projects</NavLink></li>
                            <div className='lin'> <AiOutlineLinkedin/>
                                <a href="https://www.linkedin.com/in/shera-mamatov-99880a265/">Linkedin</a></div>
                            <div className='git'> <BsGithub/>
                                <a href="https://github.com/Sheramtv97">Github</a></div>
                            <li className='btn'> <button>
                                <FiMail/>
                                <a href="tel:+996705149797">Contact me</a>
                            </button></li>


                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;