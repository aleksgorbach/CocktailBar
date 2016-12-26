namespace CocktailBar.Server.API.Controllers.Recipes {
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Models.Recipes;
    using Services.Recipes;

    [Route("api/[controller]")]
    public class RecipesController : Controller {
        private readonly IRecipesService _service;

        public RecipesController(IRecipesService service) {
            _service = service;
        }

        // GET: api/recipes
        [HttpGet]
        public IEnumerable<Recipe> Get() {
            return _service.GetAll();
        }

        // GET api/recipes/5
        [HttpGet("{id}")]
        public string Get(int id) {
            return "value";
        }

        // POST api/recipes
        [HttpPost]
        public void Post([FromBody] string value) {
        }

        // PUT api/recipes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) {
        }

        // DELETE api/recipes/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}