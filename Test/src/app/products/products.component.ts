import { Component, OnInit } from '@angular/core';
import {products} from './products';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  product : products[] = [];

  constructor() { }

  addProduct()
  {
    this.product.push(this.form.value);
  }

  ngOnInit(): void {
  
    this.form = new FormGroup
    ({
        product_name : new FormControl(""),
        product_code : new FormControl(""),
        product_gst : new FormControl(""),
        product_hsn : new FormControl("")
    })
  }

}
