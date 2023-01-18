import { Fragment } from 'react';
import { Topbar, Sidebar, Footer } from '../import';
import { Link } from 'react-router-dom';
//CSS
import '../Staff/CSS/sb-admin-2.min.css';
import '../Staff/CSS/all.min.css';
//JS
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

function Admin({ children }) {
    return (
        <Fragment>
            <div id="wrapper">
                <Sidebar url="/Marketing">
                    <li>
                        <div className="sidebar-heading">
                            Create
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Marketing/CreateProduct" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Create Product</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Marketing/CreateCategory" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Create Category</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Marketing/CreateVoucher" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Create Voucher</span>
                        </Link>
                    </li>
                    <li><hr className="sidebar-divider" /></li>
                    <li>
                        <div className="sidebar-heading">
                            Manage
                        </div>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link collapsed" to="/Marketing/ManageProduct" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-table" aria-hidden="true"></i>
                            <span>Manage Product</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link collapsed" to="/Marketing/ManageCategory" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-table" aria-hidden="true"></i>
                            <span>Manage Category</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link collapsed" to="/Marketing/ManageVouchers" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-table" aria-hidden="true"></i>
                            <span>Manage Voucher</span>
                        </Link>
                    </li>
                    <li><hr className="sidebar-divider" /></li>
                    <li>
                        <div className="sidebar-heading">
                            Vouchers Detail
                        </div>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link collapsed" to="/Marketing/VouchersDetails" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fa-brands fa-product-hunt"></i>  
                            <span>Voucher Details</span>
                        </Link>
                    </li>
                </Sidebar>
                <div id='content-wrapper' className='d-flex flex-column'>
                    <div id='content'>
                        <Topbar role="Marketing"></Topbar>
                        <div id='container-fluid'>
                            {children}
                        </div>
                    </div>
                    <Footer></Footer>
                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <script>
                    {document.body.id = "page-top"}
                </script>
            </div>
        </Fragment>
    );
}

export default Admin;