using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.ModelView
{
    public class EmployeeView
    {
        public int id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public bool gender { get; set; }
        public string phone { get; set; }
        public DateTime birth { get; set; }
        public DateTime dwork { get; set; }
        public string dworkString { get; set; }
        public string pos { get; set; }
        public int idBranch { get; set; }
        public string nameBranch { get; set; }
        public bool status { get; set; }
    }
}