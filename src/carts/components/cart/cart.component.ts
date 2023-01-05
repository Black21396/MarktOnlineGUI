import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/carts/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // variable to put all product (which user added in his cart)
  // Note: until now we save the products cart in local storage (until now we dont send it to server)
  productsInCart: any[] = [];
  // variable contain the total price for all products in the cart
  total = 0;
  // variable to check when user send data to server side, then show success message
  success:boolean = false;

  constructor(private service: CartService, private router:Router){

  }

  ngOnInit():void {
    this.getProductsCart();
  }

  // method to get all products cart from "localStorage" in our variable
  getProductsCart(){
    if("cart" in localStorage){
      this.productsInCart = JSON.parse(localStorage.getItem("cart")!);
      this.getCartTotal();
    }
  }
  // method to calculate all products in cart and put it in our variable (total) 
    getCartTotal(){
      this.total = 0;
      for(let i=0;i<this.productsInCart.length;i++){
        this.total += this.productsInCart[i].item.price * this.productsInCart[i].quantity;
      }
      this.total = Math.ceil(this.total);      
    }

    // when user click "+" button we have to change the amount of this product in cart
    addAmount(index:number){
      // change the amount (+1)
      this.productsInCart[index].quantity++;
      // change the amount in the localStorage
      localStorage.setItem("cart", JSON.stringify(this.productsInCart));
      // update the total price 
      this.getCartTotal();
    }
 // when user click "-" button we have to change the amount of this product in cart
    minAmount(index:number){
      // change the amount (-1)
      this.productsInCart[index].quantity--;
      // change the amount in the localStorage
      localStorage.setItem("cart", JSON.stringify(this.productsInCart));
      // update the total price 
      this.getCartTotal();
    }

    // when user change the quantity immediatly (by writing new amount without use "+" or "-" button)
    // we have to change this amount of product in "localStorage"
    detectChange(){
      localStorage.setItem("cart", JSON.stringify(this.productsInCart));
      this.getCartTotal();
    }

    // method to delete products from cart
    deleteProduct(index:number){
      this.productsInCart.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(this.productsInCart));
      this.getCartTotal();
    }

    // remove all products from the cart
    clearCart(){
      this.productsInCart = [];
      localStorage.setItem("cart", JSON.stringify(this.productsInCart));
      this.total = 0;
    }

    /*method works when user click "new Order" button to send all
      products in cart (which we still store in localStorage) to the server
      (in the real DB)
      Note: in Server there is also authorization but in our app we dont make it, so we add fake userId ("5")
    */
    addCart(){
      // this model we muust create it, because server request need this model to create new Cart in DB
      // here you find our API server side (https://fakestoreapi.com)
    
      let products = this.productsInCart.map(item=> {
        return {productId: item.item.id, quantity: item.quantity}
      });

      let model = {
        userId: 5,
        date: new Date(),
        products: products
      };

      // call cart service method to send the request to server side
      this.service.addNewCart(model).subscribe(res=>{
        // to show success message
        this.success = true;
        // clear cart in localStorage
        this.clearCart();
        // redirect to main page
        this.router.navigate(["/products"]);
      });
    }

  }


