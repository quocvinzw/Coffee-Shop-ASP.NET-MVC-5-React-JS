using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class ClientDao
    {
        private static ClientDao instance = null;
        private ClientDao() { }
        public static ClientDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new ClientDao();
                }
                return instance;
            }
        }

        public List<ClientView> GetClientViews()
        {
            var en = new CoffeShopEntities();
            var result = en.Clients.Select(c => new ClientView
            {
                id = c.id,
                name = c.name,
                phone = c.phone,
                birthString = c.birth.ToString(),
                email = c.email,
                status = (bool)c.status
            }).ToList();
            return result;
        }

        public void UpdateClientViews(int id)
        {
            var en = new CoffeShopEntities();
            var client = en.Clients.Where(c => c.id == id).FirstOrDefault();
            if (client != null)
            {
                switch (client.status)
                {
                    case true:
                        client.status = false; break;
                    case false:
                        client.status = true; break;
                }
                en.SaveChanges();
            }
        }
    }
}