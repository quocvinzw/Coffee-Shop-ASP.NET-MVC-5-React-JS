using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class VoucherDetailsDao
    {
        private static VoucherDetailsDao instance = null;
        private VoucherDetailsDao() { }

        internal static VoucherDetailsDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new VoucherDetailsDao();
                }
                return instance;
            }
        }

        public bool InsertVoucherDetailsView(VoucherDetailsView vd)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                en.VoucherDetails.Add(new VoucherDetail
                {
                    idproduct = vd.idproduct,
                    idvoucher = vd.idvoucher,
                    status = vd.status,
                });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public List<VoucherDetailsView> GetVoucherDetailsViews()
        {
            var en = new CoffeShopEntities();
            var result = en.VoucherDetails.Select(s => new VoucherDetailsView
            {
                id = s.id,
                productname = s.Product.name,
                discount = s.Voucher.discount ?? 0,
                discountprice = s.Product.price - ((s.Voucher.discount * s.Product.price) / 100) ?? 0,
                productprice = s.Product.price ?? 0,
                vouchername = s.Voucher.name,
                status = s.status ?? false
            }).ToList();
            return result;
        }

        public bool changeStatusVoucherDetails(int idvd)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                var getVoucherDetail = en.VoucherDetails.Where(vd => vd.id == idvd).FirstOrDefault();
                var checkProduct = en.VoucherDetails.Any(vd => vd.idproduct == getVoucherDetail.idproduct && vd.status == true);
                var checkStatus = en.VoucherDetails.Any(vd => vd.id == idvd && vd.status == true);
                if (checkProduct == true && checkStatus == false)
                {
                    check = false;
                }
                else
                {
                    var voucherDetail = (from vd in en.VoucherDetails where vd.id == idvd select vd).FirstOrDefault();
                    switch (voucherDetail.status)
                    {
                        case true: voucherDetail.status = false; break;
                        case false: voucherDetail.status = true; break;
                    }
                    en.SaveChanges();
                }
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public List<VoucherDetailsView> getProductSale()
        {
            var en = new CoffeShopEntities();
            var result = (from vd in en.VoucherDetails
                          join p in en.Products on vd.idproduct equals p.id
                          join v in en.Vouchers on vd.idvoucher equals v.id
                          where vd.status == true && p.status == true
                          select new VoucherDetailsView
                          {
                              id = p.id,
                              productname = p.name,
                              productprice = (int)p.price,
                              discount = (int)v.discount,
                              discountprice = vd.Product.price - ((vd.Voucher.discount * vd.Product.price) / 100) ?? 0,
                              image = p.image,
                              idproduct = p.id,
                          }).ToList();
            return result;
        }

        public List<VoucherDetailsView> getOrderSale()
        {
            var en = new CoffeShopEntities();
            var result = (from vd in en.VoucherDetails
                          join p in en.Products on vd.idproduct equals p.id
                          join v in en.Vouchers on vd.idvoucher equals v.id
                          join c in en.Categories on p.category equals c.id
                          where vd.status == true && p.status == true && c.name == "Menu"
                          select new VoucherDetailsView
                          {
                              id = p.id,
                              productname = p.name,
                              productprice = (int)p.price,
                              discount = (int)v.discount,
                              discountprice = vd.Product.price - ((vd.Voucher.discount * vd.Product.price) / 100) ?? 0,
                              image = p.image,
                              idproduct = p.id,
                          }).ToList();
            return result;
        }
    }
}