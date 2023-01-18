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
    public class ProductController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ProductView> Get()
        {
            return CoffeShopRepo.Instance.GetProductViews();
        }

        // GET api/<controller>/5
        public ProductView Get(int id)
        {
            return CoffeShopRepo.Instance.GetProductbyId(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] ProductView pv)
        {
            bool check = CoffeShopRepo.Instance.InsertProductViews(pv);
            if (check == true)
            {
                return Ok("Success Create Product");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/5
        public IEnumerable<ProductView> Put(int id)
        {
            CoffeShopRepo.Instance.UpdateStatusProduct(id);
            return CoffeShopRepo.Instance.GetProductViews();
        }

        public IHttpActionResult Put([FromBody] ProductView pv)
        {
            bool check = CoffeShopRepo.Instance.UpdateProductView(pv);
            if (check)
            {
                return Ok("Success Update Product");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}