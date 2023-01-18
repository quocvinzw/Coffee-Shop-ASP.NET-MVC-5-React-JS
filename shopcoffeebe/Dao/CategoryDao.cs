using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class CategoryDao
    {
        private static CategoryDao instance = null;
        private CategoryDao() { }
        public static CategoryDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CategoryDao();
                }
                return instance;
            }
        }

        public List<CategoryView> GetCategoryViews()
        {
            var en = new CoffeShopEntities();
            var result = en.Categories.Select(x => new CategoryView { id = x.id, name = x.name, status = x.status ?? false }).ToList();
            return result;
        }

        public bool InsertCategoryView(CategoryView cv)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                en.Categories.Add(new Category { name = cv.name, status = cv.status });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public CategoryView GetCategorybyId(int id)
        {
            var en = new CoffeShopEntities();
            var result = (from c in en.Categories where c.id == id select new CategoryView { id = c.id, name = c.name }).FirstOrDefault();
            return result;
        }

        public bool UpdateCategory(CategoryView cw)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                var crrCate = en.Categories.Where(w => w.id == cw.id).FirstOrDefault();
                if (crrCate != null)
                {
                    crrCate.name = cw.name;
                    en.SaveChanges();
                }
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public void UpdateStatusCategory(int id)
        {
            var en = new CoffeShopEntities();
            var cate = en.Categories.Where(w => w.id == id).FirstOrDefault();
            if (cate != null)
            {
                switch (cate.status)
                {
                    case true:
                        cate.status = false;
                        break;
                    case false:
                        cate.status = true;
                        break;
                }
                en.SaveChanges();
            }
        }
    }
}