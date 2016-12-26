namespace CocktailBar.Server.API.Services.Recipes {
    using System.Collections.Generic;
    using Interfaces.Recipes;
    using Models.Recipes;

    public class RecipesService : IRecipesService {
        private readonly IRecipesRepository _repo;

        public RecipesService(IRecipesRepository repo) {
            _repo = repo;
        }

        public IEnumerable<Recipe> GetAll() {
            return _repo.GetAll();
        }
    }
}