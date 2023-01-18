import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, Message } from '../import';
import axios from "axios";
function Register() {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("User") != null) {
            navigate("/")
        }
    })
    const [regiStatus, setStatus] = useState(false);
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    function handleEmail(value) {
        var element = document.getElementById("lbUserEmail");
        if (!value.match("[a-z0-9]+@gmail.com")) {
            element.innerHTML = "Please Input Correct Email Example: abc@gmail.com";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleFullName(value) {
        var element = document.getElementById("lbUserName");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handlePassword(value) {
        var element = document.getElementById("lbUserPwd");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else if (value.length < 8) {
            element.innerHTML = "This Field Required 1-8 Characters";
            return false;
        } else {
            handleConfirm(document.getElementById("userConfirm").value);
            element.innerHTML = "";
            return value;
        }
    }

    function handleConfirm(value) {
        var element = document.getElementById("lbUserConfirmPwd");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else if (value.length < 8) {
            element.innerHTML = "This Field Required 1-8 Characters";
            return false;
        } else if (value !== document.getElementById("userPassword").value) {
            element.innerHTML = "Password Confirm Doesn't Match";
            return false;
        }
        else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleBirthDay(value) {
        var element = document.getElementById("lbUserBirth");
        if (value.length === 0) {
            element.innerHTML = "Please Select This Field";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }


    function handleGender(value) {
        var element = document.getElementById("lbUserGender");
        // eslint-disable-next-line eqeqeq
        if (value == -1) {
            element.innerHTML = "Please Select Gender";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handlePhone(value) {
        var element = document.getElementById("lbUserPhone");
        if (!value.match("\\d+")) {
            element.innerHTML = "This Field Only Contains Number";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: handleEmail(document.getElementById("userEmail").value),
            password: handlePassword(document.getElementById("userPassword").value),
            phone: handlePhone(document.getElementById("userPhone").value),
            name: handleFullName(document.getElementById("userName").value),
            gender: handleGender(document.getElementById("userGender").value),
            birth: handleBirthDay(document.getElementById("userBirth").value),
            //Other
            confirmPass: handleConfirm(document.getElementById("userConfirm").value)
        };

        function checkError(obj) {
            for (var key in obj) {
                // eslint-disable-next-line eqeqeq
                if (obj[key] === false && key !== "status")
                    return false;
            }
            return true;
        }

        function clearInput() {
            var form = document.getElementById("formRegister");
            form.reset();
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.post('https://localhost:44382/api/Register', newUser);
                setStatus(true);
                clearInput();
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };

        if (checkError(newUser) === true) {
            sendPostRequest();
        }
    }

    return (
        <Fragment>
            <header id="main-header" className="main-header-bg">
                <div className="container inner-header">
                    <div className="title-wrap">
                        <h1 className="header-title">Register new Account</h1>
                        <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                            <span property="itemListElement" typeof="ListItem"><Link property="item" typeof="WebPage" title="Go to Coffo." to="/" className="home">
                                <span property="name">Home</span></Link><meta property="position" content="1" /></span>  /  <span property="itemListElement" typeof="ListItem" />
                            <span property="name" className="archive post-product-archive current-item">Register</span>
                            <meta property="url" content="https://coffo.peerduck.com/shop/" /><meta property="position" content="2" />               </div>
                    </div>
                </div>
                <div id="header-wave"></div>
            </header>
            <div className="container-lg">
                <article className="post-9 page type-page status-publish hentry" id="post-9">
                    <div className="post-inner">
                        <header className="entry-header header-group">
                            <div className="entry-header-inner">
                            </div>
                        </header>
                        {regiStatus === true
                            ? <div className="alert alert-success alert-dismissible container" id="rmAlert">
                                <a href="/" className="close" data-dismiss="alert" aria-label="close" >&times;</a>
                                <strong>Success!</strong> Register Account <Link to="/Login" className="text-success">Login Now</Link>
                            </div>
                            : ""}
                        {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                        <div className="entry-content clearfix">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>

                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="row">
                                        <div className="u-column2 col-12 container">
                                            <form method="post" className="woocommerce-form woocommerce-form-register register" id="formRegister">
                                                <h5 className="mt-0 mb-3 h5-styled">Register</h5>
                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">Email address&nbsp;<span className="required">*</span></label>
                                                    <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="userEmail"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handleEmail(e.target.value)} />
                                                    <FormInput nameErr="lbUserEmail"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">Password&nbsp;<span className="required">*</span></label>
                                                    <input type="password" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="userPassword"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handlePassword(e.target.value)} />
                                                    <FormInput nameErr="lbUserPwd"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">Confirm Password&nbsp;<span className="required">*</span></label>
                                                    <input type="password" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="userConfirm"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handleConfirm(e.target.value)} />
                                                    <FormInput nameErr="lbUserConfirmPwd"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">Name&nbsp;<span className="required">*</span></label>
                                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="userName"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handleFullName(e.target.value)} />
                                                    <FormInput nameErr="lbUserName"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide ">
                                                    <label htmlFor="gender">Gender&nbsp;<span className="required">*</span></label>
                                                    <select className="" id="userGender" onChange={(e) => handleGender(e.target.value)}>
                                                        <option value="-1">Gender</option>
                                                        <option value="0">Male</option>
                                                        <option value="1">FeMale</option>
                                                    </select>
                                                    <FormInput nameErr="lbUserGender"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">Phone&nbsp;<span className="required">*</span></label>
                                                    <input type="number" className="woocommerce-Input woocommerce-Input--text input-text" name="" id="userPhone"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handlePhone(e.target.value)} />
                                                    <FormInput nameErr="lbUserPhone"></FormInput>
                                                </div>

                                                <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide pb-3">
                                                    <label htmlFor="username">BirthDays&nbsp;<span className="required">*</span></label>
                                                    <input type="date" className="woocommerce-Input woocommerce-Input--text input-text" name="" id="userBirth"
                                                        autoComplete="off" defaultValue="" onChange={(e) => handleBirthDay(e.target.value)} />
                                                    <FormInput nameErr="lbUserBirth"></FormInput>
                                                </div>

                                                <div className="woocommerce-privacy-policy-text">
                                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and htmlFor other purposes described in our <a href="https://coffo.peerduck.com/privacy-policy/" className="woocommerce-privacy-policy-link" target="blank">privacy policy</a>.</p>
                                                </div>
                                                <div className="woocommerce-form-row form-row">
                                                    <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" defaultValue="29cbcd087e" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                                    <div className="btn-right">
                                                        <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" onClick={(e) => handleSubmit(e)}
                                                            name="register" defaultValue="Register">Register</button>
                                                    </div>
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

export default Register;