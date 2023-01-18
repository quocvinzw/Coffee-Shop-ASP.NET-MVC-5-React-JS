import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Message, FormInput } from "../import";
import axios from "axios";
function AddVoucher() {
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            nagivate('/Login');
        }
    })

    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    useEffect(() => getListProduct(), []);
    const [lsProduct, setListProduct] = useState([]);
    function getListProduct() {
        axios.get('https://localhost:44382/api/ProductVoucher')
            .then((res) => {
                const myRespo = res.data;
                setListProduct(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => getListVoucher(), []);
    const [lsVoucher, setListVoucher] = useState([]);
    function getListVoucher() {
        axios.get('https://localhost:44382/api/Vouchers')
            .then((res) => {
                const myRespo = res.data;
                setListVoucher(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleProduct(value) {
        var element = document.getElementById("lbProduct");
        // eslint-disable-next-line eqeqeq
        if (value == -1) {
            element.innerHTML = "Please Select Product";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleVoucher(value) {
        var element = document.getElementById("lbVoucher");
        // eslint-disable-next-line eqeqeq
        if (value == -1) {
            element.innerHTML = "Please Select Voucher";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleStatus() {
        var element = document.getElementById("customCheck");
        if (element.checked) {
            return true;
        } else {
            return false;
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

    function clearInput() {
        var form = document.getElementById("formVoucher");
        form.reset();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const voucherDetails = {
            idproduct: handleProduct(document.getElementById("inpProduct").value),
            idvoucher: handleVoucher(document.getElementById("inpVoucher").value),
            status: handleStatus()
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.post('https://localhost:44382/api/VoucherDetails', voucherDetails);
                setMessage({
                    type: "alert-success",
                    msg: resp.data
                })
                clearInput();
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };

        if (checkError(voucherDetails) === true) {
            sendPostRequest();
        }
    }

    return (
        <Fragment>
            <div className="col-lg-12 container">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-success mb-4 ">Add Voucher Details</h1>
                        {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                    </div>
                    <form className="user" id="formVoucher">
                        <div className="form-group mt-2">
                            <div className="col-sm-12 mb-0">
                                <p className="mb-0 mt-0 ms-5">Select Product</p>
                                <select className="form-control" name="idproduct" id="inpProduct"
                                    onChange={(e) => handleProduct(e.target.value)}>
                                    <option value="-1">Product</option>
                                    {lsProduct.map((p, index) => (
                                        <option value={p.id} key={index}>{p.name}</option>
                                    ))}
                                </select>
                                <FormInput nameErr="lbProduct"></FormInput>
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <div className="col-sm-12 mb-0">
                                <p className="mb-0 mt-0 ms-5">Voucher</p>
                                <select className="form-control" name="idvoucher" id="inpVoucher"
                                    onChange={(e) => handleVoucher(e.target.value)}>
                                    <option value="-1">Voucher</option>
                                    {lsVoucher.map((v, index) => (
                                        <option value={v.id} key={index}>{v.name}</option>
                                    ))}
                                </select>
                                <FormInput nameErr="lbVoucher"></FormInput>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="col-sm-12 mb-0">
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" name="status" value="" />
                                    <label className="custom-control-label" htmlFor="customCheck">
                                        Status
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block"
                            onClick={(e) => handleSubmit(e)}>
                            Create Voucher Details
                        </button>
                    </form>



                </div>
            </div>

        </Fragment>
    )
}

export default AddVoucher