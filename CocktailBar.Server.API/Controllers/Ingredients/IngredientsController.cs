namespace CocktailBar.Server.API.Controllers.Ingredients {
    using System.Linq;
    using DataLayer.Interfaces.Ingredients;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class IngredientsController : Controller {
        private readonly IIngredientsRepository _repo;

        public IngredientsController(IIngredientsRepository repo) {
            _repo = repo;
        }

        // GET: api/ingredients
        /// <summary>
        /// Returns list of available ingredients
        /// </summary>
        /// <param name="page">Target page index</param>
        /// <param name="pageSize">Page size</param>
        /// <returns></returns>
        /// <response code="200">Succeded</response>
        /// <response code="204">No ingredients found</response>
        [HttpGet]
        public IActionResult Get(int page, int pageSize) {
            var ingredients = _repo.Get(page, pageSize);
            if (ingredients.Any()) {
                return new ObjectResult(ingredients);
            }
            return NoContent();
        }

        // GET api/ingredients/5
        [HttpGet("{id}")]
        public string Get(int id) {
            return "value";
        }

        // POST api/ingredients
        [HttpPost]
        public void Post([FromBody] string value) {
        }

        // PUT api/ingredients/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) {
        }

        // DELETE api/ingredients/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}