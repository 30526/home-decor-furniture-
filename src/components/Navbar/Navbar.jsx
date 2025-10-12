import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router';

const Navbar = () => {
    const homeLink = <Link to={'/'}><li>Home</li></Link>
    return (
        <nav className="navbar shadow-sm">
            <Container>
                <div className='flex items-center justify-between'>
                    <div className="navbar-start border-">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {homeLink}
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Changelog</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Download</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='flex items-center hover:cursor-pointer'>
                            {/* <img className='w-[40px] rotate-270' src={logo} alt="Logo of the Customer Support page" /> */}
                            <a className="font-semibold ml-1 text-[20px] text-[#2a2a2b] hidden
                             md:block">Customer Support</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className='mr-4 hidden md:block'>
                            <ul className="px-1 flex gap-4">
                                {homeLink}
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Changelog</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Download</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>

                        <div className="navbar-end w-fit">
                            <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none
                             rounded-lg text-white font-semibold"><span></span> New Ticket</a>
                        </div>
                    </div>
                </div>
            </Container>
        </nav >
    );
};

export default Navbar;