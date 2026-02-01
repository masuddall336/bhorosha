import React, { useState } from 'react'
import company_log from '../../../public/bhorosha.png';
import { NavLink } from 'react-router';
import './navbar.css'

import { IoMdArrowDropup } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuUnfoldFill } from "react-icons/ri";




const Navbar = () => {
    let [activeNav, setActiveNav] = useState('home');

    const handleActivenav = (manu) => {
        setActiveNav(manu);
    }

    return (
        <div id='nav_wrapper' className='flex items-center justify-between py-1 px-5 '>
            {/* Responsive Three Line icon */}
            <div id='three_line' className='hidden'>
                <RiMenuUnfoldFill />
            </div>

            {/* Company Logo */}
            <div className=''>
                <img className='w-[50%]' src={company_log} alt="" />
            </div>
            <nav>
                <nav className="">
                    <ul className='flex ul  bg-[#3a3a3a91] rounded main_ul'>
                        <NavLink onClick={() => handleActivenav('home')} className={activeNav === 'home' ? "bg-[#EC4024]  py-2 px-2 transition-all duration-400 ease-in-out  rounded-l-sm border-r border-r-[#383737] " : 'py-2 px-2 transition-all duration-400 ease-in-out  rounded-l-sm border-r border-r-[#383737]  bg-none hover:bg-[#EC4024]'}><li >Home</li></NavLink>

                        {/* first list item */}
                        <NavLink id='main_menu' onClick={() => handleActivenav('beauty_personal_care')} className={activeNav === 'beauty_personal_care' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] relative' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024] relative'}>
                            <li id='beauty_personalCare' className='flex items-center gap-1'>Beauty &amp; Personal Care <IoIosArrowDown width='100px' height='100px' />
                                {/* first list item submenu */}
                                <ul id='sub_menu_wrapper' className="submenu absolute border-1 border-[#ffffff54] w-[130%] z-10">

                                    <NavLink className='block border-t border-b border-t-[#ffffff75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400 relative' href="/skincare-products/"><li>Skincare Products</li> </NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Hair Care Products</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Body Care</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Oral Care</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Men’s Grooming</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Beauty Tools &amp; Devices</li></NavLink>
                                    <NavLink className='block border-t  border-t-[#0d0c0c75]  py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024]' href="/skincare-products/"><li>Makeup &amp; Cosmetics</li></NavLink>
                                </ul>
                                <div className='top_arrow absolute top-[63%] left-[90%] opacity-0 transition-all duration-400'>
                                    <IoMdArrowDropup className='' />
                                </div>
                            </li>
                        </NavLink>

                        {/* Second list item */}
                        <NavLink id='main_menu' onClick={() => handleActivenav('home_Essentials')} className={activeNav === 'home_Essentials' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] relative' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024] relative'}>
                            <li id='beauty_personalCare' className='flex items-center gap-1'>Home Essentials <IoIosArrowDown width='100px' height='100px' />
                                {/* Second list item submenu */}
                                <ul id='sub_menu_wrapper' className="submenu absolute z-10 border-1 border-[#ffffff54] w-[150%]">
                                    <NavLink className='block border-t border-b border-t-[#ffffff75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400 relative' href="/skincare-products/"><li>Kitchen Tools & Gadgets</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Storage & Organization</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Shoe Racks</li></NavLink>
                                    <NavLink className='block border-t  border-t-[#0d0c0c75]  py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024]' href="/skincare-products/"><li>Home Security</li></NavLink>
                                </ul>
                                <div className='top_arrow absolute top-[63%] left-[90%] opacity-0 transition-all duration-400'>
                                    <IoMdArrowDropup className='' />
                                </div>
                            </li>
                        </NavLink>

                        {/* Third list item */}
                        <NavLink id='main_menu' onClick={() => handleActivenav('electronics')} className={activeNav === 'electronics' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] relative' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024] relative'}>
                            <li id='beauty_personalCare' className='flex items-center gap-1'>Electronics<IoIosArrowDown width='100px' height='100px' />
                                {/* Third list item submenu */}
                                <ul id='sub_menu_wrapper' className="submenu absolute z-10 border-1 border-[#ffffff54] w-[200%]">
                                    <NavLink className='block border-t border-b border-t-[#ffffff75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400 relative' href="/skincare-products/"><li>Phone Cases & Covers</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Smartwatches</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Security Cameras</li></NavLink>
                                    <NavLink className='block border-t  border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Power Banks</li></NavLink>
                                </ul>
                                <div className='top_arrow absolute top-[63%] left-[90%] opacity-0 transition-all duration-400'>
                                    <IoMdArrowDropup className='' />
                                </div>
                            </li>
                        </NavLink>

                        {/* Forth list item */}
                        <NavLink id='main_menu_islamic' onClick={() => handleActivenav('islamic_items')} className={activeNav === 'islamic_items' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l rounded-r border-l-[#fce0e0] relative' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l rounded-r border-l-[#fce0e0] bg-none hover:bg-[#EC4024] relative'}>
                            <li id='beauty_personalCare' className='flex items-center gap-1'>Islamic Items<IoIosArrowDown />
                                {/* Forth list item submenu */}
                                <ul id='sub_menu_wrapper_islamic' className="submenu absolute z-10 border-1 border-[#ffffff54] w-[200%]">
                                    <NavLink className='block border-t border-b border-t-[#ffffff75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400 relative' href="/skincare-products/"><li>Book's</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Wall Frames & Calligraphy</li></NavLink>
                                    <NavLink className='block border-t border-b border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Alcohol-Free Attar & Fragrances</li></NavLink>
                                    <NavLink className='block border-t  border-t-[#0d0c0c75] border-b-[#fce0e0] py-2 pl-2 bg-[#3a3a3a91] hover:bg-[#EC4024] transition-all duration-400' href="/skincare-products/"><li>Islamic Gift Boxes</li></NavLink>
                                </ul>
                                <div className='top_arrow absolute top-[63%] right-[85%] opacity-0 transition-all duration-400'>
                                    <IoMdArrowDropup className='' />
                                </div>
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </nav>
            {/* Login */}
            <div className='flex gap-3'>
                <NavLink to='/users' className=' signUp' href="">Users</NavLink>
                <NavLink to='/signUp' className=' signUp' href="">Sign Up</NavLink>
                <NavLink to='/signIn' className=' login' href="">Login</NavLink>
            </div>
        </div>
    )
}

export default Navbar;



//  <li><a href="/best-sellers/">Popular Picks</a></li>
//                     <li><a href="/top-rated/">	Highly Reviewed</a></li>
//                     <li><a href="/best-deals/">Recommended Products</a></li>
//                     <li><a href="/under-25/">Budget-Friendly Picks</a></li>
//                     <li><a href="/trending-beauty/">	Latest Beauty Picks</a></li>

//                     <li>
//                         <a href="/guides/">Guides</a>
//                         <ul class="submenu">
//                             <li><a href="/product-reviews/">Product Reviews</a></li>
//                             <li><a href="/buying-guides/">Buying Guides</a></li>
//                             <li><a href="/best-of-beauty/">Best of Beauty</a></li>
//                             <li><a href="/comparisons/">Comparison Charts</a></li>
//                             <li><a href="/beauty-tips/">Beauty Tips</a></li>
//                         </ul>
//                     </li>
