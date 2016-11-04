namespace CocktailBar.Server.Models.Recipes {
    using System.Collections.Generic;
    using Ingredients;

    public class Recipe {
        public List<Ingredient> Ingredients { get; set; }
    }
}