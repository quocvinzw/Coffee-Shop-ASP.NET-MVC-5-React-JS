using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class ProductView
    {
        public int id { get; set; }
        public string name { get; set; }
        public long price { get; set; }
        public string image { get; set; }
        public string newimage { get; set; }
        public string description { get; set; }
        public int category { get; set; }
        public string catename { get; set; }
        public bool status { get; set; }
        public int idvoucherdetails { get; set; }
        public int discount { get; set; }
        public long discountprice { get; set; }

    }
}