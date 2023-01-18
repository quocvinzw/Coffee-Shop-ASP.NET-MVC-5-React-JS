using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class UserView
    {
        public int id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public bool gender { get; set; }
        public string phone { get; set; }
        public DateTime birth { get; set; }
        public bool status { get; set; }

        //Pos
        public string position { get; set; }
        public bool exist { get; set; }
    }
}