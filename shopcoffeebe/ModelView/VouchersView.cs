using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class VouchersView
    {
        public int id { get; set; }
        public string name { get; set; }
        public int discount { get; set; }
        public DateTime datecreate { get; set; }
        public bool status { get; set; }
    }
}