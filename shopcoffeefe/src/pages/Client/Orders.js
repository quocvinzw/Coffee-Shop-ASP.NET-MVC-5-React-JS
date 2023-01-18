import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Message } from "../import";
import './CSS/Product.css';

function Orders() {
    const nagivate = useNavigate();
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    useEffect(() => {
        document.body.classList.remove()
        document.body.classList.add("post-type-archive", "post-type-archive-product", "wp-custom-logo", "theme-coffo", "woocommerce-shop",
            "woocommerce", "woocommerce-page", "woocommerce-js", "elementor-default", "elementor-kit-971");
    }, [])

    useEffect(() => getListSale(), []);
    const [lsSale, setListSale] = useState([]);
    function getListSale() {
        axios.get('https://localhost:44382/api/OrderSale')
            .then((res) => {
                const myRespo = res.data;
                setListSale(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => getListProduct(), []);
    const [lsProduct, setListProduct] = useState([]);
    function getListProduct() {
        axios.get('https://localhost:44382/api/UserOrder')
            .then((res) => {
                const myRespo = res.data;
                setListProduct(myRespo);
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

    function handleAddOrder(e,idproduct) {
        e.preventDefault();
        if (sessionStorage.getItem("User") === null) {
            nagivate('/Login');
        } else {
            const myOrder ={
                idclient:sessionStorage.getItem("User"),
                idproduct:idproduct,
                amount:1
            }
            sendPostRequest(myOrder)
        }      
    }

    return (
        <Fragment>
            <header id="main-header" className="main-header-bg">
                <div className="container inner-header">
                    <div className="title-wrap">
                        <h1 className="header-title">Orders</h1>
                        <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                            <span property="itemListElement" typeof="ListItem"><Link property="item" typeof="WebPage" title="Go to Coffo." to="/" className="home">
                                <span property="name">Home</span></Link><meta property="position" content="1" /></span>  /  <span property="itemListElement" typeof="ListItem" />
                            <span property="name" className="archive post-product-archive current-item">Products</span>
                            <meta property="url" content="https://coffo.peerduck.com/shop/" /><meta property="position" content="2" />               </div>
                    </div>
                </div>
                <div id="header-wave"></div>
            </header>
            <div id="primary" className="content-area"><main id="main" className="site-main" role="main">
                <div className="container-xl container-shop">
                    <header className="woocommerce-products-header">
                    {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                    </header>

                    <div className="row">
                        <div className="col-lg-9 mx-auto pr-lg-4 content-shop">
                            <div className="woocommerce-notices-wrapper"></div><p className="woocommerce-result-count">
                            </p>
                            <form className="woocommerce-ordering" method="get">

                                <input type="hidden" name="paged" defaultValue="1" />
                            </form>
                            <ul className="products columns-3">
                                {lsSale.map((s, index) => (
                                    <li key={index} className="product type-product post-3074 instock last status-publish instock product_cat-coffee-beans product_tag-coffee has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                                        <Link to={`/ViewOrder/${s.id}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                            <span className="onsale"><svg className="onsale-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve">
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
                                            </span>
                                            <img width="160" height="225" src={s.image} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet={`${s.image} 160w,${s.image} 213w,${s.image} 728w,${s.image} 600w,${s.image} 744w`} sizes="(max-width: 160px) 100vw, 160px" /><h2 className="woocommerce-loop-product__title">{s.productname}</h2><div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span width="100%">Rated <strong className="rating">5.00</strong> out of 5</span></div>
                                            <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{s.productprice}</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{s.discountprice} VNĐ</bdi></span></ins></span>
                                        </Link><a href="/AddToOrder" onClick={(e)=>handleAddOrder(e,s.idproduct)} data-quantity="1" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="3074" data-product_sku="TBMW-001-008-6" aria-label="Add “Arabica Roasted Beans” to your cart" rel="nofollow">Add to cart</a></li>
                                ))}
                                {lsProduct.map((p, index) => (
                                    <li key={index} className="product type-product post-3048 status-publish instock last product_cat-coffee-beans product_tag-coffee product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                        <Link to={`/ViewOrder/${p.id}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="160" height="225" src={p.image} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet={`${p.image} 160w,${p.image} 213w,${p.image} 728w,${p.image} 600w,${p.image} 744w`} sizes="(max-width: 160px) 100vw, 160px" /><h2 className="woocommerce-loop-product__title">{p.name}</h2><div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span width="100%">Rated <strong className="rating">5.00</strong> out of 5</span></div>
                                            <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{p.price} VNĐ</bdi></span></span>
                                        </Link><a href="/AddToOrder" onClick={(e)=>handleAddOrder(e,p.id)} data-quantity="1" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="3048" data-product_sku="SBMW-001-009-4" aria-label="Add “Ethiopia Roasted Beans” to your cart" rel="nofollow">Add to cart</a></li>
                                ))}
                            </ul>
                            <nav className="woocommerce-pagination">

                            </nav>
                        </div><div className="col-lg-3 pl-lg-3 sidebar-shop"><div className="widget woocommerce widget_price_filter"><div className="widget-content"><h4 className="widget-title">Filter by price</h4>
                            <form method="get" action="https://coffo.peerduck.com/shop/">
                                <div className="price_slider_wrapper">
                                    <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0", width: "1" }}></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "0%" }}></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%" }}></span></div>
                                    <div className="price_slider_amount" data-step="10">
                                        <label className="screen-reader-text" htmlFor="min_price">Min price</label>
                                        <input type="text" id="min_price" name="min_price" defaultValue="0" data-min="0" placeholder="Min price" style={{ display: "none" }} />
                                        <label className="screen-reader-text" htmlFor="max_price">Max price</label>
                                        <input type="text" id="max_price" name="max_price" defaultValue="60" data-max="60" placeholder="Max price" style={{ display: "none" }} />
                                        <button type="submit" className="button wp-element-button">Filter</button>
                                        <div className="price_label" >
                                            Price: <span className="from">$0</span> — <span className="to">$60</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </form>

                        </div></div><div className="widget woocommerce widget_shopping_cart"><div className="widget-content"><h4 className="widget-title">Cart</h4><div className="widget_shopping_cart_content">

                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>


                        </div></div></div><div className="widget woocommerce widget_rating_filter"><div className="widget-content"><h4 className="widget-title">Average rating</h4><ul><li className="wc-layered-nav-rating"><a href="https://coffo.peerduck.com/shop/?rating_filter=5"><span className="star-rating"><span width="100%">Rated <strong className="rating">5</strong> out of 5</span></span> (7)</a></li><li className="wc-layered-nav-rating"><a href="https://coffo.peerduck.com/shop/?rating_filter=4"><span className="star-rating"><span width="80%">Rated <strong className="rating">4</strong> out of 5</span></span> (1)</a></li><li className="wc-layered-nav-rating"><a href="https://coffo.peerduck.com/shop/?rating_filter=2"><span className="star-rating"><span width="40%">Rated <strong className="rating">2</strong> out of 5</span></span> (1)</a></li></ul></div></div><div className="widget woocommerce widget_product_search"><div className="widget-content"><h4 className="widget-title">Search by products</h4><form role="search" method="get" className="woocommerce-product-search" action="https://coffo.peerduck.com/">
                            <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-0">Search for:</label>
                            <input type="search" id="woocommerce-product-search-field-0" className="search-field" placeholder="Search products…" defaultValue="" name="s" />
                            <button type="submit" defaultValue="Search" className="wp-element-button">Search</button>
                            <input type="hidden" name="post_type" defaultValue="product" />
                        </form>
                        </div></div><div className="widget woocommerce widget_product_categories"><div className="widget-content"><h4 className="widget-title">Product categories</h4><ul className="product-categories"><li className="cat-item cat-item-63"><a href="https://coffo.peerduck.com/product-category/accessories/">Accessories</a> <span className="count">(5)</span></li>
                            <li className="cat-item cat-item-19"><a href="https://coffo.peerduck.com/product-category/coffee-beans/">Coffee Beans</a> <span className="count">(17)</span></li>
                            <li className="cat-item cat-item-31"><a href="https://coffo.peerduck.com/product-category/espresso-beans/">Espresso Beans</a> <span className="count">(5)</span></li>
                            <li className="cat-item cat-item-29"><a href="https://coffo.peerduck.com/product-category/green-coffee/">Green Coffee</a> <span className="count">(16)</span></li>
                            <li className="cat-item cat-item-30"><a href="https://coffo.peerduck.com/product-category/organic-coffee/">Organic Coffee</a> <span className="count">(20)</span></li>
                        </ul></div></div><div className="widget woocommerce widget_recent_reviews"><div className="widget-content"><h4 className="widget-title">Recent reviews</h4><ul className="product_list_widget"><li>


                            <a href="https://coffo.peerduck.com/product/kenya-light-roasted-beans/comment-page-1/#comment-72">
                                <img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr.png 744w" sizes="(max-width: 160px) 100vw, 160px" />		<span className="product-title">Kenya Light Roasted Beans</span>
                            </a>

                            <div className="star-rating" role="img" aria-label="Rated 5 out of 5"><span width="100%">Rated <strong className="rating">5</strong> out of 5</span></div>
                            <span className="reviewer">
                                by Olga	</span>


                        </li>
                            <li>


                                <a href="https://coffo.peerduck.com/product/kenya-light-roasted-beans/comment-page-1/#comment-71">
                                    <img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr.png 744w" sizes="(max-width: 160px) 100vw, 160px" />		<span className="product-title">Kenya Light Roasted Beans</span>
                                </a>

                                <div className="star-rating" role="img" aria-label="Rated 5 out of 5"><span width="100%">Rated <strong className="rating">5</strong> out of 5</span></div>
                                <span className="reviewer">
                                    by Olga	</span>


                            </li>
                            <li>


                                <a href="https://coffo.peerduck.com/product/kenya-light-roasted-beans/comment-page-1/#comment-70">
                                    <img width="160" height="225" src="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-160x225.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-213x300.png 213w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-728x1024.png 728w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr-600x844.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2020/11/krgjr.png 744w" sizes="(max-width: 160px) 100vw, 160px" />		<span className="product-title">Kenya Light Roasted Beans</span>
                                </a>

                                <div className="star-rating" role="img" aria-label="Rated 5 out of 5"><span width="100%">Rated <strong className="rating">5</strong> out of 5</span></div>
                                <span className="reviewer">
                                    by Olga	</span>


                            </li>
                        </ul></div></div><div className="widget woocommerce widget_product_tag_cloud"><div className="widget-content"><h4 className="widget-title">Product tags</h4><div className="tagcloud"><a href="https://coffo.peerduck.com/product-tag/bean/" className="tag-cloud-link tag-link-21 tag-link-position-1" style={{ fontSize: "11.55223880597pt" }} aria-label="bean (8 products)">bean</a>
                            <a href="https://coffo.peerduck.com/product-tag/coffee/" className="tag-cloud-link tag-link-53 tag-link-position-2" style={{ fontSize: "22pt" }} aria-label="coffee (27 products)">coffee</a>
                            <a href="https://coffo.peerduck.com/product-tag/eco/" className="tag-cloud-link tag-link-64 tag-link-position-3" style={{ fontSize: "8pt" }} aria-label="eco (5 products)">eco</a>
                            <a href="https://coffo.peerduck.com/product-tag/espresso/" className="tag-cloud-link tag-link-22 tag-link-position-4" style={{ fontSize: "11.55223880597pt" }} aria-label="espresso (8 products)">espresso</a>
                            <a href="https://coffo.peerduck.com/product-tag/green/" className="tag-cloud-link tag-link-55 tag-link-position-5" style={{ fontSize: "14.89552238806pt" }} aria-label="green (12 products)">green</a>
                            <a href="https://coffo.peerduck.com/product-tag/help/" className="tag-cloud-link tag-link-56 tag-link-position-6" style={{ fontSize: " 16.776119402985pt" }} aria-label="help (15 products)">help</a>
                            <a href="https://coffo.peerduck.com/product-tag/local/" className="tag-cloud-link tag-link-20 tag-link-position-7" style={{ fontSize: " 11.55223880597pt" }} aria-label="local (8 products)">local</a>
                            <a href="https://coffo.peerduck.com/product-tag/nature/" className="tag-cloud-link tag-link-54 tag-link-position-8" style={{ fontSize: " 18.865671641791pt" }} aria-label="nature (19 products)">nature</a>
                            <a href="https://coffo.peerduck.com/product-tag/original/" className="tag-cloud-link tag-link-57 tag-link-position-9" style={{ fontSize: "16.776119402985pt" }} aria-label="original (15 products)">original</a>
                            <a href="https://coffo.peerduck.com/product-tag/roasted/" className="tag-cloud-link tag-link-58 tag-link-position-10" style={{ fontSize: " 16.776119402985pt" }} aria-label="roasted (15 products)">roasted</a>
                            <a href="https://coffo.peerduck.com/product-tag/sweet/" className="tag-cloud-link tag-link-59 tag-link-position-11" style={{ fontSize: " 17.402985074627pt" }} aria-label="sweet (16 products)">sweet</a>
                            <a href="https://coffo.peerduck.com/product-tag/zero-waste/" className="tag-cloud-link tag-link-65 tag-link-position-12" style={{ fontSize: "8pt" }} aria-label="zero-waste (5 products)">zero-waste</a></div></div></div></div></div></div></main></div>
        </Fragment >
    )
}

export default Orders;