namespace CocktailBar.Server.API.Tests.Controllers.Ingredients {
    using System.Collections.Generic;
    using System.Linq;
    using API.Controllers.Ingredients;
    using Microsoft.AspNetCore.Mvc;
    using Models.Ingredients;
    using Moq;
    using Services.Ingredients;
    using Xunit;

    public class IndgredientsControllerTests {
        [Fact]
        public void GetIngredientsList_IfEmpty() {
            var service = new Mock<IIngredientService>(MockBehavior.Strict);
            service.Setup(x => x.GetAll()).Returns(new List<Ingredient>().AsQueryable());
            var controller = new IngredientsController(service.Object);
            var result = controller.Get();
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public void GetIngredientsList_IfNotEmpty() {
            var service = new Mock<IIngredientService>(MockBehavior.Strict);
            service.Setup(x => x.GetAll()).Returns(new Ingredient[3].AsQueryable());

            var controller = new IngredientsController(service.Object);
            var result = controller.Get();
            Assert.IsType<ObjectResult>(result);
        }

        //[Fact]
        //public void GetIngredientsList_Arguments_IsInvalid() {
        //    var service = new Mock<IIngredientService>(MockBehavior.Strict);
        //    service.Setup(x => x.Get(It.IsAny<int>(), It.IsAny<int>())).Returns(new Ingredient[0].AsQueryable());

        //    var controller = new IngredientsController(service.Object);
        //    var result = controller.Get(0, 0);
        //    Assert.IsType<BadRequestResult>(result);

        //    result = controller.Get(0, -5);
        //    Assert.IsType<BadRequestResult>(result);

        //    result = controller.Get(-2, 3);
        //    Assert.IsType<BadRequestResult>(result);
        //}

        [Fact]
        public void DeleteIngredients_ExistingId() {
            var service = new Mock<IIngredientService>(MockBehavior.Strict);
            service.Setup(x => x.Delete(It.IsAny<string>())).Returns(true);

            var controller = new IngredientsController(service.Object);
            var result = controller.Delete("valid_id");
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public void DeleteIngredients_NotExistingId() {
            var service = new Mock<IIngredientService>(MockBehavior.Strict);
            service.Setup(x => x.Delete(It.IsAny<string>())).Returns(false);

            var controller = new IngredientsController(service.Object);
            var result = controller.Delete("invalid_id");
            Assert.IsType<NotFoundResult>(result);
        }
    }
}