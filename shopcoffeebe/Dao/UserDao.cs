using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class UserDao
    {
        private static UserDao instance = null;
        private UserDao() { }

        internal static UserDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new UserDao();
                }
                return instance;
            }
        }

        public int userRegister(UserView uw)
        {
            //Default True
            int check = 0;
            try
            {
                var en = new CoffeShopEntities();
                bool ck = en.Clients.Any(x => x.email == uw.email);
                if (ck)
                {
                    check = 1;
                    //Exist Email
                }
                else
                {
                    //Success Create
                    en.Clients.Add(new Client
                    {
                        email = uw.email,
                        birth = uw.birth,
                        name = uw.name,
                        gender = uw.gender,
                        password = uw.password,
                        phone = uw.phone,
                        status = true
                    });
                    en.SaveChanges();
                }
            }
            catch (Exception)
            {
                check = 2;
            }
            return check;
        }

        public UserView userLogin(UserView uw)
        {
            UserView uv = new UserView();
            var en = new CoffeShopEntities();
            var Admin = en.Admins.Where(w => w.email == uw.email && w.password == uw.password).FirstOrDefault();
            var Emp = en.Emps.Where(w => w.email == uw.email && w.password == uw.password && w.status == true).FirstOrDefault();
            var User = en.Clients.Where(w => w.email == uw.email && w.password == uw.password && w.status == true).FirstOrDefault();
            if (Admin != null)
            {
                uv.position = "Admin";
                uv.exist = true;
            }
            else if (Emp != null)
            {
                uv.position = Emp.pos;
                uv.id = Emp.id;
                uv.exist = true;
            }
            else if (User != null)
            {
                uv.position = "Client";
                uv.id = User.id;
                uv.exist = true;
            }
            else
            {
                uv.exist = false;
            }
            return uv;
        }
    }
}