namespace CocktailBar.Server.API.Services.Ingredients {
    using System.Linq;
    using Models.Ingredients;

    public interface IIngredientService {
        /// <summary>
        /// Get ingredients list
        /// </summary>
        /// <returns>Ingredients list</returns>
        IQueryable<Ingredient> GetAll();

        void Add(Ingredient item);
        Ingredient Get(string page);
        bool Delete(string id);
    }
}