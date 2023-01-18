import { useEffect, Fragment, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Message } from "../import";

function ViewOrder() {
    const nagivate = useNavigate();
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });
    useEffect(() => {
        if (sessionStorage.getItem("User") == null) {
            nagivate("/Login")
        }
    })
    useEffect(() => {
        document.body.classList.add("product-template-default", "single", "single-product", "postid-3048", "wp-custom-logo", "theme-coffo",
            "woocommerce", "woocommerce-page", "woocommerce-js", "elementor-default", "elementor-kit-971"
        )
    })
    let { id } = useParams();
    const [myOrder, setOrder] = useState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getOrder, []);
    function getOrder() {
        axios.get(`https://localhost:44382/api/UserOrder/${id}`)
            .then((res) => {
                const myRespo = res.data;
                if (myRespo === null) {
                    nagivate("/Orders");
                }
                setOrder(myRespo);

            }).catch(err => {
                console.log(err);
            })
    }

    const sendPostRequest = async (myOrder) => {
        try {
            const resp = await axios.post('https://localhost:44382/api/MyOrder', myOrder);
            setMessage({
                type: "alert-success",
                msg: resp.data
            })
        } catch (err) {
            // Handle Error Here
            setMessage({
                type: "alert-danger",
                msg: err.response.data
            })
        }
    };

    function handleAddOrder(e) {
        e.preventDefault();
        if (sessionStorage.getItem("User") === null) {
            nagivate('/Login');
        } else {
            const myOrder ={
                idclient:sessionStorage.getItem("User"),
                idproduct:id,
                amount:document.getElementById("quantity").value
            }
            sendPostRequest(myOrder)
        }      
    }

    return (
        <Fragment>
            <header id="main-header" className="main-header-bg">
                <div className="container inner-header">
                    <div className="title-wrap">
                        <h1 className="header-title">{myOrder.name}</h1>
                        <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                            <span property="itemListElement" typeof="ListItem">
                                <Link property="item" typeof="WebPage" title="Go to Coffo." to="/" className="home"> <span property="name">Home</span></Link><meta property="position" content="1" /></span>  /  <span property="itemListElement" typeof="ListItem">
                                <Link property="item" typeof="WebPage" title="Go to Products." to="/Products" className="archive post-product-archive"><span property="name">Products</span></Link><meta property="position" content="2" /></span>  /  <span property="itemListElement" typeof="ListItem">
                                <Link property="item" typeof="WebPage" title="Go to the Coffee Beans Category archives." href="https://coffo.peerduck.com/product-category/coffee-beans/" className="taxonomy product_cat"><span property="name">Coffee Beans</span></Link><meta property="position" content="3" /></span>  /  <span property="itemListElement" typeof="ListItem">
                                <span property="name" className="post post-product current-item">{myOrder.name}</span><meta property="url" content="https://coffo.peerduck.com/product/ethiopia-roasted-beans/" /><meta property="position" content="4" /></span>                </div>
                    </div>
                </div>
                <div id="header-wave"></div>
            </header>
            <main>
                <div className="container-xl container-product">
                    <div className="row">

                        <div className="col-lg-8 mx-auto content-single-product">
                            {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                            <div id="primary" className="content-area"><main id="main" className="site-main" role="main"><nav className="woocommerce-breadcrumb"><a href="https://coffo.peerduck.com">Home</a>&nbsp;/&nbsp;<a href="https://coffo.peerduck.com/product-category/coffee-beans/">Coffee Beans</a>&nbsp;/&nbsp;Ethiopia Roasted Beans</nav><div className="woocommerce-notices-wrapper"></div><div id="product-3048" className="product type-product post-3048 status-publish first instock product_cat-coffee-beans product_tag-coffee product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">

                                <div className="product-header">
                                    {myOrder.discount === 0 ? "" : <span className="onsale"><svg className="onsale-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve">
                                        <g>
                                            <path className="st0" d="M56.5,29.7c0.4-3.2,1.7-5.7,0.1-9c-0.6-1.3-2-2-2.6-3.3c-0.6-1.2-0.5-2.7-1.1-4c-1.3-2.8-4.1-3.5-6.6-4.9
		c-3.2-1.7-5.5-4.6-8.6-6.3c-2.2-1.2-4.2-0.7-6.1,0.8c-0.2,0.2-0.4,0.4-0.5,0.6c-0.1,0-0.3,0-0.4,0c-2,0-3.6-0.2-5.5-0.7
		c-2.1-0.6-4.6,0.4-5.6,2.3c-2.3,4.1-9.2,2.4-11,7.4c-0.9,2.4-0.4,4.1-2.4,6.1c-1.5,1.5-2.9,2.2-3.7,4.3c-0.6,1.6-0.5,3-0.1,4.6
		c0.6,2.2,0.4,3.5,0.2,5.8c-0.3,4.9,2.5,7.8,4.6,11.9c0.2,0.4,0.4,0.7,0.6,1c0.1,0.3,0.2,0.7,0.3,1c0.9,2,2.6,3,4.5,3.8
		c1.3,1.1,3,1.7,4.8,1.8c0.3,0.3,0.6,0.5,1,0.8c0.7,0.9,1.2,2,2.1,2.7c2.2,1.7,3.8,1.3,6.3,0.7c1.9-0.5,4.8-0.1,7,0.3
		c0.4,0.1,0.7,0.2,1.1,0.2c0.4,0,0.7,0.1,1.1,0.1c2.3,0.3,3.9-1.2,4.5-3.1c4.4-2.1,9.3-3.9,11.5-8.3c0.6-1.1,0.8-2.5,1.4-3.6
		c0.7-1.3,2-2.2,2.6-3.6C57.8,35.7,56.1,33.2,56.5,29.7z" fill="#ffffff"></path>
                                        </g>
                                        <g className="onsale-g">
                                            <g>
                                                <defs>
                                                    <rect id="SVGID_1_" width="60" height="60"></rect>
                                                </defs>
                                                <clipPath id="SVGID_2_">
                                                    <use xlinkHref="#SVGID_1_" style={{ overflow: "hidden" }}></use>
                                                </clipPath>
                                                <g className="st1">
                                                    <path className="st2" d="M46.5,53.1c1.6-0.3,3.4-0.6,4.7-1.9s1.6-3.1,1.9-4.7c0.2-1.1,0.4-2.1,0.7-2.7c0.4-0.7,1.2-1.4,2.1-2.1
				c1.3-1.1,2.6-2.2,3.1-3.9c0.5-1.7-0.2-3.4-0.7-4.9c-0.4-1-0.7-2-0.7-2.8c0-0.8,0.4-1.8,0.7-2.8c0.6-1.5,1.2-3.2,0.7-4.9
				c-0.4-1.7-1.8-2.8-3.1-3.9c-0.9-0.7-1.7-1.4-2.1-2.1c-0.4-0.7-0.6-1.7-0.7-2.7c-0.3-1.6-0.6-3.4-1.9-4.7s-3.1-1.6-4.7-1.9
				c-1.1-0.2-2.1-0.4-2.7-0.7c-0.7-0.4-1.4-1.2-2.1-2.1c-1.1-1.3-2.2-2.6-3.9-3.1c-1.7-0.5-3.4,0.2-4.9,0.7c-1,0.4-2,0.7-2.8,0.7
				c-0.8,0-1.8-0.4-2.8-0.7c-1.5-0.6-3.2-1.2-4.9-0.7c-1.7,0.4-2.8,1.8-3.9,3.1c-0.7,0.9-1.4,1.7-2.1,2.1c-0.7,0.4-1.7,0.6-2.7,0.7
				c-1.6,0.3-3.4,0.6-4.7,1.9c-1.3,1.3-1.6,3.1-1.9,4.7c-0.2,1.1-0.4,2.1-0.7,2.7c-0.4,0.7-1.2,1.4-2.1,2.1
				c-1.3,1.1-2.6,2.2-3.1,3.9c-0.5,1.7,0.2,3.4,0.7,4.9c0.4,1,0.7,2,0.7,2.8c0,0.8-0.4,1.8-0.7,2.8c-0.6,1.5-1.2,3.2-0.7,4.9
				c0.4,1.7,1.8,2.8,3.1,3.9c0.9,0.7,1.7,1.4,2.1,2.1c0.4,0.7,0.6,1.7,0.7,2.7c0.3,1.6,0.6,3.4,1.9,4.7c1.3,1.3,3.1,1.6,4.7,1.9
				c1.1,0.2,2.1,0.4,2.7,0.7c0.7,0.4,1.4,1.2,2.1,2.1c1.1,1.3,2.2,2.6,3.9,3.1c1.7,0.5,3.4-0.2,4.9-0.7c1-0.4,2-0.7,2.8-0.7
				c0.8,0,1.8,0.4,2.8,0.7c1.5,0.6,3.2,1.2,4.9,0.7c1.7-0.4,2.8-1.8,3.9-3.1c0.7-0.9,1.4-1.7,2.1-2.1C44.4,53.4,45.4,53.3,46.5,53.1
				z M46.1,50.6c-1.2,0.2-2.5,0.4-3.6,1c-1.1,0.6-2,1.7-2.8,2.6c-0.9,1-1.7,2-2.6,2.3c-0.9,0.2-2.1-0.2-3.4-0.7
				C32.5,55.5,31.3,55,30,55s-2.5,0.5-3.7,0.9c-1.3,0.5-2.5,0.9-3.4,0.7c-0.9-0.2-1.7-1.2-2.6-2.3c-0.8-1-1.7-2-2.8-2.6
				c-1.1-0.6-2.3-0.8-3.6-1c-1.4-0.2-2.7-0.5-3.4-1.2c-0.7-0.7-0.9-2-1.2-3.4c-0.2-1.2-0.4-2.5-1-3.6C8,42,7.6,41.5,7.2,41
				c-0.5-0.5-1-0.9-1.5-1.3c-1-0.9-2-1.7-2.3-2.6c-0.2-0.9,0.2-2.1,0.7-3.4C4.5,32.5,5,31.3,5,30c0-1.3-0.5-2.5-0.9-3.7
				c-0.5-1.3-0.9-2.5-0.7-3.4c0.2-0.9,1.2-1.7,2.3-2.6c1-0.8,2-1.7,2.6-2.8c0.6-1.1,0.8-2.3,1-3.6c0.2-1.4,0.5-2.7,1.2-3.4
				c0.7-0.7,2-0.9,3.4-1.2c1.2-0.2,2.5-0.4,3.6-1c1.1-0.6,2-1.7,2.8-2.6c0.9-1,1.7-2,2.6-2.3c0.9-0.2,2.1,0.2,3.4,0.7
				C27.5,4.5,28.7,5,30,5c1.3,0,2.5-0.5,3.7-0.9c1.3-0.5,2.5-0.9,3.4-0.7c0.9,0.2,1.7,1.2,2.6,2.3c0.8,1,1.7,2,2.8,2.6
				c1.1,0.6,2.3,0.8,3.6,1c1.4,0.2,2.7,0.5,3.4,1.2c0.7,0.7,0.9,2,1.2,3.4c0.2,1.2,0.4,2.5,1,3.6c0.6,1.1,1.7,2,2.6,2.8
				c1,0.9,2,1.7,2.3,2.6c0.2,0.9-0.2,2.1-0.7,3.4C55.5,27.5,55,28.7,55,30c0,1.3,0.5,2.5,0.9,3.7c0.5,1.3,0.9,2.5,0.7,3.4
				c-0.2,0.9-1.2,1.7-2.3,2.6c-1,0.8-2,1.7-2.6,2.8c-0.6,1.1-0.8,2.3-1,3.6c-0.2,1.4-0.5,2.7-1.2,3.4C48.7,50.2,47.4,50.4,46.1,50.6
				z"></path>
                                                    <path className="st2" d="M17.7,29.8C17.7,29.8,17.7,29.8,17.7,29.8c-0.7-0.7-1.7-1.1-2.7-1.1c-0.7,0-1.3-0.6-1.3-1.3
				c0-0.3,0.1-0.6,0.4-0.9c0.2-0.2,0.5-0.4,0.9-0.4l2.5,0c0.7,0,1.3-0.6,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2H15c-1,0-1.9,0.4-2.7,1.1
				c-0.7,0.7-1.1,1.7-1.1,2.7c0,2.1,1.7,3.8,3.8,3.8c0.3,0,0.6,0.1,0.9,0.4l0,0c0.2,0.2,0.4,0.5,0.4,0.9c0,0.7-0.6,1.3-1.2,1.2h-2.5
				c-0.7,0-1.2,0.6-1.2,1.2c0,0.3,0.1,0.7,0.4,0.9c0.2,0.2,0.5,0.4,0.9,0.4H15c2.1,0,3.7-1.7,3.7-3.7C18.8,31.5,18.4,30.6,17.7,29.8
				z"></path>
                                                    <path className="st2" d="M28.7,27.5c0-2.1-1.7-3.8-3.7-3.7c-1,0-1.9,0.4-2.7,1.1c-0.7,0.7-1.1,1.7-1.1,2.7l0,7.5
				c0,0.3,0.1,0.7,0.4,0.9c0.2,0.2,0.5,0.4,0.9,0.4c0.7,0,1.2-0.6,1.2-1.2l0-1.3l2.5,0l0,1.2c0,0.7,0.6,1.3,1.2,1.2
				c0.7,0,1.2-0.6,1.2-1.2V27.5z M23.8,31.3l0-3.8c0-0.3,0.1-0.6,0.4-0.9c0.2-0.2,0.5-0.4,0.9-0.4c0.7,0,1.3,0.6,1.2,1.2v3.7
				L23.8,31.3z"></path>
                                                    <path className="st2" d="M37.5,33.7h-3.7V25c0-0.7-0.6-1.3-1.2-1.2c-0.7,0-1.2,0.6-1.2,1.2v10c0,0.3,0.1,0.7,0.4,0.9
				c0.2,0.2,0.5,0.4,0.9,0.4h5c0.7,0,1.2-0.6,1.2-1.2C38.7,34.3,38.2,33.7,37.5,33.7z"></path>
                                                    <path className="st2" d="M47.5,33.8l-3.8,0l0-2.5l2.5,0c0.7,0,1.3-0.6,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2l-2.5,0l0-2.5h3.7
				c0.7,0,1.3-0.6,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2h-5c-0.3,0-0.6,0.1-0.9,0.4c-0.2,0.2-0.4,0.6-0.4,0.9l0,5c0,0,0,0,0,0l0,0l0,5
				c0,0.3,0.1,0.6,0.4,0.9c0.2,0.2,0.6,0.4,0.9,0.4l5,0c0.7,0,1.2-0.6,1.2-1.2C48.8,34.3,48.2,33.8,47.5,33.8z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    </span>}
                                    <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{ opacity: 1, transition: "opacity 0.25s ease-in-out 0s" }}><a href="/" className="woocommerce-product-gallery__trigger"><img draggable="false" className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f50d.svg" /></a>
                                        <figure className="woocommerce-product-gallery__wrapper">
                                            <div data-thumb="https://coffo.b-cdn.net/wp-content/uploads/2020/11/ksjfjfs-100x100.png" data-thumb-alt="" className="woocommerce-product-gallery__image" style={{ position: "relative", overflow: "hidden" }}>
                                                <a href="https://coffo.b-cdn.net/wp-content/uploads/2020/11/ksjfjfs.png">
                                                    <img width="600" height="844" src={myOrder.img} className="wp-post-image" alt="" decoding="async" loading="lazy" title="ksjfjfs" data-caption="" data-src={myOrder.img} data-large_image={myOrder.img} data-large_image_width="744" data-large_image_height="1046" srcSet={`${myOrder.image} 600w,${myOrder.image} 213w,${myOrder.image} 728w,${myOrder.image} 160w,${myOrder.image} 744w`} sizes="(max-width: 600px) 100vw, 600px" /></a>
                                                <img role="presentation" alt="" src={myOrder.img} className="zoomImg" style={{ position: "absolute", top: "-553.507px", left: "-253.933px", opacity: "0", width: "744px", height: "1046px", border: "none", maxWidth: "none", maxHeight: "none" }} /></div>	</figure>
                                    </div>

                                    <div className="summary entry-summary">

                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span width="100%">Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
                                        </div>

                                        {myOrder.discountprice === 0
                                            ? <p className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>
                                                <span className="woocommerce-Price-currencySymbol"></span></bdi></span></del> <ins>
                                                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{myOrder.price} VNĐ
                                                    </bdi></span></ins></p>
                                            : <p className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>
                                                <span className="woocommerce-Price-currencySymbol"></span>{myOrder.price}</bdi></span></del> <ins>
                                                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{myOrder.discountprice} VNĐ
                                                    </bdi></span></ins></p>}
                                        <div className="woocommerce-product-details__short-description">
                                            <p>{myOrder.description}</p>
                                        </div>


                                        <form className="cart" action="https://coffo.peerduck.com/product/ethiopia-roasted-beans/" method="post" encType="multipart/form-data">

                                            <div className="quantity">
                                                <label className="screen-reader-text" htmlFor="quantity_63a05d4d69998">Ethiopia Roasted Beans quantity</label>
                                                <input type="number" id="quantity" className="input-text qty text" name="quantity" defaultValue="1" title="Qty" size="4" min="1" max="10" step="1" placeholder="" inputMode="numeric" autoComplete="off" />
                                            </div>

                                            <button type="submit" onClick={(e)=>handleAddOrder(e)} name="add-to-cart" defaultValue="3048" className="single_add_to_cart_button button alt wp-element-button">Order Now</button>

                                        </form>



                                        <div className="product_meta">

                                            <div className="blog-tile-wave"></div>



                                            <span className="sku_wrapper">SKU: <span className="sku">SBMW-001-009-4</span></span>


                                            <span className="posted_in">Category: <a href="/" rel="tag">{myOrder.catename}</a></span>
                                            <span className="tagged_as">Tags: <a href="https://coffo.peerduck.com/product-tag/coffee/" rel="tag">coffee</a> <a href="https://coffo.peerduck.com/product-tag/sweet/" rel="tag">sweet</a></span>

                                        </div>
                                        <div className="blog-tile-wave product-sum-btm-wave"></div>
                                    </div>
                                </div>
                                <div className="woocommerce-tabs wc-tabs-wrapper">
                                    <ul className="tabs wc-tabs" role="tablist">
                                        <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                                            <a href="#tab-description">
                                                Description					</a>
                                        </li>
                                    </ul>
                                    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" >

                                        <h5>Description</h5>

                                        <p>Aliquam sodales tristique nisl sit amet vehicula. Morbi viverra felis vel urna semper, nec mollis orci sagittis. Aliquam erat volutpat. Cras accumsan massa velit, vel elementum felis faucibus vitae. Quisque eget eros ac erat sodales lacinia. Maecenas molestie massa pharetra pharetra consectetur. Morbi sem leo, luctus et accumsan placerat, lacinia at est. Nam ut quam in est cursus semper.</p>
                                        <p>In viverra justo condimentum diam euismod rhoncus. Quisque ante eros, vulputate non ultrices vel, molestie non purus. Curabitur eget sagittis neque. Phasellus eget orci id dui fermentum ullamcorper. Integer gravida id nibh scelerisque congue. In elit elit, suscipit vulputate rutrum et, fringilla a libero. Nulla imperdiet eleifend metus, vitae faucibus ante vulputate a. Etiam tincidunt mi in orci tincidunt porttitor. Ut vitae tincidunt dolor. Nunc ut enim eu lorem egestas consectetur. Nunc ac magna vitae nisl efficitur eleifend ac sit amet nisi. In ac augue ultricies, euismod sem ut, accumsan sem.</p>
                                    </div>
                                    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={{ display: "none" }}>
                                        <div id="reviews" className="woocommerce-Reviews">
                                            <div id="comments">
                                                <h5 className="woocommerce-Reviews-title">
                                                    1 review htmlFor <span>Ethiopia Roasted Beans</span>		</h5>

                                                <ol className="commentlist">
                                                    <li className="review byuser comment-author-alexanderyorlov bypostauthor even thread-even depth-1" id="li-comment-28">

                                                        <div id="comment-28" className="comment_container">

                                                            <img alt="" src="https://secure.gravatar.com/avatar/1c7496eadf75a4048705e6deb48ad8ba?s=60&amp;d=mm&amp;r=g" srcSet="https://secure.gravatar.com/avatar/1c7496eadf75a4048705e6deb48ad8ba?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async" />
                                                            <div className="comment-text">

                                                                <div className="star-rating" role="img" aria-label="Rated 5 out of 5"><span width="100%">Rated <strong className="rating">5</strong> out of 5</span></div>
                                                                <p className="meta">
                                                                    <strong className="woocommerce-review__author">Alexanderyorlov </strong>
                                                                    <span className="woocommerce-review__dash">–</span> <time className="woocommerce-review__published-date" dateTime="2020-11-27T01:13:12+00:00">November 27, 2020</time>
                                                                </p>

                                                                <div className="description"><p>I ordered water htmlFor my office and they were very helpful. Delivery was on time and delivered as described. And their water tastes amazing. These stars are htmlFor you, thanks.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>

                                            </div>

                                            <div id="review_form_wrapper">
                                                <div id="review_form">
                                                    <div id="respond" className="comment-respond">
                                                        <span id="reply-title" className="comment-reply-title">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/product/ethiopia-roasted-beans/#respond" style={{ display: "none" }}>Cancel reply</a></small></span><form action="https://coffo.peerduck.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate=""><p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span className="required-field-message">Required fields are marked <span className="required">*</span></span></p><div className="comment-form-rating"><label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label><p className="stars">						<span>							<a className="star-1" href="/">1</a>							<a className="star-2" href="/">2</a>							<a className="star-3" href="/">3</a>							<a className="star-4" href="/">4</a>							<a className="star-5" href="/">5</a>						</span>					</p><select name="rating" id="rating" required="" style={{ display: "none" }}>
                                                            <option defaultValue="">Rate…</option>
                                                            <option defaultValue="5">Perfect</option>
                                                            <option defaultValue="4">Good</option>
                                                            <option defaultValue="3">Average</option>
                                                            <option defaultValue="2">Not that bad</option>
                                                            <option defaultValue="1">Very poor</option>
                                                        </select></div><p className="comment-form-comment"><label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required=""></textarea></p><p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label><input id="author" name="author" type="text" defaultValue="" size="30" required="" /></p>
                                                            <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label><input id="email" name="email" type="email" defaultValue="" size="30" required="" /></p>
                                                            <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" /> <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser htmlFor the next time I comment.</label></p>
                                                            <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" /> <input type="hidden" name="comment_post_ID" defaultValue="3048" id="comment_post_ID" />
                                                                <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0" />
                                                            </p></form>	</div>
                                                </div>
                                            </div>

                                            <div className="clear"></div>
                                        </div>
                                    </div>

                                </div>
                                <section className="related products">

                                    <h6>Related products</h6>

                                    <ul className="products columns-3">


                                        <li className="product type-product post-10461 status-publish first instock product_cat-coffee-beans product_tag-coffee product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                            <a href="https://coffo.peerduck.com/product/rollisa-coffee-latte-strong/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo.png 744w" sizes="(max-width: 160px) 100vw, 160px" /><h2 className="woocommerce-loop-product__title">Rollisa Coffee Latte Strong</h2><div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span width="100%">Rated <strong className="rating">5.00</strong> out of 5</span></div>
                                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>54.000 VNĐ</bdi></span></span>
                                            </a><Link to="/Products" data-quantity="1" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="10461" data-product_sku="SBMW-001-009-4-1" aria-label="Add “Rollisa Coffee Latte Strong” to your cart" rel="nofollow">View More</Link></li>


                                        <li className="product type-product post-10452 status-publish instock product_cat-green-coffee product_cat-organic-coffee product_tag-coffee product_tag-green product_tag-nature has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                            <a href="https://coffo.peerduck.com/product/capsule-coffee-strong/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kjppo.png 744w" sizes="(max-width: 160px) 100vw, 160px" /><h2 className="woocommerce-loop-product__title">Capsule Coffee Strong</h2><div className="eael-star-rating star-rating"><span width="0%">Rated <strong className="rating">0</strong> out of 5</span></div>
                                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>53.000 VNĐ</bdi></span></span>
                                            </a><Link to="/Products" data-quantity="1" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="10452" data-product_sku="TBMW-001-008-4-1" aria-label="Add “Capsule Coffee Strong” to your cart" rel="nofollow">View More</Link></li>


                                        <li className="product type-product post-3040 status-publish last instock product_cat-coffee-beans product_cat-green-coffee product_cat-organic-coffee product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
                                            <a href="https://coffo.peerduck.com/product/rollisa-coffee-set-mini/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2021/11/kbjk.png 744w" sizes="(max-width: 160px) 100vw, 160px" /><h2 className="woocommerce-loop-product__title">Rollisa Coffee Set Mini</h2><div className="star-rating" role="img" aria-label="Rated 2.00 out of 5"><span width="40%">Rated <strong className="rating">2.00</strong> out of 5</span></div>
                                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>60.000 VNĐ</bdi></span> – <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>85.000 VNĐ</bdi></span></span>
                                            </a><Link to="/Products" data-quantity="1" className="button wp-element-button product_type_variable add_to_cart_button" data-product_id="3040" data-product_sku="NMW-001-007-3" aria-label="Select options htmlFor “Rollisa Coffee Set Mini”" rel="nofollow">View More</Link></li>


                                    </ul>

                                </section>
                            </div>


                            </main></div>
                        </div>

                        <div className="col-lg-4 pl-lg-4 sidebar-single-product"><div className="widget woocommerce widget_shopping_cart"><div className="widget-content"><h4 className="widget-title">Cart</h4><div className="widget_shopping_cart_content">

                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>


                        </div></div></div><div className="widget woocommerce widget_product_categories"><div className="widget-content"><h4 className="widget-title">Product categories</h4><select name="product_cat" id="product_cat" className="dropdown_product_cat select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                            <option defaultValue="">Select a category</option>
                            <option className="level-0" defaultValue="accessories">Accessories&nbsp;&nbsp;(5)</option>
                            <option className="level-0" defaultValue="coffee-beans" >Coffee Beans&nbsp;&nbsp;(17)</option>
                            <option className="level-0" defaultValue="espresso-beans">Espresso Beans&nbsp;&nbsp;(5)</option>
                            <option className="level-0" defaultValue="green-coffee">Green Coffee&nbsp;&nbsp;(16)</option>
                            <option className="level-0" defaultValue="organic-coffee">Organic Coffee&nbsp;&nbsp;(20)</option>
                        </select><span className="select2 select2-container select2-container--default" dir="ltr" width="100%"><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-product_cat-container" ><span className="select2-selection__rendered" id="select2-product_cat-container" role="textbox" aria-readonly="true" title="Coffee Beans&nbsp;&nbsp;(17)"><span className="select2-selection__clear">×</span>Coffee Beans&nbsp;&nbsp;(17)</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div></div><div className="widget woocommerce widget_recent_reviews"><div className="widget-content"><h4 className="widget-title">Recent reviews</h4><ul className="product_list_widget">

                        </ul></div></div><div className="widget woocommerce widget_product_tag_cloud"><div className="widget-content"><h4 className="widget-title">Product tags</h4><div className="tagcloud"><a href="https://coffo.peerduck.com/product-tag/bean/" className="tag-cloud-link tag-link-21 tag-link-position-1" style={{ fontSize: "11.55223880597pt" }} aria-label="bean (8 products)">bean</a>
                            <a href="https://coffo.peerduck.com/product-tag/coffee/" className="tag-cloud-link tag-link-53 tag-link-position-2" style={{ fontSize: "22pt" }} aria-label="coffee (27 products)">coffee</a>
                            <a href="https://coffo.peerduck.com/product-tag/eco/" className="tag-cloud-link tag-link-64 tag-link-position-3" style={{ fontSize: "8pt" }} aria-label="eco (5 products)">eco</a>
                            <a href="https://coffo.peerduck.com/product-tag/espresso/" className="tag-cloud-link tag-link-22 tag-link-position-4" style={{ fontSize: "11.55223880597pt" }} aria-label="espresso (8 products)">espresso</a>
                            <a href="https://coffo.peerduck.com/product-tag/green/" className="tag-cloud-link tag-link-55 tag-link-position-5" style={{ fontSize: "14.89552238806pt" }} aria-label="green (12 products)">green</a>
                            <a href="https://coffo.peerduck.com/product-tag/help/" className="tag-cloud-link tag-link-56 tag-link-position-6" style={{ fontSize: "16.776119402985pt" }} aria-label="help (15 products)">help</a>
                            <a href="https://coffo.peerduck.com/product-tag/local/" className="tag-cloud-link tag-link-20 tag-link-position-7" style={{ fontSize: "11.55223880597pt" }} aria-label="local (8 products)">local</a>
                            <a href="https://coffo.peerduck.com/product-tag/nature/" className="tag-cloud-link tag-link-54 tag-link-position-8" style={{ fontSize: "18.865671641791pt" }} aria-label="nature (19 products)">nature</a>
                            <a href="https://coffo.peerduck.com/product-tag/original/" className="tag-cloud-link tag-link-57 tag-link-position-9" style={{ fontSize: "16.776119402985pt" }} aria-label="original (15 products)">original</a>
                            <a href="https://coffo.peerduck.com/product-tag/roasted/" className="tag-cloud-link tag-link-58 tag-link-position-10" style={{ fontSize: "16.776119402985pt" }} aria-label="roasted (15 products)">roasted</a>
                            <a href="https://coffo.peerduck.com/product-tag/sweet/" className="tag-cloud-link tag-link-59 tag-link-position-11" style={{ fontSize: "17.402985074627pt" }} aria-label="sweet (16 products)">sweet</a>
                            <a href="https://coffo.peerduck.com/product-tag/zero-waste/" className="tag-cloud-link tag-link-65 tag-link-position-12" style={{ fontSize: "8pt" }} aria-label="zero-waste (5 products)">zero-waste</a></div></div></div></div>        </div>
                </div>
            </main>
        </Fragment>
    )
}

export default ViewOrder;
