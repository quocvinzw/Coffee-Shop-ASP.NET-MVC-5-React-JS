using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class VouchersDao
    {
        private static VouchersDao instance = null;
        private VouchersDao() { }

        internal static VouchersDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new VouchersDao();
                }
                return instance;
            }
        }

        public bool InsertVoucherView(VouchersView vv)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                en.Vouchers.Add(new Voucher
                {
                    name = vv.name,
                    datecreate = DateTime.Now,
                    status = vv.status,
                    discount = vv.discount
                });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public List<VouchersView> GetVouchersViews()
        {
            var en = new CoffeShopEntities();
            var result = en.Vouchers.Select(s => new VouchersView
            {
                name = s.name,
                id = s.id,
                discount = s.discount ?? 0,
                status = s.status ?? false
            }).ToList();
            return result;
        }

        public VouchersView GetVoucherbyId(int id)
        {
            var en = new CoffeShopEntities();
            var Voucher = (from v in en.Vouchers
                           where v.id == id
                           select new VouchersView
                           {
                               name = v.name,
                               id = v.id,
                               discount = v.discount ?? 0
                           }).FirstOrDefault();
            return Voucher;
        }

        public bool UpdateVoucherViews(VouchersView vv)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                var crrVoucher = en.Vouchers.Where(w => w.id == vv.id).FirstOrDefault();
                if (crrVoucher != null)
                {
                    crrVoucher.name = vv.name;
                    crrVoucher.discount = vv.discount;
                }
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public void UpdateStatusVoucher(int id)
        {
            var en = new CoffeShopEntities();
            var Voucher = en.Vouchers.Where(w => w.id == id).FirstOrDefault();
            if (Voucher != null)
            {
                switch (Voucher.status)
                {
                    case true:
                        Voucher.status = false;
                        break;
                    case false:
                        Voucher.status = true;
                        break;
                }
                en.SaveChanges();
            }
        }
    }
}