/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import CheckCookie from "../../components/Check/ckCookie";

function ManageCategory() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })

    useEffect(() => getListCate(), []);
    const [lsCate, setListCate] = useState([]);
    function getListCate() {
        axios.get('https://localhost:44382/api/Category')
            .then((res) => {
                const myRespo = res.data;
                setListCate(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleUpdate(value){
        changeStatusCategory(value)
    }

    const changeStatusCategory = async (id) => {
        try {
            const resp = await axios.put(`https://localhost:44382/api/Category/${id}`);
             setListCate(resp.data);
        } catch (err) {
            // Handle Error Here
            console.log(err);
        }
    };

    return (
        <Fragment>
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Manage Category</h1>
                <p className="mb-4">
                    Manage Category <a target="blank" href="https://datatables.net">official Coffo Marketing</a>.
                </p>

                <div className="card shadow mb-8">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">All List Category</h6>
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
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column descending" width="100px">ID</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" width="350px">Category Name</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Action</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lsCate.map((c,index)=>(
                                                    <tr className="odd" key={index}>
                                                        <td>{index}</td>
                                                        <td>{c.name}</td>
                                                        <td><Link to={`/Marketing/EditCategory/${c.id}`} className="text-primary">Edit</Link></td>
                                                        <td>
                                                        {c.status === true
                                                                ? <a className="text-danger" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(c.id)} >Disable</a>
                                                                : <a className="text-success" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(c.id)} > Active</a>
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

export default ManageCategory