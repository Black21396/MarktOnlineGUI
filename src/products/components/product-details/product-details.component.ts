import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/products/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // variable contain the id of product, which we want show his details
  id: any;
  // varable contain the products (to show it in html page)
  data: any;
  // variable to check if data still not coming, then show spinner
  loading: boolean = true;
  constructor(private route:ActivatedRoute, private service:ProductService){
    // get the product Id from link (to make that we use object from "ActivatedRoute")
    this.id = route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void{
    this.getProduct();
  }

  getProduct(){
    
    this.service.getProductById(this.id).subscribe(res=>{
      this.data = res;
      this.loading = false;
    },error =>{alert(error.message)});
  }
}
