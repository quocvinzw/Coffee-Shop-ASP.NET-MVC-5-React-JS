using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class OrderView
    {
        public int id { get; set; }
        public int idproduct { get; set; }
        public int idclient { get; set; }
        public DateTime datecart { get; set; }
        public int price { get; set; }
        public int amount { get; set; }
        public string status { get; set; }

        //Show
        public string productname { get; set; }
        public string imagename { get; set; }
        public int productprice { get; set; }
        public int subtotal { get; set; }
        public string clientName { get; set; }
        public string clientPhone { get; set; }
    }
}