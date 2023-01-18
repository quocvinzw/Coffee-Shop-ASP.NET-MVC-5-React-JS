using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class CartView
    {
        public int id { get; set; }
        public int idproduct { get; set; }
        public int idclient { get; set; }
        public DateTime datecart { get; set; }
        public int amount { get; set; }
        public bool status { get; set; }

        //Show
        public string productname { get; set; }
        public string imagename { get; set; }
        public int productprice { get; set; }
        public int subtotal { get; set; }
    }
}