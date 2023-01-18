/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import CheckCookie from "../../components/Check/ckCookie";

function ManageProduct() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })

    useEffect(() => getListProduct(), []);
    const [lsProduct, setListProduct] = useState([]);
    function getListProduct() {
        axios.get('https://localhost:44382/api/Product')
            .then((res) => {
                const myRespo = res.data;
                setListProduct(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleUpdate(value){
        changeStatusProduct(value)
    }

    const changeStatusProduct = async (id) => {
        try {
            const resp = await axios.put(`https://localhost:44382/api/Product/${id}`);
             setListProduct(resp.data);
        } catch (err) {
            // Handle Error Here
            console.log(err);
        }
    };

    return (
        <Fragment>
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Manage Product</h1>
                <p className="mb-4">
                    Manage Product <a target="blank" href="https://datatables.net">official Coffo Marketing</a>.
                </p>

                <div className="card shadow mb-8">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">All List Product</h6>
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
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="200px">Image</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="250px">Description</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="150px">Category</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="100px">Action</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" width="100px">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lsProduct.map((p,index)=>(
                                                
                                                    <tr className="odd" key={index}>
                                                        <td className="sorting_1">{index+1}</td>
                                                        <td>{p.name}</td>
                                                        <td>{p.price} VNĐ</td>
                                                        <td><img alt="Products Photos" src={p.image}  style={{maxWidth:"100%",height:"auto"}} loading="lazy"/></td>
                                                        <td>{p.description}</td>
                                                        <td>{p.catename}</td>
                                                        <td><Link to={`/Marketing/EditProduct/${p.id}`} className="text-primary">Edit</Link></td>                                                  
                                                        <td>
                                                            {p.status === true
                                                                ? <a className="text-danger" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(p.id)} >Disable</a>
                                                                : <a className="text-success" style={{ cursor: "pointer" }}
                                                                    onClick={() => handleUpdate(p.id)} > Active</a>
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

export default ManageProduct;