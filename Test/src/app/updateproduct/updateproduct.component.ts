import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductdataService} from '../productdata.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private productdataservice:ProductdataService,private activateroute:ActivatedRoute,private router:Router) { }

  form : FormGroup;
  product : any = [];
  id : number;
  
  update(){
    console.log();
    this.productdataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Product Updated Successfully...");
      this.router.navigateByUrl("/products");
    })
  }

  ngOnInit(): void {

    this.activateroute.params.subscribe((param)=>{ 
      this.id = param["id"];

      this.productdataservice.getDataById(this.id).subscribe((data)=>{
        this.product = data;
        this.form = new FormGroup
    ({
        product_name : new FormControl(this.product.product_name),
        product_code : new FormControl(this.product.product_code),
        product_gst : new FormControl(this.product.product_gst),
        product_hsn : new FormControl(this.product.product_hsn),
        product_price :new FormControl(this.product.product_price),
        product_qty : new FormControl(this.product.product_qty)
    })
      })
    })
  }

}
