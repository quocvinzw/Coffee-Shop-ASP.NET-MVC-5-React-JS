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
    public class UserProductController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ProductView> Get()
        {
            return CoffeShopRepo.Instance.getProductDefault();
        }

        // GET api/<controller>/5
        public ProductView Get(int id)
        {
            return CoffeShopRepo.Instance.userViewProductbyId(id);
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