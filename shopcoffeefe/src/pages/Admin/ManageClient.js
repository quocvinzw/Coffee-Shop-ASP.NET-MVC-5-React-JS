/* eslint-disable jsx-a11y/anchor-is-valid */
import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ManageClient() {
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Admin") !== true) {
            nagivate('/Login');
        }
    })

    useEffect(() => getListClient(), []);
    const [lsClient, setListClient] = useState([]);
    function getListClient() {
        axios.get('https://localhost:44382/api/Client')
            .then((res) => {
                const myRespo = res.data;
                setListClient(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleUpdate(id) {
        changeStatusEmp(id);      
    }

    const changeStatusEmp = async (id) => {
        try {
            const resp = await axios.put(`https://localhost:44382/api/Client/${id}`);
            setListClient(resp.data);
        } catch (err) {
            // Handle Error Here
            console.log(err);
        }
    };


    return (
        <div className="container-fluid">

            <h1 className="h3 mb-2 text-gray-800">Manage Client</h1>
            <p className="mb-4">
                Manage Client <a target="blank" href="https://datatables.net">official Coffo Admin</a>.
            </p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All List Client</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="dataTable_length"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column descending" width="45px">ID</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" width="297.9px">Name</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Start date: activate to sort column ascending" width="124.05px">Email</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending" width="155px">Phone</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="" width="124.05px">BirthDay</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Salary: activate to sort column ascending" width="111.213px">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {lsClient.map((c, index) => (
                                                    <tr className="odd" key={index}>
                                                        <td className="sorting_1">{index + 1}</td>
                                                        <td>{c.name}</td>
                                                        <td>{c.email}</td>
                                                        <td>{c.phone}</td>
                                                        <td>{c.birthString}</td>
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

            </div >
        </div >
    )
}

export default ManageClient;
