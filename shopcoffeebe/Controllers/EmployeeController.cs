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
    public class EmployeeController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<EmployeeView> Get()
        {
            List<EmployeeView> lsEmp = CoffeShopRepo.Instance.GetEmployeeViews();
            return lsEmp;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] EmployeeView ev)
        {
            bool check = CoffeShopRepo.Instance.InsertBranchViews(ev);
            if (check)
            {
                return Ok("Success Create Account Employee");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/5
        public IEnumerable<EmployeeView> Put(int id, [FromBody] string value)
        {
            CoffeShopRepo.Instance.UpdateEmployeeViews(id);
            List<EmployeeView> lsEmp = CoffeShopRepo.Instance.GetEmployeeViews();
            return lsEmp;

        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}