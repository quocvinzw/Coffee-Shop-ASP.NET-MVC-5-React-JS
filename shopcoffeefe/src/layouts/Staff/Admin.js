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
                <Sidebar url="/Admin">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Admin/CreateEmp" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Create Account</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Admin/ManageEmp" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Manage Employee</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Admin/ManageClient" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Manage Client</span>
                        </Link>
                    </li>
                </Sidebar>
                <div id='content-wrapper' className='d-flex flex-column'>
                    <div id='content'>
                        <Topbar role="Admin"></Topbar>
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