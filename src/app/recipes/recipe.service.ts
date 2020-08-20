import { ShopingListService } from './../shoping-list/shoping-lis.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
    constructor(private slService: ShopingListService){}
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe' ,
        'test description' ,
        'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
        [
            new Ingredient('chilli oil', 10),
            new Ingredient('noodle', 1),
        ]),
        new Recipe('A test recipe 2' ,
        'Another test description' ,
        'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
        [
            new Ingredient('sea weed', 5),
            new Ingredient('soya sauce', 20),
        ])
      ];
      // tslint:disable-next-line: typedef
      getRecipes() {
          return this.recipes.slice();
      }

      // tslint:disable-next-line: typedef
      addIngredientsToSl(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}
