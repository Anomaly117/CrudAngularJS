using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace EjercicioCRUD.Models.EF
{
    public class AngularJSMVCDbContext : DbContext
    {
        public AngularJSMVCDbContext():base("name = UNIVERSIDAD")
        {

        }


        //Entity Framework convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Tabla nombre singular
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
    }


}