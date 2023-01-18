/* eslint-disable jsx-a11y/role-supports-aria-props */
import { Fragment } from "react";
import { Link,useNavigate } from "react-router-dom";
function Header() {
    const nagivate = useNavigate();
    function handleLogOut(e){
        e.preventDefault();
        if (sessionStorage.getItem("User")!=null) {
            sessionStorage.removeItem("User")
            nagivate("/");
        }
    }

    return (
        <nav id="pr-nav" className="primary-menu navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid primary-menu-inner px-0">
                <div className="top-wrap">
                    <Link to="/" className="custom-logo-link" rel="home" aria-current="page"><img width="738" height="250" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/kmrgkrg.png" className="custom-logo style-svg" alt="Coffo" decoding="async" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/04/kmrgkrg.png 738w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/kmrgkrg-300x102.png 300w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/kmrgkrg-160x54.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/kmrgkrg-600x203.png 600w" sizes="(max-width: 738px) 100vw, 738px" /></Link>            <button id="mobile-toggle" className="navbar-toggler animate-button collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="m-tgl-icon" className="animated-icon1"><span></span><span></span></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                    <ul id="primary-menu" className="navbar-nav pl-3" itemScope="" itemType="http://www.schema.org/SiteNavigationElement">
                        <li id="menu-item-36" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-36 nav-item"><Link to="/" aria-haspopup="true" aria-expanded="false" className=" nav-link" id="menu-item"><span itemProp="name">Home</span></Link>
                        </li>
                        <li id="menu-item-11748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11748 nav-item"><Link itemProp="url" to="/AboutUs" className="nav-link"><span itemProp="name">About Us</span></Link></li>

                        <li id="menu-item-1941" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1941 nav-item"><a href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-1941"><span itemProp="name">Shop</span></a>
                            <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-1941" style={{ pointerEvents: "all" }}>
                                <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32 nav-item"><Link itemProp="url" to="/Products" className="dropdown-item"><span itemProp="name">Products</span></Link></li>
                                <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49 nav-item"><Link itemProp="url" to="/Orders" className="dropdown-item"><span itemProp="name">Orders</span></Link></li>
                                {
                                    sessionStorage.getItem("User") !== null ?
                                        <Fragment>
                                            <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48 nav-item"><Link itemProp="url" to="/MyCart" className="dropdown-item"><span itemProp="name">My Cart</span></Link></li>
                                            <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47 nav-item"><Link itemProp="url" to="/MyOrder" className="dropdown-item"><span itemProp="name">My Order</span></Link></li>
                                        </Fragment>
                                        : ""
                                }
                            </ul>
                        </li>
                        {
                            sessionStorage.getItem("User") === null ?
                                <Fragment>
                                    <li id="menu-item-11748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11748 nav-item"><Link itemProp="url" to="/Login" className="nav-link"><span itemProp="name">Login</span></Link></li>
                                    <li id="menu-item-11748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11748 nav-item"><Link itemProp="url" to="/Register" className="nav-link"><span itemProp="name">Register</span></Link></li>
                                </Fragment> : ""
                        }

                        <li id="menu-item-11748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11748 nav-item"><Link itemProp="url" to="/ContactUs" className="nav-link"><span itemProp="name">Contact Us</span></Link></li>
                        {
                            sessionStorage.getItem("User") !== null ?
                                <Fragment>
                                    <li id="menu-item-11748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11748 nav-item"><a itemProp="url" onClick={(e)=>handleLogOut(e)} to="/LogOut" className="nav-link" href="/LogOut"><span itemProp="name">LogOut</span></a></li>
                                </Fragment> : ""
                        }
                    </ul>            <div className="header-icons">
                        <div id="magic-search" className="magic-search">
                            <form role="search" method="get" className="search-form" action="https://coffo.peerduck.com/">
                                <div className="inner-form">
                                    <div className="row justify-content-end">
                                        <div className="input-field first justify-content-end" id="first">
                                            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612.01px" height="612.01px" viewBox="0 0 612.01 612.01" xmlSpace="preserve"><g><path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                    C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                    l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                    c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                    S377.82,467.8,257.493,467.8z"></path></g>
                                            </svg>
                                            <input autoComplete="off" type="search" className="input" id="inputFocus" placeholder="Search" defaultValue="" name="s" required="" />
                                            <input type="submit" defaultValue="Search" className="search-submit" />
                                            <input type="hidden" name="post_type" defaultValue="product" />                    <div className="clear" id="clear">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#6e6e73" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="header-cart-icon">                <a className="cart-contents menu-item" href="https://coffo.peerduck.com/cart/" title="View your shopping cart">
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.79942 11.6369H5.80024C5.80093 11.6369 5.80161 11.6367 5.8023 11.6367H15.3633C15.5987 11.6367 15.8056 11.4806 15.8703 11.2543L17.9797 3.87144C18.0251 3.71228 17.9933 3.54117 17.8937 3.40906C17.794 3.27695 17.6381 3.19922 17.4727 3.19922H4.58323L4.20626 1.50279C4.15257 1.26151 3.93861 1.08984 3.69141 1.08984H0.527351C0.236076 1.08984 7.62939e-06 1.32591 7.62939e-06 1.61719C7.62939e-06 1.90846 0.236076 2.14453 0.527351 2.14453H3.26844C3.33518 2.44514 5.0724 10.2627 5.17237 10.7125C4.61193 10.9561 4.21876 11.5149 4.21876 12.1641C4.21876 13.0364 4.92847 13.7461 5.80079 13.7461H15.3633C15.6546 13.7461 15.8906 13.51 15.8906 13.2188C15.8906 12.9275 15.6546 12.6914 15.3633 12.6914H5.80079C5.51006 12.6914 5.27345 12.4548 5.27345 12.1641C5.27345 11.8737 5.50924 11.6375 5.79942 11.6369ZM16.7735 4.25391L14.9654 10.582H6.22376L4.81751 4.25391H16.7735Z"></path>
                                <path d="M5.27342 15.3281C5.27342 16.2004 5.98314 16.9102 6.85545 16.9102C7.72777 16.9102 8.43749 16.2004 8.43749 15.3281C8.43749 14.4558 7.72777 13.7461 6.85545 13.7461C5.98314 13.7461 5.27342 14.4558 5.27342 15.3281ZM6.85545 14.8008C7.14618 14.8008 7.3828 15.0374 7.3828 15.3281C7.3828 15.6189 7.14618 15.8555 6.85545 15.8555C6.56473 15.8555 6.32811 15.6189 6.32811 15.3281C6.32811 15.0374 6.56473 14.8008 6.85545 14.8008Z"></path>
                                <path d="M12.7266 15.3281C12.7266 16.2004 13.4363 16.9102 14.3086 16.9102C15.1809 16.9102 15.8906 16.2004 15.8906 15.3281C15.8906 14.4558 15.1809 13.7461 14.3086 13.7461C13.4363 13.7461 12.7266 14.4558 12.7266 15.3281ZM14.3086 14.8008C14.5993 14.8008 14.8359 15.0374 14.8359 15.3281C14.8359 15.6189 14.5993 15.8555 14.3086 15.8555C14.0179 15.8555 13.7812 15.6189 13.7812 15.3281C13.7812 15.0374 14.0179 14.8008 14.3086 14.8008Z"></path>
                            </svg>
                        </a>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;