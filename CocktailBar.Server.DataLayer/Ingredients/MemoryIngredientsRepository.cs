namespace CocktailBar.Server.DataLayer.Ingredients {
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Interfaces.Ingredients;
    using Models.Ingredients;

    public class MemoryIngredientsRepository : IIngredientsRepository {
        private readonly List<Ingredient> _ingredients;

        public MemoryIngredientsRepository() {
            _ingredients = new List<Ingredient> {
                new Ingredient {Id = Guid.NewGuid().ToString(), Title = "Tea", Description = "Greenfield"},
                new Ingredient {Id = Guid.NewGuid().ToString(), Title = "Pepsi", Description = "Cola"},
                new Ingredient {Id = Guid.NewGuid().ToString(), Title = "Coca", Description = "Cola"},
                new Ingredient {Id = Guid.NewGuid().ToString(), Title = "Coffee", Description = "Jacobs"}
            };
        }

        public IQueryable<Ingredient> Get(int page = 0, int pageSize = 10) {
            return _ingredients.Skip(page*pageSize).Take(pageSize).AsQueryable();
        }

        public Ingredient Get(string id) {
            return _ingredients.FirstOrDefault(x => x.Id == id);
        }
    }
}