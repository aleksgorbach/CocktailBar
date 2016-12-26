namespace CocktailBar.Server.API.Services.Ingredients {
    using System.Linq;
    using DataLayer.Interfaces.Ingredients;
    using Models.Ingredients;

    public class IngredientService : IIngredientService {
        private readonly IIngredientsRepository _repo;

        public IngredientService(IIngredientsRepository repo) {
            _repo = repo;
        }

        public IQueryable<Ingredient> GetAll() {
            return _repo.GetAll();
        }

        public void Add(Ingredient item) {
            _repo.Add(item);
        }

        public Ingredient Get(string id) {
            return _repo.Get(id);
        }

        public bool Delete(string id) {
            throw new System.NotImplementedException();
        }
    }
}