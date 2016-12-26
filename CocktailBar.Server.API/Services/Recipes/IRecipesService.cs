namespace CocktailBar.Server.API.Services.Recipes {
    using System.Collections.Generic;
    using Models.Recipes;

    public interface IRecipesService {
        IEnumerable<Recipe> GetAll();
    }
}