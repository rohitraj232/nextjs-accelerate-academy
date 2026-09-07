import Link from "next/link";
// import Image from "next/image";

export default function Navbar() {
    return (
        <nav id="topnav" className="defaultscroll is-sticky">
            <div className="max-w-7xl mx-auto py-1 relative">
                <Link className="logo" href="index.html">
                    <img src="assets/images/logo-dark.png" className="inline-block dark:hidden" alt="" />
                    <img src="assets/images/logo-light.png" className="hidden dark:inline-block" alt="" />
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <a href="#" className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0">
                    <li className="inline-block relative me-1">
                        <button className="text-[20px]" onclick="navbarSearch.showModal()" type="button">
                            <i className="iconoir-search align-middle"></i>
                        </button>                
                    </li>

                    <li className="dropdown inline-block relative">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary border border-primary text-white" type="button">
                            <i data-feather="shopping-cart" className="size-4"></i>
                        </button>
                        <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 hidden" onclick="event.stopPropagation();">
                            <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                <li className="px-3">Your shopping cart is empty.</li>
                            </ul>
                        </div>
                    </li>
    
                    <li className="dropdown inline-block relative">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                            <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary border border-primary text-white"><img src="assets/images/team/1.jpg" className="rounded-full size-7.5" alt="" /></span>
                        </button>
                        <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hidden" onclick="event.stopPropagation();">
                            <ul className="py-2 text-start">
                                <li>
                                    <Link href="" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white"><i data-feather="user" className="size-4 me-2"></i>Profile</Link>
                                </li>
                                <li>
                                    <Link href="" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white"><i data-feather="settings" className="size-4 me-2"></i>Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white"><i data-feather="lock" className="size-4 me-2"></i>Lockscreen</Link>
                                </li>
                                <li>
                                    <Link href="" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-primary dark:hover:text-white"><i data-feather="log-out" className="size-4 me-2"></i>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div id="navigation">
                    <ul className="navigation-menu justify-start">
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="javascript:void(0)">Home</Link><span className="menu-arrow"></span>

                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li>
                                            <Link href="index.html" className="sub-menu-item">
                                                <div className="lg_992:text-center">
                                                    <span className="hidden lg_992:block"><img src="assets/images/demos/1.png" className="img-fluid rounded shadow-md" alt="" /></span>
                                                    <span className="lg_992:mt-2 block">Hero One</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link href="index-two.html" className="sub-menu-item">
                                                <div className="lg_992:text-center">
                                                    <span className="hidden lg_992:block"><img src="assets/images/demos/2.png" className="img-fluid rounded shadow-md" alt="" /></span>
                                                    <span className="lg_992:mt-2 block">Hero Two</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link href="index-three.html" className="sub-menu-item">
                                                <div className="lg_992:text-center">
                                                    <span className="hidden lg_992:block"><img src="assets/images/demos/3.png" className="img-fluid rounded shadow-md" alt="" /></span>
                                                    <span className="lg_992:mt-2 block">Hero Three</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li>
                                            <Link href="index-four.html" className="sub-menu-item">
                                                <div className="lg_992:text-center">
                                                    <span className="hidden lg_992:block"><img src="assets/images/demos/4.png" className="img-fluid rounded shadow-md" alt="" /></span>
                                                    <span className="lg_992:mt-2 block">Hero Four</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li>
                                            <Link href="index-five.html" className="sub-menu-item">
                                                <div className="lg_992:text-center">
                                                    <span className="hidden lg_992:block"><img src="assets/images/demos/5.png" className="img-fluid rounded shadow-md" alt="" /></span>
                                                    <span className="lg_992:mt-2 block">Hero Five</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="javascript:void(0)">Courses</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Grid Courses </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="grid.html" className="sub-menu-item">Grid Listing</Link></li>
                                        <li><Link href="grid-sidebar.html" className="sub-menu-item">Grid Sidebar </Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> List Courses </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="list.html" className="sub-menu-item">List Listing</Link></li>
                                        <li><Link href="list-sidebar.html" className="sub-menu-item">List Sidebar </Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Video Courses </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="youtube-listing.html" className="sub-menu-item">Youtube Listing</Link></li>
                                        <li><Link href="video-listing.html" className="sub-menu-item">Video Listing</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Courses Detail</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="course-detail.html" className="sub-menu-item">Courses Detail</Link></li>
                                        <li><Link href="course-detail-two.html" className="sub-menu-item">Courses Detail Two</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>

                        <li><Link href="aboutus.html" className="sub-menu-item">About Us</Link></li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="javascript:void(0)">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="features.html" className="sub-menu-item">Features</Link></li>
                                <li><Link href="pricing.html" className="sub-menu-item">Pricing</Link></li>
                                <li><Link href="instructors.html" className="sub-menu-item">Instructors</Link></li>
                                <li><Link href="faqs.html" className="sub-menu-item">Faqs</Link></li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="login.html" className="sub-menu-item">Login</Link></li>
                                        <li><Link href="signup.html" className="sub-menu-item">Signup</Link></li>
                                        <li><Link href="forgot-password.html" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="blogs.html" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link href="blog-sidebar.html" className="sub-menu-item"> Blog Sidebar</Link></li>
                                        <li><Link href="blog-detail.html" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="comingsoon.html" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link href="maintenance.html" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link href="404.html" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                
                        <li><Link href="contactus.html" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}