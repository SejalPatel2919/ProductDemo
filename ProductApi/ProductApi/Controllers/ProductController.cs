using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApi.DBContext;
using ProductApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProductApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly ProductContext productDetails;
        public ProductController(ProductContext productContext)
        {
            productDetails = productContext;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            List<Product> products = productDetails.Product.ToList();
            return products;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            var data = productDetails.Product.Add(product);
            productDetails.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product product)
        {
            var data = productDetails.Product.Update(product);
            productDetails.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = productDetails.Product.Where(a => a.ProductId == id).FirstOrDefault();
            productDetails.Product.Remove(data);
            productDetails.SaveChanges();
            return Ok();

        }
    }
}
