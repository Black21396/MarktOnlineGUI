import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductService } from 'src/products/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
    // variable to handle all products, which come from API
    products:any[] = [];
    // variable to handle all categories, which come from API
    categories:any[] = [];
    // variable to check if products come from server (if dont come, then show spinner)
    loading:boolean = false;
    // variable to put the users product to the cart
    productsCart:any[] = []; 

    constructor(private service: ProductService){
    }

    ngOnInit(): void{
      // call productService methodes to get all products and categories when the app runs 
      this.getProducts();
      this.getCategories();
    }

    // method to get all Products (we use productService obj)
    getProducts(){
      this.loading = true;
      this.service.getAllProducts().subscribe((res:any) => {
        this.products = res;
        this.loading = false;
      },error => {alert(error.message)});
    }

    // method to get Products by category keyword (we use productService obj)
    getProductsAccordingCategory(category:string){
      this.loading = true;
      this.service.getProductsByCategory(category).subscribe((res:any)=>{
        this.products = res;
        this.loading = false;
      }, error => {alert(error.message)});
    }

    // method to get all catogries from API (we use productService obj)
    getCategories(){
      this.loading = true;
      this.service.getAllCatogries().subscribe((res:any) => {
        this.categories = res;
        this.loading = false;
      }, error => {alert(error.message)});
    }

    // method runs, when the user change the category from selected list
    filterCategory(event:any){
      let category = event.target.value;
      // if user select "All" then we have to get all Product
      if(category == "All"){
        this.getProducts();
      }
      else{
        this.getProductsAccordingCategory(category);
      }
    }
    // when user click for specific product "add to cart"
    // firstly add this product to localstorage (for better performance, I dont send request for each add To cart)
     // JSON.stringfy: method to save object as object in Localstorage (not as Jsontype)
     // JSON.parse: method to get data from localstorage as object
    addToCart(event:any){
      /* if user already add some product to cart, then get the data from localstorage
         and put in the array the new product and update the data in localstorage
      */
     if("cart" in localStorage){
      // get the products from localStorage
      this.productsCart = JSON.parse(localStorage.getItem("cart")!);
     
      // check if user already select the item
      let exist = this.productsCart.find(product=> product.item.id == event.item.id);
      

      if(exist){
        alert("Sorry: this product is already exist in your cart")
      }
      // if user want to add new Products to his cart, then we add it in localStorage
      else{
        // add the new products to array
      this.productsCart.push(event); 
      // update localStorage "cart" variable
      localStorage.setItem("cart",JSON.stringify(this.productsCart));
      }
     }
     //if this is the first item, which user added, then create "cart" var in localStorage
     else{
      this.productsCart.push(event);
      localStorage.setItem("cart", JSON.stringify(this.productsCart));
     }
    }
}
