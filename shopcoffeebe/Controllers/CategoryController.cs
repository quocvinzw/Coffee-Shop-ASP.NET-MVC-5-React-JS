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
    public class CategoryController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<CategoryView> Get()
        {
            return CoffeShopRepo.Instance.GetCategoryViews();
        }

        // GET api/<controller>/5
        public CategoryView Get(int id)
        {
            return CoffeShopRepo.Instance.GetCategorybyId(id);
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] CategoryView cv)
        {
            bool check = CoffeShopRepo.Instance.InsertCategoryView(cv);
            if (check)
            {
                return Ok("Success Create Category");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }

        // PUT api/<controller>/CategoryViews
        public IHttpActionResult Put([FromBody] CategoryView cw)
        {
            bool check = CoffeShopRepo.Instance.UpdateCategory(cw);
            if (check)
            {
                return Ok("Success Update Category");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "There Are Some Error Please Check Back");
            }
        }
        public IEnumerable<CategoryView> Put(int id)
        {
            CoffeShopRepo.Instance.UpdateStatusCategory(id);
            return CoffeShopRepo.Instance.GetCategoryViews();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}