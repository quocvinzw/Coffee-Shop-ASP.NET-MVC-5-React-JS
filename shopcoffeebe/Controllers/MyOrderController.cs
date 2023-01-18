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
    public class MyOrderController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public List<OrderView> Get(int id)
        {
            return CoffeShopRepo.Instance.getUserOrder(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] OrderView ov)
        {
            bool check = CoffeShopRepo.Instance.insertUserOrder(ov);
            if (check)
            {
                return Ok("Success Order Please Waiting");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody] OrderView ov)
        {
            bool check = CoffeShopRepo.Instance.updateUserOrder(ov);
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
            bool check = CoffeShopRepo.Instance.removeOrder(id);
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