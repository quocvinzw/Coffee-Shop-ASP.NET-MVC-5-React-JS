using shopcoffeebe.Models;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace shopcoffeebe.Controllers
{
    public class UserOrderController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ProductView> Get()
        {
            return CoffeShopRepo.Instance.getOrderDefault();
        }

        // GET api/<controller>/5
        public ProductView Get(int id)
        {
            return CoffeShopRepo.Instance.userViewOrderbyId(id);
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