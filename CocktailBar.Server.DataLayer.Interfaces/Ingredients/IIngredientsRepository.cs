namespace CocktailBar.Server.DataLayer.Interfaces.Ingredients {
    using System.Linq;
    using Models.Ingredients;

    public interface IIngredientsRepository {
        IQueryable<Ingredient> GetAll();
        Ingredient Get(string id);
        void Add(Ingredient item);
    }
}