using shopcoffeebe.Models;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Policy;
using System.Web.Http;

namespace shopcoffeebe.Controllers
{
    public class ClientController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ClientView> Get()
        {
            return CoffeShopRepo.Instance.GetClientViews();
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
        public IEnumerable<ClientView> Put(int id, [FromBody] string value)
        {
            CoffeShopRepo.Instance.UpdateClientViews(id);
            return CoffeShopRepo.Instance.GetClientViews();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}