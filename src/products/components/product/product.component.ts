import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() data: any = {};

  //send an item to add in the cart
  @Output() item = new EventEmitter();

  // variable to check if user click on "add to cart" then show the box to put user the amount
  addButton: boolean = false;

  // variable contain the amount of products (wich user added)
  amount:number = 1;

  add(){
    this.item.emit({item:this.data, quantity:this.amount});
  }

}
