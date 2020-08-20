import { ShopingListService } from './shoping-lis.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShopingListService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
