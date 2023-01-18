using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class CartDao
    {
        private static CartDao instance = null;
        private CartDao() { }

        internal static CartDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CartDao();
                }
                return instance;
            }
        }

        public List<CartView> getUserCart(int idUser)
        {
            List<CartView> ls = new List<CartView>();
            var en = new CoffeShopEntities();
            try
            {
                ls = (from c in en.Carts
                      join p in en.Products on c.idproduct equals p.id
                      where c.idclient == idUser && c.status == false
                      select new CartView
                      {
                          id = c.id,
                          productname = p.name,
                          imagename = p.image,
                          amount = c.amount ?? 0,
                          subtotal = (int)c.price,
                          productprice = (int)p.price
                      }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return ls;
        }

        public bool insertCart(CartView cw)//int idproduct, int amount, int idClient
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var checkCart = (from c in en.Carts
                                 where
                                 c.idclient == cw.idclient && c.idproduct == cw.idproduct && c.status == false
                                 select c).FirstOrDefault();
                if (checkCart == null)
                {
                    check = newCart(cw.idproduct, cw.amount, cw.idclient);
                }
                else
                {
                    check = updateCart(checkCart.id, cw.amount, cw.idclient);
                }
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        private bool newCart(int idproduct, int amount, int idclient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                en.Carts.Add(new Cart
                {
                    idproduct = idproduct,
                    idclient = idclient,
                    datecart = DateTime.Now,
                    amount = amount,
                    status = false,
                    price = ProductDao.Instance.getPriceProduct(idproduct) * amount,
                });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool updateCart(int id, int amount, int idClient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var selectCart = (from c in en.Carts where c.id == id && c.status == false && c.idclient == idClient select c).SingleOrDefault();
                selectCart.amount += amount;
                selectCart.price += ProductDao.Instance.getPriceProduct(selectCart.idproduct ?? 0) * amount;
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool updateCart(CartView cw, int idClient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var selectCart = (from c in en.Carts where c.id == cw.id && c.status == false && c.idclient == idClient select c).SingleOrDefault();
                selectCart.amount = cw.amount;
                selectCart.price = ProductDao.Instance.getPriceProduct(selectCart.idproduct ?? 0) * cw.amount;
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool removeCart(int idCart)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var cart = en.Carts.Where(c => c.id == idCart).SingleOrDefault();
                en.Carts.Remove(cart);
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }
    }
}