//Admin
import CreateEmp from '../pages/Admin/CreateEmp'
import ManageEmp from '../pages/Admin/ManageEmp';
import ManageClient from '../pages/Admin/ManageClient';
import IndexAdmin from '../pages/Admin/Index';
//Marketing
import IndexMarketing from '../pages/Marketing/Index';
import CreateProduct from '../pages/Marketing/CreateProduct';
import CreateCategory from '../pages/Marketing/CreateCategory';
import CreateVoucher from '../pages/Marketing/CreateVoucher';
import ManageProduct from '../pages/Marketing/ManageProduct';
import ManageCategory from '../pages/Marketing/ManageCategory';
import ManageVouchers from '../pages/Marketing/ManageVouchers';
import EditProduct from '../pages/Marketing/EditProduct';
import EditCategory from '../pages/Marketing/EditCategory';
import EditVoucher from '../pages/Marketing/EditVoucher';
import VouchersDetails from '../pages/Marketing/VouchersDetails';
import AddVoucher from '../pages/Marketing/AddVoucher';
//Client
import IndexClient from '../pages/Client/IndexClient';
import AboutUs from '../pages/Client/AboutUs';
import ContactUs from '../pages/Client/ContactUs';
import Products from '../pages/Client/Products';
import Orders from '../pages/Client/Orders';
import Login from '../pages/Client/Login';
import Register from '../pages/Client/Register';
import ViewProduct from '../pages/Client/ViewProduct';
import ViewOrder from '../pages/Client/ViewOrder';
import MyCart from '../pages/Client/MyCart';
import MyOrder from '../pages/Client/MyOrder';
//LayOut
import Admin from '../layouts/Staff/Admin';
import Marketing from '../layouts/Staff/Marketing';
import Client from '../layouts/Client/Client';
//Check

const publicRoutes = [
    //Admin

    { path: '/Admin/CreateEmp', component: CreateEmp, layout: Admin },
    { path: '/Admin/ManageEmp', component: ManageEmp, layout: Admin },
    { path: '/Admin/ManageClient', component: ManageClient, layout: Admin },
    { path: '/Admin', component: IndexAdmin, layout: Admin},
    //Marketing
    { path: '/Marketing', component: IndexMarketing, layout: Marketing },
    { path: '/Marketing/CreateProduct', component: CreateProduct, layout: Marketing },
    { path: '/Marketing/CreateCategory', component: CreateCategory, layout: Marketing },
    { path: '/Marketing/CreateVoucher', component: CreateVoucher, layout: Marketing },
    { path: '/Marketing/ManageProduct', component: ManageProduct, layout: Marketing },
    { path: '/Marketing/ManageCategory', component: ManageCategory, layout: Marketing },
    { path: '/Marketing/ManageVouchers', component: ManageVouchers, layout: Marketing },
    { path: '/Marketing/EditProduct/:id', component: EditProduct, layout: Marketing },
    { path: '/Marketing/EditCategory/:id', component: EditCategory, layout: Marketing },
    { path: '/Marketing/EditVoucher/:id', component: EditVoucher, layout: Marketing },
    { path: '/Marketing/VouchersDetails', component: VouchersDetails, layout: Marketing },
    { path: '/Marketing/AddVoucher', component: AddVoucher, layout: Marketing },
    //Client
    { path: '/', component: IndexClient, layout: Client },
    { path: '/AboutUs', component: AboutUs, layout: Client },
    { path: '/ContactUs', component: ContactUs, layout: Client },
    { path: '/Products', component: Products, layout: Client },
    { path: '/Orders', component: Orders, layout: Client },
    { path: '/Login', component: Login, layout: Client },
    { path: '/Register', component: Register, layout: Client },
    { path: '/ViewProduct/:id', component: ViewProduct, layout: Client },
    { path: '/ViewOrder/:id', component: ViewOrder, layout: Client },
    { path: '/MyCart', component: MyCart, layout: Client },
    { path: '/MyOrder', component: MyOrder, layout: Client }
];

const privateRoutes = [
   
];

export { publicRoutes, privateRoutes };