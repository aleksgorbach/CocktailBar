namespace CocktailBar.Server.DataLayer.Ingredients {
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Interfaces.Ingredients;
    using Models.Ingredients;

    public class MemoryIngredientsRepository : IIngredientsRepository {
        private readonly List<Ingredient> _ingredients;

        public MemoryIngredientsRepository() {
            _ingredients = new List<Ingredient> {new Ingredient(){Title="Tea", Description="Greenfield"}};
        }

        public IQueryable<Ingredient> Get(int page = 0, int pageSize = 10) {
            return _ingredients.AsQueryable();
        }

        public Ingredient Get(string id) {
            throw new NotImplementedException();
        }
    }
}