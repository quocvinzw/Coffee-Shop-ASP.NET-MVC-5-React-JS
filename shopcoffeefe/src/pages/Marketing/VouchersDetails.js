/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { Message } from "../import";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import CheckCookie from "../../components/Check/ckCookie";


function VouchersDetails() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })

    const [message, setMessage] = useState({
        type: null,
        msg: null
    });
    useEffect(() => getListVoucherDetails(), []);
    const [lsVoucherDetails, setLsVoucherDetails] = useState([]);
    function getListVoucherDetails() {
        axios.get('https://localhost:44382/api/VoucherDetails')
            .then((res) => {
                const myRespo = res.data;
                setLsVoucherDetails(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleUpdate(value){
        changeStatusVoucherDetails(value)
    }

    const changeStatusVoucherDetails = async (id) => {
        try {
            const resp = await axios.put(`https://localhost:44382/api/VoucherDetails/${id}`);
            getListVoucherDetails();
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

    return (
        <Fragment>
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Manage Voucher Details</h1>
                {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                <p className="mb-2">
                    Manage VoucherDetails <a target="blank" href="https://datatables.net">official Coffo Marketing</a>.
                </p>
                <div className="mb-4">
                    <Link to="/Marketing/AddVoucher" className="btn btn-success">Create Voucher Details</Link>
                </div>
                <div className="card shadow mb-8">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">All List Voucher Details</h6>
                    </div>
                    <div className="card-body">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <div className="dataTables_length" id="dataTable_length"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column descending" width="50px">ID</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" width="250px">Product Name</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Price</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Voucher Name</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Discount</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Discount Price</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="100px">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lsVoucherDetails.map((v,index)=>(
                                                    <tr className="odd" key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{v.productname}</td>
                                                        <td>{v.productprice}</td>
                                                        <td>{v.vouchername}</td>
                                                        <td>{v.discount}%</td>
                                                        <td>{v.discountprice}</td>
                                                        <td>
                                                        {v.status === true
                                                                ? <a className="text-danger" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(v.id)} >Disable</a>
                                                                : <a className="text-success" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(v.id)} > Active</a>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default VouchersDetails;