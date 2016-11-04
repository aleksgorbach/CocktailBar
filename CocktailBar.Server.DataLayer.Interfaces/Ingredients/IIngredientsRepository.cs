namespace CocktailBar.Server.DataLayer.Interfaces.Ingredients {
    using System.Linq;
    using Models.Ingredients;

    public interface IIngredientsRepository {
        IQueryable<Ingredient> Get(int page = 0, int pageSize = 10);
        Ingredient Get(string id);
    }
}