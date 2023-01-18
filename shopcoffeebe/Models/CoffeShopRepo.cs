using shopcoffeebe.Dao;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Models
{
    public class CoffeShopRepo
    {
        private static CoffeShopRepo instance = null;
        private CoffeShopRepo() { }

        public static CoffeShopRepo Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CoffeShopRepo();
                }
                return instance;
            }
        }
        #region Branch
        public List<BranchView> GetBranchViews()
        {
            return BranchDao.Instance.GetBranchViews;
        }

        public bool InsertBranchViews(EmployeeView ev)
        {
            bool check = EmployeeDao.Instance.InsertEmployee(ev);
            return check;
        }
        #endregion

        #region Employee
        public List<EmployeeView> GetEmployeeViews()
        {
            return EmployeeDao.Instance.GetEmployeeViews();
        }

        public void UpdateEmployeeViews(int id)
        {
            EmployeeDao.Instance.UpdateEmployeeViews(id);
        }
        #endregion

        #region Client
        public List<ClientView> GetClientViews()
        {
            return ClientDao.Instance.GetClientViews();
        }

        public void UpdateClientViews(int id)
        {
            ClientDao.Instance.UpdateClientViews(id);
        }
        #endregion

        #region Category
        public List<CategoryView> GetCategoryViews()
        {
            return CategoryDao.Instance.GetCategoryViews();
        }

        public bool InsertCategoryView(CategoryView cw)
        {
            return CategoryDao.Instance.InsertCategoryView(cw);
        }

        public CategoryView GetCategorybyId(int id)
        {
            return CategoryDao.Instance.GetCategorybyId(id);
        }

        public bool UpdateCategory(CategoryView cw)
        {
            return CategoryDao.Instance.UpdateCategory(cw);
        }

        public void UpdateStatusCategory(int id)
        {
            CategoryDao.Instance.UpdateStatusCategory(id);
        }
        #endregion

        #region Product 
        public bool InsertProductViews(ProductView pv)
        {
            return ProductDao.Instance.InsertProductViews(pv);
        }

        public List<ProductView> GetProductViews()
        {
            return ProductDao.Instance.GetProductsViews();
        }

        public ProductView GetProductbyId(int id)
        {
            return ProductDao.Instance.GetProductbyId(id);
        }

        public bool UpdateProductView(ProductView pv)
        {
            return ProductDao.Instance.UpdateProductViews(pv);
        }

        public bool UpdateStatusProduct(int id)
        {
            return ProductDao.Instance.UpdateStatusProduct(id);
        }

        public List<ProductView> NoVoucher()
        {
            return ProductDao.Instance.NoVoucher();
        }

        public List<ProductView> ProductOrder()
        {
            return ProductDao.Instance.GetProductOrder();
        }

        public List<ProductView> getProductDefault()
        {
            return ProductDao.Instance.getProductDefault();
        }

        public List<ProductView> getOrderDefault()
        {
            return ProductDao.Instance.getOrderDefault();
        }

        public ProductView userViewProductbyId(int idproduct)
        {
            return ProductDao.Instance.userViewProductbyId(idproduct);
        }

        public ProductView userViewOrderbyId(int idproduct)
        {
            return ProductDao.Instance.userViewOrderbyId(idproduct);
        }

        #endregion

        #region Voucher
        public bool InsertVoucherView(VouchersView vv)
        {
            return VouchersDao.Instance.InsertVoucherView(vv);
        }

        public List<VouchersView> GetVouchersViews()
        {
            return VouchersDao.Instance.GetVouchersViews();
        }

        public VouchersView GetVoucherbyId(int id)
        {
            return VouchersDao.Instance.GetVoucherbyId(id);
        }

        public bool UpdateVoucherViews(VouchersView vv)
        {
            return VouchersDao.Instance.UpdateVoucherViews(vv);
        }

        public void UpdateStatusVoucher(int id)
        {
            VouchersDao.Instance.UpdateStatusVoucher(id);
        }
        #endregion

        #region VoucherDetails
        public bool InsertVoucherDetailsView(VoucherDetailsView vd)
        {
            return VoucherDetailsDao.Instance.InsertVoucherDetailsView(vd);
        }

        public List<VoucherDetailsView> GetVoucherDetailsView()
        {
            return VoucherDetailsDao.Instance.GetVoucherDetailsViews();
        }

        public bool changeStatusVoucherDetails(int idvd)
        {
            return VoucherDetailsDao.Instance.changeStatusVoucherDetails(idvd);
        }

        public List<VoucherDetailsView> getProductSale()
        {
            return VoucherDetailsDao.Instance.getProductSale();
        }

        public List<VoucherDetailsView> getOrderSale()
        {
            return VoucherDetailsDao.Instance.getOrderSale();
        }
        #endregion

        #region User
        public int userRegister(UserView uw)
        {
            return UserDao.Instance.userRegister(uw);
        }

        public UserView userLogin(UserView uw)
        {
            return UserDao.Instance.userLogin(uw);
        }

        #endregion

        #region CartOrder
        public List<CartView> getUserCart(int idUser)
        {
            return CartDao.Instance.getUserCart(idUser);
        }

        public List<OrderView> getUserOrder(int idOrder)
        {
            return OrderDao.Instance.getUserOrder(idOrder);
        }

        public bool insertUserCart(CartView cw)
        {
            return CartDao.Instance.insertCart(cw);
        }

        public bool insertUserOrder(OrderView ow)
        {
            return OrderDao.Instance.insertOrder(ow);
        }

        public bool updateUserCart(CartView cw)
        {
            return CartDao.Instance.updateCart(cw, cw.idclient);
        }

        public bool updateUserOrder(OrderView ow)
        {
            return OrderDao.Instance.updateOrder(ow, ow.idclient);
        }

        public bool removeCart(int idCart)
        {
            return CartDao.Instance.removeCart(idCart);
        }

        public bool removeOrder(int idOrder)
        {
            return OrderDao.Instance.removeOrder(idOrder);
        }
        #endregion
    }
}