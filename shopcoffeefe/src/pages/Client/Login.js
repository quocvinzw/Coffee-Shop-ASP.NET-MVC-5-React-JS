import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FormInput, Message } from '../import';
function Login() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (sessionStorage.getItem("User")!=null) {
            navigate("/")
        }
    })
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    function handleEmail(value) {
        var element = document.getElementById("lbEmail");
        if (!value.match("[a-z0-9]+@gmail.com")) {
            element.innerHTML = "Please Input Correct Email Example: abc@gmail.com";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handlePassword(value) {
        var element = document.getElementById("lbPassword");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else if (value.length < 8) {
            element.innerHTML = "This Field Required 1-8 Characters";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function checkError(obj) {
        for (var key in obj) {
            // eslint-disable-next-line eqeqeq
            if (obj[key] === false && key !== "status")
                return false;
        }
        return true;
    }

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    function createCookie(cname, cvalue) {
        var now = new Date();
        var time = now.getTime();
        time += 3600 * 1000;
        now.setTime(time);
        document.cookie =
            cname + "=" + cvalue +
            '; expires=' + now.toUTCString() +
            '; path=/';

    }

    const waitingLogin = async (data) => {
        await sleep(3000);
        switch (data.position) {
            case "Client":
                navigate('/MyCart');
                sessionStorage.setItem("User", data.id);
                break;
            case "Admin":
                navigate('/Admin');
                createCookie("Admin","Admin");
                break;
            case "Marketing":
                navigate('/Marketing');
                createCookie("Marketing",data.id)
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const userLogin = {
            email: handleEmail(document.getElementById("loginEmail").value),
            password: handlePassword(document.getElementById("loginPassword").value)
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.post('https://localhost:44382/api/Login', userLogin);
                setMessage({
                    type: "alert-success",
                    msg: "Success Login To Your Account"
                })
                document.getElementById("formLogin").style.display = "none";
                waitingLogin(resp.data);
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };

        if (checkError(userLogin) === true) {
            sendPostRequest();
        }
    }

    return (
        <Fragment>
            <header id="main-header" className="main-header-bg">
                <div className="container inner-header">
                    <div className="title-wrap">
                        <h1 className="header-title">Login to Account</h1>
                        <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                            <span property="itemListElement" typeof="ListItem"><Link property="item" typeof="WebPage" title="Go to Coffo." to="/" className="home">
                                <span property="name">Home</span></Link><meta property="position" content="1" /></span>  /  <span property="itemListElement" typeof="ListItem" />
                            <span property="name" className="archive post-product-archive current-item">Login</span>
                            <meta property="url" content="https://coffo.peerduck.com/shop/" /><meta property="position" content="2" />               </div>
                    </div>
                </div>
                <div id="header-wave"></div>
            </header>
            <div className="container-lg ">
                <article className="post-9 page type-page status-publish hentry" id="post-9">
                    <div className="post-inner">
                        <header className="entry-header header-group">
                            <div className="entry-header-inner">
                                {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                            </div>
                        </header>
                        <div className="entry-content clearfix">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>

                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="row">
                                        <div className="u-column1 col-lg">
                                            <form className="woocommerce-form woocommerce-form-login login" method="post" id="formLogin" >
                                                <h5 className="mt-0 mb-3 h5-styled">Login</h5>
                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="username">Email address&nbsp;<span className="required">*</span></label>
                                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" id="loginEmail"
                                                        name="email" autoComplete="off" defaultValue="" onChange={(e) => handleEmail(e.target.value)} />
                                                </p>
                                                <FormInput nameErr="lbEmail"></FormInput>
                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
                                                    <span className="password-input">
                                                        <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="loginPassword"
                                                            autoComplete="off" onChange={(e) => handlePassword(e.target.value)} /><span className="show-password-input"></span></span>
                                                </p>
                                                <FormInput nameErr="lbPassword"></FormInput>
                                                <div className="form-row woo-bottom-f-row">
                                                    <label className="woocommerce-form__label woocommerce-form__label-htmlFor-checkbox woocommerce-form-login__rememberme">
                                                        <Link className="woocommerce-form__input woocommerce-form__input-checkbox" to="/Register" name="rememberme" id="rememberme" defaultValue="forever"> <span>Don't Have Account Register Now</span> </Link>
                                                    </label>
                                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" defaultValue="6cee32c2fb" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                                    <div className="login-btn"><button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" defaultValue="Log in" onClick={(e) => handleSubmit(e)}>Log in</button></div>
                                                </div>
                                            </form>
                                        </div>
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

export default Login;