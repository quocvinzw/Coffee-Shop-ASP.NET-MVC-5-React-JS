//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace shopcoffeebe.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class ClientOrder
    {
        public int id { get; set; }
        public Nullable<int> idproduct { get; set; }
        public Nullable<int> idclient { get; set; }
        public Nullable<System.DateTime> datecart { get; set; }
        public Nullable<int> amount { get; set; }
        public Nullable<int> price { get; set; }
        public string status { get; set; }
    
        public virtual Client Client { get; set; }
        public virtual Product Product { get; set; }
    }
}
