using ProductApi.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace ProductApi.DBContext
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }
        public DbSet<Product> Product { get; set; }
    }
}
