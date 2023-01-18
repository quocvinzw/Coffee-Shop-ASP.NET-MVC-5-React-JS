/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useEffect, useState } from "react";
import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";

function ManageEmp() {
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Admin") !== true) {
            nagivate('/Login');
        }
    })

    useEffect(() => getListEmp(), []);
    const [lsEmp, setLsEmp] = useState([]);
    function getListEmp() {
        axios.get('https://localhost:44382/api/Employee')
            .then((res) => {
                const myRespo = res.data;
                setLsEmp(myRespo)
            }).catch(err => {
                console.log(err);
                console.error("Some Error");
            });
    }

    function handleUpdate(value){
        changeStatusEmp(value);
    }

    const changeStatusEmp = async (id) => {
        try {
            const resp = await axios.put(`https://localhost:44382/api/Employee/${id}`);
             setLsEmp(resp.data);
        } catch (err) {
            // Handle Error Here
            console.log(err);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Manage Employee</h1>
            <p className="mb-4">
                Manage Employee <a target="blank" href="https://datatables.net">official Coffo Admin</a>.
            </p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All List Employee</h6>
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
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column descending" style={{ width: "45px" }}>ID</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" style={{ width: "297.9px" }}>Name</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" style={{ width: "131.288px" }}>Gender</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending" style={{ width: "155px" }}>Phone</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Start date: activate to sort column ascending" style={{ width: "124.05px" }}>Position</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="" style={{ width: "124.05px" }}>Date Work</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Salary: activate to sort column ascending" style={{ width: "150px" }}>Branch</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Salary: activate to sort column ascending" style={{ width: "111.213px" }}>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {lsEmp.map((e, index) => (
                                                    <tr className="odd" key={index}>
                                                        <td className="sorting_1">{index + 1}</td>
                                                        <td>{e.name}</td>
                                                        <td>{e.phone}</td>
                                                        <td>{e.gender === true ? "Male" : "Female"}</td>
                                                        <td>{e.pos}</td>
                                                        <td>{e.dworkString}</td>
                                                        <td>{e.nameBranch}</td>
                                                        <td>{e.status === true
                                                            ? <a className="text-danger" style={{cursor:"pointer"}} 
                                                            onClick={()=>handleUpdate(e.id)} >Disable</a>
                                                            : <a className="text-success" style={{cursor:"pointer"}} 
                                                            onClick={()=>handleUpdate(e.id)} > Active</a>
                                                        }</td>
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
        </div>
    )
}

export default ManageEmp;