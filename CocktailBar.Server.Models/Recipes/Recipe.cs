namespace CocktailBar.Server.Models.Recipes {
    using System.Collections.Generic;

    public class Recipe {
        public List<string> Ingredients { get; set; }
        public string Title { get; set; }
    }
}