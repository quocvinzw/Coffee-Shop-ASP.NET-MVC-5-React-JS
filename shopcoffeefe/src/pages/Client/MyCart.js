import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function MyCart() {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("User") == null) {
            navigate("/Login")
        }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getListCart(), []);
    const [lsCart, setListCart] = useState([]);
    const [total, setTotal] = useState(0);
    function getListCart() {
        const id = sessionStorage.getItem("User");
        axios.get(`https://localhost:44382/api/MyCart/${id}`)
            .then((res) => {
                setTotal(0);
                const myRespo = res.data;
                setListCart(myRespo);
                myRespo.map((m) => (
                    setTotal(prevTotal => prevTotal + m.subtotal)
                ))
            }).catch(err => {
                console.log(err);
            })
    }

    const sendPostRequest = async (myCart) => {
        try {
            const resp = await axios.put('https://localhost:44382/api/MyCart', myCart);
            getListCart();
        } catch (err) {
            // Handle Error Here          
        }
    };

    const sendDeleteRequest = async (idCart) => {
        try {
            const resp = await axios.delete(`https://localhost:44382/api/MyCart/${idCart}`);
            getListCart();
        } catch (err) {
            // Handle Error Here          
        }
    };

    function handleChangeQuan(value, id) {
        const myCart = {
            idclient: sessionStorage.getItem("User"),
            id: id,
            amount: value
        }
        sendPostRequest(myCart);
    }

    function handleDeleteCart(e,idCart) {
        e.preventDefault();
        sendDeleteRequest(idCart);
    }


    return (
        <Fragment>
            <header id="main-header" className="main-header-bg">
                <div className="container inner-header">
                    <div className="title-wrap">
                        <h1 className="header-title">My Cart</h1>
                        <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                            <span property="itemListElement" typeof="ListItem"><Link property="item" typeof="WebPage" title="Go to Coffo." to="/" className="home"><span property="name">Home</span></Link><meta property="position" content="1" /></span>  /  <span property="itemListElement" typeof="ListItem"><span property="name" className="post post-page current-item">Cart</span><meta property="url" content="https://coffo.peerduck.com/cart/" /><meta property="position" content="2" /></span>
                        </div>
                    </div>
                </div>
                <div id="header-wave"></div>
            </header>
            <div className="container-lg ">

                <article className="post-7 page type-page status-publish hentry" id="post-7">

                    <div className="post-inner">


                        <header className="entry-header header-group">

                            <div className="entry-header-inner">


                            </div>
                        </header>

                        <div className="entry-content clearfix">
                            <div className="woocommerce" id="divPart">
                                <div className="woocommerce-notices-wrapper"></div>

                                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">ID</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Subtotal</th>
                                            <th className="product-price">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            lsCart.length !== 0
                                                ?
                                                lsCart.map((c, index) => (

                                                    <tr className="woocommerce-cart-form__cart-item cart_item" key={index}>
                                                        <td className="product-remove">
                                                            {index + 1}
                                                        </td>
                                                        <td className="product-name" data-title="Product">
                                                            <a href="/">{c.productname}e</a>
                                                        </td>

                                                        <td className="product-thumbnail">
                                                            <Link to="/Products"><img width="160" height="225" src={c.imagename} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" srcSet={`${c.imagename} 160w,${c.imagename} 213w,${c.imagename} 728w,${c.imagename} 600w,${c.imagename} 744w`} sizes="(max-width: 160px) 100vw, 160px" /></Link>
                                                        </td>

                                                        <td className="product-price" data-title="Price">
                                                            <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{c.productprice} VND</bdi></span>
                                                        </td>

                                                        <td className="product-quantity" data-title="Quantity">
                                                            <div className="quantity">
                                                                <input type="number"
                                                                    id="cartAmount"
                                                                    className="input-text qty text"
                                                                    step="1"
                                                                    min="1"
                                                                    max="10"
                                                                    name="amount"
                                                                    defaultValue={c.amount}
                                                                    title="Amount"
                                                                    size="4"
                                                                    placeholder=""
                                                                    inputMode="numeric"
                                                                    autoComplete="off" data-id="@item.id"
                                                                    onChange={(e) => handleChangeQuan(e.target.value, c.id)}
                                                                />

                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal" data-title="Subtotal">
                                                            <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{c.subtotal} VND</bdi></span>
                                                        </td>

                                                        <td className="product-remove">
                                                            <a className="remove container" onClick={(e)=>handleDeleteCart(e,c.id)} data-ajax="true" data-ajax-mode="replace" data-ajax-update="#divPart" href="/Cart/removeCart">&times;</a>
                                                        </td>


                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td></td>
                                                </tr>
                                        }


                                    </tbody>
                                </table>


                                <div className="cart-collaterals">
                                    <div className="cart_totals ">

                                        <h4 className="mb-4">Cart totals</h4>

                                        <table cellSpacing="0" className="shop_table shop_table_responsive">
                                            <tbody>
                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span> {total} VND</bdi></span></strong> </td>
                                                </tr>
                                            </tbody>


                                        </table>

                                        {/* @*<div className="wc-proceed-to-checkout">

                                            <a href="https://coffo.peerduck.com/checkout/" className="checkout-button button alt wc-forward">
                                                CheckOut
                                            </a>
                                        </div>*@ */}


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className="section-inner clearfix"></div>


                </article>
            </div>
        </Fragment>
    )
}

export default MyCart