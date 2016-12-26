namespace CocktailBar.Server.DataLayer.Recipes {
    using System.Collections.Generic;
    using Models.Recipes;
    using Server.Interfaces.Recipes;

    public class MemoryRecipesRepository : IRecipesRepository {
        private readonly List<Recipe> _recipes = new List<Recipe> {
            new Recipe {
                Title = "Cuba-Libre",
                Ingredients = new List<string> {
                    "1",
                    "2"
                }
            },
            new Recipe {
                Title = "Mojito",
                Ingredients = new List<string> {
                    "3",
                    "4"
                }
            }
        };

        public IEnumerable<Recipe> GetAll() {
            return _recipes;
        }
    }
}