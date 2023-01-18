using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class BranchDao
    {
        private static BranchDao instance = null;
        private BranchDao() { }

        internal static BranchDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new BranchDao();
                }
                return instance;
            }
        }

        public List<BranchView> GetBranchViews
        {
            get
            {
                var en = new CoffeShopEntities();
                var result = en.Branches.Select(b => new BranchView { id = b.id, name = b.name, status = b.status ?? false }).ToList();
                return result;
            }
        }

    }
}