namespace CocktailBar.Server.DataLayer.Ingredients {
    using System.Collections.Generic;
    using System.Linq;
    using Interfaces.Ingredients;
    using Models.Ingredients;

    public class MemoryIngredientsRepository : IIngredientsRepository {
        private readonly List<Ingredient> _ingredients;

        public MemoryIngredientsRepository() {
            _ingredients = new List<Ingredient> {
                new Ingredient {Id = "1", Title = "Rum", Description = "Alcohol"},
                new Ingredient {Id = "2", Title = "Cola", Description = "Cola"},
                new Ingredient {Id = "3", Title = "Lime", Description = "Sour"},
                new Ingredient {Id = "4", Title = "Mint", Description = "Freshing!"}
            };
        }

        public IQueryable<Ingredient> GetAll() {
            return _ingredients.AsQueryable();
        }

        public Ingredient Get(string id) {
            return _ingredients.FirstOrDefault(x => x.Id == id);
        }

        public void Add(Ingredient item) {
            _ingredients.Add(item);
        }
    }
}