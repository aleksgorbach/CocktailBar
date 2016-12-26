namespace CocktailBar.Server.API.Controllers.Ingredients {
    using System.Linq;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Models.Ingredients;
    using Services.Ingredients;

    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class IngredientsController : Controller {
        private readonly IIngredientService _service;

        public IngredientsController(IIngredientService service) {
            _service = service;
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
        /// <response code="400">Invalid request</response>
        [HttpGet]
        public IActionResult Get() {
            var ingredients = _service.GetAll();
            if (ingredients.Any()) {
                return new ObjectResult(ingredients);
            }
            return NoContent();
        }

        // GET api/ingredients/5
        [HttpGet("{id}")]
        public IActionResult Get(string id) {
            if (string.IsNullOrWhiteSpace(id)) {
                return BadRequest();
            }
            var ingredient = _service.Get(id);
            if (ingredient == null) {
                return NotFound();
            }
            return new ObjectResult(ingredient);
        }

        // POST api/ingredients
        [HttpPost]
        public IActionResult Post([FromBody] Ingredient item) {
            if (item == null) {
                return BadRequest();
            }
            _service.Add(item);
            return new ObjectResult(item);
        }

        // DELETE api/ingredients/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id) {
            if (_service.Delete(id)) {
                return Ok();
            }
            return NotFound();
        }
    }
}