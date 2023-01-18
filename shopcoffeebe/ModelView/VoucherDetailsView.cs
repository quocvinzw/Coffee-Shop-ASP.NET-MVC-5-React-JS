using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class VoucherDetailsView
    {
        public int id { get; set; }
        public int idproduct { get; set; }
        public int idvoucher { get; set; }
        public bool status { get; set; }

        //New
        public string productname { get; set; }
        public string vouchername { get; set; }
        public long productprice { get; set; }
        public int discount { get; set; }
        public long discountprice { get; set; }
        public string image { get; set; }
    }
}