import {
  Component,
  OnInit,
  ElementRef,
  ViewChild} from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';
import { ShopingListService } from './../shoping-lis.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput' , {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput' , {static: false}) amountInputRef: ElementRef;

  constructor(private slService: ShopingListService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
