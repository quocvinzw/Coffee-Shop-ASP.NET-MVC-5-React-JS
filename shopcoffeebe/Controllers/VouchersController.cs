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
    public class VouchersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<VouchersView> Get()
        {
            return CoffeShopRepo.Instance.GetVouchersViews();
        }

        // GET api/<controller>/5
        public VouchersView Get(int id)
        {
            return CoffeShopRepo.Instance.GetVoucherbyId(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] VouchersView vv)
        {
            bool check = CoffeShopRepo.Instance.InsertVoucherView(vv);
            if (check)
            {
                return Ok("Success Create Voucher");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody] VouchersView vv)
        {
            bool check = CoffeShopRepo.Instance.UpdateVoucherViews(vv);
            if (check)
            {
                return Ok("Success Update Voucher");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        public IEnumerable<VouchersView> Put(int id)
        {
            CoffeShopRepo.Instance.UpdateStatusVoucher(id);
            return CoffeShopRepo.Instance.GetVouchersViews();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}