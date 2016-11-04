namespace CocktailBar.Server.API.Tests.Controllers.Ingredients {
    using System.Collections.Generic;
    using System.Linq;
    using API.Controllers.Ingredients;
    using DataLayer.Interfaces.Ingredients;
    using Microsoft.AspNetCore.Mvc;
    using Models.Ingredients;
    using Moq;
    using Xunit;

    public class IndgredientsControllerTests {
        [Fact]
        public void GetIngredientsList_IfEmpty() {
            var repo = new Mock<IIngredientsRepository>();
            repo.Setup(x => x.Get(0, 10)).Returns(new List<Ingredient>().AsQueryable());
            var controller = new IngredientsController(repo.Object);
            var result = controller.Get();
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public void GetIngredientsList_IfNotEmpty() {
            var repo = new Mock<IIngredientsRepository>();
            repo.Setup(x => x.Get(0, 10)).Returns(new Ingredient[3].AsQueryable());
            var controller = new IngredientsController(repo.Object);
            var result = controller.Get();
            Assert.IsType<ObjectResult>(result);
        }
    }
}