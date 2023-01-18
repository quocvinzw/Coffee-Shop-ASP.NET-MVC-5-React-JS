using shopcoffeebe.Entity;
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
    public class MyCartController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public List<CartView> Get(int id)
        {
            return CoffeShopRepo.Instance.getUserCart(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] CartView cw)
        {
            bool check = CoffeShopRepo.Instance.insertUserCart(cw);
            if (check)
            {
                return Ok("Success Add Product Into Cart");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }


        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody] CartView cw)
        {
            bool check = CoffeShopRepo.Instance.updateUserCart(cw);
            if (check)
            {
                return Ok();
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            bool check = CoffeShopRepo.Instance.removeCart(id);
            if (check)
            {
                return Ok();
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }
    }
}