using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class ProductDao
    {
        private static ProductDao instance = null;
        private ProductDao() { }

        internal static ProductDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new ProductDao();
                }
                return instance;
            }
        }

        public bool InsertProductViews(ProductView pv)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                en.Products.Add(new Product
                {
                    name = pv.name,
                    description = pv.description,
                    price = pv.price,
                    category = pv.category,
                    image = pv.image,
                    status = pv.status,
                });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public List<ProductView> GetProductsViews()
        {
            var en = new CoffeShopEntities();
            var result = en.Products.Select(s => new ProductView
            {
                name = s.name,
                id = s.id,
                description = s.description,
                price = s.price ?? 0,
                image = s.image,
                status = s.status ?? false,
                catename = s.Category1.name
            }).OrderByDescending(x => x.id).ToList();
            return result;
        }

        public ProductView GetProductbyId(int id)
        {
            var en = new CoffeShopEntities();
            var result = (from p in en.Products
                          where p.id == id
                          select new ProductView
                          {
                              name = p.name,
                              id = p.id,
                              description = p.description,
                              price = p.price ?? 0,
                              category = p.category ?? 0,
                              catename = p.Category1.name,
                              image = p.image,
                              status = p.status ?? false,
                          }).SingleOrDefault();
            return result;
        }

        public bool UpdateProductViews(ProductView pv)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                var crrProduct = en.Products.Where(w => w.id == pv.id).SingleOrDefault();
                if (crrProduct != null)
                {
                    crrProduct.price = pv.price;
                    crrProduct.category = pv.category;
                    crrProduct.image = pv.image;
                    crrProduct.name = pv.name;
                    crrProduct.description = pv.description;
                    en.SaveChanges();
                }
                else
                {
                    check = false;
                }
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool UpdateStatusProduct(int id)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                var product = en.Products.Where(w => w.id == id).SingleOrDefault();
                if (product != null)
                {
                    switch (product.status)
                    {
                        case true:
                            product.status = false;
                            break;
                        case false:
                            product.status = true;
                            break;
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

        public List<ProductView> NoVoucher()
        {
            var en = new CoffeShopEntities();
            var result = en.Products
                .Where(w => !en.VoucherDetails
                .Any(a => a.idproduct == w.id && a.status == true))
                .Select(s => new ProductView
                {
                    id = s.id,
                    name = s.name,

                }).ToList();
            return result;
        }

        public List<ProductView> GetProductOrder()
        {
            var en = new CoffeShopEntities();
            var result = (from p in en.Products
                          join c in en.Categories on p.category equals c.id
                          where p.status == true && c.name == "Menu"
                          select new ProductView
                          {
                              name = p.name,
                              description = p.description,
                              price = p.price ?? 0,
                              image = p.image
                          }
                          ).Take(8).ToList();
            return result;
        }

        public List<ProductView> getProductDefault()
        {
            var en = new CoffeShopEntities();
            var result = (from p in en.Products
                          join c in en.Categories on p.category equals c.id
                          where !en.VoucherDetails.Any(vd => vd.idproduct == p.id && vd.status == true)
                          && p.status == true && c.name != "Menu"
                          select new ProductView
                          {
                              id = p.id,
                              name = p.name,
                              price = (int)p.price,
                              image = p.image
                          }).ToList();
            return result;
        }

        public List<ProductView> getOrderDefault()
        {
            var en = new CoffeShopEntities();
            var result = (from p in en.Products
                          join c in en.Categories on p.category equals c.id
                          where !en.VoucherDetails.Any(vd => vd.idproduct == p.id && vd.status == true)
                          && p.status == true && c.name == "Menu"
                          select new ProductView
                          {
                              id = p.id,
                              name = p.name,
                              price = (int)p.price,
                              image = p.image
                          }).ToList();
            return result;
        }

        public ProductView userViewProductbyId(int id)
        {
            ProductView pv = new ProductView();
            var en = new CoffeShopEntities();
            var voucherp = (from vd in en.VoucherDetails
                            join p in en.Products on vd.idproduct equals p.id
                            join c in en.Categories on p.category equals c.id
                            join v in en.Vouchers on vd.idvoucher equals v.id
                            where vd.idproduct == id && vd.status == true && c.name != "Menu"
                            select new ProductView
                            {
                                id = p.id,
                                name = p.name,
                                price = (int)p.price,
                                description = p.description,
                                discount = (int)v.discount,
                                discountprice = p.price - ((v.discount * p.price) / 100) ?? 0,
                                image = p.image,
                                catename = c.name
                            }).FirstOrDefault();
            var product = (from p in en.Products
                           join c in en.Categories on p.category equals c.id
                           where p.id == id && c.name != "Menu"
                           select new ProductView
                           {
                               id = p.id,
                               name = p.name,
                               price = (int)p.price,
                               description = p.description,
                               image = p.image,
                               catename = c.name
                           }).FirstOrDefault();
            if (voucherp != null)
            {
                pv = voucherp;
            }
            else
            {
                pv = product;
            }
            return pv;
        }

        public ProductView userViewOrderbyId(int id)
        {
            ProductView pv = new ProductView();
            var en = new CoffeShopEntities();
            var voucherp = (from vd in en.VoucherDetails
                            join p in en.Products on vd.idproduct equals p.id
                            join c in en.Categories on p.category equals c.id
                            join v in en.Vouchers on vd.idvoucher equals v.id
                            where vd.idproduct == id && vd.status == true && c.name == "Menu"
                            select new ProductView
                            {
                                id = p.id,
                                name = p.name,
                                price = (int)p.price,
                                description = p.description,
                                discount = (int)v.discount,
                                discountprice = p.price - ((v.discount * p.price) / 100) ?? 0,
                                image = p.image,
                                catename = c.name
                            }).FirstOrDefault();
            var product = (from p in en.Products
                           join c in en.Categories on p.category equals c.id
                           where p.id == id && c.name == "Menu"
                           select new ProductView
                           {
                               id = p.id,
                               name = p.name,
                               price = (int)p.price,
                               description = p.description,
                               image = p.image,
                               catename = c.name
                           }).FirstOrDefault();
            if (voucherp != null)
            {
                pv = voucherp;
            }
            else
            {
                pv = product;
            }
            return pv;
        }

        public int getPriceProduct(int idproduct)
        {
            int Price = 0;
            var en = new CoffeShopEntities();
            try
            {
                var productSale = (from vd in en.VoucherDetails
                                   join p in en.Products
                                   on vd.idproduct equals p.id
                                   join v in en.Vouchers on vd.idvoucher equals v.id
                                   where p.id == idproduct && vd.status == true
                                   select new VoucherDetailsView
                                   {
                                       productprice = p.price ?? 0,
                                       discount = (int)v.discount,
                                   }).FirstOrDefault();
                if (productSale != null)
                {
                    Price = (int)(productSale.productprice - (productSale.productprice * productSale.discount / 100));
                }
                else
                {
                    var product = (from p in en.Products where p.id == idproduct select p).SingleOrDefault();
                    Price = (int)product.price;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Price;
        }



    }
}