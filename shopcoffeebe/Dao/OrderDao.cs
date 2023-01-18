using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class OrderDao
    {
        private static OrderDao instance = null;
        private OrderDao() { }

        internal static OrderDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new OrderDao();
                }
                return instance;
            }
        }

        public List<OrderView> getUserOrder(int idUser)
        {
            List<OrderView> ls = new List<OrderView>();
            var en = new CoffeShopEntities();
            try
            {
                ls = (from o in en.ClientOrders
                      join p in en.Products on o.idproduct equals p.id
                      where o.idclient == idUser && o.status != "2"
                      select new OrderView
                      {
                          id = o.id,
                          productname = p.name,
                          imagename = p.image,
                          amount = o.amount ?? 0,
                          subtotal = (int)o.price,
                          productprice = (int)p.price,
                          status = o.status
                      }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return ls;
        }

        public bool insertOrder(OrderView ow)//int idproduct, int amount, int idClient
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var checkOrder = (from c in en.ClientOrders
                                  where
                                  c.idclient == ow.idclient && c.idproduct == ow.idproduct && c.status == "0"
                                  select c).FirstOrDefault();
                if (checkOrder == null)
                {
                    check = newOrder(ow.idproduct, ow.amount, ow.idclient);
                }
                else
                {
                    check = updateOrder(checkOrder.id, ow.amount, ow.idclient);
                }
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        private bool newOrder(int idproduct, int amount, int idclient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                en.ClientOrders.Add(new ClientOrder
                {
                    idproduct = idproduct,
                    idclient = idclient,
                    datecart = DateTime.Now,
                    amount = amount,
                    status = "0",
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

        private bool updateOrder(int id, int amount, int idClient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var selectOrder = (from c in en.ClientOrders where c.id == id && c.status == "0" && c.idclient == idClient select c).SingleOrDefault();
                selectOrder.amount += amount;
                selectOrder.price += ProductDao.Instance.getPriceProduct(selectOrder.idproduct ?? 0) * amount;
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool updateOrder(OrderView ov, int idClient)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var selectOrder = (from c in en.ClientOrders where c.id == ov.id && c.status == "0" && c.idclient == idClient select c).SingleOrDefault();
                selectOrder.amount = ov.amount;
                selectOrder.price = ProductDao.Instance.getPriceProduct(selectOrder.idproduct ?? 0) * ov.amount;
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public bool removeOrder(int idOrder)
        {
            bool check = true;
            var en = new CoffeShopEntities();
            try
            {
                var cart = en.ClientOrders.Where(c => c.id == idOrder).SingleOrDefault();
                en.ClientOrders.Remove(cart);
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