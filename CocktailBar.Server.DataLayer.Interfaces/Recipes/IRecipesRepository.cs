namespace CocktailBar.Server.Interfaces.Recipes {
    using System.Collections.Generic;
    using Models.Recipes;

    public interface IRecipesRepository {
        IEnumerable<Recipe> GetAll();
    }
}