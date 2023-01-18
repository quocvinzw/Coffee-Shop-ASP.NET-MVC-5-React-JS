using shopcoffeebe.Entity;
using shopcoffeebe.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopcoffeebe.Dao
{
    public class EmployeeDao
    {
        private static EmployeeDao instance;

        private EmployeeDao() { }

        internal static EmployeeDao Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new EmployeeDao();
                }
                return instance;
            }
        }

        public bool InsertEmployee(EmployeeView e)
        {
            bool check = true;
            try
            {
                var en = new CoffeShopEntities();
                en.Emps.Add(new Emp
                {
                    email = e.email,
                    birth = e.birth,
                    name = e.name,
                    dwork = e.dwork,
                    gender = e.gender,
                    password = e.password,
                    phone = e.phone,
                    pos = e.pos,
                    status = e.status,
                    branch = e.idBranch
                });
                en.SaveChanges();
            }
            catch (Exception)
            {
                check = false;
            }
            return check;
        }

        public List<EmployeeView> GetEmployeeViews()
        {
            var en = new CoffeShopEntities();
            var result = (from e in en.Emps
                          join b in en.Branches on e.branch equals b.id
                          select new EmployeeView
                          {
                              id = e.id,
                              name = e.name,
                              dworkString = e.dwork.ToString(),
                              gender = (bool)e.gender,
                              phone = e.phone,
                              pos = e.pos,
                              nameBranch = b.name,
                              status = (bool)e.status,
                          }).ToList();
            return result;
        }

        public void UpdateEmployeeViews(int id)
        {
            var en = new CoffeShopEntities();
            var emp = en.Emps.Where(e => e.id == id).FirstOrDefault();
            if (emp != null)
            {
                switch (emp.status)
                {
                    case true:
                        emp.status = false;
                        break;
                    case false:
                        emp.status = true;
                        break;
                }
                en.SaveChanges();
            }
        }





    }
}