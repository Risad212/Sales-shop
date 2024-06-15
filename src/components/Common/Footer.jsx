import React from 'react'
import { Link } from 'next/link';
import Logo from '@/media/footer-logo.png';

const Footer = () => {
    return (
        <>
            <footer className='py-[4em] text-[#fff] bg-[#0e1418]'>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay=".9s" data-wow-duration=".4s">
                            <Link><img className='mb-4' src={Logo} alt="" /></Link>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi ullam quam, deleniti rem!</p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 wow fadeInLeft px-[40px]" data-wow-delay=".7s" data-wow-duration=".3s">
                            <h4 className="footer-head mb-4 text-[18px]">Quick Links</h4>
                            <ul className="unstyle-link">
                                <li className='mb-[10px]'><a className='text-[14px] text-[#afb4bf]' href="about.html">Home</a></li>
                                <li className='mb-[10px]'><a  className='text-[14px] text-[#afb4bf]' href="trip.html">Shop</a></li>
                                <li className='mb-[10px]'><a  className='text-[14px] text-[#afb4bf]' href="blog.html">Cart</a></li>
                                <li className='mb-[10px]'><a  className='text-[14px] text-[#afb4bf]' href="blog.html">Wishlist</a></li>
                                <li className='mb-[10px]'><a  className='text-[14px] text-[#afb4bf]' href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-duration=".3s" data-wow-delay=".4s">
                            <h4 className="footer-head mb-4 text-[18px]">Contact Info</h4>
                            <ul className="unstyle-link">
                                <li  className='text-[14px] text-[#afb4bf]'><strong>Address:</strong>
                                    98 West 21th Street, Suite 721 New York NY 10016
                                </li>
                                <li  className='text-[14px] text-[#afb4bf]'><strong>Phone:</strong>
                                    (1) 284-676-2886</li>
                                <li  className='text-[14px] text-[#afb4bf]'><strong>Email:</strong>
                                    info@yourdomain.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-duration=".5s" data-wow-delay="1.3s">
                            <h4 className="footer-head mb-4 text-[18px]">Newsletter</h4>
                            <p className="mb-3 text-[14px] text-[#afb4bf]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi
                                ullam quam, deleniti rem!</p>
                            <form action="#" className="d-flex relative">
                                <input type="text" className="form-control me-2 w-[80%] h-[46px] bg-[#3e525f] rounded-[30px] border-none px-[20px] text-[#fff] text-[14px]" name="email" id="email"
                                    placeholder="Your Email Address" />
                                    <button className='absolute w-[40px] h-[40px] rounded-[50%] border-none top-[3px] right-[88px] text-white bg-[--primary-color] '><i className="fa-solid fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer




