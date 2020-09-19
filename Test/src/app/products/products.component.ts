import { Component, OnInit } from '@angular/core';
import {products} from './products';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductdataService} from '../productdata.service';
import {ActivatedRoute,Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  product : any = [];

  addProduct()
  {
    //this.product.push(this.form.value);
    console.log(this.form.value);
    this.productservice.saveData(this.form.value).subscribe((data)=>{
      alert("Data Saved Successfully...");
      this.router.navigateByUrl("/products");
    })
  }

  getProductData(){
    this.productservice.getData().subscribe((res)=>{
      this.product = res;
    })
  }

  delete(id){
    this.productservice.deleteData(id).subscribe((res)=>{
      alert("Product Deleted Successfully...");
      this.getProductData();
    })
  }

  constructor(private productservice:ProductdataService,private activateroute:ActivatedRoute,private router:Router) { }

  
  ngOnInit(): void { 
  
    this.getProductData();
    this.form = new FormGroup 
    ({
        product_name : new FormControl(""),
        product_code : new FormControl(""),
        product_gst : new FormControl(""),
        product_hsn : new FormControl(""),
        product_price :new FormControl(""),
        product_qty : new FormControl("")
    })
  }

}
