﻿using shopcoffeebe.Models;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace shopcoffeebe.Controllers
{
    public class ProductVoucherController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ProductView> Get()
        {
            return CoffeShopRepo.Instance.NoVoucher();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}