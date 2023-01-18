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
    public class VoucherDetailsController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<VoucherDetailsView> Get()
        {
            return CoffeShopRepo.Instance.GetVoucherDetailsView();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] VoucherDetailsView vd)
        {
            bool check = CoffeShopRepo.Instance.InsertVoucherDetailsView(vd);
            if (check)
            {
                return Ok("Success Create VoucherDetails");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id)
        {
            bool check = CoffeShopRepo.Instance.changeStatusVoucherDetails(id);
            if (check)
            {
                return Ok("Success Change Status Product");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Voucher Contains On This Product");
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}