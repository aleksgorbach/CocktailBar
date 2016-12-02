namespace CocktailBar.Admin.Controllers {
    using Microsoft.AspNetCore.Mvc;

    public class IngredientsController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}